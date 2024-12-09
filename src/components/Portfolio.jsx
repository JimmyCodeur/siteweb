import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        <img src="/assets/example1.jpg" alt="Projet IA 1" />
        <img src="/assets/example2.jpg" alt="Projet IA 2" />
        <img src="/assets/example3.jpg" alt="Projet IA 3" />
      </div>
    </section>
  );
};

export default Portfolio;
