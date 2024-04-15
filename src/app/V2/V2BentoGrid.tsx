"use client";

import { BentoGrid, BentoGridItem } from "./Bento/BentoGrid";
import headshot1 from "../../../public/Headshot1.svg";
import creatorcards from "../../../public/creatorcards.svg";
import Visivue from "../../../public/Visivue.svg";
import ArrowRight from "../../../public/ArrowRight.svg";
import { motion } from "framer-motion";

import Image from "next/image";
import Badge from "./Projects/V2Badge";
import ContactMe from "./V2ContactMe";
import { Skeleton } from "../components/Skeleton";
import V2MyHobbies from "./V2MyHobbies";
import V2AboutMe from "./V2AboutMe";
import { useState } from "react";
import V2ProjectImage from "./V2ProjectImage";
import { FollowerPointerCard } from "../components/FollowingPointer";

export default function V2BentoGrid({
  className,
  filter,
}: {
  className: string;
  filter: string;
}) {
  return (
    <BentoGrid className={className}>
      {items.map((item, i) => {
        if (filter === "All") {
          return (
            <BentoGridItem
              key={`${item.section}-${i}`}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              section={item.section}
            />
          );
        }
        if (item.section !== filter) {
          return (
            <BentoGridItem
              key={`${item.section}-${i}`}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className + " opacity-25"}
              section={item.section}
            />
          );
        }
        return (
          <BentoGridItem
            key={`${item.section}-${i}`}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            section={item.section}
          />
        );
      })}
    </BentoGrid>
  );
}

const items = [
  {
    section: "About",
    header: (
      <Image
        src={headshot1}
        width={48}
        height={48}
        alt="Headshot"
        className="h-52 w-52 aspect-square"
      />
    ),
    className:
      " flex items-center justify-center  min-h-full w-full col-span-1 row-span-1 pt-10",
  },
  {
    section: "About",
    header: <V2AboutMe />,
    className: " min-h-[100%] col-span-3 row-span-1",
  },
  {
    section: "About",
    header: <V2MyHobbies />,
    className: " h-full col-span-2",
  },
  {
    section: "Projects",
    title: "Enhance your social media presence with creatorcards",
    description: (
      <div className="flex gap-1 flex-wrap items-center">
        <Badge name="Next.js" />
        <Badge name="Supabase" />
        <Badge name="Prisma" />
        <Badge name="React Query" />
        <Badge name="TailwindCSS" />
      </div>
    ),
    header: (
      <V2ProjectImage color={0} image={creatorcards} href="https://www.creatorcards.us" />
    ),
    className: "bg-neutral-800 h-full col-span-3",
  },
  {
    section: "Projects",
    title: "An opensource dev tool for tracking state in Vue3",
    description: (
      <div className="flex gap-1 flex-wrap">
        <Badge name="Vue3" />
        <Badge name="VueFlow" />
        <Badge name="VSCode API" />
        <Badge name="Webview API" />
      </div>
    ),
    header: <V2ProjectImage color={3} image={Visivue} href="https://www.visivue.org" />,
    className: "h-full col-span-3",
  },
  {
    section: "Projects",
    title: "Keep a feed of newest releases from your favorite artists",
    description: (
      <div className="flex gap-1 flex-wrap">
        <Badge name="React Native" />
        <Badge name="Expo" />
        <Badge name="Zustand" />
        <Badge name="React Query" />
      </div>
    ),
    header: <Skeleton />,
    className: " h-full col-span-3",
  },
  {
    section: "Contact",
    header: (
      <div className="flex flex-col gap-4 text-xl">
        Feel free to reach out to me:
        <a
          className="font-semibold text-xl text-blue-400 hover:text-blue-500 transition ease-in-out"
          href="mailto:admin@creatorcards.us"
        >
          christopherjcpark00@gmail.com
        </a>
      </div>
    ),

    className: " h-full col-span-2 text-white",
  },
  {
    section: "Image",
    header: "Put cartman with eyes here"
  }
];

// key={i}
// title={item.title}
// description={item.description}
// header={item.header}
// className={item.className}
// icon={item.icon}
