import React, { useContext } from 'react';
import './style.scss';
// eslint-disable-next-line import/no-named-as-default
import CustomCursorContext from './CustomCursor.js';

const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  const secondaryCursor = React.useRef(null);
  const mainCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${mouseX
        - mainCursor.current.clientWidth / 2}px, ${mouseY
        - mainCursor.current.clientHeight / 2}px, 0)`;
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX)
            + Math.abs(positionRef.current.distanceY)
          < 0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background" />
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background" />
      </div>
      ;
    </div>
  );
};

export default CustomCursor;
