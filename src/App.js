import { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const app = useRef(null);
  const scrollContainer = useRef(null);
  const size = useWindowSize();

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    console.log(size.height);
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScroll());
  }, [ ]);

  const skewScroll = () => {
    skewConfig.current = window.scrollY;
    skewConfig.previous += 
      (skewConfig.current - skewConfig.previous) * skewConfig.ease;
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100;

    const difference = skewConfig.current - skewConfig.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    scrollContainer.current.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`;

    requestAnimationFrame(() => skewScroll());
  };


  return (
    <div ref={app} className="App">
      <Navbar />
      <div ref={scrollContainer} className="scroll-container">
      <h2> Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2> Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll </h2>
      <h2>Scroll Container</h2>
      <h2>Scroll </h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2> Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll </h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      <h2>Scroll Container</h2>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
