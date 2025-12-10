# Implementation Plan: [CHAPTER/MODULE NAME]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Chapter specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command.

## Summary

[Extract from chapter spec: primary learning objectives + technical approach]

## Technical & Publishing Context

**Primary Topics**: [e.g., Forward Kinematics, PID Control, Kalman Filters or NEEDS CLARIFICATION]
**Core Dependencies**: [e.g., Python 3.11, PyTorch, Docusaurus v3 or NEEDS CLARIFICATION]
**Code Standards**: [e.g., PEP8, Black Formatter or N/A]
**Testing Framework**: [e.g., pytest, unittest or N/A]
**Citation Style**: APA 7th (as per constitution)
**Documentation Format**: Docusaurus MDX with embedded diagrams and code
**Performance Goals**: [e.g., simulations must run in < 60s on consumer hardware or N/A]
**Target Audience**: [e.g., Undergraduate engineering students, professional software developers]

## Constitution Check

*GATE: Must pass before research. Re-check after design.*

- [ ] **Scientific Accuracy**: Are primary research and datasheets identified for all key claims?
- [ ] **Clarity for Engineers**: Does the plan include tasks for creating diagrams and runnable code to simplify complex topics?
- [ ] **Reproducibility**: Are all code, simulations, and hardware instructions planned to be version-controlled and tested?
- [ ] **Rigor & Peer Review**: Does the plan require sourcing from peer-reviewed literature and labeling preprints? Is a peer-review stage included?
- [ ] **Open-Source Ethos**: Is there a task to ensure all new code is licensed under MIT and text/figures under CC-BY-4.0?

## Project Structure

### Documentation (this chapter)

```text
specs/[###-feature]/
├── plan.md              # This file
├── spec.md              # The chapter specification
└── tasks.md             # The detailed task list for the chapter
```

### Source Code & Content (repository root)

```text
docs/
└── <module>/            # Main content for the chapter/module
    ├── 01-introduction.md
    └── 02-deep-dive.md
code/
└── <module>/            # Runnable code examples for the chapter
    └── example.py
hardware/
└── <module>/            # BOM/CAD files if applicable
    └── parts.csv
static/
└── img/
    └── <module>/        # Diagrams and figures for the chapter
        └── diagram.png
```

**Structure Decision**: The plan will follow the established Docusaurus project structure. Content resides in `/docs`, runnable code in `/code`, hardware designs in `/hardware`, and images in `/static/img`. Each new chapter or major module will get its own subdirectory within these folders.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., Use of a non-peer-reviewed source] | [e.g., It's a foundational industry blog post] | [e.g., No peer-reviewed source offers a similar overview] |
| [e.g., A complex simulation] | [e.g., Necessary to demonstrate a key concept visually] | [e.g., A static diagram would not convey the dynamic behavior] |
