/* eslint-disable global-require */
import '../../stylesheets/Skills.css';

const Skills = () => (
  <div className="skills__container">
    <h1 className="skills__container__title">My abilities</h1>
    <div className="skills__container__skills">
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/device-mobile.png')} alt="mobile-device" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Responsive design</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            With my experience in responsive design patterns I have a clear vision about
            how to implement them effectively in any project.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/Icon.png')} alt="Icon" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Coworking</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I try to be a valuable asset in the team I am working on, contributing
            my knowledge and material that optimizes the workflow in the development of the project.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/speakerphone.png')} alt="speakerphone" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Communication</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I can maintain communication with the development team, attentive to any concern that
            may arise in order to carry out the project correctly
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/Icon (1).png')} alt="Icon(1)" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Design system</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I have management of design systems, which allows agility in the design process,
            shortening the time in the creation of interfaces within the project
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/Icon (2).png')} alt="Icon(2)" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Iteration</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I am able to iterate receiving and interpreting the feedback that is provided
            to me in order to improve the quality of the product that I am designing
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img src={require('../../assets/images/code.png')} alt="code" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">HTML</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I have a strong background in HTML5 and CSS3.
            I have a strong background in HTML5 and CSS3.
            I have a strong background in HTML5 and CSS3.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
