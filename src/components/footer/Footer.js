import {
  FaLinkedin, FaGithub, FaTwitter, FaInstagram,
} from 'react-icons/fa';

import '../../stylesheets/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__container__left">
        <a href="/">RM</a>
      </div>
      <ul className="footer__container__second">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
      </ul>
      <ul className="footer__container__second">
        <li>Contact me</li>
        <li>Mail</li>
      </ul>
      <div className="footer__container__social">
        <p>Social</p>
        <ul className="social__links">
          <li><a href="https://www.linkedin.com/in/rickymormor/" aria-label="LinkedIn logo" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://github.com/cwaku" aria-label="Github logo" target="_blank" rel="noreferrer"><FaGithub /></a></li>
          <li><a href="https://twitter.com/rickymormor" aria-label="Twitter logo" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com/rickymormor" aria-label="Instagram logo" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
    </div>
    <div className="footer__container__copyright">
      <p>© 2022 Ricky Mormor.</p>
    </div>
  </footer>
);

export default Footer;
