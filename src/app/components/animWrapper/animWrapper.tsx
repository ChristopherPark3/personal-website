"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function animWrapper(children: ReactNode) {
  return <div>{children}</div>;
}
