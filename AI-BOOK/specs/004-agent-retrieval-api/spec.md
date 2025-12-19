# Chapter Specification: Build Retrieval-Enabled Agent (Spec 3)

**Feature Branch**: `004-agent-retrieval-api`  
**Created**: 2025-12-11  
**Status**: Draft  
**Input**: User description: "Build Retrieval-Enabled Agent (Spec 3) Target audience: - Developers validating backend agent behavior and retrieval workflow. Focus: - Creating an OpenAI Agent inside a FastAPI backend. - Adding Qdrant-based retrieval for book content + selected-text mode. Success criteria: - Agent runs inside FastAPI with working `/ask` and `/ask/selected` endpoints. - Correct retrieval from Qdrant (global + selected-text modes). - 95%+ accuracy on test questions. - Short API docs + test logs included. Constraints: - Must use OpenAI Agents SDK + FastAPI. - Must use existing embeddings + Qdrant schema. - No UI work (saved for Spec 4)."

## Learning Objectives & Reader Journey (mandatory)

### Objective 1 - Understand Retrieval-Enabled Agent Architecture (Priority: P1)

**Reader Journey**: As a developer, I want to understand how a retrieval-enabled agent is architected within a FastAPI backend using OpenAI Agents and Qdrant, so that I can validate its behavior and retrieval workflow.

**Why this priority**: This is foundational to understanding the core feature.

**Independent Test**: The developer can explain the interaction points between FastAPI, OpenAI Agent, and Qdrant.

**Acceptance Scenarios**:

1. **Given** the agent's architecture, **When** the developer reviews the design, **Then** they can identify the key components (OpenAI Agent, FastAPI, Qdrant) and their interactions.

## Content & Asset Requirements (mandatory)

### Key Topics & Concepts
- **TC-001**: Must explain the integration of OpenAI Agents SDK with FastAPI.
- **TC-002**: Must detail the Qdrant-based retrieval mechanism for book content, including "global" and "selected-text" modes.
- **TC-003**: Must cover the data flow and interaction between the agent, FastAPI, and Qdrant.

### Required Assets (Code & Figures)
- **AS-001**: Must include FastAPI backend code demonstrating the OpenAI Agent integration.
- **AS-002**: Must include code examples for `/ask` and `/ask/selected` endpoints, showcasing Qdrant retrieval.
- **AS-003**: Must include documentation for the API endpoints.
- **AS-004**: Must include logs from successful test runs to demonstrate agent behavior and retrieval.

### Sourcing & Claims
- **SC-001**: Accuracy claims (e.g., 95%+) must be supported by test results and metrics.

## Constitution Compliance

- [ ] **Source Check**: Are sources for key claims identified? (Scientific Accuracy, Rigor)
- [ ] **Reproducibility Check**: Are runnable examples and their expected outcomes defined? (Reproducibility)
- [ ] **Clarity Check**: Is the target audience (developers) and scope of explanation clear? (Clarity for Engineers)
- [ ] **Licensing Check**: Is the license for new code (MIT) and figures (CC-BY-4.0) confirmed? (Open-Source Ethos)

## Success Criteria (mandatory)

- **SC-001**: Agent runs successfully inside FastAPI backend.
- **SC-002**: The `/ask` endpoint correctly utilizes Qdrant for global retrieval of book content.
- **SC-003**: The `/ask/selected` endpoint correctly utilizes Qdrant for selected-text retrieval of book content.
- **SC-004**: The agent achieves 95%+ accuracy on predefined test questions.
- **SC-005**: Short API documentation is generated and accessible.
- **SC-006**: Test logs are included, demonstrating the agent's behavior and retrieval process.
