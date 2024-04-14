import info from "../../../../public/info.svg";
import Image from "next/image";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../../components/Tooltip";

export default function Info() {
  return (
    <div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Image
              src={info}
              width={0}
              height={0}
              alt="info button"
              className="w-4 h-4  "
            />
          </TooltipTrigger>
          <TooltipContent className="bg-neutral-800 border-2 border-gray-200">
            <p >Just asking so I know who is who :{')'}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
