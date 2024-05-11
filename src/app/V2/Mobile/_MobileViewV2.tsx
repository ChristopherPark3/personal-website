
import MobileAboutMe from "./MobileAboutMe";
import MobileFooter from "./MobileFooter";
import MobileHero from "./MobileHero";
import MobileProjects from "./MobileProjects";

const MobileViewV2 = () => {
  return (
    <div
      id="mobile-view-container"
      className="min-h-screen w-full flex flex-col p-8 gap-6"
    >
      <MobileHero />
      <MobileAboutMe />
      <MobileProjects />
      <MobileFooter />
    </div>
  );
};

export default MobileViewV2;
