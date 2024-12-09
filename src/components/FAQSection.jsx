import React, { useState } from 'react';
import '../styles/FAQSection.css'; // N'oubliez pas de créer le fichier CSS correspondant

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Fonction pour basculer l'élément actif
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Comment fonctionne l'application AI de Type Tone / Par où commencer ?",
      answer: "Pour commencer à utiliser l'application AI, il vous suffit de vous inscrire, de choisir le ton et le type de texte dont vous avez besoin. L'AI vous guidera tout au long du processus étape par étape."
    },
    {
      question: "Avez-vous des langues autres que l'anglais et le néerlandais ?",
      answer: "Oui, notre IA prend en charge un large éventail de langues, y compris l'espagnol, le français, l'allemand et plus encore."
    },
    {
      question: "Quelle souscription payante me recommandez-vous ?",
      answer: "Nous recommandons l'abonnement Premium pour accéder à toutes les fonctionnalités, un usage illimité et des options de personnalisation avancées."
    },
    {
      question: "Comment fonctionne exactement cette IA et comment peut-elle écrire des textes aussi bien ?",
      answer: "Notre IA utilise des algorithmes avancés de traitement du langage naturel (NLP) pour comprendre le contexte, le ton et le style, ce qui lui permet d'écrire des textes de haute qualité, semblables à ceux rédigés par des humains, en fonction des informations que vous fournissez."
    }
  ];

  return (
    <section className="faq-section">
      <h2>Questions ? Nous avons les réponses.</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
