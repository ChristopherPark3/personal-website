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
  const [prevFilter, setPrevFilter] = useState<string>("All");
  const [filter, setFilter] = useState<string>("All");
  const [arrowInView, setArrowInView] = useState<boolean>(false);
  const [bentoView, setBentoView] = useState<boolean>(
    window.innerWidth >= 1336
  );
  scroll((progress) => {

    if (progress > 0) {
      setArrowInView(false);
    }
  });

  useEffect(() => {
    console.log(window.innerHeight)
    setArrowInView(true)
    const handleResize = () => {
      setBentoView(window.innerWidth >= 1336);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(filter);
  return (
    <>
      {bentoView ? (
        <motion.div className="flex flex-1 flex-col items-center lg:px-20 2xl:px-36">
          <Socials />

          <FloatingNav
            navItems={navItems}
            setFilter={setFilter}
            prevFilter={prevFilter}
            setPrevFilter={setPrevFilter}
          />
          <V2Hero />
          <AnimatePresence>
            {arrowInView && <V2HeroArrow setArrowInView={setArrowInView} />}
          </AnimatePresence>
          <V2BentoGrid
            filter={filter}
            className="border-2 border-neutral-800 p-4 rounded-2xl mt-[25rem] 2xl:mt-[30rem] min-w-full "
          />
          <V2Footer className="hover:cursor-default mb-4" />
        </motion.div>
      ) : (
        <div className="flex flex-1 w-full h-full">Small screen</div>
      )}
    </>
  );
}
