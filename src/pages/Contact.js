import '../stylesheets/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xbjwezwk');

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-content__title">¡Let’s talk!</h1>
        <p className="contact-content__description">
          if you are interested in my work or have any concerns, do not hesitate to write to me
        </p>
      </div>
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-form__label contact-form__name" htmlFor="name">
            Your name
            <input className="name__input" type="text" name="name" id="name" placeholder="Name" required />
          </label>
          <label className="contact-form__label contact-form__email" htmlFor="email">
            Your e-mail
            <input className="email__input" type="email" name="email" id="email" placeholder="example@gmail.com" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
          <label className="contact-form__label contact-form__textarea" htmlFor="message">
            Your message
            <textarea className="form__textarea" name="message" id="message" placeholder="Hey..." required />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </label>
          {state.errors.length > 0 && (
            <p className="contact-form__error">Please correct the errors above.</p>
          )}
          {state.succeeded && (
            <p className="contact-form__success">Thanks for your message!</p>
          )}
          <button className="contact-from__submit" type="submit" disabled={state.submitting}>
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
