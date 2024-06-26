"use client";

import { MotionValue, motion, useMotionValue } from "framer-motion";
import { BackgroundGradient } from "./BackgroundGradient";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function FloatingNavbar({
  navbarOpacity,
  aboutMeInView,
  projectsInView,
  contactMeInView,
}: {
  navbarOpacity: MotionValue<number>;
  aboutMeInView: boolean;
  projectsInView: boolean;
  contactMeInView: boolean;
}) {
  const navbarRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={navbarRef}
      className="fixed top-40 left-6 md:top-40 md:left-10 z-10 rounded-2xl"
      style={{ opacity: navbarOpacity }}
    >
      <BackgroundGradient className="h-32">
        <motion.ul className="flex flex-col bg-zinc-800 h-full justify-around w-full rounded-3xl p-2 ">
          <li id="about_me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-laugh h-4 w-4 stroke-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
          </li>
          {aboutMeInView ? (
            <motion.div
              className="text-gray-200 text-xs fixed top-[11.3rem] left-[5rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut" }}
            >
              About me
            </motion.div>
          ) : null}
          {projectsInView ? (
            <div className="text-gray-200 text-xs fixed top-[13.65rem] left-[5rem]">
              Projects
            </div>
          ) : null}
          {contactMeInView ? (
            <div className="text-gray-200 text-xs fixed top-[15.95rem] left-[5rem]">
              Contact me
            </div>
          ) : null}
          <li id="projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-hard-hat h-[1.05rem] w-[1.05rem] stroke-white"
            >
              <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
              <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
              <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
              <path d="M14 6h0a6 6 0 0 1 6 6v3" />
            </svg>
          </li>
          <li id="contact_me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-notebook-pen h-[0.95rem] w-[0.95rem] stroke-white"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z" />
            </svg>
          </li>
        </motion.ul>
      </BackgroundGradient>
    </motion.div>
  );
}
