import React, { useState } from 'react';
import '../styles/Features.css';
import AgentImage from '../assets/images/bot_1.webp'; // Assurez-vous d'ajouter l'image
import PipelineImage from '../assets/images/workflow_agents.webp'; // Assurez-vous d'ajouter l'image
import PresentationImage from '../assets/images/presentation_image.webp'; // Assurez-vous d'ajouter l'image
import AppointmentImage from '../assets/images/presentation_image.webp'; // Assurez-vous d'ajouter l'image

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

  // Etat pour savoir si l'enregistrement vocal est en cours
  const [listening, setListening] = useState(false);

  const handleAgentSubmit = async (e) => {
    e.preventDefault();

    // Ajouter le message de l'utilisateur à la conversation
    setConversation([
      ...conversation,
      { speaker: "User", message: englishAgentData }
    ]);

    // Ajouter la réponse de l'IA à la conversation
    setConversation((prevConversation) => [
      ...prevConversation,
      { speaker: "IA", message: mockResponse }
    ]);

    // Réinitialiser l'entrée utilisateur
    setEnglishAgentData("");
  };


  // Fonction pour démarrer l'enregistrement vocal
  const startListening = () => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.start();

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setEnglishAgentData(spokenText);
        setListening(false);
        handleAgentSubmit(event, "english");
      };

      recognition.onerror = (event) => {
        console.log('Speech recognition error: ', event.error);
        setListening(false);
      };
    } else {
      alert("Speech recognition is not supported in this browser.");
    }
  };

  return (
    <section id="features" className="features">
      <h2>Nos Solutions IA</h2>

      {/* Bloc 1: Création d'agents IA */}
      <div className="category-block">
        <h3>Création d'agents IA</h3>
        <p className="category-description">
          Nos agents intelligents sont là pour simplifier votre quotidien et améliorer votre productivité. Ils agissent comme des assistants virtuels qui vous aident à accomplir rapidement des tâches répétitives ou complexes, tout en vous permettant de vous concentrer sur des activités à plus forte valeur ajoutée. Que ce soit pour répondre instantanément à des questions, organiser des informations, ou automatiser des processus, nos agents sont conçus pour vous rendre plus efficace et vous faire gagner un temps précieux. Grâce à l'intelligence artificielle, ils s'adaptent à vos besoins et évoluent en fonction de vos préférences, offrant ainsi une expérience personnalisée et performante.
        </p>

        {/* Agent éducatif */}
        <h4>Agent éducatif / apprentissage</h4>
        <div className="sub-category">
          <div className="card">
            <h4>Apprendre l'anglais avec l'IA</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA enseignant" className="feature-image" />
            </div>
            <p>Un agent IA qui vous aide à améliorer vos compétences linguistiques en posant des questions et en vous corrigeant en temps réel.</p>
            
            {/* Afficher la conversation */}
            <div className="conversation-box">
              {conversation.map((msg, index) => (
                <div key={index} className={`message ${msg.speaker}`}>
                  <strong>{msg.speaker}:</strong> {msg.message}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <h4>Agent support client</h4>
        <div className="sub-category">
          <div className="card">
            <h4>Agent IA pour le support client</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA support" className="feature-image" />
            </div>
            <p>Un agent IA qui fournit une assistance 24/7 aux clients en répondant à leurs questions, en les dirigeant vers les bonnes ressources, et en résolvant des problèmes courants.</p>
            {/* Conteneur pour centrer le bouton */}
            <div className="button-container">
              <button
                onClick={startListening}
                disabled={listening}
                className="record-btn"
              >
                {listening ? "Listening..." : "🎙️"}
              </button>
            </div>            
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "support")}>
                <input
                  type="text"
                  value={customerSupportData}
                  onChange={(e) => setCustomerSupportData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p>{supportResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <h4>Agent Recherche & Collecte</h4>
        <div className="sub-category">
          <div className="card">
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
              <p>{infoSearchResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <h4>Agent création et génération de contenu</h4>
        <div className="sub-category">
          <div className="card">
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
        <h4>Agent personnalisation et recommandation</h4>
        <div className="sub-category">
          <div className="card">
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
              <p>{recommendationResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>

        {/* Autres agents */}
        <h4>Agent surveillance et sécurité</h4>
        <div className="sub-category">
          <div className="card">
            <h4>Agent IA pour la surveillance et la sécurité</h4>
            <div className="card-image">
              <img src={AgentImage} alt="Agent IA sécurité" className="feature-image" />
            </div>
            <p>Un agent IA qui surveille les systèmes et détecte les anomalies ou menaces en temps réel pour assurer la sécurité.</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "security")}>
                <input
                  type="text"
                  value={securityAgentData}
                  onChange={(e) => setSecurityAgentData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p>{securityResponse || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 2: Workflows IA */}
      <div className="category-block">
        <h3>Workflows IA</h3>
        <p className="category-description">Optimisez vos processus grâce à des pipelines personnalisés et des agents IA intégrés.</p>

        {/* Workflow IA */}
        <div className="sub-category">
          <div className="card">
            <h4>Création de Workflow IA</h4>
            <p>Créez des workflows personnalisés pour automatiser les processus.</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "workflow")}>
                <input
                  type="text"
                  value={workflowData}
                  onChange={(e) => setWorkflowData(e.target.value)}
                  placeholder="Entrez les étapes du workflow"
                />
                <button type="submit">Créer le workflow IA</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 3: Présentation IA */}
      <div className="category-block">
        <h3>Présentation IA pour entreprises</h3>
        <p className="category-description">Expliquez l'IA de manière simple et engageante aux entreprises.</p>

        {/* Présentation IA */}
        <div className="sub-category">
          <div className="card">
            <h4>Présentation interactive IA</h4>
            <p>Exemple d'une présentation IA pour expliquer ses avantages.</p>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "presentation")}>
                <input
                  type="text"
                  value={presentationData}
                  onChange={(e) => setPresentationData(e.target.value)}
                  placeholder="Entrez les informations pour la présentation"
                />
                <button type="submit">Générer la présentation IA</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 4: Prendre un rendez-vous */}
      <div className="category-block">
        <h3>Prendre un Rendez-vous</h3>
        <p className="category-description">Organisez une réunion avec nos experts pour discuter des solutions IA adaptées à votre entreprise.</p>

        {/* Rendez-vous */}
        <div className="sub-category">
          <div className="card">
            <h4>Réservez un rendez-vous avec nos experts</h4>
            <div className="card-content">
              <form onSubmit={(e) => handleAgentSubmit(e, "appointment")}>
                <input
                  type="text"
                  value={appointmentData}
                  onChange={(e) => setAppointmentData(e.target.value)}
                  placeholder="Entrez votre demande de rendez-vous"
                />
                <button type="submit">Réserver un rendez-vous</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;
