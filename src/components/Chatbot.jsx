import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Chatbot.css";
import "../styles/ChatbotMobile.css";
import agentImage from "../assets/images/agent_dev.webp"; 
import chatbotPrompt from "../prompt/chatbotPrompt";

const Chatbot = () => {
  const openAiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Bienvenue! Je suis votre assistant IA prêt à répondre à vos questions. Vous pouvez poser jusqu'à 5 questions par jour. 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const maxQuestions = 5;

  useEffect(() => {
    initializeDailyQuestions();
  }, []);

  const initializeDailyQuestions = () => {
    const today = new Date().toDateString(); // Format simplifié pour comparer les jours
    const storedData = JSON.parse(localStorage.getItem("chatbotQuestions")) || {};

    if (storedData.date !== today) {
      localStorage.setItem(
        "chatbotQuestions",
        JSON.stringify({ date: today, count: 0 })
      );
    }
  };

  const getRemainingQuestions = () => {
    const storedData = JSON.parse(localStorage.getItem("chatbotQuestions")) || {};
    return maxQuestions - (storedData.count || 0);
  };

  const incrementQuestionCount = () => {
    const storedData = JSON.parse(localStorage.getItem("chatbotQuestions")) || {};
    storedData.count = (storedData.count || 0) + 1;
    localStorage.setItem("chatbotQuestions", JSON.stringify(storedData));
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const remainingQuestions = getRemainingQuestions();

    if (remainingQuestions <= 0) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Vous avez atteint la limite de 5 questions pour aujourd'hui. Revenez demain !",
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

      incrementQuestionCount();
    } catch (error) {
      console.error("Erreur API :", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Erreur. Réessayez plus tard." },
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
          <div className="remaining-questions">
            Questions restantes aujourd'hui : {getRemainingQuestions()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
