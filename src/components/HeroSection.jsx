import React from "react";
import "../styles/HeroSections.css";
import BotImage from "../assets/images/bot_cute.webp"; 

const HeroSection = () => {
  return (
    <div className="hero-section futuristic-theme">
      <div className="hero-content">
        <p className="hero-welcome">Bienvenue dans l'ère de l'IA</p>
        <h1 className="hero-title">
          L'IA au service <br />
          <span className="hero-highlight">de vos ambitions</span>
        </h1>
        <p className="hero-description">
          Des solutions d'IA révolutionnaires pour transformer vos idées en résultats concrets. Accélérez votre productivité et libérez votre créativité.
        </p>
        <ul className="hero-features">
          <li>🤖 Création d'agents IA personnalisés</li>
          <li>⚙️ Création de pipelines et workflows d'agents IA adaptés à vos besoins</li>
          <li>🔍 Solutions RAG (Retrieval-Augmented Generation) avancées</li>
          <li>🌐 Présentations immersives pour mieux comprendre et utiliser l'IA</li>
        </ul>
      </div>
      <div className="hero-image-container">
        <img src={BotImage} alt="Illustration IA" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;
