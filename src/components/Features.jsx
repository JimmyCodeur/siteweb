import React, { useState, useEffect } from 'react';
import '../styles/Features.css';
import AgentImage from '../assets/images/bot_1.webp';
import AgentImageDev from '../assets/images/agent_dev.webp';
import AgentImageAssistance from '../assets/images/agent_assistance.webp';
import AgentImageChatbot from '../assets/images/agent_chatbot.webp';

const Features = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [translationInput, setTranslationInput] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [progress, setProgress] = useState(75); // Exemple de progression

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedAgent) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedAgent]);

  const handleTranslation = (e) => {
    setTranslationInput(e.target.value);
    // Simuler une traduction pour cet exemple
    setTranslatedText(`Traduction simulée : ${e.target.value}`);
  };

  const agentCategories = [
    {
      category: "Agents Éducatifs",
      agents: [
        {
          title: "Apprendre l'anglais",
          description: "Un agent IA interactif qui vous aide à améliorer vos compétences linguistiques en pratiquant des conversations, en vous corrigeant et en suivant vos progrès.",
          image: AgentImage,
          progress: 85,
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant d'apprentissage en anglais. Prêt à commencer ?" },
            { speaker: "User", message: "Oui, je suis prêt." },
            { speaker: "IA", message: "Parfait ! Essayons une phrase simple. Comment dirais-tu 'Bonjour, comment ça va ?' en anglais ?" },
            { speaker: "User", message: "Hello, how are you?" },
            { speaker: "IA", message: "Très bien ! C'est correct. Pour être plus naturel, tu peux dire : 'Hi, how are you doing?'." },
            { speaker: "IA", message: "Maintenant, essayons une autre question. Comment demander : 'Quelle heure est-il ?' ?" },
            { speaker: "User", message: "What time is it?" },
            { speaker: "IA", message: "Exactement ! Excellent travail. Tu peux aussi dire : 'Do you have the time?' dans une conversation informelle." },
            { speaker: "IA", message: "Maintenant, raconte-moi ce que tu fais pendant le week-end. Tu peux commencer par : 'During the weekend, I...'" },
            { speaker: "User", message: "During the weekend, I go to the park and play with my kids." },
            { speaker: "IA", message: "Bravo ! Tu as bien formulé ta phrase. Pour enrichir, tu peux dire : 'During the weekend, I usually go to the park with my kids and we play games together.' Cela montre plus d'interaction." },
            { speaker: "IA", message: "Continuons. Comment dirais-tu : 'Je vais au cinéma avec mes amis' ?" },
            { speaker: "User", message: "I go to the cinema with my friends." },
            { speaker: "IA", message: "Très bien ! C'est correct. En anglais américain, 'cinema' est souvent remplacé par 'movie theater'. Cela donnerait : 'I go to the movie theater with my friends.'." }
          ],
        },
      ],
    }
    // Ajout d'autres catégories d'agent si nécessaire
  ];

  return (
    <section id="agents" className="features">
      {/* Effet de fond lumineux */}
      <div className="bg">
        <div></div>
        <div></div>
      </div>

      <h2>Nos Solutions IA</h2>
      {agentCategories.map((category, catIndex) => (
        <div key={catIndex} className="category-block">
          <h3>{category.category}</h3>
          <div className="sub-category">
            {category.agents.map((agent, index) => (
              <div key={index} className="card improved-card glow-filter" data-text={agent.title}>
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
            {/* En-tête du modal */}
            <div className="modal-header">
              <h3>{selectedAgent.title}</h3>
              <button className="close-btn" onClick={() => setSelectedAgent(null)}>✖</button>
            </div>

            {/* Boîte de conversation */}
            <div className="conversation-box">
              {selectedAgent.conversation.map((msg, index) => (
                <div key={index} className={`message ${msg.speaker}`}>
                  <span className="avatar">{msg.speaker === "IA" ? "🤖" : "👤"}</span>
                  <div className="message-content">
                    <p>{msg.message}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fonctionnalités supplémentaires */}
            <div className="modal-features">

              {/* Barre de progression */}
              <div className="progress-container">
                <h4>Progression d'apprentissage</h4>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="progress-text">Progression : {progress}%</p>
              </div>

              {/* Liste des fonctionnalités */}
              <div className="features-overview">
                <h4>Fonctionnalités clés</h4>
                <ul>
                  <li><i className="fas fa-language"></i> Traduction en temps réel</li>
                  <li><i className="fas fa-pen"></i> Vérification grammaticale</li>
                  <li><i className="fas fa-robot"></i> Pratique conversationnelle</li>
                  <li><i className="fas fa-headphones"></i> Prise en charge vocale</li>
                </ul>
              </div>
            </div>

            {/* Pied du modal */}
            <div className="modal-footer">
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
