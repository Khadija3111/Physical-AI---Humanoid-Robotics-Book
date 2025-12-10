# 📘 Physical AI & Humanoid Robotics — AI-Native Textbook  
### Hackathon I — Panaversity / GIAIC / PIAIC  
### Author: *khadija abdulbasit*

---

## 🚀 Overview

This repository contains my submission for **Hackathon I: Create a Textbook for Teaching Physical AI & Humanoid Robotics**.

I built this project using a hybrid workflow powered by:

- **Spec-Kit Plus**   
- **Gemini CLI (Google AI Studio)**  
- **Docusaurus v3**  
- **vercel**

The result is a complete **AI-native textbook** that teaches ROS 2, Gazebo, Unity, NVIDIA Isaac Sim, VSLAM, and Vision-Language-Action (VLA) systems.

---

## 📚 Project Deliverables

### ✔ 1. AI/Spec-Driven Book Creation (Requirement #1) — **COMPLETED**

The textbook is fully written using:

- Spec-Kit Plus (module specifications & consistency)  
- Gemini CLI (cross-checking, corrections, module drafting)

The book includes:

- **Module 1: ROS 2 — The Robotic Nervous System**  
- **Module 2: Gazebo & Unity — The Digital Twin**  
- **Module 3: NVIDIA Isaac — The AI-Robot Brain**  
- **Module 4: Vision-Language-Action (VLA)**  

📍 **Published Book Link:** *(https://physicalaibook-852gv1xr3-khadija3111s-projects.vercel.app/)*  
📍 **Public Repo Link:** *(https://github.com/Khadija3111/Physical-AI---Humanoid-Robotics-Book)*

---

## 🧠 AI Tools Used in This Project

### ✔ **Gemini CLI (Google AI Studio)**
I used Gemini CLI for:

- Rapid drafting of technical sections  
- Refining explanations for ROS 2, Isaac Sim, and VSLAM  
- Fixing inconsistencies across chapters  
- Generating examples and summaries  
- Testing chatbot prompts for Requirement #2

### ✔ **Spec-Kit Plus**
Used for:

- Maintaining consistent structure  
- Generating module-level specifications  
- Ensuring reproducible technical documentation

---

## 🤖 2. RAG Chatbot Development (Requirement #2) — **IN PROGRESS**

I have **started implementing** Requirement #2:

### **🛠️ Components Already Set Up**
- FastAPI backend initialized  
- Gemini + OpenAI LLM testing through CLI  
- Folder structure for RAG pipeline created (`/rag/`)  
- Basic embeddings logic (local test version)  
- System architecture for:
  - Qdrant Cloud (Vector DB)
  - Neon Serverless Postgres (metadata DB)
- Document loaders prepared for book markdown files

### **🔧 Current Work**
- Integrating Qdrant Cloud free tier  
- Building FastAPI endpoints  
- Adding “select text → ask chatbot” functionality  
- Embedding all book content into vector storage  
- Testing retrieval accuracy via Gemini CLI

### **📌 Will Be Completed Before Submission**
- UI integration inside Docusaurus  
- Chat history + context windows  
- Full RAG pipeline (Embeddings → Retrieval → Answering)


## 🏗️ Tech Stack

### **Core Development**
- Docusaurus v3  
- Spec-Kit Plus  
- Claude Code  
- Gemini CLI  
- Node.js  
- Markdown + MDX  

### **Requirement #2 (**
- Qdrant 
- OpenAI / Gemini APIs  
- RAG 

---

## 📦 Project Structure

