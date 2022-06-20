import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

import '../../stylesheets/customCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState(
    { x: 0, y: 0 },
  );

  console.log(mousePosition);
  const cursorVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };

    const handleMouseMovee = (e) => {
      console.log(e);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleMouseMovee);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <motion.div
      className="cursor"
      variants={cursorVariants}
      animate="default"
    />
  );
};

export default CustomCursor;
