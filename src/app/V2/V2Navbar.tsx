import { NavbarContext, NavbarContextType } from "@/app/providers";
import { navbar } from "@nextui-org/react";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const sections: string[] = ["All", "About", "Projects", "Contact"];
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

  return (
    <div className=" fixed bg-neutral-900 border-2 border-neutral-700 top-4 left-4 h-12 min-w-[18rem] rounded-3xl shadow-sm shadow-gray-700 p-4">
      <div className="grid grid-cols-4 h-full">
        {sections.map((current, i) => {
          let style: string = "absolute w-0 h-0 text-transparent text-xs";
          let show: boolean = false;
          if (hoverIndex == i) {
            style = "absolute bg-white text-transparent text-xs p-2 rounded-2xl opacity-25 mb-[0.8px]";
            show = true;
          }

          return (
            <div key={i} className="flex items-center justify-center">
              <button
                className="text-xs text-gray-200 hover:text-white hover:cursor-pointer m-0"
                onMouseEnter={() => {
                  console.log("entered: ", current, i);
                  setHoverIndex(i);
                }}
                onMouseLeave={() => console.log("left: ", current)}
              >
                {current}
              </button>
              <Hover
                currentStyle={style}
                hoverX={i}
                text={current}
                show={show}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Hover({
  currentStyle,
  text,
  show,
}: {
  hoverX: number;
  currentStyle: string;
  text: string;
  show: boolean;
}) {
  return (
    <motion.button layout className={currentStyle}>
      {show ? text : null}
    </motion.button>
  );
}

// onClick={() => {
//   setHoverIndex(i);
//   setNavbarSection(current);
// }}

