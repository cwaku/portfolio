import '../stylesheets/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-content">
      <h1 className="contact-content__title">¡Let’s talk!</h1>
      <p>
        if you are interested in my work or have any concerns, do not hesitate to write to me
      </p>
    </div>
    <div className="contact-form">
      <form action="https://formspree.io/xqjqjqjq" method="POST">
        <label className="contact-form__label" htmlFor="name">
          Your name
          <input type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label className="contact-form__label" htmlFor="email">
          Your e-mail
          <input type="email" name="email" id="email" placeholder="example@gmail.com" />
        </label>
        <label className="contact-form__label" htmlFor="message">
          Your message
          <textarea name="message" id="message" placeholder="Hey..." />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>

  </div>
);

export default Contact;
