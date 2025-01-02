import React from 'react';
import '../styles/Presentation.css';
import '../styles/PresentationMobile.css';

const Presentation = () => {
  return (
    <section id="presentation" className="presentation-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Solution 5: Présentations sur l'IA</h2>
          <p className="section-description">
          Découvrez comment l'intelligence artificielle peut révolutionner votre entreprise grâce à des présentations informatives et ateliers, mettant en lumière ses avantages, ses applications concrètes et répondant à toutes vos interrogations.          </p>
        </header>

        <div className="presentation-features">
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher feature-icon"></i>
            <h3 className="feature-title">Présentations Générales</h3>
            <p className="feature-description">
              Apprenez les bases de l'intelligence artificielle, ses applications et son impact dans divers secteurs.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laptop feature-icon"></i>
            <h3 className="feature-title">Sessions en Visio</h3>
            <p className="feature-description">
              Participez à des présentations en ligne interactives pour comprendre l’IA à distance.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-building feature-icon"></i>
            <h3 className="feature-title">Présentations en Présentiel</h3>
            <p className="feature-description">
              Organisez des sessions en présentiel pour explorer les applications de l'IA adaptées à votre entreprise.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-tools feature-icon"></i>
            <h3 className="feature-title">Ateliers Pratiques</h3>
            <p className="feature-description">
              Participez à des ateliers pratiques pour expérimenter et créer des solutions d'IA adaptées à vos besoins réels.
            </p>
          </div>
        </div>

        <div className="cta-section-presentation">
          <h3 className="cta-title-presentation">Envie d'en savoir plus ?</h3>
          <p className="cta-description-presentation">
            Contactez-nous pour organiser une présentation sur mesure, en visio ou en présentiel, pour votre équipe ou vos clients.
          </p>
          <button
            className="cta-button-echanger"
            onClick={() => document.getElementById("contact-section").scrollIntoView({ behavior: 'smooth' })}
            >
            Contactez Nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
