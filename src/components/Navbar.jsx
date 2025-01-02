import React, { useState } from "react";
import "../styles/Navbar.css";
import "../styles/NavbarMobile.css";
import { scrollToSection } from "../utils/utils.js";

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
        <span className="logo-text">Fernandez Jimmy</span>
      </div>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a
            href="#Home"
            onClick={() => {
              toggleMenu();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a
            href="#Agents"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              scrollToSection("agents");
            }}
          >
            Agents IA
          </a>
        </li>
        <li>
          <a
            href="#Rag"
            onClick={() => {
              toggleMenu();
              scrollToSection("custom-rag");
            }}
          >
            RAG
          </a>
        </li>
        <li>
          <a
            href="#Workflows"
            onClick={() => {
              toggleMenu();
              scrollToSection("custom-workflow");
            }}
          >
            Workflows IA
          </a>
        </li>
        <li>
          <a
            href="#Train"
            onClick={() => {
              toggleMenu();
              scrollToSection("train-model");
            }}
          >
            Entrainement
          </a>
        </li>
        <li>
          <a
            href="#Presentation"
            onClick={() => {
              toggleMenu();
              scrollToSection("presentation");
            }}
          >
            Présentation
          </a>
        </li>
        <li>
          <a
            href="#Contact-section"
            onClick={() => {
              toggleMenu();
              scrollToSection("contact-section");
            }}
          >
            Contactez Nous
          </a>
        </li>
        <li>
          <a
            href="#Faq"
            onClick={() => {
              toggleMenu();
              scrollToSection("faq");
            }}
          >
            FAQ
          </a>
        </li>
        <li className="mobile-only">
          <a
            href="https://calendly.com/jimmy-fernandez-devia/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-rdv-button-mobile"
          >
            Prendre Rendez-Vous
          </a>
        </li>
      </ul>
      <div className="cta-button-navbar">
        <a
          href="https://calendly.com/jimmy-fernandez-devia/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-rdv-button"
        >
          Prendre Rendez-Vous
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
