import React from 'react';
import '../styles/Footer.css';
import '../styles/FooterMobile.css';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-logo">
        </div>

        <div className="footer-social">
          <h3>Réseaux Sociaux</h3>
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

      <div className="footer-bottom">
        <p>&copy;Jimmy Fernandez. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
