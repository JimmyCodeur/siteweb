import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [isSending, setIsSending] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const email = formData.get('user_email');
    const name = formData.get('user_name');
    const honeypot = formData.get('honeypot');
    const message = formData.get('message');

    if (honeypot) {
      setMessageType('error');
      setMessage('Détection de bot. Envoi annulé.');
      return false;
    }

    if (!name.trim() || !email.trim() || !message.trim()) {
      setMessageType('error');
      setMessage('Tous les champs doivent être remplis.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessageType('error');
      setMessage('Veuillez entrer une adresse email valide.');
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessageType('success');
          setMessage('Votre message a bien été envoyé ! Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.');
          form.current.reset();
        },
        (error) => {
          setMessageType('error');
          setMessage('Une erreur est survenue. Veuillez réessayer.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions, des idées ou souhaitez en savoir plus sur nos services ? <br />
          Remplissez le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais !
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Votre Nom*" required />
          <input type="email" name="user_email" placeholder="Votre Email*" required />
          <textarea name="message" placeholder="Votre Message*" rows="5" required></textarea>
          <input type="text" name="honeypot" style={{ display: 'none' }} />
          <button type="submit" disabled={isSending}>
            {isSending ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
        {message && <p className={`form-message ${messageType}`}>{message}</p>}
      </div>
    </section>
  );
};

export default ContactForm;
