---
id: 001
title: Establish Project Constitution and Align Templates
stage: constitution
date: 2025-12-09
surface: agent
model: Gemini
feature: none
branch: main
user: pc
command: /sp.constitution
labels: [constitution, template-update]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/plan-template.md
 - .specify/templates/spec-template.md
 - .specify/templates/tasks-template.md
 - history/prompts/constitution/001-establish-project-constitution-and-align-templates.constitution.prompt.md
tests:
  null
---

## Prompt

/sp.constitution # Physical AI & Humanoid Robotics – Constitution (Hackathon Version)

## Project
**Title:** Physical AI & Humanoid Robotics – a technical book introducing embodied AI concepts, hardware, and software foundations.  
**Tools:** Spec-Kit Plus, Gemini-CLI, Docusaurus, GitHub Pages  

---

## Core Principles
1. **Scientific Accuracy** – All claims must be traceable to primary research or datasheets.  
2. **Clarity for Engineers** – Concise explanations with diagrams and runnable code.  
3. **Reproducibility** – Code, simulations, and hardware instructions are version-controlled and runnable.  
4. **Rigor & Peer Review** – Prefer peer-reviewed sources; preprints clearly labeled.  
5. **Open-Source Ethos** – MIT for code, CC-BY-4.0 for text/figures.  

---

## Key Standards
- **Citations:** APA 7th, ≥50% peer-reviewed sources.  
- **Word count:** 5,000–7,000 (excluding front-matter, references).  
- **File format:** PDF via Docusaurus (`npm run build && npx docusaurus-pdf`) with clickable citations.  
- **Version control:** All files in Git; major chapters in separate branches.  
- **Module storage:** `/docs/<module>/` directories.  

---

## Success Criteria
- All citations resolve and meet source requirements.  
- Plagiarism: 0%.  
- Readability: Flesch-Kincaid grade 10–12.  
- CI pipeline passes (`lint → test → build → pdf → deploy`).  
- GitHub Pages deployment functional.  

---

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

---

## Workflow & Governance
- Peer review for all major chapters.  
- Contributors must sign a CLA for substantial content.  
- All code, figures, and claims reviewed before merging.  
- Versioning: Semantic (`v1.0.0`) and changelog maintained.  

---

## Security & Maintenance
- RAG chatbot/user data stored securely (Neon Postgres, encrypted).  
- GDPR-like compliance.  
- Updates and errata logged in `CHANGELOG.md`/`ERRATA.md`.

## Response snapshot

I have created the project constitution and updated the plan, spec, and task templates to align with the new principles. The constitution is at .specify/memory/constitution.md.

## Outcome

- ✅ Impact: Created the foundational project constitution and aligned all development templates (plan, spec, tasks) with its principles, establishing a consistent framework for the project.
- 🧪 Tests: No tests were run as this was a documentation and configuration task.
- 📁 Files: 
  - Created: .specify/memory/constitution.md
  - Modified: .specify/templates/plan-template.md
  - Modified: .specify/templates/spec-template.md
  - Modified: .specify/templates/tasks-template.md
  - Created: history/prompts/constitution/001-establish-project-constitution-and-align-templates.constitution.prompt.md
- 🔁 Next prompts: The user can now proceed with creating specs, plans, and tasks for new chapters using the updated, constitution-aware templates (e.g., /sp.specify, /sp.plan).
- 🧠 Reflection: The process of propagating the constitution to all templates was crucial. Manually creating the PHR after the script failed was a necessary fallback. The templates are now much more specific to the project's domain (a technical book).

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script failed, likely due to shell differences on Windows and path interpretation issues.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): N/A
