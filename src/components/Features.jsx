import React, { useState, useEffect } from 'react';
import '../styles/Features.css';
import '../styles/FeaturesMobile.css';
import { agentModes, agentCategories } from '../data/AgentsData';

const Features = () => {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (selectedAgent) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [selectedAgent]);

  const handleMouseDown = (event, catIndex) => {
    const carousel = document.getElementById(`carousel-${catIndex}`);
    setIsDragging(true);
    setStartX(event.pageX - carousel.offsetLeft);
    setScrollLeft(carousel.scrollLeft);
  };

  const handleMouseMove = (event, catIndex) => {
    if (!isDragging) return;
    event.preventDefault();
    const carousel = document.getElementById(`carousel-${catIndex}`);
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollCarousel = (catIndex, direction) => {
    const carousel = document.getElementById(`carousel-${catIndex}`);
    const scrollAmount = carousel.offsetWidth * 0.8; // Adjust scroll distance

    // Ensure the carousel scrolls within bounds
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    const newScrollLeft = Math.min(
      Math.max(carousel.scrollLeft + direction * scrollAmount, 0),
      maxScrollLeft
    );

    carousel.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
  };

  return (
    <section id="agents" className="features">
      <div className="bg">
        <div></div>
        <div></div>
      </div>

      <h2>Solution 1 : Création d'Agents </h2>
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
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{ userSelect: 'none' }} // Prevent text selection
          >
            {category.agents.map((agent, index) => (
              <div
                key={index}
                className="card improved-card glow-filter"
                data-text={agent.title}
              >
                <h4 className="card-title" style={{ userSelect: 'none' }}>{agent.title}</h4>
                <div className="card-header">
                  <div className="card-image">
                    <img
                      src={agent.image}
                      alt={agent.title}
                      className="feature-image"
                    />
                  </div>
                  <p className="card-description" style={{ userSelect: 'none' }}>{agent.description}</p>
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
              <button className="close-btn" onClick={() => setSelectedAgent(null)}>
                ✖
              </button>
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
              {selectedAgent.category === "Agents Éducatifs & Apprentissages" && (
                <div className="progress-container">
                  <h4>Progression d'apprentissage</h4>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${selectedAgent.progress}%` }}
                    ></div>
                  </div>
                  <p className="progress-text">
                    Progression : {selectedAgent.progress}%
                  </p>
                </div>
              )}

              <div className="features-overview">
                <h4>Fonctionnalités clés</h4>
                <ul>
                  {selectedAgent.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="modal-footer"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
