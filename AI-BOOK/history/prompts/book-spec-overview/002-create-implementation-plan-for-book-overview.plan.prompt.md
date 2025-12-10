---
id: 002
title: Create Implementation Plan for Book Overview
stage: plan
date: 2025-12-09
surface: agent
model: Gemini
feature: book-spec-overview
branch: 001-book-spec-overview
user: pc
command: /sp.plan
labels: [plan, project-setup]
links:
  spec: specs/001-book-spec-overview/spec.md
  ticket: null
  adr: null
  pr: null
files:
 - specs/001-book-spec-overview/plan.md
 - specs/001-book-spec-overview/research.md
 - specs/001-book-spec-overview/data-model.md
 - specs/001-book-spec-overview/contracts/openapi.yaml
 - specs/001-book-spec-overview/quickstart.md
 - history/prompts/book-spec-overview/002-create-implementation-plan-for-book-overview.plan.prompt.md
tests:
  null
---

## Prompt

---
description: Execute the implementation planning workflow using the plan template to generate design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/setup-plan.sh --json` from repo root and parse JSON for FEATURE_SPEC, IMPL_PLAN, SPECS_DIR, BRANCH. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load context**: Read FEATURE_SPEC and `.specify/memory/constitution.md`. Load IMPL_PLAN template (already copied).

3. **Execute plan workflow**: Follow the structure in IMPL_PLAN template to:
   - Fill Technical Context (mark unknowns as "NEEDS CLARIFICATION")
   - Fill Constitution Check section from constitution
   - Evaluate gates (ERROR if violations unjustified)
   - Phase 0: Generate research.md (resolve all NEEDS CLARIFICATION)
   - Phase 1: Generate data-model.md, contracts/, quickstart.md
   - Phase 1: Update agent context by running the agent script
   - Re-evaluate Constitution Check post-design

4. **Stop and report**: Command ends after Phase 2 planning. Report branch, IMPL_PLAN path, and generated artifacts.

## Phases

### Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:
   - For each NEEDS CLARIFICATION → research task
   - For each dependency → best practices task
   - For each integration → patterns task

2. **Generate and dispatch research agents**:

   ```text
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

### Phase 1: Design & Contracts

**Prerequisites:** `research.md` complete

1. **Extract entities from feature spec** → `data-model.md`:
   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:
   - For each user action → endpoint
   - Use standard REST/GraphQL patterns
   - Output OpenAPI/GraphQL schema to `/contracts/`

3. **Agent context update**:
   - Run `.specify/scripts/bash/update-agent-context.sh gemini`
   - These scripts detect which AI agent is in use
   - Update the appropriate agent-specific context file
   - Add only new technology from current plan
   - Preserve manual additions between markers

**Output**: data-model.md, /contracts/*, quickstart.md, agent-specific file

## Key rules

- Use absolute paths
- ERROR on gate failures or unresolved clarifications

## User Input

```text
yep
```

## Response snapshot

Implementation planning for 'Physical AI & Humanoid Robotics - Book Overview' completed.

**Branch Name**: `001-book-spec-overview`
**Implementation Plan Path**: `specs/001-book-spec-overview/plan.md`
**Generated Artifacts**:
*   `specs/001-book-spec-overview/plan.md`
*   `specs/001-book-spec-overview/research.md`
*   `specs/001-book-spec-overview/data-model.md`
*   `specs/001-book-spec-overview/contracts/openapi.yaml`
*   `specs/001-book-spec-overview/quickstart.md`

NOTE: The `update-agent-context.sh` script failed to update the agent's context due to a template file not being found. This may require manual intervention or debugging of the script.

## Outcome

- ✅ Impact: Successfully executed the implementation planning workflow, generating a detailed plan (`plan.md`), research notes (`research.md`), a data model (`data-model.md`), API contracts (`contracts/openapi.yaml`), and a quickstart guide (`quickstart.md`) for the book project.
- 🧪 Tests: No automated tests were run; design artifacts were created based on the spec.
- 📁 Files: 
  - Created: specs/001-book-spec-overview/plan.md
  - Created: specs/001-book-spec-overview/research.md
  - Created: specs/001-book-spec-overview/data-model.md
  - Created: specs/001-book-spec-overview/contracts/openapi.yaml
  - Created: specs/001-book-spec-overview/quickstart.md
  - Created: history/prompts/book-spec-overview/002-create-implementation-plan-for-book-overview.plan.prompt.md
- 🔁 Next prompts: The user can now proceed with `/sp.tasks` to generate a detailed task list for implementing the plan, or address the failure of the `update-agent-context.sh` script.
- 🧠 Reflection: The manual replication of `setup-plan.sh` was necessary due to script issues. The clarification of RAG chatbot details helped refine the plan. The agent context update script still poses a problem.

## Evaluation notes (flywheel)

- Failure modes observed: `update-agent-context.sh` script failed due to template not found error, similar to `setup-plan.sh`. This indicates a systemic issue with how these scripts locate template files.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Investigate and fix the path resolution logic in the bash scripts.
