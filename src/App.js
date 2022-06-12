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
      <div className="content">
        {/* list images and texts */}
        <p>Hello, I'm a software developer based in New York, NY. I'm currently working on a project called <a href="https://www.github.com/joshuacox/joshuacox.github.io">joshuacox.github.io</a>.</p>
        <p>I'm also a student at the University of Washington studying Computer Science and Engineering.</p>
        <p>I'm currently looking for a full-time position as a software developer.</p>
        <p>I'm also a fan of the following:</p>
        </div>
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
