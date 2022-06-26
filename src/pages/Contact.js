import '../stylesheets/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <h1 className="contact-content__title">¡Let’s talk!</h1>
      <p className="contact-content__description">
        if you are interested in my work or have any concerns, do not hesitate to write to me
      </p>
    </div>
    <div>
      <form className="contact-form" action="https://formspree.io/" method="POST">
        <label className="contact-form__label contact-form__name" htmlFor="name">
          Your name
          <input className="name__input" type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label className="contact-form__label contact-form__email" htmlFor="email">
          Your e-mail
          <input className="email__input" type="email" name="email" id="email" placeholder="example@gmail.com" />
        </label>
        <label className="contact-form__label contact-form__textarea" htmlFor="message">
          Your message
          <textarea className="form__textarea" name="message" id="message" placeholder="Hey..." />
        </label>
        <input className="contact-from__submit" type="submit" value="Submit" />
      </form>
    </div>

  </div>
);

export default Contact;
