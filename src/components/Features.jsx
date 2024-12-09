import React, { useState } from 'react';
import '../styles/Features.css';
import AgentImage from '../assets/images/bot_1.webp'; // Assurez-vous d'ajouter l'image
import PipelineImage from '../assets/images/workflow_agents.webp'; // Assurez-vous d'ajouter l'image
import PresentationImage from '../assets/images/presentation_image.webp'; // Assurez-vous d'ajouter l'image
import AppointmentImage from '../assets/images/presentation_image.webp'; // Assurez-vous d'ajouter l'image

const Features = () => {
  const [agentData, setAgentData] = useState("");
  const [workflowData, setWorkflowData] = useState("");
  const [presentationData, setPresentationData] = useState("");
  const [appointmentData, setAppointmentData] = useState("");

  const [response, setResponse] = useState(""); // Etat pour la réponse de l'agent IA

  // Simuler un appel API pour l'agent IA
  const handleAgentSubmit = async (e) => {
    e.preventDefault();
    const mockResponse = await fakeApiCall(agentData);
    setResponse(mockResponse);
  };

  const fakeApiCall = async (input) => {
    if (input.toLowerCase() === 'hello') {
      return "Hi! How can I help you improve your English?";
    } else if (input.toLowerCase() === 'how are you?') {
      return "I'm doing great, thank you!";
    } else {
      return "I'm sorry, I don't understand that. Can you ask again?";
    }
  };

  const handleWorkflowSubmit = (e) => {
    e.preventDefault();
    console.log("Workflow Data:", workflowData);
  };

  const handlePresentationSubmit = (e) => {
    e.preventDefault();
    console.log("Presentation Data:", presentationData);
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", appointmentData);
  };

  return (
    <section id="features" className="features">
      <h2>Nos Solutions IA</h2>

      {/* Bloc 1: Création d'agents IA */}
      <div className="category-block">
        <h3>Création d'agents IA</h3>
        <p className="category-description">Automatisez vos tâches avec des agents intelligents.</p>

        {/* Exemples d'agents */}
        <div className="sub-category">
          <div className="card">
            <h4>Agent IA pour l'apprentissage de l'anglais</h4>
            <div className="card-image">
                <img src={AgentImage} alt="Agent IA" className="feature-image" />
            </div>
            <p>Posez une question à l'agent pour améliorer votre anglais.</p>
            <div className="card-content">
              <form onSubmit={handleAgentSubmit}>
                <input
                  type="text"
                  value={agentData}
                  onChange={(e) => setAgentData(e.target.value)}
                  placeholder="Posez une question à l'agent IA"
                />
                <button type="submit">Envoyer à l'agent IA</button>
              </form>
            </div>
            <div className="response-box">
              <h4>Réponse de l'Agent IA :</h4>
              <p>{response || "L'agent répondra ici après votre question."}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 2: Workflows IA */}
      <div className="category-block">
        <h3>Workflows IA</h3>
        <p className="category-description">Optimisez vos processus grâce à des pipelines personnalisés et des agents IA intégrés.</p>

        {/* Exemples de workflows */}
        <div className="sub-category">
          <div className="card">
            <h4>Création de Workflow IA</h4>
            <p>Créez des workflows personnalisés pour automatiser les processus.</p>
            <div className="card-content">
              <form onSubmit={handleWorkflowSubmit}>
                <input
                  type="text"
                  value={workflowData}
                  onChange={(e) => setWorkflowData(e.target.value)}
                  placeholder="Entrez les étapes du workflow"
                />
                <button type="submit">Créer le workflow IA</button>
              </form>
              <div className="card-image">
                <img src={PipelineImage} alt="Workflow IA" className="feature-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 3: Présentation IA */}
      <div className="category-block">
        <h3>Présentation IA pour entreprises</h3>
        <p className="category-description">Expliquez l'IA de manière simple et engageante aux entreprises.</p>

        {/* Exemples de présentations IA */}
        <div className="sub-category">
          <div className="card">
            <h4>Présentation interactive IA</h4>
            <p>Exemple d'une présentation IA pour expliquer ses avantages.</p>
            <div className="card-content">
              <form onSubmit={handlePresentationSubmit}>
                <input
                  type="text"
                  value={presentationData}
                  onChange={(e) => setPresentationData(e.target.value)}
                  placeholder="Entrez les informations pour la présentation"
                />
                <button type="submit">Générer la présentation IA</button>
              </form>
              <div className="card-image">
                <img src={PresentationImage} alt="Présentation IA" className="feature-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bloc 4: Prendre un rendez-vous */}
      <div className="category-block">
        <h3>Prendre un Rendez-vous</h3>
        <p className="category-description">Organisez une réunion avec nos experts pour discuter des solutions IA adaptées à votre entreprise.</p>

        {/* Exemples de prise de rendez-vous */}
        <div className="sub-category">
          <div className="card">
            <h4>Réservez un rendez-vous avec nos experts</h4>
            <div className="card-content">
              <form onSubmit={handleAppointmentSubmit}>
                <input
                  type="text"
                  value={appointmentData}
                  onChange={(e) => setAppointmentData(e.target.value)}
                  placeholder="Entrez votre demande de rendez-vous"
                />
                <button type="submit">Réserver un rendez-vous</button>
              </form>
              <div className="card-image">
                <img src={AppointmentImage} alt="Rendez-vous IA" className="feature-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
