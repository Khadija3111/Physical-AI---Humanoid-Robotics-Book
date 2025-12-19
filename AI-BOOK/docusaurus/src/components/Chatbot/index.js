import React, { useState, useEffect } from 'react';
import styles from './styles.css';
import { sendQuery } from './api';



import { askChatbot } from "./api";

async function handleSubmit() {
  try {
    const response = await askChatbot(userInput);
    setAnswer(response.answer);
  } catch (err) {
    console.error(err);
    setAnswer("Something went wrong");
  }
}





const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [context, setContext] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection().toString();
      if (selectedText) {
        setContext(selectedText);
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const botResponse = await sendQuery(input, context);
        const botMessage = { text: botResponse, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        const errorMessage = { text: 'Error: Could not get a response.', sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
        setContext(''); // Clear context after sending
      }
    }
  };

  return (
    <div className="chatbot-container">
      {context && (
        <div className="context-display">
          <p>Context: "{context}"</p>
        </div>
      )}
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && <div className="message bot">...</div>}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={isLoading}
          placeholder={context ? "Ask about the selected text..." : "Ask a question..."}
        />
        <button onClick={handleSend} disabled={isLoading}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
