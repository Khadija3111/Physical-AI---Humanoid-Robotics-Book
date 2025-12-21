import logging
from fastapi import FastAPI
import os
import re
import uuid
from urllib.parse import urljoin, urlparse
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)
import cohere
import requests
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from qdrant_utils import QdrantClient, models
from unstructured.chunking.title import chunk_by_title
from unstructured.cleaners.core import clean
from unstructured.documents.elements import Text
from unstructured.partition.html import partition_html
from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
from fastapi.middleware.cors import CORSMiddleware
 

# Load environment variables from .env file
load_dotenv()


# --- Configuration ---

BASE_URL =  "https://physicalaibook-git-001-book-spec-overview-khadija3111s-projects.vercel.app/"
COLLECTION_NAME = "rag_embedding"
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
COHERE_API_KEY = os.getenv("COHERE_API_KEY")



# --- FastAPI App ---
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)




@app.get("/")
async def read_root():
    return {"message": "Welcome to the Retrieval-Enabled  Agent API"}

from agent import run_agent
from models import GlobalQuery, AgentResponse, SelectedQuery

@app.post("/agent/query", response_model=AgentResponse)
async def ask_selected(request: SelectedQuery):
    """
    Handles selected-text retrieval queries using the agent.
    Combines the user's query with the selected text for more targeted retrieval and response.
    """
    combined_query = f"User query: {request.query}\nSelected text: {request.selected_text}"
    response_content, context = await run_agent(combined_query, retrieval_type="selected_text")
    return AgentResponse(response=response_content, context=context)

def get_all_urls(base_url):
    """
    Crawls a website from a given base URL and returns a set of all unique URLs
    belonging to the same domain.
    """
    urls = set()
    domain_name = urlparse(base_url).netloc
    queue = [base_url]
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    while queue:
        url = queue.pop(0)
        if url in urls:
            continue
        
        try:
            print(f"Crawling: {url}")
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()
            
            # Add the successfully crawled URL
            urls.add(url)
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            for a_tag in soup.find_all('a', href=True):
                href = a_tag['href']
                # Join relative URLs with the base URL
                full_url = urljoin(url, href)
                # Parse the URL to remove fragment identifiers
                parsed_url = urlparse(full_url)
                full_url = parsed_url._replace(fragment="").geturl()

                # Ensure the URL is within the same domain and not already processed
                if urlparse(full_url).netloc == domain_name and full_url not in urls and full_url not in queue:
                    queue.append(full_url)
        
        except requests.exceptions.RequestException as e:
            print(f"Error crawling {url}: {e}")
            
    return list(urls)


def extract_text_from_url(url):
    """
    Extracts clean text content from a given URL.
    Uses unstructured to partition HTML and clean the data.
    """
    try:
        print(f"Extracting text from: {url}")
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        elements = partition_html(text=response.text)
        
        # Combine text from all elements
        full_text = "\n".join([el.text for el in elements])
        # Clean the text to remove extra whitespace, etc.
        cleaned_text = clean(full_text, extra_whitespace=True)
        
        return cleaned_text
    except Exception as e:
        error_log_path = "unstructured_error.log"
        with open(error_log_path, "a") as f:
            f.write(f"Error partitioning HTML from {url}: {e}\n")
            import traceback
            traceback.print_exc(file=f) # Print full traceback to file
        print(f"Error partitioning HTML from {url}. See {error_log_path} for details.")
        return None

def chunk_text(text, max_chunk_size=700, min_chunk_size=300):
    """
    Chunks text by title and sections, aiming for a specific token range.
    Note: unstructured's chunk_by_title uses character count, not tokens.
    We are using character count as a proxy.
    """
    if not text:
        return []
    
    print("Chunking text...")
    # Using unstructured's chunk_by_title to get semantically meaningful chunks
    elements = partition_html(text=text)
    chunks = chunk_by_title(elements, max_characters=max_chunk_size, combine_text_under_n_chars=min_chunk_size)
    
    return [chunk.text for chunk in chunks]


@retry(
    wait=wait_exponential(multiplier=1, min=4, max=60),
    stop=stop_after_attempt(5)
)
def embed(chunks):
    """
    Generates embeddings for a list of text chunks using the Cohere API.
    """
    if not chunks:
        return []
    
    print(f"Generating embeddings for {len(chunks)} chunks...")
    try:
        # Cohere's API can handle a list of texts.
        # The 'input_type' is set to 'search_document' for documents to be stored in a vector database.
        response = co.embed(
            texts=chunks,
            model=COHERE_MODEL,
            input_type="search_document"
        )
        return response.embeddings
    except cohere.APIError as e: # Catch Cohere API errors
        print(f"Cohere API error during embedding: {e}")
        raise # Re-raise to allow tenacity to handle retries

VECTOR_DIMENSION = 1024


def create_collection(collection_name):
    """
    Creates a new collection in Qdrant if it doesn't already exist.
    """
    print(f"Checking/Creating Qdrant collection: {collection_name}")
    try:
        qdrant_client.recreate_collection(
            collection_name=collection_name,
            vectors_config=models.VectorParams(size=VECTOR_DIMENSION, distance=models.Distance.COSINE),
        )
        print(f"Collection '{collection_name}' created successfully.")
    except Exception as e:
        # Check if the exception is because the collection already exists, which is fine.
        # This part of the logic might need adjustment based on the exact error from qdrant_client
        # if the collection exists. A better way is to check if collection exists first.
        print(f"Could not create collection (it may already exist): {e}")

def save_chunk_to_qdrant(collection_name, chunks, embeddings):
    """
    Saves chunks and their embeddings to Qdrant.
    Uses 'upsert' to add new points or update existing ones.
    """
    if not chunks or not embeddings:
        return
        
    print(f"Saving {len(chunks)} chunks to Qdrant collection '{collection_name}'...")
    
    # Generate unique IDs for each point
    points = [
        models.PointStruct(
            id=str(uuid.uuid4()),
            vector=embedding,
            payload={"text": chunk}
        )
        for chunk, embedding in zip(chunks, embeddings)
    ]
    
    try:
        qdrant_client.upsert(
            collection_name=collection_name,
            points=points,
            wait=True  # Wait for the operation to complete
        )
        print(f"Successfully saved {len(chunks)} chunks.")
    except Exception as e:
        print(f"Error saving chunks to Qdrant: {e}")




