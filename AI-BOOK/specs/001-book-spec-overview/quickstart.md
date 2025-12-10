# Quickstart Guide: Physical AI & Humanoid Robotics Book Project

This guide provides instructions for setting up the development environment, building the Docusaurus website, and generating the PDF version of the book.

**Repository URL:** https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book

## Prerequisites

- **Node.js**: Version 18 or higher (LTS recommended)
- **npm**: Comes with Node.js
- **Python**: Version 3.11 or higher
- **Poetry**: Python package manager (`pip install poetry`)
- **Git**: Version control system

## 1. Setup Development Environment

1.  **Clone the repository** (if not already cloned):
    ```bash
    git clone https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book.git
    cd Physical-AI---Humanoid-Robotics-Book
    ```
2.  **Install Spec-Kit-Plus dependencies** (inside AI-BOOK):
    ```bash
    cd AI-BOOK
    npm install
    poetry install
    ```
3.  **Install Docusaurus dependencies** (after creating Docusaurus project):
    ```bash
    cd ../docusaurus
    npm install
    ```

## 2. Running the Docusaurus Development Server

```bash
cd docusaurus
npm run start
