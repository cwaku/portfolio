import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Partytown } from '@builder.io/partytown/react';

import './stylesheets/App.css';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';

import CustomCursor from './components/customCursor/CustomCursor';
import Scrollbar from './hooks/smoothScroll';

SmoothScrollbar.use(OverscrollPlugin);

const overscrollOptions = {
  enabled: true,
  effect: 'bounce',
  damping: 0.17,
  maxOverscroll: 150,
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Partytown debug forward={['dataLayer.push']} />
      <div className="App">
        {loading ? (
          <ClimbingBoxLoader
            color="#5c62ec"
            loading={loading}
            size={30}
          />
        ) : (
          <>
            <Navbar />
            <CustomCursor />
            <Scrollbar
              className="scroll-container"
              damping={0.10}
              thumbMinSize={10}
              plugins={{
                overscroll: { ...overscrollOptions },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </Scrollbar>
          </>
        )}
      </div>
    </>
  );
}

export default App;
