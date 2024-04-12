import { NavbarContext, NavbarContextType } from "@/app/providers";
import { navbar } from "@nextui-org/react";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const sections = ["All", "About", "Projects", "Contact"];
const key = {
  All: 0,
  About: 1,
  Projects: 2,
  Contact: 3,
};

export default function V2Navbar() {
  const { navbarSection, setNavbarSection } = useContext(
    NavbarContext
  ) as NavbarContextType;
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [hoverX, setHoverX] = useState(0);
  return (
    <div className=" fixed bg-neutral-900 border-2 border-neutral-700 top-4 left-4 h-12 min-w-[18rem] rounded-3xl shadow-sm shadow-gray-700 p-4">
      <div className="grid grid-cols-4 h-full">
        {sections.map((current, i) => {
          return (
            <div
              key={i}
              className="text-xs text-gray-200 hover:text-white hover:cursor-pointer m-0 "
              onMouseEnter={() => console.log('entered: ', current)}
              onMouseLeave={() => console.log('left: ', current)}
            >
              {current}
            </div>
          );
        })}
        <Hover hoverX={hoverX} />
      </div>
    </div>
  );
}

function Hover({ hoverX }: { hoverX: number }) {
  return (
    <motion.div
      className="relative bg-white h-4 w-4"
      style={{
        x: hoverX,
      }}
    ></motion.div>
  );
}

// onClick={() => {
//   setHoverIndex(i);
//   setNavbarSection(current);
// }}
