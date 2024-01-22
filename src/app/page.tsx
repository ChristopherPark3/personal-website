"use client";
import InitialAnimation from "./components/initialPageLoad/initialAnimation";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  // const [initialLoad, setInitialLoad] = useState(true);
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     setInitialLoad(false)
  //   }, 1000)

  //   return () => clearTimeout(id)
  // })
  return (
    <AnimatePresence>
      <InitialAnimation />
    </AnimatePresence>
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
