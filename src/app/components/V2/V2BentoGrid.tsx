"use client";

import { BentoGrid, BentoGridItem } from "./Bento/BentoGrid";
import headshot1 from "../../../../public/Headshot1.svg";
import creatorcards from "../../../../public/creatorcards.svg";
import { motion } from "framer-motion";

import Image from "next/image";
import Badge from "./Projects/V2Badge";

export default function V2BentoGrid({ className }: { className: string }) {
  return (
    <BentoGrid className={className}>
      {items.map((item, i) => {
        return (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        );
      })}
    </BentoGrid>
  );
}

const items = [
  {
    section: "Projects",

    header: (
      <Image
        src={headshot1}
        width={48}
        height={48}
        alt="Headshot"
        className="h-52 w-52"
      />
    ),
    // description: "Software Engineer",
    className:
      " flex items-center justify-center  min-h-full w-full col-span-1 row-span-1 pt-10",
  },
  {
    section: "About",
    title: "about",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 min-h-[100%] col-span-1 row-span-1",
  },
  {
    section: "About",
    title: "test3 ",
    description: <Badge name="Next.js" />,
    header: "test 1",
    className: "bg-green-100 h-full",
  },
  {
    section: "Projects",
    title: "Enhance your social media presence with Creator Cards",
    description: (
      <div className="flex gap-1">
        <Badge name="Next.js" />
        <Badge name="Supabase" />
        <Badge name="Prisma" />
        <Badge name="React Query" />
        <Badge name="TailwindCSS" />
      </div>
    ),
    header: (
      <Image
        src={creatorcards}
        width={40}
        height={100}
        alt="creator cards screen shot"
        className="w-full h-full rounded-lg"
      />
    ),
    className: "bg-neutral-800 h-full col-span-3",
  },
  {
    section: "Projects",
    title: "test5",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-full",
  },
  {
    section: "About",
    title: "test6",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-full",
  },
];

// key={i}
// title={item.title}
// description={item.description}
// header={item.header}
// className={item.className}
// icon={item.icon}
