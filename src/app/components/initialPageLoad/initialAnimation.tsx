"use client";
import { AnimatePresence, motion } from "framer-motion";
import { animateFunc } from "../../_helpers/helpers";
import { MotionProps } from "@/app/_types/types";

export default function InitialAnimation({
  initialLoad,
}: {
  initialLoad: boolean;
}) {
  const topLine: MotionProps = {
    initial: { y: "50vh", width: 10, height: 10 },
    enter: {
      width: "100vw",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };
  const bottomLine: MotionProps = {
    initial: { y: "50vh", width: 10, height: 10 },
    enter: {
      width: "100vw",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: {
      y: "100vh",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  const topHalf: MotionProps = {
    initial: { top: 0, width: "100vw", height: "50vh" },
    enter:{},
    // enter: {
    //   transition: {
    //     duration: 1.5,
    //     ease: [0.85, 0, 0.15, 1],
    //   },
    // },
    exit: {
      y: "-50vh",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };
  const bottomHalf: MotionProps = {
    initial: { top: "50vh", width: "100vw", height: "50vh" },
    enter:{},
    // enter: {
    //   transition: {
    //     duration: 1.5,
    //     ease: [0.85, 0, 0.15, 1],
    //   },
    // },
    exit: {
      y: "100vh",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center">
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

      <motion.div
        key="topHalf"
        {...animateFunc(topHalf)}
        className="z-9 bg-stone-800"
      ></motion.div>
      <motion.div
        key="bottomHalf"
        {...animateFunc(bottomHalf)}
        className="z-9 bg-stone-800"
      ></motion.div>
    </div>
  );
}
