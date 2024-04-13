"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, scroll } from "framer-motion";
import V2HeroArrow from "./Hero/V2HeroArrow";
import V2Hero from "./V2Hero";
import V2Footer from "./V2Footer";
import V2BentoGrid from "./V2BentoGrid";
import V2Navbar from "./V2Navbar";
import { FloatingNav } from "./Navbar/AceternityNavbar";
import ResumeButton from "./ResumeButton";

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
      <V2BentoGrid className="border-2 border-neutral-800 p-4 rounded-2xl mt-[30rem] min-w-full " />
      <V2Footer className="hover:cursor-default" />
    </motion.div>
  );
}
