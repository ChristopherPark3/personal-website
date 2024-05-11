import MobileAboutMe from "./MobileAboutMe";
import MobileHero from "./MobileHero";

const MobileViewV2 = () => {
  return (
    <div
      id="mobile-view-container"
      className="min-h-screen w-full flex flex-col p-6 gap-6"
    >
      <MobileHero />
      <MobileAboutMe />
    </div>
  );
};

export default MobileViewV2;
