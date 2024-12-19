import React from "react";
import "../styles/HeroSections.css";
import "../styles/HeroSectionsMobile.css";
import BotImage from "../assets/images/bot_cute.webp"; 

const HeroSection = () => {
  return (
    <div className="hero-section futuristic-theme" id="home">
      <div className="hero-content">
        <p className="hero-welcome">Entrez dans l'ère de l'IA</p>
        <h1 className="hero-title">
          L'IA au service de <br />
          <span className="hero-highlight">votre futur</span>
        </h1>
        <p className="hero-description">
          Découvrez des solutions d'intelligence artificielle conçues pour vous faire gagner du temps au quotidien. <br></br>L'IA vous accompagne dans vos tâches, simplifie vos processus et vous permet de vous concentrer sur ce qui compte vraiment.
        </p>
        <ul className="hero-features">
          <li>🤖 Création d'agents IA & Chatbot personnalisés</li>
          <li>🔍 Solutions RAG personnalisés</li>
          <li>⚙️ Conception de workflows IA sur mesure pour optimiser chaque processus</li>
          <li>📚 Entraînement des modèles IA pour répondre à vos besoins</li>
          <li>🌐 Présentation Informative & Atelier sur l'IA </li>
        </ul>
      </div>
      <div className="hero-image-container">
        <img src={BotImage} alt="Illustration IA" className="hero-image" />
      </div>

      <div className="bubble">
        <div className="bubble-text">
          J'aimerais t'aider ! 💪 
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
