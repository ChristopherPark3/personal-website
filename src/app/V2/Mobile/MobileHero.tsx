import Image from "next/image";
import headshot from "../../../../public/Headshot1.svg";
import headshotOutline from "../../../../public/headshot_background_outline.svg";
import headshotBackground from "../../../../public/headshot_background.svg";
import MobileSocials from "./MobileSocials";
import { SquareArrowOutUpRight } from "lucide-react";

const MobileHero = () => {
  return (
    <div className="flex flex-col gap-4 mt-4  max-w-[40rem]">
      <div className="flex flex-col gap-2">
        <h1 className="text-gray-200 text-shadow-xs shadow-slate-50 text-5xl text-wrap font-semibold sm:text-7xl">
          Christopher Park
        </h1>
        <p className="text-lg text-gray-500">
          Adaptable software engineer capable of wearing many hats
        </p>
      </div>
      <MobileSocials />
      <div className="flex flex-row gap-2 items-center mt-6">
        <a
          href="https://christopher-park-resume.s3.amazonaws.com/SWE+Resume+Most+Updated.pdf"
          target="_blank"
          className="text-neutral-300 text-md"
        >
          View my resume
        </a>
        <a
          href="https://christopher-park-resume.s3.amazonaws.com/SWE+Resume+Most+Updated.pdf"
          target="_blank"
        >
          <SquareArrowOutUpRight className="h-5 w-5 text-neutral-300" />
        </a>
      </div>
    </div>
  );
};

export default MobileHero;
