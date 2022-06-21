import '../../stylesheets/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__container__left">
        <div className="footer__container__left__logo">
          <a href="/">RM</a>
        </div>
      </div>
      <ul className="footer__container__second">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
      <div className="footer__container__social">
        <p>Social</p>
        <ul className="social__links">
          <li>LinkedIn</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
    <div className="footer__container__copyright">
      <p>© 2022 Ricky Mormor. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
