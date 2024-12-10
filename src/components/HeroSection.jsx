import React, { useState } from "react";
import "../styles/HeroSections.css";
import BotImage from "../assets/images/bot_cute.webp"; 

const HeroSection = () => {
  return (
    <div className="hero-section futuristic-theme">
      <div className="hero-content">
        <p className="hero-welcome">Entrez dans l'ère de l'IA</p>
        <h1 className="hero-title">
          L'IA au service de <br />
          <span className="hero-highlight">votre futur</span>
        </h1>
        <p className="hero-description">
          Découvrez des solutions d'intelligence artificielle conçues pour propulser votre entreprise vers de nouveaux sommets. Transformez vos idées en actions, boostez votre productivité et libérez la créativité au service de vos objectifs.
        </p>
        <ul className="hero-features">
          <li>🤖 Création d'agents IA personnalisés</li>
          <li>⚙️ Conception de workflows IA sur mesure pour optimiser chaque processus</li>
          <li>🔍 Solutions avancées RAG </li>
          <li>🌐 Présentations de l'IA sur rendez-vous</li>
        </ul>
      </div>
      <div className="hero-image-container">
        <img src={BotImage} alt="Illustration IA" className="hero-image" />
      </div>

      {/* Bulle d'écriture animée */}
      <div className="bubble">
        <div className="bubble-text">
          J'aimerais t'aider ! 💪 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
