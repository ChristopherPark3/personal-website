"use client";
import { useState } from "react";
import { useSpring, motion, useScroll } from "framer-motion";


export default function Home() {

  return (
    <div>
      <div className="navbar">Navbar</div>
      <div className="hero">Hero</div>
      <div className="header">Header</div>
      <div className="projects">Projects</div>
      <div className="contact-me">Contact Me</div>
    </div>
  );
}
