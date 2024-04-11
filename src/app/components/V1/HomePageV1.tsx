"use client";
import Hero from "./Hero/Hero";
import ArrowDown from "../../public/ArrowDown.svg";
import {
  AnimatePresence,
  MotionValue,
  scroll,
  useInView,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer/Footer";
import { AuroraBackground } from "./Background/AuroraBackground";
import { BackgroundGradient } from "./Navbar/BackgroundGradient";
import { Lamp } from "./Hero/Lamp";
import { Spotlight } from "./Hero/Spotlight";
import { useScroll, motion } from "framer-motion";
import FloatingNavbar from "./Navbar/FloatingNavbar";
import AboutMe from "./AboutMe/AboutMe";
import Image from "next/image";

export default function HomePageV1() {
  const homeRef = useRef(null);
  const [arrowInView, setArrowInView] = useState<boolean>(true);
  const [aboutMeInView, setAboutMeInView] = useState<boolean>(false);
  const [aboutMeY, setAboutMeY] = useState<number>(0);
  const [projectsInView, setProjectsInView] = useState<boolean>(false);
  const [contactMeInView, setContactMeInView] = useState<boolean>(false);
  const { scrollYProgress, scrollY } = useScroll({
    target: homeRef,
    offset: ["0 0", "0.12 0.12"],
  });
  const navbarOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={homeRef} className="flex flex-1 flex-col items-center">
      <FloatingNavbar
        aboutMeInView={aboutMeInView}
        projectsInView={projectsInView}
        contactMeInView={contactMeInView}
        navbarOpacity={navbarOpacity}
      />
      {/* <Spotlight className="-mt-[2rem] xl:ml-[22rem] xl:-mt-[5rem] 2xl:-mt-[13rem] 2xl:ml-[24rem]" /> */}
      <Hero />
      <AnimatePresence>
        {arrowInView && (
          <motion.div
            className="fixed top-[60vh] left-[50vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2,ease: "easeIn", duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => window.scrollTo({ top: 555, behavior: "smooth" })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-arrow-down"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <AboutMe className="flex items-center gap-10 bg-neutral-900 shadow-lg rounded-lg shadow-gray-800 p-6 z-10 mt-60 ml-40 mr-40 overflow-visible" />
      <h1 className="text-white text-8xl mt-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h1>

      <Footer className="hover:cursor-default" />
    </motion.div>
  );
}

{
  // <button
  //   onClick={() => {
  //     window.scrollTo({ top: 555, behavior: "smooth" });
  //   }}
  //   className="z-10"
  // >
  //   Click
  // </button>
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
