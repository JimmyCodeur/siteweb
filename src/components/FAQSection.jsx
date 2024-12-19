import React, { useState } from 'react';
import '../styles/FAQSection.css';
import '../styles/FAQSectionMobile.css';

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqCategories = [
    "Général",
    "Technologie",
    "Coûts et délais",
    "Assistance et support"
  ];

  const faqQuestions = [
    {
      category: "Général",
      questions: [
        {
          question: "Comment nos solutions sont-elles réalisées ?",
          answer: "Nous commençons par une prise de contact pour discuter de vos besoins spécifiques. Ensuite, nous établissons un devis détaillé. Il est conseillé de prendre rendez-vous pour un échange approfondi."
        },
        {
          question: "Quels secteurs bénéficient le plus des agents IA ?",
          answer: "Nos solutions IA sont adaptées à divers secteurs, notamment la santé, l'éducation, la finance, et bien d'autres. Nous recommandons de planifier une rencontre pour déterminer l'impact dans votre domaine."
        }
      ]
    },
    
    {
      category: "Technologie",
      questions: [
        {
          question: "Les agents IA nécessitent-ils une connexion Internet pour fonctionner ?",
          answer: "Cela dépend de vos besoins. Nos agents peuvent être conçus pour fonctionner hors ligne pour une sécurité optimale."
        },
        {
          question: "Les agents IA peuvent-ils travailler avec mes données en local ?",
          answer: "Oui, vos données sont traitées localement sur vos serveurs, garantissant la confidentialité totale."
        }
      ]
    },
    {
      category: "Coûts et délais",
      questions: [
        {
          question: "Quels sont les coûts associés à la création d'agents IA ?",
          answer: "Les coûts varient selon la complexité du projet et les fonctionnalités nécessaires."
        },
        {
          question: "Quel est le délai de réalisation pour un projet IA ?",
          answer: "Les projets simples prennent généralement 2 à 4 semaines. Les solutions plus complexes peuvent nécessiter 6 à 8 semaines."
        }
      ]
    },
    {
      category: "Assistance et support",
      questions: [
        {
          question: "Offrez-vous une assistance après la mise en œuvre ?",
          answer: "Oui, nous proposons une assistance complète après le déploiement, incluant formations et mises à jour."
        },
        {
          question: "Puis-je modifier ou mettre à jour un agent IA après son déploiement ?",
          answer: "Absolument ! Nos solutions sont conçues pour être évolutives et facilement modifiables."
        }
      ]
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container" id="faq">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        <aside className="faq-sidebar">
          <h2>FAQ</h2>
          <ul>
            {faqCategories.map((category, index) => (
              <li
                key={index}
                className={selectedCategory === index ? "active" : ""}
                onClick={() => {
                  setSelectedCategory(index);
                  setActiveIndex(null);
                }}
              >
                <span className={selectedCategory === index ? "active-indicator" : ""}></span>
                {category}
              </li>
            ))}
          </ul>
        </aside>

        <main className="faq-content">
          <h3>{faqQuestions[selectedCategory].category}</h3>
          {faqQuestions[selectedCategory].questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAccordion(index)}>
                <h4>{item.question}</h4>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default FAQSection;
