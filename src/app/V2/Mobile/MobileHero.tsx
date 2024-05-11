import Image from "next/image";
import headshot from "../../../../public/Headshot1.svg";
import headshotOutline from "../../../../public/headshot_background_outline.svg";
import headshotBackground from "../../../../public/headshot_background.svg";

const MobileHero = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className=" relaitve">
        <Image
          src={headshot}
          width={100}
          height={100}
          alt="Christopher Park headshot"
          className="absolute z-50"
        />
        <Image
          src={headshotBackground}
          width={150}
          height={150}
          alt="Christopher Park headshot"
          className="absolute h-52 w-52 z-30"
        />
        <Image
          src={headshotOutline}
          width={150}
          height={150}
          alt="Christopher Park headshot"
          className="absolute h-52 w-52 z-40"
        />
      </div>
      <div className="flex flex-col gap-2 mt-32">
        <h1 className="text-gray-200 text-shadow-xs shadow-slate-50 text-6xl text-wrap">
          Christopher Park
        </h1>
        <p className="text-lg text-gray-500">
          Adaptable software engineer capable of wearing many hats
        </p>
      </div>
    </div>
  );
};

export default MobileHero;
