"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function ResumeButton() {
  return (
    <motion.button
      className="fixed text-sm right-4 top-4 p-3 border-2 border-neutral-800  shadow-gray-700 bg-neutral-900 rounded-full  text-gray-200 "

    >
      <a href="https://christopher-park-resume.s3.amazonaws.com/SWE+Resume+Newest.pdf" target="_blank">
      My Resume
        </a>
    </motion.button>
  );
}
