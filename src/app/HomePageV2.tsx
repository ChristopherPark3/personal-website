"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, scroll } from "framer-motion";
import V2HeroArrow from "./components/V2/Hero/V2HeroArrow";
import V2Hero from "./components/V2/V2Hero";
import V2Footer from "./components/V2/V2Footer";
import V2BentoGrid from "./components/V2/V2BentoGrid";
import V2Navbar from "./components/V2/V2Navbar";
import { FloatingNav } from "./components/V2/Navbar/AceternityNavbar";
import ResumeButton from "./components/V2/ResumeButton";

const navItems = [{ name: "About" }, { name: "Projects" }, { name: "Contact" }];

export default function HomePageV2() {
  const [arrowInView, setArrowInView] = useState<boolean>(false);
  scroll((progress) => {
    if (progress > 0) {
      setArrowInView(false);
    }
  });
  useEffect(() => {
    setTimeout(() => {
      setArrowInView(true);
    }, 2000);
  }, []);
  return (
    <motion.div className="flex flex-1 flex-col items-center px-36">
      <ResumeButton />
      <FloatingNav navItems={navItems} />
      <V2Hero />
      <AnimatePresence>
        {arrowInView && <V2HeroArrow setArrowInView={setArrowInView} />}
      </AnimatePresence>
      <V2BentoGrid className="border-2 border-neutral-800 p-4 rounded-2xl mt-[20rem] min-w-full " />
      s
      <h1 className="text-white text-8xl mt-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>
      <V2Footer className="hover:cursor-default" />
    </motion.div>
  );
}
