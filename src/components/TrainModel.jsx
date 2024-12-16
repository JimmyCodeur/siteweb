import React from 'react';
import '../styles/TrainModel.css';

const TrainModel = () => {
  return (
    <section id="train-model" className="train-model">
      <div className="container">
        {/* Section Title */}
        <header className="section-header">
          <h2 className="section-title">Solution 4: Entraînement des Modèles</h2>
          <p className="section-description">
            Exploitez notre expertise en entraînement des modèles d'IA pour concevoir des solutions sur mesure, performantes et parfaitement adaptées aux exigences de votre entreprise.
          </p>
        </header>

        {/* Model Types as Cards */}
        <div className="model-types-cards">
          <div className="model-card">
            <i className="fas fa-tags model-icon"></i>
            <h3 className="model-title">Classification Intelligente</h3>
            <p className="model-description">
              Segmentez efficacement vos données pour des cas comme la détection de spams ou les diagnostics médicaux.
            </p>
          </div>
          <div className="model-card">
            <i className="fas fa-chart-line model-icon"></i>
            <h3 className="model-title">Prédictions Numériques</h3>
            <p className="model-description">
              Prévoyez des tendances et des valeurs clés grâce à des modèles robustes de régression.
            </p>
          </div>
          <div className="model-card">
            <i className="fas fa-language model-icon"></i>
            <h3 className="model-title">Compréhension du Langage</h3>
            <p className="model-description">
              Automatisez vos interactions textuelles avec des chatbots, des résumés ou l'analyse sémantique.
            </p>
          </div>
          <div className="model-card">
            <i className="fas fa-eye model-icon"></i>
            <h3 className="model-title">Vision Assistée par IA</h3>
            <p className="model-description">
              Analysez vos images et vidéos pour des applications comme la reconnaissance faciale ou le suivi d'objets.
            </p>
          </div>
          <div className="model-card">
            <i className="fas fa-chart-pie model-icon"></i>
            <h3 className="model-title">Anticipation Prédictive</h3>
            <p className="model-description">
              Identifiez les tendances futures et détectez les anomalies à partir de vos données historiques.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section-train">
          <h3 className="cta-title-train">Vous souhaitez entraîner vos propres modèles ?</h3>
          <p className="cta-description-train">
            Contactez notre équipe pour découvrir comment nous pouvons vous accompagner dans l'entraînement de modèles d'IA puissants et sur mesure.
          </p>
          <button className="cta-button-train">Contactez Nous</button>
        </div>
      </div>
    </section>
  );
};

export default TrainModel;
