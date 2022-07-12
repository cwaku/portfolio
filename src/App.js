// import { useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router';

import './stylesheets/App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

import CustomCursor from './components/customCursor/CustomCursor';
// import useWindowSize from './hooks/useWindowSize';
import SmoothScroll from './hooks/smoothScroll';

function App() {
  // useEffect(() => {
  //   document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
  // }, [size.height]);

  return (
    <div className="App">
      <Navbar />
      <CustomCursor />
      <div className="scroll-container">
        <SmoothScroll />
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
