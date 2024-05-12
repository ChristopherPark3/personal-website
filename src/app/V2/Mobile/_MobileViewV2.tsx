import MobileAboutMe from "./MobileAboutMe";
import MobileContactMe from "./MobileContactMe";
import MobileFooter from "./MobileFooter";
import MobileHero from "./MobileHero";
import MobileProjects from "./MobileProjects";

const MobileViewV2 = () => {
  return (
    <div
      id="mobile-view-container"
      className="min-h-screen w-full flex flex-col p-8 gap-6 sm:p-20 md:p-32"
    >
      <MobileHero />
      <MobileAboutMe />
      <MobileProjects />
      <MobileContactMe />
      <MobileFooter />
    </div>
  );
};

export default MobileViewV2;
