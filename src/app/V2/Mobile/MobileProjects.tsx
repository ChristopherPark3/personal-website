import { SquareArrowOutUpRight } from "lucide-react";
import { MobileProjectType } from "./MobileProject";

const projects: MobileProjectType[] = [
  { projectName: "Creator Cards", href: "https:/www./creatorcards.us" },
  {projectName: "VisiVue", href: "https://www.visivue.org"},
];

const MobileProjects = () => {
  return (
    <div className="flex flex-col mt-16 gap-6">
      <h1 className="text-white text-lg ">Projects</h1>
    </div>
  );
};

export default MobileProjects;
