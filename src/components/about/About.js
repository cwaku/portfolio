import '../../stylesheets/AboutMe.css';

import { Link } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__container">
      <div className="about-me__container__text">
        <h1 className="about-me__container__text__title">About Me</h1>
        <p className="about-me__container__text__description">
          Logical and results-driven Full Stack developer with a strong love for Front
          End. Dedicated to building user-focused applications using javascript,
          Typescript, Ruby, Ruby on Rails, ReactJS & Next.js. Judicious and
          creative when crafting effective solutions to propel competitive
          advantage and revenue growth under client&apos;s requirements. Analytical
          problem solver with a calm and focused demeanor and open to receiving
          feedback. I am currently working part-time as a technical support engineer at
          {' '}
          <a
            href="https://www.linkedin.com/school/microverseinc/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microverse
          </a>
          .
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
          // eslint-disable-next-line global-require
          src={require('../../assets/images/profile-pic (1).png')}
          alt="about-me"
          className="about-me__container__image__image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

export default AboutMe;
