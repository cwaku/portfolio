import { useState, useEffect } from "react";
import '../../stylesheets/customCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState(
    { x: 0, y: 0 },
  );

  console.log(mousePosition);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="cursor" />
  );
};

export default CustomCursor;