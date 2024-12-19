import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/Chatbot.css';
import agentImage from '../assets/images/agent_dev.webp'; // Importez l'image de l'agent

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture du chatbot
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! Je suis votre assistant IA. Posez-moi vos questions, et je vous expliquerai nos services." }
  ]);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null); // Référence pour le défilement automatique

  // Défile automatiquement vers le dernier message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "Tu es un assistant pour un site d'entreprise qui propose des solutions IA personnalisées. Explique clairement et de manière concise ce que cette entreprise peut faire."
            },
            ...messages.map((msg) => ({
              role: msg.sender === "bot" ? "assistant" : "user",
              content: msg.text
            })),
            { role: "user", content: input }
          ],
          max_tokens: 100,
          temperature: 0.7
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
          }
        }
      );

      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: response.data.choices[0].message.content }
      ]);
    } catch (error) {
      setMessages([
        ...messages,
        { sender: "user", text: input },
        { sender: "bot", text: "Je suis désolé, je ne peux pas répondre pour le moment. Réessayez plus tard." }
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div>
      <div className="chatbot-toggle" onClick={toggleChat}>
        <img src={agentImage} alt="Agent IA" className="agent-image" />
      </div>
      {isOpen && (
        <div className="chatbot">
          <div className="chatbot-window">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {/* Élément invisible pour le scroll automatique */}
            <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Posez votre question..."
            />
            <button onClick={sendMessage}>Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
