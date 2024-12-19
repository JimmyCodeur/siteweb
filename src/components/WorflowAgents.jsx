import React from 'react';
import '../styles/WorkflowAgents.css';
import WorkflowAgents from '../assets/images/workflow_agents.webp';

const CustomWorkflowAgents = () => {
  return (
    <section id="custom-workflow" className="custom-workflow">
      <div className="workflow-header">
        <h2 className='section-title'>Solution 3: Workflow d'Agents</h2>
        <p>
          Combinez plusieurs agents IA dans un écosystème intégré pour automatiser, collaborer, et optimiser vos processus métiers.
        </p>
      </div>
      <div className="workflow-content">
        <div className="workflow-image-container">
          <img
            src={WorkflowAgents}
            alt="Illustration of various IA agents working in a collaborative workflow"
            className="workflow-image"
          />
        </div>
        <div className="workflow-details">
          <div className="feature-row">
            <i className="fas fa-project-diagram"></i>
            <div>
              <h3>Automatisation des Tâches</h3>
              <p>Simplifiez vos opérations grâce à une orchestration fluide entre agents, assurant rapidité et précision.</p>
            </div>
          </div>
          <div className="feature-row">
            <i className="fas fa-users"></i>
            <div>
              <h3>Collaboration Intelligente</h3>
              <p>Permettez à vos agents de collaborer en temps réel pour résoudre des problèmes complexes efficacement.</p>
            </div>
          </div>
          <div className="feature-row">
            <i className="fas fa-chart-line"></i>
            <div>
              <h3>Optimisation Continue</h3>
              <p>Analysez les performances des workflows pour les améliorer et maximiser leur efficacité au fil du temps.</p>
            </div>
          </div>
        </div>
      </div>
      <button
          id="rdv"
          className="cta-button-workflow"
          onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth' })}
        >
          Contactez Nous
        </button>
    </section>
  );
};

export default CustomWorkflowAgents;
