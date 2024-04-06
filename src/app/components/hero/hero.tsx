import { BackgroundGradient } from "./HeroBackgroundGradient";
import { TypewriterEffect } from "./Typewriter";

export default function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center mt-64">
      <h1 className="flex text-gray-200 text-8xl text-shadow shadow-gray-700">
        Hi, Im Chris
        <TypewriterEffect
          words={[
            {
              text: "topher",
              className: "text-gray-200 text-8xl font-weight-400",
            },
          ]}
        />{" "}
        Park
      </h1>
    </div>
  );
}
