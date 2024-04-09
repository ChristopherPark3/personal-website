"use client";
import Hero from "./components/Hero/Hero";
import {
  AnimatePresence,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer/Footer";
import { AuroraBackground } from "./components/Background/AuroraBackground";
import { BackgroundGradientAnimation } from "./components/Background/GradientBackground";
import { Lamp } from "./components/Hero/Lamp";
import { Spotlight } from "./components/Hero/Spotlight";
import { useScroll, motion } from "framer-motion";
import FloatingNavbar from "./components/Navbar/FloatingNavbar";
import AboutMe from "./components/AboutMe/AboutMe";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "0.15 0.15"],
  });
  const navbarOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const navbarScale = useTransform(scrollYProgress, [0,1], [0.5, 1])

  return (
    <motion.div
      ref={ref}
      className="flex flex-1 flex-col items-center pl-28 pr-28"
    >
      <FloatingNavbar navbarOpacity={navbarOpacity} navbarScale={navbarScale}/>
      {/* <Spotlight className="-mt-[2rem] xl:ml-[22rem] xl:-mt-[5rem] 2xl:-mt-[13rem] 2xl:ml-[24rem]" /> */}
      <Hero />

      <AboutMe className="flex items-center gap-4 border-2 border-neutral-800 rounded-lg p-4 z-10 mt-44" />

      <h1 className="text-white text-8xl mt-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>

      <Footer />
    </motion.div>
  );
}

{
  /* <div id="main-page-container" className="p-8 bg-slate-300">
      <div id="main-page" className="grid grid-cols-8 border-black">
        <div id="navbar" className="h-[100vh] bg-red-100">
          Navbar
        </div>
        <div id="hero" className="h-[100vh] bg-blue-100">
          Hero
        </div>
        <div id="header" className="h-[100vh] bg-red-100">
          Header
        </div>
        <div id="projects" className="h-[100vh] bg-blue-100">
          Projects
        </div>
        <div id="contact-me" className="h-[100vh] bg-red-100">
          Contact Me
        </div>
        <div id="contact-me" className="h-[100vh] bg-blue-100">
          Filler 1
        </div>
        <div id="contact-me" className="h-[100vh] bg-red-100">
          Filler 2
        </div>
        <div id="contact-me" className="h-[100vh] bg-blue-100">
          Filler 3
        </div>
      </div>
    </div> */
}
