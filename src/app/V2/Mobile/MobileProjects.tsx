import Image from "next/image";
import MobileProject, { MobileProjectType } from "./MobileProject";
import CreatorCards from "../../../../public/creatorcards.svg";
import VisiVue from "../../../../public/Visivue.svg";
import { Skeleton } from "@/app/components/Skeleton";

const projects: MobileProjectType[] = [
  {
    name: "Creator Cards",
    href: "https://www.creatorcards.us",

    component: (
      <Image alt="Creator Cards" src={CreatorCards} className="h-32 w-60" />
    ),
  },
  {
    name: "VisiVue",
    href: "https://www.visivue.org",
    component: <Image alt="VisiVue" src={VisiVue} className="h-32 w-60" />,
  },
  { name: "SoundLens", component: <Skeleton className=" min-h-[128px] w-60 rounded-none text-white" /> },
];

const MobileProjects = () => {
  return (
    <div className="flex flex-col mt-16 gap-6">
      <h1 className="text-white text-lg ">Projects</h1>
      {projects.map((project) => {
        return (
          <div key={project.name}>
            <MobileProject {...project} />
          </div>
        );
      })}
    </div>
  );
};

export default MobileProjects;
