/* eslint-disable global-require */
import '../../stylesheets/Skills.css';

const Skills = () => (
  <div className="skills__container">
    <h1 className="skills__container__title">My abilities</h1>
    <div className="skills__container__skills">
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/device-mobile.png')} alt="mobile-device" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Code review</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            With my experience as a Technical Support Engineer, I have the ability to
            review and test code to ensure that it is maintainable, free of bugs,
            and scalable. I also verify that the code is correct and effective for the requirements
            at hand.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/Icon.png')} alt="Icon" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Coworking</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I try to be a valuable asset in the team I am working on, contributing
            my knowledge and material that optimizes the workflow in the development of the project.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/speakerphone.png')} alt="speakerphone" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Communication</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I can maintain communication with the development team, attentive to any concern that
            may arise in order to carry out the project correctly.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/Icon (1).png')} alt="Icon(1)" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Remote pair-programming</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I have developed skills in remote pair-programming using GitHub,
            industry-standard git-flow,
            and daily standup to communicate and collaborate with international remote developers.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/Icon (2).png')} alt="Icon(2)" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Iteration</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I am able to iterate receiving and interpreting the feedback that is provided
            to me in order to improve the quality of the product that I am developing.
          </p>
        </div>
      </div>
      <div className="skills__container__skills__skill">
        <img loading="lazy" src={require('../../assets/images/code.png')} alt="code" className="skills__container__skills__skill__image" />
        <h2 className="skills__container__skills__skill__title">Full-stack Web Development</h2>
        <div className="skills__container__skills__skill__description">
          <p>
            I spent the last several months mastering algorithms,
            data structures, and full-stack development while simultaneously
            developing projects with Ruby, Rails, JavaScript, React, and Redux.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
