import React, { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css";
import agentImage from "../assets/images/agent_dev.webp"; 
import chatbotPrompt from "../prompt/chatbotPrompt";

const Chatbot = () => {
  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bienvenue ! Je suis votre assistant IA prêt à répondre à vos questions. Posez-en une, et commençons cette aventure ensemble (jusqu'à 5 questions). 🚀" }
  ]);
  const [input, setInput] = useState("");
  const [userQuestionsCount, setUserQuestionsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const maxQuestions = 1;

  const sendMessage = async () => {
    if (!input.trim()) return;

    if (userQuestionsCount >= maxQuestions) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Vous avez atteint la limite de questions. Merci de nous contacter pour plus d'informations.",
        },
      ]);
      setInput("");
      return;
    }

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setIsLoading(true);
    setInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            { role: "system", content: chatbotPrompt },
            { role: "user", content: input },
          ],
          max_tokens: 300,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAiApiKey}`,
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botResponse },
      ]);

      setUserQuestionsCount((prev) => prev + 1);
    } catch (error) {
      console.error("Erreur API :", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Erreur lors de l'appel à l'API OpenAI. Réessayez plus tard." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
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
            {isLoading && (
              <div className="chat-message bot">
                <em>Chargement...</em>
              </div>
            )}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Posez votre question..."
              disabled={isLoading} 
            />
            <button onClick={sendMessage} disabled={isLoading}>
              {isLoading ? "Chargement..." : "Envoyer"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
