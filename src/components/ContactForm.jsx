import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions, des idées ou souhaitez en savoir plus sur nos services ? <br />
          Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais !
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Votre Nom" required />
          <input type="email" placeholder="Votre Email" required />
          <textarea placeholder="Votre Message" rows="5" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
