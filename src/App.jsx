import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Meeting from './components/Meeting';
import CustomRAG from './components/CustomRAG';
import WorflowAgents from './components/WorflowAgents';
import TrainModel from './components/TrainModel';
import Presentation from './components/Presentation';
import ContactForm from './components/ContactForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Features />
      <CustomRAG />
      <WorflowAgents />
      <TrainModel/>
      <Presentation/>
      {/* <Meeting /> */}
      <ContactForm />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
