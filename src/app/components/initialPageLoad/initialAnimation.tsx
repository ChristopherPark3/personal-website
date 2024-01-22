"use client";
import { motion } from "framer-motion";
import { animateFunc } from "../../_helpers/helpers";
import { MotionProps } from "@/_types/types";

export default function InitialAnimation() {
  const topLine: MotionProps = {
    initial: { y: "50vh", width: 10, height: 10 },
    enter: {
      width: "100vw",
      transition: {
        duration: 1.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: { y: 0 },
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
    exit: { y: '100vh' },
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        {...animateFunc(topLine)}
        className="bg-slate-50 z-10"
      ></motion.div>
      <motion.div></motion.div>
    </div>
  );
}
