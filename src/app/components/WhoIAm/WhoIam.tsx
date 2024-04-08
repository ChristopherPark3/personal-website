"use client";

import Image from "next/image";
import headshot from "../../../../public/Headshot 1.svg";
import { CardContainer } from "./3DCardContainer";
import { motion } from "framer-motion";
export default function WhoIam({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={headshot} alt="Headshot" width={300} height={300} />;
      <div>
        <p className=" text-gray-300 overflow-auto text-xl">
          During my undergrad at Columbia University, I went from trying to work
          on Wall Street, to trying to become a dentist, none of which I felt
          passionate about and ultimately chose Psychology. I was ignorant to
          the world of software engineering, only really knowing that it was
          powering the social media apps that I used daily. I took a free CS50
          course (CS50), and was hooked by how software works, but also how
          dependent the world and society is upon it. I was skipping my classes
          to take this online course and uiltimately, I decided to drop
          everything and pursue this as my career field. One bootcamp later,
          here I am :)
        </p>
        <br />
        <p className=" text-gray-300 overflow-auto text-xl">
          I love sports, my passion stemming from my time playing football for 9
          years including university. I met amazing people there and created
          life long bonds that I cherish. So anything sports related you can bet
          I am tuned in.
        </p>
        <br />
        <p className=" text-gray-300 overflow-auto text-xl">Some other passions include cutting hair (my side gig in college), acryllic painting, and music.</p>
      </div>
    </div>
  );
}

// <div>

// </div>
