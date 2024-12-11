import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Meeting from './components/Meeting';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <Meeting />
      <ContactForm />
      <FAQSection />
    </div>
  );
}

export default App;
