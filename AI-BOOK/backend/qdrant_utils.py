import os
import logging
from qdrant_client import QdrantClient, models
from dotenv import load_dotenv

load_dotenv()

# Configure logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)



QDRANT_URL = os.getenv("QDRANT_URL").strip()          # remove leading/trailing whitespace
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY").strip()  # remove leading/trailing whitespace
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "rag_embedding").strip()
COLLECTION_NAME = os.getenv("COLLECTION_NAME", "rag_embedding")

if not QDRANT_URL or not QDRANT_API_KEY:
    raise ValueError("QDRANT_URL or QDRANT_API_KEY is missing")

qdrant_client = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY,
)
logger.info(f"Qdrant client initialized for cloud URL: {QDRANT_URL}")


def search_global(query_embedding: list[float], collection_name: str = COLLECTION_NAME, limit: int = 5) -> list[dict]:
    """
    Performs a global nearest neighbor search on the specified Qdrant collection.

    Args:
        query_embedding: The embedding of the query.
        collection_name: The name of the Qdrant collection to search.
        limit: The maximum number of results to return.

    Returns:
        A list of dictionaries, where each dictionary contains the payload (text)
        and score of the retrieved points.
    """
    logger.info(f"Performing global search on collection '{collection_name}' with limit {limit}.")
    logger.debug(f"Query embedding (truncated): {query_embedding[:10]}...")
    try:
        search_result = qdrant_client.search(
            collection_name=collection_name,
            query_vector=query_embedding,
            limit=limit
        )
        logger.info(f"Global search returned {len(search_result)} results.")
        logger.debug(f"Search results: {search_result}")
        return [{"text": hit.payload["text"], "score": hit.score} for hit in search_result]
    except Exception as e:
        logger.error(f"Error during global Qdrant search: {e}")
        return []

def search_selected_text(query_embedding: list[float], collection_name: str = COLLECTION_NAME, limit: int = 5) -> list[dict]:
    """
    Performs a nearest neighbor search for selected text.
    Currently, this is identical to global search, but can be extended with
    additional filtering if 'selected text' implies specific metadata or sub-collections.

    Args:
        query_embedding: The embedding of the query.
        collection_name: The name of the Qdrant collection to search.
        limit: The maximum number of results to return.

    Returns:
        A list of dictionaries, where each dictionary contains the payload (text)
        and score of the retrieved points.
    """
    logger.info(f"Performing selected text search on collection '{collection_name}' with limit {limit}.")
    logger.debug(f"Query embedding (truncated): {query_embedding[:10]}...")
    # For now, selected text search is the same as global search.
    # Future enhancement could include filtering by document ID or section if metadata is available.
    return search_global(query_embedding, collection_name, limit)



print(qdrant_client.get_collections())

