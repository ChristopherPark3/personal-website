"use client";
import { useEffect, useState } from "react";
import { MotionProps } from "@/app/_types/types";
import { AnimatePresence, motion } from "framer-motion";
import { animateFunc } from "@/app/_helpers/helpers";
import HeroAnimation from "../heroAnimation/heroAnimation";

export default function Hero() {
  const [initialLoad, setInitialLoad] = useState(true)

  useEffect(() => {
    const id = setTimeout(() => {
      setInitialLoad(false)
    }, 1500)

    return () => clearTimeout(id)
  },[])

  const hero: MotionProps = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 1,
      },
    },
    exit: { opacity: 1 },
  };

  const name = {
    initial: {opacity:0},
    enter: {opacity: 1,
    transition: {
      delay: 1.5
    }},
    exit: {opacity: 1}
  }
  return (
    <div className="fixed top-20 left-20">
      <motion.div
        layout
        key="hero-container"
        className="flex"
        // {...animateFunc(hero)}
      >
        <h1 className="text-8xl font-medium">Hi</h1>
        <h1 className="text-8xl font-medium">,&nbsp;</h1>
        <h1 className="text-8xl font-medium">I&apos;m&nbsp;</h1>
        <h1 className="relative bg-red-900 text-8xl font-medium w-[30rem] h-[6rem]">
          <AnimatePresence>
            {initialLoad && <HeroAnimation />}
          </AnimatePresence>
          <AnimatePresence>
            {!initialLoad && <div>
                <motion.h1 {...animateFunc(name)}>Chris Park</motion.h1>
              </div>}
          </AnimatePresence>
        </h1>
      </motion.div>
    </div>
  );
}
