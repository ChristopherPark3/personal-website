"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroArrow from "./components/V1/Hero/HeroArrow";
import Hero from "./components/V1/Hero/Hero";
import Footer from "./components/V1/Footer/Footer";
import V2BentoGrid from "./components/V2/V2BentoGrid";

export default function HomePageV2() {
  const [arrowInView, setArrowInView] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setArrowInView(true);
    }, 2000);
  }, []);
  return (
    <motion.div className="flex flex-1 flex-col items-center">
      <Hero />
      <AnimatePresence>
        {arrowInView && <HeroArrow setArrowInView={setArrowInView} />}
      </AnimatePresence>


      <h1 className="text-white text-8xl mt-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>
      <V2BentoGrid className="w-screen bg-red-900" />s
      <Footer className="hover:cursor-default" />
    </motion.div>
  );
}
