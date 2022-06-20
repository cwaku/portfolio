import '../../stylesheets/header.css';

const Header = () => (
  <>
    <div className="header">
      <div className="header-content">
        <h3 className="header-content-name">
          Ricky
          <span> Mormor.</span>
          <br />
          Software Engineer
        </h3>
        <div className="header-content-summary">
          <p>
            You have a project you need coded?
            <br />
            Don’t hesitate to contact me.
          </p>
        </div>
        <div className="header-content-details-contact">
          <button type="button" className="header-button-see-projects">
            See Projects
          </button>
          <button type="button" className="header-button-cv">
            Download CV
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Header;
