import React from 'react';
import '../styles/CustomRAG.css';

const CustomRAG = () => {
  return (
    <section id="custom-rag" className="custom-rag">
      <div className="container">
        {/* Section Title */}
        <header className="section-header">
          <h2 className='section-title'>Solution 2: RAG Personnalisé</h2>
          <p className="section-description">
            Le Retrieval-Augmented Generation (RAG) est une approche innovante qui combine la récupération de données pertinentes à partir 
            de vos sources internes et externes avec des capacités avancées de génération d'informations. <br></br>En intégrant un RAG, les 
            entreprises peuvent transformer leur manière de traiter les informations, en offrant :
          </p>
        </header>

        {/* Features Section */}
        <div className="rag-features">
          {/* Feature 1 */}
          <div className="feature-card">
            <i className="fas fa-database feature-icon"></i>
            <h3 className="feature-title">Intégration de Vos Données</h3>
            <p className="feature-description">
              Connectez vos sources de données internes pour une récupération rapide et
              pertinente des informations.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card">
            <i className="fas fa-brain feature-icon"></i>
            <h3 className="feature-title">Génération Intelligente</h3>
            <p className="feature-description">
              Combinez recherche et génération pour produire des réponses précises et adaptées à vos besoins spécifiques.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card">
            <i className="fas fa-cogs feature-icon"></i>
            <h3 className="feature-title">Personnalisation Avancée</h3>
            <p className="feature-description">
              Adaptez le système à votre domaine d'activité grâce à une configuration flexible et évolutive.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="feature-card">
            <i className="fas fa-shield-alt feature-icon"></i>
            <h3 className="feature-title">Sécurité des Données</h3>
            <p className="feature-description">
              Garantissez la confidentialité en gardant vos données sensibles stockées et traitées localement, sans dépendance à des services externes.
            </p>
          </div>
        </div>
        
        {/* Closing Paragraph */}
        <p className="closing-paragraph">
          Avec un RAG, votre entreprise peut non seulement améliorer l'efficacité des recherches d'informations, mais également fournir des 
          réponses intelligentes et contextualisées, adaptées à vos objectifs.
        </p>
        <button className="cta-button-rag">Contactez Nous</button>
      </div>
    </section>
  );
};

export default CustomRAG;
