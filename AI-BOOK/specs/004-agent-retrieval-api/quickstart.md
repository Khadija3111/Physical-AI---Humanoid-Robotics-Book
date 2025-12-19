# Quickstart: Retrieval-Enabled Agent API

This guide provides a quick overview of how to set up and interact with the Retrieval-Enabled Agent API.

## 1. Setup

The API is built using FastAPI and requires a Python environment.

### Prerequisites
*   Python 3.11+
*   `pip` (Python package installer)
*   OpenAI API Key
*   Running Qdrant instance

### Installation

1.  **Clone the repository**: (Assuming this is already done)
    ```bash
    git clone <repository-url>
    cd Physical-AI---Humanoid-Robotics-Book/AI-BOOK/backend
    ```
2.  **Create a virtual environment** (recommended):
    ```bash
    python -m venv .venv
    source .venv/bin/activate  # On Windows: .venv\Scripts\activate
    ```
3.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

## 2. Configuration

Set the following environment variables. You can place these in a `.env` file in the `backend/` directory or set them directly in your shell.

*   `OPENAI_API_KEY`: Your OpenAI API key.
*   `QDRANT_HOST`: The host for your Qdrant instance (e.g., `localhost`).
*   `QDRANT_PORT`: The port for your Qdrant instance (e.g., `6333`).

## 3. Run the FastAPI Application

Navigate to the `backend/` directory and run the application using `uvicorn`:

```bash
cd Physical-AI---Humanoid-Robotics-Book/AI-BOOK/backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```
The API documentation will be available at `http://localhost:8000/docs`.

## 4. Interact with the API

You can interact with the API using `curl` or a simple Python script.

### Global Retrieval (`/ask`)

Ask a question and get an answer based on the entire book content.

```bash
curl -X POST "http://localhost:8000/ask" \
     -H "Content-Type: application/json" \
     -d '{"query": "What is physical AI?"}'
```

### Selected-Text Retrieval (`/ask/selected`)

Ask a question, providing a specific context to retrieve from.

```bash
curl -X POST "http://localhost:8000/ask/selected" \
     -H "Content-Type: application/json" \
     -d '{"query": "What are the benefits?", "context": "Physical AI systems offer several benefits, including improved adaptability and robust performance in dynamic environments."}'
```
