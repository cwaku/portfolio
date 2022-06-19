import '../../stylesheets/header.css';
const Header = () => (
  <>
    <div className="header">
      <div className="header-content">
        <div className="header-content-name">
          <h1>Ricky Mormor</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="header-content-summary">
          <p>
            You have a project you need coded?
            <br />
            Don’t hesitate to contact me.
          </p>
        </div>
        <div className="header-content-details-contact">
          <button type="button" className="header-content-details-contact-button">
            See Projects
          </button>
          <button type="button" className="header-content-details-contact-button">
            Download CV
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Header;
