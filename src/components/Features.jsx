import React, { useState, useEffect } from 'react';
import '../styles/Features.css';
import '../styles/FeaturesMobile.css';
import { agentModes, agentCategories } from '../data/AgentsData';
import { scrollCarousel } from '../utils/utils.js';

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

  const handleMouseDown = (event, catIndex) => {
    const carousel = document.getElementById(`carousel-${catIndex}`);
    carousel.isDown = true;
    carousel.startX = event.pageX - carousel.offsetLeft;
    carousel.scrollLeft = carousel.scrollLeft;
  };
  
  const handleMouseMove = (event, catIndex) => {
    const carousel = document.getElementById(`carousel-${catIndex}`);
    if (!carousel.isDown) return;
    event.preventDefault();
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - carousel.startX) * 1.5;
    carousel.scrollLeft = carousel.scrollLeft - walk;
  };
  
  const handleMouseUpOrLeave = (catIndex) => {
    const carousel = document.getElementById(`carousel-${catIndex}`);
    carousel.isDown = false;
  };

  return (
    <section id="agents" className="features">
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
        <div className="modes-container">
          <div className="modes-grid">
            {agentModes.map((mode, index) => (
              <div key={index} className="mode-card">
                <i className={mode.icon}></i>
                <h4>{mode.title}</h4>
                <p>{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {agentCategories.map((category, catIndex) => (
      <div key={catIndex} className="category-block">
        <h3>{category.category}</h3>
        <div className="carousel-controls">
          <button
            className="carousel-control prev"
            onClick={() => scrollCarousel(catIndex, -1)}
          >
            ❮
          </button>
          <button
            className="carousel-control next"
            onClick={() => scrollCarousel(catIndex, 1)}
          >
            ❯
          </button>
        </div>

        <div
          id={`carousel-${catIndex}`}
          className="sub-category"
          onMouseDown={(e) => handleMouseDown(e, catIndex)}
          onMouseMove={(e) => handleMouseMove(e, catIndex)}
          onMouseUp={() => handleMouseUpOrLeave(catIndex)}
          onMouseLeave={() => handleMouseUpOrLeave(catIndex)}
        >
          {category.agents.map((agent, index) => (
            <div
              key={index}
              className="card improved-card glow-filter"
              data-text={agent.title}
            >
              <h4 className="card-title">{agent.title}</h4>
              <div className="card-header">
                <div className="card-image">
                  <img
                    src={agent.image}
                    alt={agent.title}
                    className="feature-image"
                  />
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
            <div className="modal-header">
              <h3>{selectedAgent.title}</h3>
              <button className="close-btn" onClick={() => setSelectedAgent(null)}>✖</button>
            </div>

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

            <div className="modal-features">

            <div className="progress-container">
              <h4>Progression d'apprentissage</h4>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${selectedAgent ? selectedAgent.progress : 0}%` }}
                ></div>
              </div>
              <p className="progress-text">Progression : {selectedAgent ? selectedAgent.progress : 0}%</p>
            </div>

              <div className="features-overview">
                <h4>Fonctionnalités clés</h4>
                <ul>
                {selectedAgent.features.map((feature, index) => (
                    <li key={index}><i className="fas fa-check-circle"></i> {feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;