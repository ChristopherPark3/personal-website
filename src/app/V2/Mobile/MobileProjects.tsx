import Image from "next/image";
import MobileProject, { MobileProjectType } from "./MobileProject";
import CreatorCards from "../../../../public/creatorcards.svg";
import VisiVue from "../../../../public/Visivue.svg";
import { MobileSkeleton } from "@/app/components/Skeleton";

const projects: MobileProjectType[] = [
  {
    name: "Creator Cards",
    href: "https://www.creatorcards.us",

    component: (
      <Image alt="Creator Cards" src={CreatorCards} className="h-32 w-60" />
    ),
    description: "Enhance your social media presence with Creator Cards. Targeting social media creators, Creator Cards allows users to display their social media profiles in a customizable and creative way, while also monitoring analyitcs.",
    techs: ["Next.js", "Supabase", "Prisma", "React Query", "TailwindCSS"],
  },
  {
    name: "VisiVue",
    href: "https://www.visivue.org",
    component: <Image alt="VisiVue" src={VisiVue} className="h-32 w-60" />,
    description: "An opensource dev tool for tracking state in Vue3. Vue offers a powerful feature in two-way data binding out of the box via the 'v-model' directive. While this separates Vue from other frameworks, it can also hold it back in that this feature impacts app and state complexity in a Vue3 applicaiton.",
    techs: ["Vue3", "VueFlow", "VSCode API", "Webview API"],
  },
  {
    name: "SoundLens",
    component: (
     <MobileSkeleton />
    ),
    description:
      "Stay up to date with a feed of the newest releases from your favorite artists. Stemming from my love of music, I find that very often, life happens and I miss a lot of releases from my favorite artists. The list of new songs/projects builds up to a point where I don't feel the desire to manually look up each artist to find their newest music.",
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
