# Quickstart: Retrieval Testing for RAG Pipeline

This guide explains how to run the retrieval testing script for the RAG pipeline.

## Prerequisites

- Python 3.11+
- An active Python virtual environment
- A `.env` file in the `backend` directory with the following variables:
  - `QDRANT_URL`
  - `QDRANT_API_KEY`
  - `COHERE_API_KEY`

## Installation

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install the required dependencies:
    ```bash
    pip install -r requirements.txt
    ```
    (Note: A `requirements.txt` file will be created in a later step)

## Running the Tests

1.  From the `backend` directory, run the test script using `pytest`:
    ```bash
    pytest test_retrieval.py
    ```
2.  The test results will be printed to the console, and a `retrieval_test_report.md` file will be generated in the `reports` directory at the project root.
