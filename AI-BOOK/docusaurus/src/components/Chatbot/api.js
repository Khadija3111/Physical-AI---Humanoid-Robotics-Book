// AI-BOOK/docusaurus/src/components/Chatbot/api.js


const API_URL = "https://khadija222-aibook-backend.hf.space/agent/query"; // Use local or deployed backend


export async function askChatbot(message, selectedText = "") {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({ query: message, selected_text: selectedText }),
    });

    console.log("Response status:", res.status); // Debug log

    if (!res.ok) {
      const errorText = await res.text(); // Get error response as text
      console.log("Error response:", errorText); // Debug log
      throw new Error(`Backend request failed with status ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    console.log("API Response:", data); // Debug log

    // Ensure the response has the expected format
    return {
      response: data.response || data.answer || data.text || data.message || JSON.stringify(data),
      context: data.context || ""
    };
  } catch (error) {
    console.error("Error in askChatbot:", error);
    return { response: "Sorry, something went wrong. Please try again later.", context: "" };
  }
}
