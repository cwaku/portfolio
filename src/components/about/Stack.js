/* eslint-disable global-require */
import '../../stylesheets/Stack.css';

const TechSTack = () => (
  <div className="tech-stack">
    <h2>Tech Stack</h2>
    <div className="tech-stack-container">
      <div className="tech-stack-item">
        <img src={require('../../assets/images/react.png')} alt="react" />
        <p>React</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/redux.png')} alt="redux" />
        <p>Redux</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/ruby.png')} alt="ruby" />
        <p>Ruby</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/typescript.png')} alt="typescript" />
        <p>Typescript</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/rubyonrails.png')} alt="rubyonrails" />
        <p>Ruby on Rails</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/postgresql.png')} alt="postgresql" />
        <p>Postgresql</p>
      </div>
      <div className="tech-stack-item">
        <svg fill="none" strokeLinecap="square" strokeMiterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg" className="threejs">
          <g transform="translate(8.964 4.2527)" fillRule="evenodd" stroke="#fff" strokeLinecap="butt" strokeLinejoin="round" strokeWidth="4">
            <path d="m63.02 200.61-43.213-174.94 173.23 49.874z" />
            <path d="m106.39 50.612 21.591 87.496-86.567-24.945z" />
            <path d="m84.91 125.03-10.724-43.465 43.008 12.346z" />
            <path d="m63.458 38.153 10.724 43.465-43.008-12.346z" />
            <path d="m149.47 62.93 10.724 43.465-43.008-12.346z" />
            <path d="m84.915 125.06 10.724 43.465-43.008-12.346z" />
          </g>
        </svg>
        <p>Three.js</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/css3.png')} alt="css" />
        <p>CSS</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/sass.png')} alt="sass" />
        <p>Sass</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/html.png')} alt="html" />
        <p>HTML</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/javascript.png')} alt="javascript" />
        <p>JavaScript</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/nextjs.png')} className="nextjs-logo" alt="nextjs-white-logo" />
        <p>Next.js</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/jquery.png')} alt="jquery" />
        <p>jQuery</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/bootstrap.png')} alt="bootstrap" />
        <p>Bootstrap</p>
      </div>
      <div className="tech-stack-item">
        <img src={require('../../assets/images/firebase.png')} alt="firebase" />
        <p>Firebase</p>
      </div>
    </div>
  </div>
);

export default TechSTack;
