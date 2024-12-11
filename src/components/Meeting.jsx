import React from 'react';
import '../styles/Meeting.css';
import Calendrier from '../assets/images/calendrier.webp';

const Meeting = () => {
  return (
    <section className="meeting-section">
      <div className="meeting-container">
        <div className="meeting-visual">
          <div className="neon-circle"></div>
          <img
            src={Calendrier}
            alt="Futuristic meeting"
            className="meeting-image"
          />
        </div>
        <div className="meeting-content">
          <h2>Prendre RDV</h2>
          <p>
          Discutons ensemble pour : <br></br> 🤝 Rencontrez nous pour vous aider à concrétiser vos projets.
            <br></br>🗣️ Planifiez un rendez-vous à votre convenance.
          </p>
          <a
            href="https://calendly.com/votre-lien"
            target="_blank"
            rel="noopener noreferrer"
            className="meeting-button"
            id="contactform" 
          >
            📅 Réserver un Rendez-Vous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
