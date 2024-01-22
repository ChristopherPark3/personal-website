"use client";
import { useState, useEffect } from "react";
import { useSpring, motion, useScroll, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => {
      setVisible(false);
    }, 700);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="h-[100vh] w=[100vw] bg-slate-300 flex flex-col items-center justify-center">
      <AnimatePresence>
        {isVisible && (
          <div className="flex flex-col w-[100vw] h-[30vh] justify-center items-center bg-green-100">
            <motion.div
              layout
              key="lines"
              className="bg-red-900 h-1 w-80 fixed"
              initial={{ width: 4 }}
              animate={{
                width: 320,

                transition: {
                  duration: 1,
                  ease: [0.85, 0, 0.15, 1],
                },
              }}
              exit={{
                y: 80,
                opacity: 0.5,
                transition: {
                  duration: 1,
                  ease: [0.85, 0, 0.15, 1],
                },
              }}
            ></motion.div>
            <motion.div
              layout
              key="lines"
              className="bg-red-900 h-1 w-80 fixed"
              initial={{ width: 4 }}
              animate={{
                width: 320,

                transition: {
                  duration: 1,
                  ease: [0.85, 0, 0.15, 1],
                },
              }}
              exit={{
                y: -80,
                opacity: 0.5,
                transition: {
                  duration: 1,
                  ease: [0.85, 0, 0.15, 1],
                },
              }}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// <div className="navbar">Navbar</div>
// <div className="hero">Hero</div>
// <div className="header">Header</div>
// <div className="projects">Projects</div>
// <div className="contact-me">Contact Me</div>
