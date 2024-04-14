"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../../../utils/cn";

export const FloatingNav = ({
  navItems,
  className,
  setFilter,
  prevFilter,
  setPrevFilter,
}: {
  navItems: {
    name: string;
    icon?: JSX.Element;
  }[];
  setFilter: (filter: string) => void;
  prevFilter: string;
  setPrevFilter: (filter: string) => void;
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
        setVisible(false);
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
          "flex max-w-fit  fixed top-2 inset-x-0 mx-auto border-2 border-neutral-700 rounded-full  bg-neutral-900 shadow-sm shadow-gray-700 z-[5000] pr-4 pl-2 py-2  items-center justify-center space-x-6 ",
          className
        )}
      >
        <button
          className="text-sm font-medium relative pl-4  py-2 rounded-full hover:cursor-pointer hover:text-white text-gray-300"
          onClick={() => {
            setFilter("All");
            setPrevFilter("All");
          }}
          onMouseOver={() => setFilter("All")}
          onMouseLeave={() => setFilter(prevFilter)}
        >
          All
        </button>
        {navItems.map((navItem: any, idx: number) => (
          <h1
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-gray-300  hover:text-white text-sm hover:cursor-pointer"
            )}
            key={idx}
            onClick={() => {
              setFilter(navItem.name);
              setPrevFilter(navItem.name);
            }}
            onMouseOver={() => setFilter(navItem.name)}
            onMouseLeave={() => setFilter(prevFilter)}
          >
            {navItem.name}
          </h1>
        ))}
        <a
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-gray-300  hover:text-white text-sm hover:cursor-pointer"
          )}
          href="https://christopher-park-resume.s3.amazonaws.com/SWE+Resume+Newest.pdf"
          target="_blank"
        >
          Resume
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
