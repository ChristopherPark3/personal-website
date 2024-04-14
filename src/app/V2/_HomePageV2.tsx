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
import Socials from "./Socials";

const navItems = [{ name: "About" }, { name: "Projects" }, { name: "Contact" }];

export default function HomePageV2() {
  const [filter, setFilter] = useState<string>("All");
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
  console.log(filter);
  return (
    <motion.div className="flex flex-1 flex-col items-center lg:px-20 2xl:px-36">
      <Socials />
      <ResumeButton />
      <FloatingNav navItems={navItems} setFilter={setFilter} />
      <V2Hero />
      <AnimatePresence>
        {arrowInView && <V2HeroArrow setArrowInView={setArrowInView} />}
      </AnimatePresence>
      <V2BentoGrid
        filter={filter}
        className="border-2 border-neutral-800 p-4 rounded-2xl mt-[30rem] min-w-full "
      />
      <V2Footer className="hover:cursor-default mb-4" />
    </motion.div>
  );
}
