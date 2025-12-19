# Tasks: Retrieval Testing for RAG Pipeline

**Input**: Design documents from `specs/003-rag-retrieval-testing/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Phase 1: Setup

**Goal**: Create the necessary files and directories for the test script.

- [x] T001 Create the test script file in `backend/test_retrieval.py`.
- [x] T002 Create the `reports` directory at the project root for the test reports.
- [x] T003 Create `backend/requirements.txt` and add the following dependencies:
  - `pytest`
  - `qdrant-client`
  - `cohere`
  - `python-dotenv`

---

## Phase 2: Foundational

**Goal**: Implement the basic setup for the test script.

- [x] T004 Implement the Qdrant and Cohere client setup in `backend/test_retrieval.py`, loading credentials from the `.env` file.

---

## Phase 3: User Story 1 - Data Verification

**Goal**: Verify the integrity of the data in the Qdrant collection.

- [x] T005 [US1] Implement a pytest function in `backend/test_retrieval.py` to retrieve the total number of chunks from the Qdrant collection and assert that it is greater than zero.
- [x] T006 [US1] Implement a pytest function in `backend/test_retrieval.py` to fetch a random sample of chunks and assert that the `text` metadata field is not empty.

---

## Phase 4: User Story 2 - Semantic Retrieval Testing

**Goal**: Test the semantic retrieval capabilities of the RAG pipeline.

- [x] T007 [US2] Implement a pytest function in `backend/test_retrieval.py` to perform a semantic search for at least 3 different test queries. For each query, retrieve the top 3 most similar chunks.

---

## Phase 5: User Story 3 - Reporting

**Goal**: Generate a summary report of the retrieval tests.

- [x] T008 [US3] Implement a function in `backend/test_retrieval.py` that generates a Markdown report in `reports/retrieval_test_report.md`. The report should include the test queries and the content of the retrieved chunks for each query.

---

## Phase 6: Polish & Finalization

**Goal**: Add finishing touches to the test script and run the full test suite.

- [x] T009 Add comments and docstrings to all functions in `backend/test_retrieval.py`.
- [x] T010 Run the full test suite using `pytest` and ensure all tests pass and the report is generated correctly.

## Implementation Strategy

1.  **Phase 1 (Setup)** should be completed first to create the necessary file structure.
2.  **Phase 2 (Foundational)** is a prerequisite for all other test phases.
3.  **Phases 3, 4, and 5 (User Stories)** can be implemented in any order, but it is recommended to follow the numerical order.
4.  **Phase 6 (Polish)** is the final step to ensure the test script is clean, well-documented, and fully functional.
