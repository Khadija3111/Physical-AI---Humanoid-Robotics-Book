# Chapter Specification: [CHAPTER NAME]

**Feature Branch**: `[###-feature-name]`  
**Created**: [DATE]  
**Status**: Draft  
**Input**: User description: "$ARGUMENTS"

## Learning Objectives & Reader Journey *(mandatory)*

<!--
  Each objective should represent a key takeaway for the reader.
  Prioritize them based on foundational knowledge (P1) to advanced topics (P3).
-->

### Objective 1 - [Brief Title] (Priority: P1)

**Reader Journey**: As a reader, I want to understand [core concept] so that I can [apply it to a basic problem].

**Why this priority**: This is foundational knowledge required for all subsequent topics.

**Independent Test**: The reader can successfully complete the hands-on tutorial in section [X] or answer the comprehension questions at the end of the chapter.

**Acceptance Scenarios**:

1. **Given** a basic understanding of linear algebra, **When** the reader finishes this section, **Then** they can explain the difference between a rotation matrix and a quaternion.
2. **Given** the provided code example, **When** the reader runs it, **Then** it produces the expected simulation output.

---

[Add more objectives as needed]

## Content & Asset Requirements *(mandatory)*

### Key Topics & Concepts
- **TC-001**: Must explain [specific concept, e.g., "Denavit-Hartenberg parameters"].
- **TC-002**: Must provide a brief history of [historical context, e.g., "the development of SLAM"].
- **TC-003**: Must compare and contrast [competing ideas, e.g., "PID vs LQR control"].

### Required Assets (Code & Figures)
- **AS-001**: Must include a runnable Python script demonstrating [algorithm, e.g., "A* pathfinding"].
- **AS-002**: Must include a diagram illustrating [architecture, e.g., "a typical humanoid robot's sensor suite"].
- **AS-003**: Must include a data plot showing [result, e.g., "joint torque over time"].
- **AS-004**: [NEEDS CLARIFICATION: A clear diagram for the arm's coordinate frames is needed].

### Sourcing & Claims
- **SC-001**: All performance metrics for [algorithm X] must be cited from peer-reviewed papers.
- **SC-002**: The claim that [Y is the industry standard] must be backed by a source (datasheet, survey, etc.).

## Constitution Compliance

- [ ] **Source Check**: Are sources for key claims identified? (Scientific Accuracy, Rigor)
- [ ] **Reproducibility Check**: Are runnable examples and their expected outcomes defined? (Reproducibility)
- [ ] **Clarity Check**: Is the target audience (engineers) and scope of explanation clear? (Clarity for Engineers)
- [ ] **Licensing Check**: Is the license for new code (MIT) and figures (CC-BY-4.0) confirmed? (Open-Source Ethos)

## Success Criteria *(mandatory)*

- **SC-001**: Chapter draft achieves a Flesch-Kincaid grade level between 10-12 for readability.
- **SC-002**: All code examples are verified to be runnable and produce the outputs described in the text.
- **SC-003**: All citations are formatted in APA 7th style and meet the ">50% peer-reviewed" requirement.
- **SC-004**: Plagiarism scan (e.g., Turnitin) shows 0% unattributed text.
- **SC-005**: The chapter successfully builds into the final PDF output via the Docusaurus pipeline.
