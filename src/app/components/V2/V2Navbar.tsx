import { NavbarContext, NavbarContextType } from "@/app/providers";
import { navbar } from "@nextui-org/react";
import { useContext } from "react";

const sections = ["About", "Projects", "Contact"];
const key = {
  About: 0,
  Projects: 1,
  Contact: 2,
};

export default function V2Navbar() {
  const { navbarSection, setNavbarSection } = useContext(
    NavbarContext
  ) as NavbarContextType;
  console.log(navbarSection);
  return (
    <div className=" fixed bg-neutral-900 border-2 border-neutral-700 top-4 left-4 h-12 w-60 rounded-3xl shadow-sm shadow-gray-700 p-2">
      <div className="flex flex-1 items-center justify-center gap-4 h-full">
        {sections.map((current, i) => {
          return (
            <button
              key={i}
              className="text-xs text-gray-200 bg-red-900 "
              onClick={() => setNavbarSection(current)}
            >
              {current}
            </button>
          );
        })}
      </div>
    </div>
  );
}
