import headshot from "../../../../../public/Headshot1.svg";
import headshot_background from "../../../../../public/headshot_background.svg";
import headshot_background_outline from "../../../../../public/headshot_background_outline.svg";
import Image from "next/image";

export default function DisplayHeadshot() {
  return (
    <div className="relative">
      <Image src={headshot} alt="headshot" className="absolute w-44 h-44 z-50" />
      <Image
        src={headshot_background}
        alt="headshot background"
        className="absolute w-24 h-24"
      />
      <Image
        src={headshot_background_outline}
        alt="headshot background outline"
        className="absolute w-24 h-24"
      />
    </div>
  );
}
