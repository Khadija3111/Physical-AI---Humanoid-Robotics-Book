import os
import asyncio
from dotenv import load_dotenv, find_dotenv
from dataclasses import dataclass
from agents import Agent, Runner, AsyncOpenAI, OpenAIChatCompletionsModel, set_tracing_disabled, function_tool, RunContextWrapper
from qdrant_utils import search_global, search_selected_text
from openai import RateLimitError
from functools import lru_cache

_: bool = load_dotenv(find_dotenv())

load_dotenv()
dotenv_path = find_dotenv()
set_tracing_disabled(disabled=True)

openrouter_api_key: str | None = os.getenv("OPENROUTER_API_KEY")

if not openrouter:
    raise RuntimeError(
        "openrouter_API_KEY is not set! Please set it in your environment or in .env file."
    )

external_client= AsyncOpenAI(
    api_key=openrouter_api_key,
    base_url="https://openrouter.ai/api/v1"
)
model = OpenAIChatCompletionsModel(model="xiaomi/mimo-v2-flash:free", openai_client=external_client)


@dataclass
class QueryContext:
    query: str
    retrieval_type: str = "global"
    context: str = ""



from cohere import Client

COHERE_API_KEY = os.getenv("COHERE_API_KEY")
COHERE_MODEL = os.getenv("COHERE_MODEL", "embed-english-v3.0")

if not COHERE_API_KEY:
    raise RuntimeError("COHERE_API_KEY is not set!")

co = Client("COHERE_API_KEY")

# Optional in-memory cache for embeddings
embedding_cache: dict[str, list[float]] = {}


def _get_embedding_sync(text: str) -> list[float]:
    """
    Generates an embedding for the given text using Cohere.
    Cached automatically by lru_cache.
    """
    if text in embedding_cache:
        return embedding_cache[text]

    response = co.embed(
        model=COHERE_MODEL,
        texts=[text],
        input_type="search_document"  # recommended for retrieval
    )
    emb = response.embeddings[0]
    embedding_cache[text] = emb
    return emb

async def get_embedding(text: str) -> list[float]:
    return _get_embedding_sync(text)


@function_tool
async def retrieve_context_tool(local_context: RunContextWrapper[QueryContext]) -> str:
    """Retrieves relevant context from Qdrant based on the user's query."""
    query_embedding = await get_embedding(local_context.context.query)
    if not query_embedding:
        return "Could not generate embedding for the query."

    if local_context.context.retrieval_type == "global":
        results = search_global(query_embedding)
    elif local_context.context.retrieval_type == "selected_text":
        results = search_selected_text(query_embedding)
    else:
        return f"Unknown retrieval type: {local_context.context.retrieval_type}"

    if not results:
        return "No context found."

    context_str = "\n".join([hit["text"] for hit in results])
    local_context.context.context = context_str # Save context for the instructions
    return  context_str

async def dynamic_instructions(ctx : RunContextWrapper[QueryContext] , agent: Agent[QueryContext])  ->str:
    "an instruction that is going to be passed to agent "
    return "You are a helpful assistant specialized in physical AI and humanoid robotics. Use the provided context to answer questions comprehensively and accurately. If the context does not contain enough information, state that clearly."
    

agent = Agent[QueryContext]( name="Physical_AI_Assistant", instructions=dynamic_instructions, tools=[retrieve_context_tool], model=model )


async def run_agent_safe(query, retrieval_type="global", retries=3):
    for attempt in range(retries):
        try:
            return await run_agent(query, retrieval_type)
        except RateLimitError as e:
            wait = 60
            print(f"Rate limited. Waiting {wait}s...")
            await asyncio.sleep(wait)
    raise RuntimeError("Exceeded retry attempts due to rate limits")


async def run_agent(query: str, retrieval_type: str = "global"):
    query_context = QueryContext(query=query, retrieval_type=retrieval_type)
    result = await Runner.run(
        starting_agent=agent, 
        input=query,
        context=query_context,
        max_turns=3
    )
    return result.final_output, query_context.context

