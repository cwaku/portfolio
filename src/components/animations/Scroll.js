import '../../stylesheets/Scroll.css';

const ScrollAnimation = () => (
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

export default ScrollAnimation;
