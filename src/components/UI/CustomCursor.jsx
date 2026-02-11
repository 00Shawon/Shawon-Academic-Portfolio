import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.tagName === 'A' || target.closest('a');
      const isButton = target.tagName === 'BUTTON' || target.closest('button');
      const isInteractive = target.closest('[data-cursor="hover"]') || target.closest('.cursor-pointer');
      
      // Check for custom cursor text
      const customTextElement = target.closest('[data-cursor-text]');
      if (customTextElement) {
        setCursorText(customTextElement.getAttribute('data-cursor-text'));
        setCursorVariant("project");
      } else if (isLink || isButton || isInteractive) {
        setCursorText("");
        setCursorVariant("text");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 92, 28, 0.5)", // Brand orange with opacity
      border: "2px solid #FF5C1C",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    text: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "2px solid #FF5C1C",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    project: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "#FF5C1C",
      border: "none",
      mixBlendMode: "normal",
      transition: {
        type: "spring",
        mass: 0.6
      }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bg-transparent rounded-full pointer-events-none z-50 hidden md:flex items-center justify-center pointer-events-none overflow-hidden"
      variants={variants}
      animate={cursorVariant}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVariant === "project" ? 1 : 0 }}
        className="text-white text-[10px] font-bold uppercase tracking-widest"
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
