"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../../../utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() > 0.2) {
        setVisible(true);
      } else {
        setVisible(false)
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border-2 border-neutral-700 rounded-full  bg-neutral-900 shadow-sm shadow-gray-700 z-[5000] pr-2 pl-2 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        <button className="border text-sm font-medium relative border-neutral-200  dark:text-white px-4 py-2 rounded-full hover:cursor-pointer hover:text-neutral-200 text-neutral-400">
          All
        </button>
        {navItems.map((navItem: any, idx: number) => (
          <h1
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-400  hover:text-neutral-200 text-sm hover:cursor-pointer"
            )}
            key={idx}
          >
            {navItem.name}
          </h1>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
