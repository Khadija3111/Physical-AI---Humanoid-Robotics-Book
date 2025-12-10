# Tasks: Physical AI & Humanoid Robotics - Book Overview

**Input**: Design documents from `/specs/001-book-spec-overview/`
**Prerequisites**: plan.md (required), spec.md (required for learning objectives)

## Phase 1: Setup Tasks

**Goal**: Initialize the project and install all necessary dependencies.

- [x] T001 Initialize the Docusaurus project in the `docusaurus/` directory.
- [x] T002 Install Docusaurus dependencies by running `npm install` in `docusaurus/`.
- [x] T003 Install Python dependencies for the RAG chatbot by running `poetry install` in `AI-BOOK/`.

## Phase 2: Foundational Tasks!

**Goal**: Establish the basic structure of the Docusaurus website and content folders.

- [x] T004 Create the initial directory structure for content: `docs/ros2`, `docs/simulation`, `docs/nvidia_isaac`, `docs/vla`.
- [x] T005 Create the initial directory structure for code examples: `code/ros2`, `code/simulation`, `code/nvidia_isaac`, `code/vla`.
- [x] T006 Create the initial directory structure for images: `static/img/ros2`, `static/img/simulation`, `static/img/nvidia_isaac`, `static/img/vla`.
- [x] T007 Configure the Docusaurus sidebar in `docusaurus.config.js` to reflect the book's module structure.

## Phase 3: User Story 1 - Module 1 (ROS 2)

**Goal**: Develop the content and examples for the ROS 2 module.

- [x] T008 [US1] Draft chapter "Introduction to ROS 2" in `docs/ros2/01-introduction.md`.
- [x] T009 [US1] Draft chapter "ROS 2 Architecture" in `docs/ros2/02-architecture.md`.
- [x] T010 [US1] Draft chapter "Understanding URDF" in `docs/ros2/03-urdf.md`.
- [x] T011 [P] [US1] Create code example for a simple ROS 2 node in `code/ros2/simple_node.py`.
- [x] T012 [P] [US1] Create a diagram illustrating ROS 2 architecture in `static/img/ros2/ros2_architecture.png`.

## Phase 4: User Story 2 - Module 2 (Digital Twin)

**Goal**: Develop the content and examples for the Gazebo & Unity simulation module.

- [x] T013 [US2] Draft chapter "Simulating with Gazebo" in `docs/simulation/01-gazebo.md`.
- [x] T014 [US2] Draft chapter "Visualizing in Unity" in `docs/simulation/02-unity.md`.
- [x] T015 [P] [US2] Create code example for launching a URDF model in Gazebo in `code/simulation/launch_gazebo.py`.
- [x] T016 [P] [US2] Create a diagram comparing Gazebo and Unity in `static/img/simulation/gazebo_vs_unity.png`.

## Phase 5: User Story 3 - Module 3 (NVIDIA Isaac)

**Goal**: Develop the content and examples for the NVIDIA Isaac module.

- [x] T017 [US3] Draft chapter "Introduction to Isaac Sim" in `docs/nvidia_isaac/01-isaac_sim.md`.
- [x] T018 [US3] Draft chapter "Hardware-Accelerated VSLAM" in `docs/nvidia_isaac/02-vslam.md`.
- [x] T019 [P] [US3] Create code example for running a Nav2 simulation in Isaac Sim in `code/nvidia_isaac/nav2_example.py`.

## Phase 6: User Story 4 - Module 4 (VLA & RAG Chatbot)

**Goal**: Develop the capstone VLA project content and the RAG chatbot.

- [x] T020 [US4] Draft chapter "Vision-Language-Action Pipelines" in `docs/vla/01-vla_pipeline.md`.
- [x] T021 [US4] Draft capstone project guide "Controlling a Robot with Natural Language" in `docs/vla/02-capstone.md`.
- [x] T022 [P] [US4] Implement the FastAPI server for the RAG chatbot in `code/rag_chatbot/main.py`.
- [x] T023 [P] [US4] Implement the Qdrant vector indexing logic in `code/rag_chatbot/indexing.py`.
- [x] T024 [P] [US4] Implement the query logic using Context 7 MCP in `code/rag_chatbot/query.py`.
- [x] T025 [P] [US4] Create OpenAPI documentation for the RAG API, based on `specs/001-book-spec-overview/contracts/openapi.yaml`.

## Final Phase: Polish & Cross-Cutting Concerns

**Goal**: Review, finalize, and deploy the book.

- [x] T026 Perform technical review of all modules.
- [x] T027 Run plagiarism checks and verify all citations.
- [x] T028 Generate the final PDF version of the book.
- [ ] T029 Configure CI/CD pipeline for linting, testing, and deploying to GitHub Pages.
- [ ] T030 Deploy the final Docusaurus website.

## Dependencies

- **US2** depends on **US1** (requires URDF from Module 1).
- **US3** depends on **US2** (requires a simulated robot).
- **US4** depends on **US3** (integrates AI with the simulated robot).

## Implementation Strategy

The project will be implemented by user story, starting with US1. Foundational tasks must be completed before starting US1. The RAG chatbot (part of US4) can be developed in parallel with the content of the earlier modules.
