import '../../stylesheets/AboutMe.css';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__container">
      <div className="about-me__container__text">
        <h1 className="about-me__container__text__title">About Me</h1>
        <p className="about-me__container__text__description">
          A highly motivated Full-stack Engineer and Blockchain enthusiast
          who likes to challenge himself with the latest trends.
          I am looking for companies that value creativity, hard work, and leadership.
          I am dedicated to creating and properly maintaining web apps with a passion
          for creative solutions. While it all started as an interest in code, later on,
          I found myself E-learning and studying by myself through online courses until
          I enrolled in Microverse Program.
          I am
          currently working as a technical support engineer at
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
        <button type="button" className="about-me__container__text__button header-button">
          <a href="/about">
            More about me
          </a>
        </button>
      </div>
      <div className="about-me__container__image">
        <img
          // eslint-disable-next-line global-require
          src={require('../../assets/images/profile-pic (1).png')}
          alt="about-me"
          className="about-me__container__image__image"
        />
      </div>
    </div>
  </div>
);

export default AboutMe;
