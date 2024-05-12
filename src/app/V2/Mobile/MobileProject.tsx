import { SquareArrowOutUpRight } from "lucide-react";
import { ReactNode } from "react";
import Badge from "../Projects/V2Badge";
export interface MobileProjectType {
  name: string;
  href?: string;
  component: ReactNode;
  description?: string;
  techs: string[];
}

const MobileProject = ({
  href,
  name,
  component,
  description,
  techs,
}: MobileProjectType) => {
  return (
    <div className="flex flex-col gap-3 mb-2">
      <h1 className="text-gray-200 font-light text-lg flex flex-row gap-2 items-center">
        {name}{" "}
        {href && (
          <a href={href} target="_blank">
            <SquareArrowOutUpRight className="h-5 w-5" />
          </a>
        )}
      </h1>
      <p className="text-md text-gray-500">{description}</p>
      <div>{component}</div>
      <div className=" flex gap-1 max-w-full flex-wrap">
        {techs.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};

export default MobileProject;
