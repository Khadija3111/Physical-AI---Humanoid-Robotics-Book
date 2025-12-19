# Quickstart: RAG Chatbot Local Development

**Date**: 2025-12-13
**Feature**: [RAG Chatbot Frontend–Backend Integration](spec.md)

This guide explains how to set up and run the RAG chatbot feature for local development.

## Prerequisites

- Node.js and npm installed.
- Python and pip installed.
- The project dependencies installed (`npm install` in `docusaurus/`, `pip install -r requirements.txt` in `backend/`).

## Running the Backend

1.  Navigate to the `backend/` directory.
2.  Run the FastAPI application:
    ```bash
    uvicorn main:app --reload
    ```
3.  The backend API will be available at `http://127.0.0.1:8000`.

## Running the Frontend

1.  Navigate to the `docusaurus/` directory.
2.  Start the Docusaurus development server:
    ```bash
    npm start
    ```
3.  The Docusaurus site will be available at `http://localhost:3000`.

## Testing the Integration

1.  Open the Docusaurus site in your browser.
2.  Navigate to a page where the chatbot is embedded.
3.  Ask a question in the chatbot. The chatbot should display a response from the backend.
