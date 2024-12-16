import React from 'react';
import '../styles/Presentation.css';

const Presentation = () => {
  return (
    <section id="presentation" className="presentation-section">
      <div className="container">
        {/* Section Title */}
        <header className="section-header">
          <h2 className="section-title">Solution 5: Présentations sur l'IA</h2>
          <p className="section-description">
            Découvrez comment l'intelligence artificielle peut transformer votre entreprise. Nous proposons des présentations dynamiques pour expliquer ses avantages, ses cas d’utilisation, et répondre à toutes vos questions.
          </p>
        </header>

        {/* Features Section */}
        <div className="presentation-features">
          {/* Feature 1 */}
          <div className="feature-card">
            <i className="fas fa-chalkboard-teacher feature-icon"></i>
            <h3 className="feature-title">Présentations Générales</h3>
            <p className="feature-description">
              Apprenez les bases de l'intelligence artificielle, ses applications et son impact dans divers secteurs.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <i className="fas fa-laptop feature-icon"></i>
            <h3 className="feature-title">Sessions en Visio</h3>
            <p className="feature-description">
              Participez à des présentations en ligne interactives pour comprendre l’IA à distance.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <i className="fas fa-building feature-icon"></i>
            <h3 className="feature-title">Présentations en Présentiel</h3>
            <p className="feature-description">
              Organisez des sessions en présentiel pour explorer les applications de l'IA adaptées à votre entreprise.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section-presentation">
          <h3 className="cta-title-presentation">Envie d'en savoir plus ?</h3>
          <p className="cta-description-presentation">
            Contactez-nous pour organiser une présentation sur mesure, en visio ou en présentiel, pour votre équipe ou vos clients.
          </p>
          <button className="cta-button-presentation">Planifiez une Présentation</button>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
