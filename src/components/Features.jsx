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
  const [progress, setProgress] = useState(75); 

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
          progress: 85,
          features: [
            "Prise en charge vocale",
            "Pratique conversationnelle",
            "Vérification grammaticale",
            "Traduction en temps réel",
          ],
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
        {
          title: "Apprendre à programmer",
          description: "Un agent IA conçu pour enseigner les bases de la programmation, vous guider à travers des exemples interactifs et des défis de codage adaptés à votre niveau.",
          image: AgentImageDev,
          progress: 25,
          features: [
            "Exercices interactifs",
            "Adaptées au niveau",
            "Corrections automatiques des erreurs",
            "Simulations de projets réels",
          ],
          conversation: [
            // Niveau débutant
            { speaker: "IA", message: "Bonjour ! Je suis ici pour t'aider à apprendre la programmation. Prêt à commencer ?" },
            { speaker: "User", message: "Oui, absolument !" },
            { speaker: "IA", message: "Commençons par une question simple. Que signifie 'variable' en programmation ?" },
            { speaker: "User", message: "C'est une sorte de conteneur pour stocker des données." },
            { speaker: "IA", message: "Exactement ! Une variable est un espace de stockage nommé qui peut contenir différentes valeurs. Essayons de créer une variable en JavaScript : `let x = 10;`." },
            
            // Progression vers un niveau intermédiaire
            { speaker: "IA", message: "Super ! Maintenant, essayons quelque chose d'un peu plus complexe. Comment créer une fonction en JavaScript qui additionne deux nombres ?" },
            { speaker: "User", message: "Je ne sais pas trop." },
            { speaker: "IA", message: "Pas de souci ! Voici comment faire : `function add(a, b) { return a + b; }`. Cette fonction prend deux arguments et retourne leur somme." },
            { speaker: "IA", message: "Essaye maintenant d'appeler cette fonction avec les arguments 5 et 7. Que devrait-elle retourner ?" },
            { speaker: "User", message: "12." },
            { speaker: "IA", message: "Exact ! Bien joué. Tu es prêt à passer au niveau suivant ?" },
        
            // Niveau avancé
            { speaker: "IA", message: "Pour le niveau avancé, essayons de manipuler des tableaux. Comment ajouter un élément à la fin d'un tableau en JavaScript ?" },
            { speaker: "User", message: "Je pense que c'est avec `.push()`." },
            { speaker: "IA", message: "Exactement ! Si tu as un tableau `let fruits = ['pomme', 'banane'];`, tu peux ajouter un élément comme ceci : `fruits.push('orange');`. Le tableau devient `['pomme', 'banane', 'orange']`." },
            { speaker: "IA", message: "Maintenant, peux-tu écrire une boucle qui parcourt ce tableau et affiche chaque fruit dans la console ?" },
            { speaker: "User", message: "Oui, quelque chose comme : `for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }`." },
            { speaker: "IA", message: "Parfait ! Tu progresses vraiment bien." }
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
      <div className="why-agent">
        <h3>Pourquoi avoir un agent IA ?</h3>
        <p>
        Les agents IA sont des solutions révolutionnaires, conçues sur mesure pour répondre à vos besoins, qu'ils soient professionnels ou personnels.<br></br> Disponibles sous différentes formes et modes, elles s'adaptent parfaitement à chaque situation et apportent une aide précieuse au quotidien.
        </p>
        <div class="modes-container">
        <div class="modes-grid">
          <div class="mode-card">
            <i class="fas fa-comments"></i>
            <h4>Mode Conversation</h4>
            <p>Une interaction fluide et naturelle pour répondre aux questions et guider l'utilisateur, comme si vous discutiez avec un humain.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-keyboard"></i>
            <h4>Mode Écrit</h4>
            <p>Idéal pour fournir des réponses détaillées, des explications techniques ou des solutions adaptées, par texte.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-microphone-alt"></i>
            <h4>Mode Vocal en Temps Réel</h4>
            <p>Discutez directement avec votre agent IA grâce à la reconnaissance vocale et une réponse instantanée. Parfait pour les expériences immersives.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-robot"></i>
            <h4>Mode Interactif</h4>
            <p>Proposez des jeux éducatifs, des exercices pratiques ou des simulations pour engager davantage les utilisateurs.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-video"></i>
            <h4>Mode Visuel</h4>
            <p>Intégrez des présentations vidéo, des graphiques ou des visualisations pour enrichir les explications et rendre l'expérience captivante.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-cogs"></i>
            <h4>Modes Personnalisés</h4>
            <p>Créez des agents adaptés à des contextes spécifiques : avec l'IA, les possibilités sont infinies.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-cloud-upload-alt"></i>
            <h4>Déploiement Flexible</h4>
            <p>Intégrez vos agents sur des plateformes web, applications mobiles ou dans vos systèmes internes pour une accessibilité maximale.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-shield-alt"></i>
            <h4>Sécurité Renforcée</h4>
            <p>Protégez vos données et interactions grâce à des protocoles de sécurité avancés, garantissant la confidentialité et la fiabilité de vos agents IA.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-hand-holding"></i>
            <h4>Facilité d'Utilisation</h4>
            <p>Profitez d'une interface intuitive et accessible, conçue pour simplifier l’interaction avec vos agents IA, même pour les débutants.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-user-secret"></i>
            <h4>Confidentialité des Données</h4>
            <p>Garantissez la sécurité et la confidentialité de vos informations grâce à des protocoles de protection rigoureux et conformes aux normes.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-expand-arrows-alt"></i>
            <h4>Évolutivité</h4>
            <p>Augmentez les capacités de vos agents IA au fil du temps, en ajoutant de nouvelles fonctionnalités pour répondre à vos besoins croissants.</p>
          </div>
          <div class="mode-card">
            <i class="fas fa-clock"></i>
            <h4>Assistance 24/7</h4>
            <p>Offrez une disponibilité continue avec des agents IA qui restent opérationnels jour et nuit, pour répondre à vos utilisateurs à tout moment.</p>
          </div>
        </div>
      </div>

      </div>
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
                {selectedAgent.features.map((feature, index) => (
                    <li key={index}><i className="fas fa-check-circle"></i> {feature}</li>
                  ))}
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
