import { useEffect, useState } from 'react';
import '../../stylesheets/Scroll.css';
const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a href="/">
      <div id="mouse-scroll">
        <div className="mouse">
          <div className="mouse-in" />
        </div>
        <div>
          <span className="down-arrow-1" />
          <span className="down-arrow-2" />
          <span className="down-arrow-3" />
        </div>
      </div>
    </a>
  );
};

export default ScrollAnimation;
