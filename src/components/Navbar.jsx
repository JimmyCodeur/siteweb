import React, { useState } from "react";
import "../styles/Navbar.css";
import { scrollToSection } from '../utils/utils.js';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-text">WriteBot</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#Home" onClick={() => scrollToSection("home")}>Home</a></li>
        <li 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="#Agents" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>
            Agents IA
          </a>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#agent-education" onClick={() => scrollToSection("agent-assistance")}>📘 Agent Éducatif & Apprentissage</a></li>
              <li><a href="#agent-assistance" onClick={() => scrollToSection("agent-education")}>🤝 Agent Assistance</a></li>
              <li><a href="#agent-research" onClick={() => scrollToSection("agent-research")}>🔍 Agent Recherche & Collection</a></li>
              <li><a href="#agent-creation" onClick={() => scrollToSection("agent-creation")}>✍️ Agent Création & Génération</a></li>
              <li><a href="#agent-recommendation" onClick={() => scrollToSection("agent-recommendation")}>💡 Agent Recommandation</a></li>
            </ul>
          )}
        </li>
        <li><a href="#Workflows" onClick={() => scrollToSection("workflows")}>Workflows IA</a></li>
        <li><a href="#Rag" onClick={() => scrollToSection("rag")}>RAG</a></li>
        <li><a href="#Meeting" onClick={() => scrollToSection("meeting")}>Prendre Rendez Vous</a></li>
        <li><a href="#Faq" onClick={() => scrollToSection("faq")}>FAQ</a></li>
      </ul>
      <div className="buttons">
        <button
          className="btn get-started"
          onClick={() => scrollToSection("contactform")}
        >
          Nous contacter
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
