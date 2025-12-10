<!--
    Sync Impact Report:
    - Version change: none -> 1.0.0
    - Added principles: 
        - Scientific Accuracy
        - Clarity for Engineers
        - Reproducibility
        - Rigor & Peer Review
        - Open-Source Ethos
    - Added sections: 
        - Key Standards
        - Success Criteria
        - Deliverables
        - Workflow & Governance
        - Security & Maintenance
    - Templates requiring updates: 
        - .specify/templates/plan-template.md (⚠ pending)
        - .specify/templates/spec-template.md (⚠ pending)
        - .specify/templates/tasks-template.md (⚠ pending)
    - Follow-up TODOs:
        - TODO(RATIFICATION_DATE): Determine original adoption date.
-->

# Physical AI & Humanoid Robotics – Constitution (Hackathon Version)
Project Title: Physical AI & Humanoid Robotics – a technical book introducing embodied AI concepts, hardware, and software foundations.
Tools: Spec-Kit Plus, Gemini-CLI, Docusaurus, GitHub Pages

## Core Principles

### 1. Scientific Accuracy
All claims must be traceable to primary research or datasheets.

### 2. Clarity for Engineers
Concise explanations with diagrams and runnable code.

### 3. Reproducibility
Code, simulations, and hardware instructions are version-controlled and runnable.

### 4. Rigor & Peer Review
Prefer peer-reviewed sources; preprints clearly labeled.

### 5. Open-Source Ethos
MIT for code, CC-BY-4.0 for text/figures.
### 6. AI-Assisted Content Policy
- **Context 7 MCP** is authorized to assist in drafting book content.
- Any AI-generated content must be reviewed for:
  - Scientific accuracy
  - Proper citations
  - Alignment with engineering clarity
- Use of AI does not replace human peer review or verification.


## Key Standards
- **Citations:** APA 7th, ≥50% peer-reviewed sources.
- **Word count:** 5,000–7,000 (excluding front-matter, references).
- **File format:** PDF via Docusaurus (`npm run build && npx docusaurus-pdf`) with clickable citations.
- **Version control:** All files in Git; major chapters in separate branches.
- **Module storage:** `/docs/<module>/` directories.

## Success Criteria
- All citations resolve and meet source requirements.
- Plagiarism: 0%.
- Readability: Flesch-Kincaid grade 10–12.
- CI pipeline passes (`lint → test → build → pdf → deploy`).
- GitHub Pages deployment functional.

## Deliverables
- Constitution: `sp.constitution.md`
- Chapter specs: `specs/`
- Code examples: `code/`
- Figures: `static/img/`
- BOM/CAD: `hardware/`
- CI workflow: `.github/workflows/ci.yml`
- Docusaurus project: `(root)`
- PDF build script: `scripts/build-pdf.sh`
- License files: `LICENSE`, `CODE_OF_CONDUCT.md`

## Workflow & Governance
- Peer review for all major chapters.
- Contributors must sign a CLA for substantial content.
- All code, figures, and claims reviewed before merging.
- Versioning: Semantic (`v1.0.0`) and changelog maintained.

## Security & Maintenance
- RAG chatbot/user data stored securely (Neon Postgres, encrypted).
- GDPR-like compliance.
- Updates and errata logged in `CHANGELOG.md`/`ERRATA.md`.

## Governance
This constitution defines the principles and standards for the project. All contributions and reviews must verify compliance with these rules. Amendments require documentation, approval, and a migration plan if they impact existing content or workflows.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Determine original adoption date. | **Last Amended**: 2025-12-09