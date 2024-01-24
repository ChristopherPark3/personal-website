"use client";
import { AnimatePresence, motion } from "framer-motion";
import { animateFunc } from "../../_helpers/helpers";
import { MotionProps } from "@/app/_types/types";

// MAKE SURE TO WRAP IN <AnimatePresence></AnimatePresence> as well as have load state so exit knows when unmount happens

export default function HeroAnimation({}: {
  initialLoad?: boolean;
  children?: JSX.Element;
}) {
  const topLine: MotionProps = {
    initial: { y: "50%", width: 4, height: 4 },
    enter: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: {
      y: "0%",
      opacity: 0,
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };
  const bottomLine: MotionProps = {
    initial: { y: "50%", width: 4, height: 4 },
    enter: {
      width: "100%",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: {
      y: "100%",
      opacity: 0,

      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center h-[100%] w-[100]">
      <motion.div
        key="topLine"
        {...animateFunc(topLine)}
        className="bg-slate-50 z-10"
      ></motion.div>
      <motion.div
        key="bottomLine"
        {...animateFunc(bottomLine)}
        className="bg-slate-50 z-10"
      ></motion.div>
    </div>
  );
}
