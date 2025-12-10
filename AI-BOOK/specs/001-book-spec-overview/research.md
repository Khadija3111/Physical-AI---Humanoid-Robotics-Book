# Research & Decisions for Book Overview Plan

This document records the technology and pattern decisions made during the planning phase for the "Physical AI & Humanoid Robotics" book project.

## Documentation Framework

- **Decision**: Use **Docusaurus v3** for static site generation.
- **Rationale**: The project description explicitly lists Docusaurus. It is a modern, widely-used tool for documentation and knowledge-base websites, with excellent support for MDX (Markdown with JSX), which is ideal for embedding interactive components. Its versioning and internationalization features are also valuable for this project.
- **Alternatives considered**: MkDocs, Jekyll. Docusaurus was chosen for its richer feature set and React integration.

## Backend & Scripting Language

- **Decision**: Use **Python 3.11** for all backend code (RAG chatbot API) and general scripting.
- **Rationale**: Python is the de-facto language for AI/ML and robotics, with extensive libraries (rclpy, PyTorch, etc.) that are central to the book's content. Version 3.11 provides a good balance of modern features and stability.
- **Alternatives considered**: Node.js/TypeScript. Python was chosen for its stronger ecosystem in the target domain.

## RAG Chatbot API Framework

- **Decision**: Use **FastAPI** for the RAG chatbot's backend API.
- **Rationale**: FastAPI offers high performance, is easy to learn, and automatically generates OpenAPI documentation, which is crucial for creating clean API contracts. Its asynchronous support is well-suited for handling potentially long-running I/O operations involved in RAG queries.
- **Alternatives considered**: Flask, Django. FastAPI was chosen for its superior performance and built-in async support and data validation.

## Vector Database

- **Decision**: Use **Qdrant** as the vector database for the RAG implementation.
- **Rationale**: Qdrant is a modern, high-performance vector search engine built in Rust, offering scalability and advanced filtering capabilities. It is well-suited for storing and searching the embeddings of the book's content.
- **Alternatives considered**: FAISS, ChromaDB. Qdrant was chosen for its production-ready features and scalability.

## Agent Context File

- **Decision**: Use the gemini agent to work on the project.
- **Rationale**: The user has specified the gemini agent in the project files.
- **Alternatives considered**: Other agents. The gemini agent was chosen because it is specified in the project files.

## RAG Embedding Model

- **Decision**: Utilize **Context 7 MCP** for generating embeddings for the RAG chatbot.
- **Rationale**: The user explicitly stated that an OpenAI API key is not required, and that Context 7 MCP will be used for knowledge and content retrieval. This approach ensures that the chatbot's knowledge base is strictly derived from the book's content without external API dependencies for embedding generation.
- **Alternatives considered**: OpenAI Embeddings API, other external embedding services. Context 7 MCP was chosen based on user requirements for local context.
