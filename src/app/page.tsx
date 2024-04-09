"use client";
import Hero from "./components/Hero/Hero";
import {
  AnimatePresence,
  MotionValue,
  scroll,
  useInView,
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
  const homeRef = useRef(null);
  const [aboutMeInView, setAboutMeInView] = useState<boolean>(false);
  const { scrollYProgress, scrollY } = useScroll({
    target: homeRef,
    offset: ["0 0", "0.12 0.12"],
  });
  const navbarOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  scroll((progress) => {
    if (progress > 0.13) {
      setAboutMeInView(true);
      return;
    }
    setAboutMeInView(false);
  });
  return (
    <motion.div
      ref={homeRef}
      className="flex flex-1 flex-col items-center pl-40 pr-40"
    >
      <FloatingNavbar
        aboutMeInView={aboutMeInView}
        navbarOpacity={navbarOpacity}
      />
      {/* <Spotlight className="-mt-[2rem] xl:ml-[22rem] xl:-mt-[5rem] 2xl:-mt-[13rem] 2xl:ml-[24rem]" /> */}
      <Hero />

      <AboutMe className="flex items-center gap-10 border-2 border-neutral-800 rounded-lg p-6 z-10 mt-60 overflow-visible" />

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
