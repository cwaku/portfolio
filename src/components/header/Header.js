import TypeWriterEffect from 'react-typewriter-effect';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  FaLinkedin, FaGithub, FaTwitter, FaInstagram,
} from 'react-icons/fa';
import { Bg, Rig, Caption } from '../../pages/About';
import Noodles from '../animations/Noodles';

import '../../stylesheets/header.css';
import ScrollAnimation from '../animations/Scroll';

function Overlay() {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%',
    }}
    >
      <ul
        className="social__links header-content-details-contact-link"
        style={{
          position: 'absolute', bottom: 30, left: 40, fontSize: '13px',
        }}
      >
        <li><a href="https://www.linkedin.com/in/rickymormor/" aria-label="LinkedIn logo" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
        <li><a href="https://github.com/cwaku" aria-label="Github logo" target="_blank" rel="noreferrer"><FaGithub /></a></li>
        <li><a href="https://twitter.com/rickymormor" aria-label="Twitter logo" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
        <li><a href="https://instagram.com/rickymormor" aria-label="Instagram logo" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
      </ul>
      <div style={{
        position: 'absolute', top: 40, left: 40, fontSize: '13px',
      }}
      >
        bad —
      </div>
      <div style={{
        position: 'absolute', bottom: 40, right: 40, fontSize: '13px',
      }}
      >
        good —
      </div>
      <ScrollAnimation
        style={{
          position: 'absolute', bottom: 40, right: 40, fontSize: '13px',
        }}
      />
    </div>
  );
}

const Header = () => (
  <>
    <div className="header">
      <Canvas className="Canvass" dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
        <Bg />
        <Suspense fallback={null}>
          <Noodles />
          <Caption>Ricky Mormor</Caption>
          <Rig />
        </Suspense>
      </Canvas>
      <div className="header-content">
        <h3 className="header-content-name">
          {/* Ricky
          <span> Mormor.</span> */}
          <br />
          <TypeWriterEffect
            startDelay={2000}
            pauseDelay={3000}
            cursorColor="#3F3D56"
            multiText={[
              'Software Engineer',
              'Front-end Developer',
              'Full-stack Developer',
              'Back-end Developer',
              'Entrepreneur',
              'Mentor',
            ]}
            multiTextDelay={3000}
            multiTextLoop
            typeSpeed={200}
          />
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
      <Overlay />
    </div>
  </>
);
export default Header;
