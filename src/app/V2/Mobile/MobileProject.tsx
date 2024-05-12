import { SquareArrowOutUpRight } from "lucide-react";
import { ReactNode } from "react";
export interface MobileProjectType {
  name: string;
  href?: string;
  component: ReactNode
}

const MobileProject = ({ href, name, component }: MobileProjectType) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-gray-200 font-light text-lg flex flex-row gap-2 items-center">
        {name}{" "}
        {href && (
          <a href={href} target="_blank">
            <SquareArrowOutUpRight className="h-5 w-5" />
          </a>
        )}
      </h1>
      {component}
    </div>
  );
};

export default MobileProject;
