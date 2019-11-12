import React from 'react';

const ContactForm = () => {

  return (
    <form className="contact-form" name="contact" method="POST" data-netlify="true">

      <div className="contact-form__group">
        <input type="hidden" name="form-name" value="contact" />
      </div>

      <div className="contact-form__group">
        <label htmlFor="name">Namn *</label>
        <input type="text" name="name" className="contact-form__input" id="name" placeholder="Vad heter du ?" autoComplete="off" tabIndex="5" required/>
      </div>

      <div className="contact-form__group">
        <label htmlFor="e-mail">E-post *</label>
        <input type="email" name="email" className="contact-form__input" id="e-mail" placeholder="Din e-postadress" tabIndex="6" required/>
      </div>

      <div className="contact-form__group">
        <label htmlFor="message">Meddelande *</label>
        <textarea className="contact-form__input" name="message" id="message" tabIndex="7" required></textarea>
      </div>

      <button type="submit" className="contact-form__button" tabIndex="8">Skicka</button>

    </form>
  );
};

export default ContactForm;