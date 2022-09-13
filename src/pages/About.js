import { Link } from 'react-router-dom';

import Skills from '../components/about/Skills';
import TechSTack from '../components/about/Stack';

import '../stylesheets/AboutPage.css';

const About = () => (
  <div>
    <div className="about__container">
      <div className="about__container__text">
        <h1 className="about__container__text__title">Ricky Mormor</h1>
        <p className="about__container__text__description">
          I&apos;m a Full-stack Developer who presently lives in Accra, the
          capital and largest city of Ghana, on the Atlantic coast of West
          Africa.
        </p>
        <p className="about__container__text__description">
          I like the idea of working as a team and think it is a way to connect
          new skills, offer my knowledge to the team and improve productivity in
          developing a creative solution. I like to discover new things daily
          and be a valuable asset to teams I collaborate with, so I am
          constantly learning and researching current trends. I seek as much
          feedback as possible on projects to improve and provide solutions that
          are not only aesthetically attractive but also accessible and
          functional, which is why I like to work closely with the stakeholders.
        </p>
        <p className="about__container__text__description">
          My track record includes successes in leadership roles at two
          different companies. At one company, I took on the frontend team
          leadership position, while at the second company, I led and
          shepherded the company&apos;s front end using JavaScript and React. One
          of my main accomplishments during that time was my ability to switch
          roles to work with environments that utilized Ruby on Rail, Ruby,
          TypeScript and Next.js, which sharpened my skills in these
          technologies.
        </p>
        <button
          type="button"
          className="about__container__text__button header-button"
        >
          <Link to="/contact">Let&apos;s talk!</Link>
        </button>
      </div>
      <div className="about__container__image">
        <img
          // eslint-disable-next-line global-require
          src={require('../assets/images/profile-pic (1).png')}
          alt="about-me"
          className="about__container__image__image"
          loading="lazy"
        />
      </div>
    </div>
    <TechSTack />
    <Skills />
  </div>
);

export default About;
