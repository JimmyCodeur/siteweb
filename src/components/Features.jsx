import React, { useState, useEffect } from 'react';
import '../styles/Features.css';
import AgentImage from '../assets/images/bot_1.webp';
import AgentImageDev from '../assets/images/agent_dev.webp';
import AgentImageAssistance from '../assets/images/agent_assistance.webp';
import AgentImageChatbot from '../assets/images/agent_chatbot.webp';

const Features = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedAgent) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedAgent]);

  const agentCategories = [
    {
      category: "Agents Éducatifs",
      agents: [
        {
          title: "Apprendre l'anglais",
          description: "Un agent IA interactif qui vous aide à améliorer vos compétences linguistiques en pratiquant des conversations, en vous corrigeant et en suivant vos progrès.",
          image: AgentImage,
          progress: 75,
          conversation: [
            { speaker: "IA", message: "Hello! You are in a taxi. How can I help you?" },
            { speaker: "User", message: "Where should I go?" },
            { speaker: "IA", message: "Great question! You could say: 'Where should I go, please?' Remember to add 'please' for politeness." },
          ],
        },
        {
          title: "Apprendre à coder",
          description: "Cet agent IA vous guide dans l'apprentissage de la programmation, avec des exercices interactifs, des défis de codage et des corrections en temps réel.",
          image: AgentImageDev,
          progress: 50,
          conversation: [
            { speaker: "IA", message: "Bienvenue dans le monde du code. Quel langage souhaitez-vous apprendre ?" },
            { speaker: "User", message: "Je veux apprendre le JavaScript." },
            { speaker: "IA", message: "Super choix ! Commençons par les bases : les variables et les fonctions." },
          ],
        },
      ],
    },
    {
      category: "Agents d'Assistance",
      agents: [
        {
          title: "Agent IA Chatbot",
          description: "Un chatbot IA interactif conçu pour assister vos clients, répondre à leurs questions et fournir les informations nécessaires de manière rapide et efficace.",
          image: AgentImageChatbot,
          progress: 85,
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?" },
            { speaker: "User", message: "J'ai besoin d'aide pour changer mon adresse email." },
            { speaker: "IA", message: "Pas de problème. Veuillez fournir votre nouvelle adresse email." },
          ],
        },
        {
          title: "Agent IA d'assistance interne",
          description: "Un agent IA qui fournit une assistance 24/7 aux salariés en répondant à leurs questions, en les dirigeant vers les bonnes ressources, et en résolvant des problèmes courants.",
          image: AgentImageAssistance,
          progress: 65,
          conversation: [
            { speaker: "IA", message: "Bonjour ! Comment puis-je vous aider aujourd'hui ?" },
            { speaker: "User", message: "Je cherche des ressources sur le marketing digital." },
            { speaker: "IA", message: "Voici quelques ressources utiles : 'Marketing Digital pour Débutants', 'SEO en 2023', et 'Publicité sur les Réseaux Sociaux'." },
          ],
        },
      ],
    },
  ];

  return (
    <section id="agents" className="features">
      <h2>Nos Solutions IA</h2>
      {agentCategories.map((category, catIndex) => (
        <div key={catIndex} className="category-block">
          <h3>{category.category}</h3>
          <div className="sub-category">
            {category.agents.map((agent, index) => (
              <div key={index} className="card improved-card">
                <h4 className="card-title">{agent.title}</h4>
                <div className="card-header">
                  <div className="card-image">
                    <img src={agent.image} alt={agent.title} className="feature-image" />
                  </div>
                  <p className="card-description">{agent.description}</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => setSelectedAgent(agent)}
                >
                  Voir
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedAgent && (
        <div className="modal-overlay" onClick={() => setSelectedAgent(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedAgent.title}</h3>

            <div className="progress-container">
              <p className="progress-text">Progression : {selectedAgent.progress}%</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${selectedAgent.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="conversation-box">
              {selectedAgent.conversation.map((msg, index) => (
                <div key={index} className={`message ${msg.speaker}`}>
                  <strong>{msg.speaker}:</strong> {msg.message}
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setSelectedAgent(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
