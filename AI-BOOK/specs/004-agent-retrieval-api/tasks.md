# Tasks for 004-agent-retrieval-api

**Feature**: Retrieval-Enabled Agent API  
**Plan**: specs/004-agent-retrieval-api/plan.md  
**Spec**: specs/004-agent-retrieval-api/spec.md  
**Priority**: P1

## Phase 1: Setup (Project Initialization & Environment)

**Goal**: Establish basic project structure and core dependencies.

- [x] T001 Create `backend/` directory for the FastAPI application.
- [x] T002 Create a Python virtual environment in `backend/.venv`.
- [x] T003 Install core dependencies: FastAPI, uvicorn, openai, qdrant-client, python-dotenv.
- [x] T004 Create initial `backend/main.py` with FastAPI app structure.
- [x] T005 Load environment variables (`OPENAI_API_KEY`, `QDRANT_HOST`, `QDRANT_PORT`) via `.env` or `python-dotenv`.

## Phase 2: Core Agent & Qdrant Integration

**Goal**: Implement the agent logic and Qdrant connectivity.

- [x] T006 Implement Qdrant client in `backend/qdrant_client.py` with functions `search_global` and `search_selected_text`.
- [x] T007 Implement OpenAI Agent logic in `backend/agent.py`, including retrieval strategies and response formulation.

## Phase 3: API Endpoints & Testing

**Goal**: Build functional endpoints and validate retrieval.

- [x] T008 Define Pydantic models for request/response payloads (`GlobalQuery`, `SelectedQuery`, `AgentResponse`) in `backend/models.py`.
- [x] T009 Implement `/ask` endpoint (POST) for global retrieval in `backend/main.py`.
- [x] T010 Implement `/ask/selected` endpoint (POST) for selected-text retrieval in `backend/main.py`.
- [x] T011 Unit tests for agent logic in `backend/tests/test_agent.py` (mock Qdrant).
- [x] T012 Integration tests for `/ask` and `/ask/selected` endpoints in `backend/tests/test_api.py`.
- [x] T013 Implement logging for agent behavior and retrieval steps to verify functionality.
- [x] T014 Ensure agent achieves 95%+ accuracy on predefined retrieval test questions.

## Dependency Graph

```mermaid
graph TD
    A[Phase 1: Setup] --> B[Phase 2: Core Agent & Qdrant]
    B --> C[Phase 3: API Endpoints & Testing]

    subgraph Phase 1
        T001 --> T002
        T002 --> T003
        T001 --> T004
        T001 --> T005
    end

    subgraph Phase 2
        T006 --> T009
        T007 --> T009
        T006 --> T010
        T007 --> T010
    end

    subgraph Phase 3
        T008 --> T009
        T008 --> T010
        T007 --> T011
        T009 --> T012
        T010 --> T012
        T009 --> T013
        T010 --> T013
        T011 --> T014
    end

