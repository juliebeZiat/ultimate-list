import './annex.scss';

const Contact = () => (
  <div className="contact">
    <div className="contact-header">
      <h2>Une question ?</h2>
      <h1>Contactez la team Ultimate !</h1>
    </div>

    <form className="contact-form">
      <div className="contact-form-input email">
        <label htmlFor="email">Votre e-mail
          <input type="text" id="email" name="email" />
        </label>
      </div>
      <div className="contact-form-input message">
        <label htmlFor="message">Votre message
          <textarea type="text" id="message" name="message" rows="5" cols="33" />
        </label>
      </div>

      <button className="contact-form-submit" type="submit">Envoyer votre message</button>
    </form>
  </div>
);

export default Contact;
