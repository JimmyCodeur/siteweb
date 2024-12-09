import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="/logo.png" alt="Logo" className="logo-image" /> */}
        <span className="logo-text">WriteBot</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        {/* <li><a href="#blog">Blog</a></li> */}
        {/* <li><a href="#pages">Pages</a></li> */}
      </ul>
      <div className="buttons">
        <button className="btn get-started">Nous contacter</button>
      </div>
    </nav>
  );
};

export default Navbar;
