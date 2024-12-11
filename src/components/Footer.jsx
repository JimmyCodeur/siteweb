import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo et Slogan */}
        <div className="footer-logo">
          <h1>@IA</h1>
          <p>Transformez vos idées en réalité grâce à l'Intelligence Artificielle</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="footer-social">
          <h3>Suivez-nous</h3>
          <div className="social-icons">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a> */}
            <a href="https://www.linkedin.com/in/jimmy-fernandez-fr/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Jimmy Fernandez. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
