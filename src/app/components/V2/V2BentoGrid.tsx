import { BentoGrid, BentoGridItem } from "./Bento/BentoGrid";
import headshot1 from "../../../../public/Headshot1.svg";

import Image from "next/image";

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
        className="h-52 w-52 bg-red-900"
      />
    ),
    title: "Software Engineer",
    // description: "Software Engineer",
    className:
      " flex items-center justify-center bg-neutral-800 min-h-full w-full col-span-1 row-span-2 pt-2",
  },
  {
    section: "About",
    title: "test2",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-28",
  },
  {
    section: "About",
    title: "test3",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-28",
  },
  {
    section: "About",
    title: "test4",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-28",
  },
  {
    section: "About",
    title: "test5",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-28",
  },
  {
    section: "About",
    title: "test6",
    description: "test 1",
    header: "test 1",
    className: "bg-green-100 h-28",
  },
];

// key={i}
// title={item.title}
// description={item.description}
// header={item.header}
// className={item.className}
// icon={item.icon}
