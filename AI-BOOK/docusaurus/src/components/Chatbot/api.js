// AI-BOOK/docusaurus/src/components/Chatbot/api.js

// Backend URL from env variable
const API_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/agent/query`;

// Function to send message to backend
export async function askChatbot(message) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: message }),
    });

    if (!res.ok) {
      throw new Error(`Backend request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error in askChatbot:", error);
    return { error: error.message };
  }
}
