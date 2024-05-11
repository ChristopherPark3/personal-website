import { SquareArrowOutUpRight } from "lucide-react";

export interface MobileProjectType {
  projectName: string;
  href: string;
}

const MobileProject = ({ href, projectName }: MobileProjectProps) => {
  return (
    <h1 className="text-gray-200 font-light text-lg flex flex-row gap-2 items-center">
      {projectName}{" "}
      <a href={href} target="_blank">
        <SquareArrowOutUpRight className="h-5 w-5" />
      </a>
    </h1>
  );
};

export default MobileProject;
