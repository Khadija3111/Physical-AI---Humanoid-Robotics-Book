---
description: "Task list template for chapter authoring"
---

# Tasks: [CHAPTER NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for learning objectives)

## Format: `[ID] [Phase] Description`

- **[Phase]**: Which writing phase the task belongs to (e.g., Research, Draft, Asset, Review)
- Include exact file paths in descriptions.

<!-- 
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.
  
  The /sp.tasks command MUST replace these with actual tasks based on:
  - Learning Objectives from spec.md
  - Content & Asset Requirements from spec.md
  - The approved Implementation Plan from plan.md
  
  Tasks MUST be organized by phase.
  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Research & Outlining

**Goal**: Gather materials, define structure, and validate sources.

- [ ] T001 [Research] Gather 5-10 peer-reviewed papers on [topic] per spec requirements.
- [ ] T002 [Research] Identify primary datasheets/sources for all hardware-specific claims.
- [ ] T003 [Research] Create a detailed chapter outline in `specs/[###-feature-name]/outline.md`.
- [ ] T004 [Research] Validate that planned sources meet the ">50% peer-reviewed" constitution requirement.

---

## Phase 2: Content Drafting

**Goal**: Write the main body of the chapter.

- [ ] T005 [Draft] Write the first draft of the 'Introduction' section in `docs/<module>/01-introduction.md`.
- [ ] T006 [Draft] Draft the '[Core Concept]' section in `docs/<module>/02-concept.md`, incorporating findings from T001.
- [ ] T007 [Draft] Add all citations to a central bibliography file using APA 7th style.
- [ ] T008 [Draft] Ensure all claims are linked to their sources.

---

## Phase 3: Asset Creation (Code, Figures, Diagrams)

**Goal**: Develop all non-text content required for the chapter.

- [ ] T009 [Asset] Create the runnable code example for [algorithm] in `code/<module>/[script_name].py`.
- [ ] T010 [Asset] Write a README for the code example, explaining how to run it and its expected output.
- [ ] T011 [Asset] Test the code example to ensure it is reproducible and correct.
- [ ] T012 [Asset] Create the diagram illustrating [architecture] in `static/img/<module>/[diagram_name].png`.
- [ ] T013 [Asset] Generate the data plot for [results] and save to `static/img/<module>/[plot_name].png`.
- [ ] T014 [Asset] Ensure all new code has the MIT license header and figures are noted as CC-BY-4.0.

---

## Phase 4: Review & Refinement

**Goal**: Ensure quality, accuracy, and clarity through review cycles.

- [ ] T015 [Review] Perform a technical review of the entire chapter with a subject matter expert.
- [ ] T016 [Review] Submit chapter for peer review by [Name/Team].
- [ ] T017 [Review] Run a plagiarism check on the drafted text.
- [ ] T018 [Review] Check all citations for correctness and formatting.
- [ ] T019 [Refine] Incorporate feedback from all reviews into the draft.
- [ ] T020 [Refine] Edit for clarity, grammar, and style. Check against the Flesch-Kincaid grade level target.

---

## Phase 5: Finalization & Build

**Goal**: Prepare the chapter for publication.

- [ ] T021 [Finalize] Run the full Docusaurus project build (`npm run build`) to ensure no errors.
- [ ] T022 [Finalize] Generate the PDF output (`npx docusaurus-pdf`) and visually inspect for formatting issues.
- [ ] T023 [Finalize] Create a pull request for the new chapter branch.
- [ ] T024 [Finalize] Update the project's `CHANGELOG.md` with a summary of the new chapter.

## Authoring Strategy

1.  **Phase 1 (Research)** must be completed first to ensure the plan is viable.
2.  **Phase 2 (Drafting)** can begin once the outline is approved.
3.  **Phase 3 (Assets)** can run in parallel with drafting, but assets should be finalized after the text that references them is stable.
4.  **Phase 4 (Review)** is critical and blocks finalization. Technical review should happen before broader peer review.
5.  **Phase 5 (Finalization)** is the last step before merging.

Commit frequently after completing each task or a logical group of tasks. This provides a clear history of the chapter's development.
