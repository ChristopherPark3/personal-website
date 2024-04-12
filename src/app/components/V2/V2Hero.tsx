/* eslint-disable react/no-unescaped-entities */
import { Ref, useRef, useState } from "react";
import { TypewriterEffect } from "../V1/Hero/Typewriter";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

export default function V2Hero() {
  const HeroRef = useRef<HTMLDivElement>(null);
  const opacityRef = useRef(1);
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> | any } =
    useScroll({ target: HeroRef, offset: ["start 0.2", "end start"] });
  const opacityScale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={HeroRef}
      layout
      className="flex flex-1 flex-col items-center justify-center mt-48 gap-7"
      style={{ opacity: opacityScale }}
    >
      <div>
        <h1 className="flex text-gray-200 text-3xl text-shadow-xs  shadow-slate-50 md:text-4xl md:text-shadow-sm lg-text-8xl xl:text-8xl">
          Hi, I'm Chris
          <TypewriterEffect

            words={[
              {
                text: "topher",
                className:
                  "text-gray-200 text-3xl text-shadow-xs  shadow-slate-50 md:text-4xl md:text-shadow-sm lg-text-8xl xl:text-8xl",
              },
            ]}
          />{" "}
          Park
        </h1>
      </div>
      <h1 className="text-gray-500 text-3xl text-center">
        Adaptable software engineer capable of wearing many hats
      </h1>
    </motion.div>
  );
}
