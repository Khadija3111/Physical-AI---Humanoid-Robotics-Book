# Data Model for Physical AI & Humanoid Robotics Book

This document outlines the high-level data entities for the book project. As the project is primarily content-focused, the data model is simple and conceptual, describing the structure of the book itself.

## Entity: Book

Represents the entire project and final deliverable.

- **Attributes**:
  - `title` (string): The main title of the book ("Physical AI & Humanoid Robotics").
  - `version` (string): The semantic version of the book (e.g., "1.0.0").
  - `authors` (list of strings): The list of contributing authors.
  - `license` (string): The license for the book's text and figures (CC-BY-4.0).

## Entity: Module

A logical grouping of related chapters, forming a section of the book.

- **Attributes**:
  - `title` (string): The title of the module (e.g., "The Robotic Nervous System (ROS 2)").
  - `module_number` (integer): The sequential number of the module.
- **Relationships**:
  - Has many **Chapters**.

## Entity: Chapter

A single, self-contained content file within a module.

- **Attributes**:
  - `title` (string): The title of the chapter (e.g., "Introduction to ROS 2").
  - `chapter_number` (integer): The sequential number of the chapter within the book.
  - `word_count` (integer): The target word count for the chapter.
  - `file_path` (string): The path to the source markdown file (e.g., `/docs/ros2/01_introduction_to_ros2.md`).
- **Relationships**:
  - Belongs to one **Module**.

## Entity: RAG Document

Represents a chunk of text from the book's content, indexed in the vector database for the RAG chatbot.

- **Attributes**:
  - `doc_id` (UUID): Unique identifier for the document chunk.
  - `content` (string): The raw text content of the chunk.
  - `embedding` (vector): The vector embedding of the content.
  - `metadata` (object): Associated metadata, such as:
    - `source_chapter`: The chapter this content came from.
    - `source_module`: The module this content came from.
- **Relationships**:
  - Logically belongs to a **Chapter**.
