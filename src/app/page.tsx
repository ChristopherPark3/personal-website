"use client";
import InitialAnimation from "./components/heroAnimation/heroAnimation";
import Hero from "./components/Hero/Hero";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { AuroraBackground } from "./components/Background/AuroraBackground";
import { BackgroundGradientAnimation } from "./components/Background/GradientBackground";
import { Lamp } from "./components/Hero/Lamp";
import { Spotlight } from "./components/Hero/Spotlight";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Spotlight className="ml-[22rem] -mt-[18rem]" />
      <Hero />
      <Footer />
    </div>
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
