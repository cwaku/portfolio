import { Route, Routes } from 'react-router';

import './stylesheets/App.css';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
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
  return (
    <div className="App">
      <Navbar />
      <CustomCursor />
      <Scrollbar
        className="scroll-container"
        damping={0.05}
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
    </div>
  );
}

export default App;
