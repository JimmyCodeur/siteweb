import React from 'react';
import '../styles/CustomRAG.css';

const CustomRAG = () => {
  return (
    <section id="custom-rag" className="custom-rag">
      <div className="container">
        <h2>Solution 2: RAG Personnalisé</h2>
        <p>
          Découvrez comment nous pouvons mettre en place des solutions de Retrieval-Augmented Generation (RAG) personnalisées,
          adaptées à vos besoins spécifiques pour optimiser vos processus de recherche d'information et améliorer les performances
          de vos agents IA.
        </p>
        <div className="rag-features">
          <div className="feature-card">
            <i className="fas fa-database"></i>
            <h3>Intégration de Données</h3>
            <p>
              Connectez vos sources de données internes et externes pour une récupération rapide et
              pertinente des informations.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-brain"></i>
            <h3>Génération Intelligente</h3>
            <p>
              Combinez recherche et génération pour produire des réponses précises et adaptées à vos besoins spécifiques.
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-cogs"></i>
            <h3>Personnalisation Avancée</h3>
            <p>
              Adaptez le système à votre domaine d'activité grâce à une configuration flexible et évolutive.
            </p>
          </div>
        </div>
        <div className="cta-section">
          <h3>Optimisez vos processus dès aujourd'hui !</h3>
          <p>
            Contactez-nous pour en savoir plus sur notre expertise en RAG personnalisée et découvrez
            comment nous pouvons transformer vos flux d'information.
          </p>
          <button className="cta-button">Contactez Nous</button>
        </div>
      </div>
    </section>
  );
};

export default CustomRAG;
