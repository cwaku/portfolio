import '../../stylesheets/AboutMe.css';
const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__container">
      <div className="about-me__container__text">
        <h1 className="about-me__container__text__title">About Me</h1>
        <p className="about-me__container__text__description">
          I am a full stack web developer with a passion for creating
          beautiful and functional websites. I have a background in
          computer science and a passion for learning new things. I am
          currently working as a software engineer at
          {' '}
          <a
            href="https://www.linkedin.com/in/joshua-m-barnett-b8a8b8a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microverse
          </a>
          .
        </p>
        <button type="button" className="about-me__container__text__button">
          More about me
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
