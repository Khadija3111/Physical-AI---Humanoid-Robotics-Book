# Data Model: RAG Chatbot

**Date**: 2025-12-13
**Feature**: [RAG Chatbot Frontend–Backend Integration](spec.md)

This document outlines the data structures used for the RAG chatbot feature.

## Entities

### Chat Message

Represents a single message in the chat interaction, either from the user or the bot.

| Field       | Type   | Description                                     |
|-------------|--------|-------------------------------------------------|
| `query`     | string | The user's question.                            |
| `context`   | string | Optional: A snippet of text selected by the user. |
| `response`  | string | The response from the RAG agent.                |

## State Transitions

The frontend component will manage the state of the chat history, which is an array of chat messages.

1.  **Initial State**: The chat history is empty.
2.  **User Sends Message**: A new message object with the `query` and optional `context` is created and added to the history. A request is sent to the backend.
3.  **Bot Responds**: The `response` from the backend is added to the last message object in the history. The UI re-renders to display the response.
