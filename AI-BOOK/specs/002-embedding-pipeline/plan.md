# Plan: URL Deployment & Embedding Pipeline

**Feature Branch**: `002-embedding-pipeline`
**Spec**: `specs/002-embedding-pipeline/spec.md`
**Created**: 2025-12-10
**Status**: Completed

## Goal
Extract text from deployed book URLs, generate embeddings using Cohere, and store them in Qdrant Cloud for RAG.

---

## Steps
1. **Initial Setup**  
   - Create a `backend` folder and initialize a Python/UV project (`uvicorn` + dependencies).  

2. **Collect URLs**  
   - Crawl all deployed Docusaurus pages with metadata (module, title, headings).  

3. **Extract & Chunk Content**  
   - Convert MDX/HTML → text, clean it, and split into 500–800 token chunks with metadata.  

4. **Generate Embeddings**  
   - Use Cohere API to create vectors for each chunk.  

5. **Store in Qdrant**  
   - Create collection, insert vectors + metadata, support upsert to avoid duplicates.  

6. **Validation & Logging**  
   - Log progress/errors and verify all chunks are stored correctly.
