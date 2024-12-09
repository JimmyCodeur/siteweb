import React from 'react';
import '../styles/Services.css';


const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Tarification</h2>
      <div className="services-options">
        <div className="plan">
          <h3>Gratuit</h3>
          <p>Essai gratuit avec fonctionnalités de base.</p>
        </div>
        <div className="plan">
          <h3>Standard</h3>
          <p>Solutions IA avancées pour votre entreprise.</p>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>Solutions sur-mesure et support dédié.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
