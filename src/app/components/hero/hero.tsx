/* eslint-disable react/no-unescaped-entities */
import { BackgroundGradient } from "./HeroBackgroundGradient";
import { TypewriterEffect } from "./Typewriter";

export default function Hero() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center mt-48">
      <h1 className="flex text-gray-200 text-3xl text-shadow-xs  shadow-slate-50 md:text-4xl md:text-shadow-sm lg-text-8xl xl:text-8xl">
        Hi, I'm Chris
        <TypewriterEffect
          words={[
            {
              text: "topher",
              className: "text-gray-200 text-3xl text-shadow-xs  shadow-slate-50 md:text-4xl md:text-shadow-sm lg-text-8xl xl:text-8xl",
            },
          ]}
        />{" "}
        Park
      </h1>
    </div>
  );
}
