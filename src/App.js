import { useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
// import { Partytown } from '@builder.io/partytown/react';
import ReactGa from 'react-ga';

import './stylesheets/App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

import CustomCursor from './components/customCursor/CustomCursor';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const app = useRef();
  const scrollContainer = useRef();
  const size = useWindowSize();
  const location = useLocation();

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, [size.height, location.pathname]);

  useEffect(() => {
    ReactGa.initialize('G-JGN3CLTZZH');
    ReactGa.pageview(location.pathname);
  }, [location.pathname]);

  const skewScroll = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous
    += (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScroll());
  };

  useEffect(() => {
    requestAnimationFrame(() => skewScroll());
  });

  return (
    <div ref={app} className="App">
      <Navbar />
      <CustomCursor />
      <div ref={scrollContainer} className="scroll-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
