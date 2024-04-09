"use client";
import headshotBackground from "../../../../public/headshot_background.svg";
import headshotBackgroundOutline from '../../../../public/headshot_background_outline.svg'
import Image from "next/image";
import headshot from "../../../../public/Headshot 1.svg";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Ref, useRef } from "react";
export default function AboutMe({ className }: { className?: string }) {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutMeRef,
    offset: ["0 0.5", "0.5 0.5"],
  });
  const opacityScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={aboutMeRef}
      className={className}
      style={{ opacity: opacityScale }}
    >
      <div className="relative min-h-[300px] min-w-[300px] overflow-visible z-0">
      <Image
          src={headshotBackgroundOutline}
          width={450}
          height={450}
          alt="background"
          className="absolute min-w-[450px] min-h-[450px] z-20"
        />
        <Image
          src={headshotBackground}
          width={500}
          height={500}
          alt="background"
          className="absolute min-w-[500px] min-h-[500px] z-10"
        />
        <Image
          src={headshot}
          alt="Headshot"
          width={300}
          height={300}
          className="absolute z-30"
        />
      </div>
      <div className="">
        <p className=" text-gray-300 overflow-auto text-xl">
          During my undergrad at Columbia University, I went from contempltaing
          work on Wall Street, to pursuing dentistry, none of which I felt
          passionate about and ultimately chose Psychology. I took a free
          computer science course (CS50), and was hooked by the inner workings
          of software, but also how dependent the world and society is upon it.
          I was skipping my classes to take this online course and uiltimately,
          I decided to drop everything and pursue this as my career field. One
          bootcamp later, here I am :)
        </p>
        <br />
        <p className=" text-gray-300 overflow-auto text-xl">
          Day to day, I am working across the stack building scalable products,
          specifically developing a mobile app to allow users to keep a feed of
          the latest releases from their favorite artists, as well as a recently
          deployed web app, serving as a way for creators to display their
          different social medias.
        </p>
        <br />
        <p className=" text-gray-300 overflow-auto text-xl">
          Some of my passions include sports, cutting hair (my side gig in
          college), acryllic painting, and music.
        </p>
        {/* <p className=" text-gray-300 overflow-auto text-xl">
          I love sports, my passion stemming from my time playing football for 9
          years including university. I met amazing people there and created
          life long bonds that I cherish. So anything sports related you can bet
          I am tuned in.
        </p>
        */}
      </div>
    </motion.div>
  );
}
