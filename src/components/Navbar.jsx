import React, { useState } from "react";
import "../styles/Navbar.css";
import { scrollToSection } from '../utils/utils.js';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <li><a href="#Agents" onClick={() => scrollToSection("agents")}>Agents IA</a></li>
        <li><a href="#Workflows" onClick={() => scrollToSection("workflows")}>Workflows IA</a></li>
        <li><a href="#Rag" onClick={() => scrollToSection("rag")}>RAG</a></li>
        <li><a href="#Meeting" onClick={() => scrollToSection("meeting")}>Prendre Rendez Vous</a></li>
      </ul>
      <div className="buttons">
        <button className="btn get-started">Nous contacter</button>
      </div>
    </nav>
  );
};

export default Navbar;
