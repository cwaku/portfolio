import '../../stylesheets/AboutMe.css';

import { Link } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__container">
      <div className="about-me__container__text">
        <h1 className="about-me__container__text__title">About Me</h1>
        <p className="about-me__container__text__description">
          Results-driven Senior Software Developer with over four years of experience in full-stack development,
          specializing in Elixir, Ruby, JavaScript, and Ruby on Rails. Expertise in building scalable microservices,
          architecting cloud-based solutions, and deploying cross-platform financial systems compliant with ISO-8583 standards.
          Proven track record of driving efficiency, implementing modern coding practices, and mentoring teams.
          Recipient of the Global Techsprint Leadership Award 2023, recognized for innovation and leadership in the tech industry.
        </p>
        <button
          type="button"
          className="about-me__container__text__button header-button"
        >
          <Link to="/about">More about me</Link>
        </button>
      </div>
      <div className="about-me__container__image">
        <img
          style={{ borderRadius: '50%' }}
          // eslint-disable-next-line global-require
          src={require('../../assets/images/use.jpeg')}
          alt="about-me"
          className="about-me__container__image__image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default AboutMe;
