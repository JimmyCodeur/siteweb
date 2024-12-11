import React, { useState } from 'react';
import '../styles/Features.css';
import AgentImage from '../assets/images/bot_1.webp';
import AgentImageDev from '../assets/images/agent_dev.webp';
import AgentImageAssistance from '../assets/images/agent_assistance.webp';
import AgentImageChatbot from '../assets/images/agent_chatbot.webp';
import PipelineImage from '../assets/images/workflow_agents.webp'; // Assurez-vous d'ajouter l'image
import PresentationImage from '../assets/images/presentation_image.webp'; // Assurez-vous d'ajouter l'image
import { scrollToSection } from '../utils/utils.js';


const Features = () => {
  const [conversation, setConversation] = useState([
    { speaker: "IA", message: "Hello! You are in a taxi. How can I help you?" },
    { speaker: "User", message: "Where should I go?" },
    { speaker: "IA", message: "Great question! You could say: 'Where should I go, please?' Remember to add 'please' for politeness." },
    { speaker: "User", message: "I want go to the airport." },
    { speaker: "IA", message: "Almost perfect! The correct phrase is: 'I want to go to the airport.' Don't forget the 'to'!" },
    { speaker: "User", message: "Ok, I want to go the airport." },
    { speaker: "IA", message: "Good! But it's better to say: 'I want to go to the airport.' 'To' is important here." },
    { speaker: "User", message: "Can I take the taxi?" },
    { speaker: "IA", message: "Yes, that's correct! You can also say: 'Can I get a taxi?' Both are fine." },
    { speaker: "User", message: "Thank you!" },
    { speaker: "IA", message: "You're welcome! Keep practicing, and you'll get even better." }
  ]);

  const [conversation_assistance, setConversationAssistance] = useState([
    { speaker: "IA", message: "Bonjour ! Je suis votre assistant virtuel. Avez-vous un problème ?" },
    { speaker: "User", message: "Je cherche un document important dans mes fichiers." },
    { speaker: "IA", message: "Je peux vous aider avec ça. Pouvez-vous me donner un mot-clé ou une description du document ?" },
    { speaker: "User", message: "C'est un rapport sur les ventes de janvier." },
    { speaker: "IA", message: "Merci ! Je vais rechercher les fichiers contenant le mot-clé 'ventes' ou 'janvier'. Un instant..." },
    { speaker: "IA", message: "J'ai trouvé deux fichiers correspondants : 'Rapport_Ventes_Janvier.pdf' et 'Analyse_Janvier.xlsx'. Souhaitez-vous les ouvrir ?" },
    { speaker: "User", message: "Oui, ouvrez le premier fichier, s'il vous plaît." },
    { speaker: "IA", message: "Très bien ! Je vais ouvrir 'Rapport_Ventes_Janvier.pdf' pour vous. Un instant..." },
    { speaker: "IA", message: "Le fichier est maintenant ouvert. Y a-t-il autre chose avec laquelle je peux vous aider ?" },
    { speaker: "User", message: "Non, merci beaucoup !" },
    { speaker: "IA", message: "Avec plaisir ! N'hésitez pas à me recontacter si vous avez besoin d'aide. Bonne journée !" }
  ]);

  const [conversation_chatbot, setConversationChatbot] = useState([
    { speaker: "IA", message: "Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?" },
    { speaker: "User", message: "J'ai besoin d'aide pour changer mon adresse email." },
    { speaker: "IA", message: "Pas de problème. Pouvez-vous confirmer votre identité en vous connectant à votre compte ou en répondant à une question de sécurité ?" },
    { speaker: "User", message: "Je vais répondre à une question de sécurité." },
    { speaker: "IA", message: "Très bien. Quelle est votre couleur préférée ?" },
    { speaker: "User", message: "Bleu." },
    { speaker: "IA", message: "Merci ! Votre identité a été confirmée. Veuillez entrer votre nouvelle adresse email." },
    { speaker: "User", message: "Mon nouvel email est 'utilisateur@example.com'." },
    { speaker: "IA", message: "Parfait ! Votre adresse email a été mise à jour avec succès. Vous recevrez un email de confirmation à votre nouvelle adresse. Y a-t-il autre chose avec laquelle je peux vous aider ?" },
    { speaker: "User", message: "Non, merci beaucoup !" },
    { speaker: "IA", message: "Avec plaisir ! N'hésitez pas à me recontacter si vous avez besoin d'aide. Bonne journée !" }
  ]);
  
  const [customerSupportData, setCustomerSupportData] = useState("");
  const [infoSearchData, setInfoSearchData] = useState("");
  const [contentGenerationData, setContentGenerationData] = useState("");
  const [recommendationAgentData, setRecommendationAgentData] = useState("");
  const [securityAgentData, setSecurityAgentData] = useState("");
  const [workflowData, setWorkflowData] = useState("");
  const [presentationData, setPresentationData] = useState("");
  const [appointmentData, setAppointmentData] = useState("");

  // Réponses des agents
  const [englishResponse, setEnglishResponse] = useState("");
  const [supportResponse, setSupportResponse] = useState("");
  const [infoSearchResponse, setInfoSearchResponse] = useState("");
  const [contentGenerationResponse, setContentGenerationResponse] = useState("");
  const [recommendationResponse, setRecommendationResponse] = useState("");
  const [securityResponse, setSecurityResponse] = useState("");

  // Réponse workflow, présentation et rendez-vous
  const [workflowResponse, setWorkflowResponse] = useState("");
  const [presentationResponse, setPresentationResponse] = useState("");
  const [appointmentResponse, setAppointmentResponse] = useState("");
  
  return (    
    <section id="agents" className="features" onClick={() => scrollToSection()}>
      <h2>Nos Solutions IA</h2>
      
      {/* Bloc 1: Création d'agents IA */}
      <div className="category-block" >
        <h3>Création d'agents IA</h3>
        <p className="category-description">
          Nos agents intelligents sont là pour simplifier votre quotidien et améliorer votre productivité. Ils agissent comme des assistants virtuels qui vous aident à accomplir rapidement des tâches répétitives ou complexes, tout en vous permettant de vous concentrer sur des activités à plus forte valeur ajoutée. Que ce soit pour répondre instantanément à des questions, organiser des informations, ou automatiser des processus, nos agents sont conçus pour vous rendre plus efficace et vous faire gagner un temps précieux. Grâce à l'intelligence artificielle, ils s'adaptent à vos besoins et évoluent en fonction de vos préférences, offrant ainsi une expérience personnalisée et performante.
        </p>
        <div class="section-title">
          <h4>Agent éducatif & d'Apprentissage</h4>
        </div>
        {/* Agent 1 : Création d'agents IA */}
        <div className="sub-category">
          <div className="card improved-card">
            <h4 className="card-title">Apprendre l'anglais</h4>
            
            <div className="card-header">
              <div className="card-image">
                <img src={AgentImage} alt="Agent IA enseignant" className="feature-image" />
              </div>
              <p className="card-description">
                Un agent IA interactif qui vous aide à améliorer vos compétences linguistiques en pratiquant des conversations, en vous corrigeant et en suivant vos progrès.
              </p>
            </div>

            {/* Barre de progression */}
            <div className="progress-container">
              <p className="progress-text">Votre progression : <strong>45%</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '45%' }}></div>
              </div>
            </div>

            {/* Feedback & Conversation */}
            <div className="conversation-section">
              <h5 className="conversation-title">Conversation</h5>
              <div className="conversation-box">
                {conversation.map((msg, index) => (
                  <div key={index} className={`message ${msg.speaker}`}>
                    <strong>{msg.speaker}:</strong> {msg.message}
                  </div>
                ))}
              </div>
            </div>

            {/* Feedback stylisé */}
            <div className="response-box">
              <h5 className="response-title">Feedback de l'IA :</h5>
              <p className="response-message">
                {supportResponse || "Très bonne progression aujourd'hui, bravo ! Je te suggère de changer de mode d'entrainement !"}
              </p>
            </div>

            {/* Boutons interactifs */}
            <div className="button-group">
              <button className="quiz-btn">
                🚀 Mode Quiz
              </button>
              <button className="resources-btn">
                📚 Révision
              </button>
            </div>
          </div>
          {/* Carte 1 : Apprendre à coder */}
          <div className="card improved-card">
            <h4 className="card-title">Apprendre à coder</h4>
            <div className="card-header">
              <div className="card-image">
                <img src={AgentImageDev} alt="Agent IA enseignant à coder" className="feature-image" />
              </div>
              <p className="card-description">
                Cet agent IA vous guide dans l'apprentissage de la programmation, avec des exercices interactifs, des défis de codage et des corrections en temps réel.
              </p>
            </div>

            {/* Barre de progression */}
            <div className="progress-container">
              <p className="progress-text">Votre progression : <strong>25%</strong></p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '25%' }}></div>
              </div>
            </div>

            {/* Section d'exercice interactif */}
            <div className="interaction-section">
              <h5 className="interaction-title">Exercice Interactif</h5>
              <div className="exercise-box">
                <p>Écrivez une fonction en Python qui additionne deux nombres :</p>
                <code>
                  def add_numbers(a, b): <br />
                  &nbsp;&nbsp;return a + b
                </code>
              </div>
            </div>

            {/* Feedback stylisé */}
            <div className="response-box">
              <h5 className="response-title">Feedback de l'IA :</h5>
              <p className="response-message">
                {supportResponse || "Bonne tentative, mais pensez à vérifier votre syntaxe ! Essayez à nouveau avant de passer à la suite !"}
              </p>
            </div>

            {/* Boutons interactifs */}
            <div className="button-group">
              <button className="next-btn">
                ⏭️ Suivant
              </button>
            </div>
          </div>
          

        </div>
        


        {/* Autres agents */}
        <div class="section-title">
          <h4>Agent d'assistance</h4>
        </div>
        <div className="sub-category">
        <div className="card improved-card">
            <h4>Agent IA Chatbot</h4>
            <div className="card-image">
              <img src={AgentImageChatbot} alt="Agent IA pour le support client" className="feature-image" />
            </div>
            <p>
              Un chatbot IA interactif conçu pour assister vos clients, répondre à leurs questions et fournir les informations nécessaires de manière rapide et efficace.
            </p>

            {/* Section Conversation */}
            <div className="conversation-section">
              <h5 className="conversation-title">Conversation</h5>
              <div className="conversation-box">
                {conversation_chatbot.map((msg, index) => (
                  <div key={index} className={`message ${msg.speaker}`}>
                    <strong>{msg.speaker}:</strong> {msg.message}
                  </div>
                ))}
              </div>
            </div>

            {/* Zone de feedback */}
            <div className="response-box">
              <h4>Conseil de l'Agent IA :</h4>
              <p>{supportResponse || "Je suis à votre disposition pour rechercher des documents, résoudre des problèmes ou répondre à vos questions."}</p>
            </div>
          </div>
          <div className="card improved-card">
            <h4>Agent IA d'assistance interne</h4>
            <div className="card-image">
              <img src={AgentImageAssistance} alt="Agent IA support" className="feature-image" />
            </div>
            <p>Un agent IA qui fournit une assistance 24/7 aux salariés en répondant à leurs questions, en les dirigeant vers les bonnes ressources, et en résolvant des problèmes courants.</p>
            {/* Feedback & Conversation */}
            <div className="conversation-section">
              <h5 className="conversation-title">Conversation</h5>
              <div className="conversation-box">
                {conversation_assistance.map((msg, index) => (
                  <div key={index} className={`message ${msg.speaker}`}>
                    <strong>{msg.speaker}:</strong> {msg.message}
                  </div>
                ))}
              </div>
            </div>
            <div className="response-box">
              <h4>Conseil de l'Agent IA :</h4>
              <p>{supportResponse || "Je peux vous aider à améliorer votre fichier si vous le voulez."}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <div class="section-title">
          <h4>Agent Recherche & Collection</h4>
        </div>
        <div className="sub-category">
          <div className="card improved-card">
            <h4>Agent IA pour la recherche et collecte d'informations</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA recherche" className="feature-image" />
            </div>
            <p>Un agent IA qui explore le web pour rechercher des informations, des tendances ou des réponses à des questions spécifiques.</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "infoSearch")}>
                <input
                  type="text"
                  value={infoSearchData}
                  onChange={(e) => setInfoSearchData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p>{infoSearchResponse || "Très bonne progression aujourd'hui"}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <div class="section-title">
          <h4>Agent Création & Génération</h4>
        </div>
        <div className="sub-category">
          <div className="card improved-card">
            <h4>Agent IA pour la création et la génération de contenu</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA création" className="feature-image" />
            </div>
            <p>Un agent IA capable de générer des articles, des rapports, des emails ou des messages personnalisés basés sur des informations spécifiques.</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "contentGeneration")}>
                <input
                  type="text"
                  value={contentGenerationData}
                  onChange={(e) => setContentGenerationData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p>{contentGenerationResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <div class="section-title">
          <h4>Agent Recommandation</h4>
        </div>
        <div className="sub-category">
          <div className="card improved-card">
            <h4>Agent IA pour la personnalisation et la recommandation</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA recommandation" className="feature-image" />
            </div>
            <p>Un agent IA qui analyse les préférences des utilisateurs et fournit des recommandations personnalisées (produits, services, etc.).</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "recommendation")}>
                <input
                  type="text"
                  value={recommendationAgentData}
                  onChange={(e) => setRecommendationAgentData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p id="workflows" onClick={() => scrollToSection()}>{recommendationResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 2: Workflows IA */}
      <div className="category-block workflow-section">
        <div className="workflow-content">
          <h3>Workflows IA</h3>
          <p>
            Automatisez vos processus complexes grâce à des workflows optimisés et des agents IA collaborant efficacement pour atteindre vos objectifs.
            Avec notre technologie, un pipeline d'agents peut travailler ensemble pour gérer des tâches de bout en bout, de manière fluide et rapide.
          </p>
          <ul className="feature-list">
            <li>🔄 Coordination entre plusieurs agents IA</li>
            <li>⚙️ Exécution automatisée des étapes clés</li>
            <li>📈 Résultats mesurables et gain de temps</li>
          </ul>
        </div>
        <div className="workflow-image">
          <img src={PipelineImage} alt="Pipeline d'agents IA exécutant un processus" />
        </div>
      </div>


      {/* Bloc 3: RAG */}
      <div className="category-block" id="rag" onClick={() => scrollToSection()}>
        <h3>Recherche Augmentée (RAG)</h3>
        <p className="category-description">
          Une approche révolutionnaire combinant l'intelligence artificielle et la recherche d'informations
          pour fournir des réponses précises, rapides et fiables à vos questions.
        </p>

        <div className="rag-container">
          <div className="rag-content">
            <h4>Comment fonctionne RAG ?</h4>
            <p>
              La Recherche Augmentée (RAG) combine l’intelligence artificielle et l’analyse de données pour fournir des informations
              rapides, pertinentes et vérifiables. Elle s’appuie sur des modèles IA et des bases de connaissances pour répondre précisément à vos besoins.
            </p>
            <p>
              <strong>Sécurité avant tout :</strong> RAG travaille exclusivement avec vos données en local, garantissant ainsi leur confidentialité et leur protection optimale.
            </p>
            <ul className="feature-list">
              <li>🔍 Recherche d'informations ciblées et contextuelles</li>
              <li>⚡ Réponses rapides et fiables basées sur des données en temps réel</li>
              <li>🧠 Combinaison de modèles IA et de bases de connaissances</li>
              <li id="meeting" onClick={() => scrollToSection()}>🔒 Données traitées localement pour une sécurité maximale</li>
            </ul>
          </div>
          <div className="rag-image">
            <img src={PresentationImage} alt="Recherche Augmentée" />
          </div>
        </div>
      </div>
     

    </section>
  );
};

export default Features;
