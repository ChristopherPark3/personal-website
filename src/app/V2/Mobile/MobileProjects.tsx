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
    description: "Enhance your social media presence with Creator Cards",
    techs: ["Next.js", "Supabase", "Prisma", "React Query", "TailwindCSS"],
  },
  {
    name: "VisiVue",
    href: "https://www.visivue.org",
    component: <Image alt="VisiVue" src={VisiVue} className="h-32 w-60" />,
    description: "An opensource dev tool for tracking state in Vue3",
    techs: ["Vue3", "VueFlow", "VSCode API", "Webview API"],
  },
  {
    name: "SoundLens",
    component: (
      <Skeleton className=" min-h-[128px] w-60 rounded-none text-white" />
    ),
    description:
      "Stay up to date with a feed of the newest releases from your favorite artists",
    techs: ["React Native", "Expo", "Zustand", "React Query"],
  },
];

const MobileProjects = () => {
  return (
    <div className="flex flex-col mt-16 gap-6">
      <h1 className="text-white text-xl ">Projects</h1>
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
