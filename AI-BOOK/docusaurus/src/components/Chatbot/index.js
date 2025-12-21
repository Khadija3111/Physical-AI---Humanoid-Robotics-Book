import React, { useState, useRef, useEffect } from "react";
import { askChatbot } from "./api"; // Relative import since both files are in the same directory
import styles from './styles.css';

export default function Home() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever chatLog changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatLog]);

  const handleSend = async () => {
  if (!message.trim()) return;

  setChatLog(prev => [...prev, { sender: "user", text: message }]);
  const userMessage = message;
  setMessage("");

  try {
    const result = await askChatbot(userMessage);
    const botResponse = result?.response || "Sorry, I couldn't get a response.";
    
    setChatLog(prev => [...prev, { sender: "bot", text: botResponse }]);
  } catch (error) {
    setChatLog(prev => [...prev, { sender: "bot", text: "Error connecting to server." }]);
    console.error("Frontend caught error:", error);
  }
};



  
    return (
  <div className="chatbot-container">
    

    {/* Chat messages */}
    <div className="chatbot-messages">
      {chatLog.map((msg, idx) => (
        <div key={idx} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>

    {/* Input */}
    <div className="chatbot-input">
      <input
        type="text"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSend()}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  </div>
);

  
}
