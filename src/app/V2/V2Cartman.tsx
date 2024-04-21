import Image from "next/image";
import Cartman from "../../../public/Cartman.svg";
import RightEye from "../../../public/RightEye.png";
import LeftEye from "../../../public/LeftEye.png";
import { useEffect } from "react";

export default function V2Cartman() {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor?.getBoundingClientRect();
      const anchorX = (rekt?.left! + rekt?.width!) / 2;
      const anchorY = (rekt?.top! + rekt?.height!) / 2;
      const eyes = document.querySelectorAll("#eye");

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      console.log(angleDeg);
      eyes.forEach((eye: any, idx: number, eyes: NodeListOf<Element>) => {
        eye.setAttribute("style", `transform: rotate(${90 + angleDeg}deg)`);
      });
    });
  }, []);

  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  return (
    <div id="grandparent" className="flex flex-1 justify-center items-center">
      <div id="parent" className=" relative max-h-40 max-w-[11rem]">
        <Image
          id="anchor"
          src={Cartman}
          alt="Christopher Park Cartman Photo"
          className="max-h-40"
          style={{}}
        />
        <div id="eyes">
          <Image
            id="eye"
            src={RightEye}
            alt="ChristopherPark Cartman Right Eye"
            className="absolute h-3 w-3 top-[32%] left-[40%] z-50"
          />
          <Image
            id="eye"
            src={LeftEye}
            alt="Christopher Park Cartman Left eye"
            className="absolute h-3 w-3 top-[32%] left-[57%] z-50"
            style={{}}
          />
        </div>
      </div>
    </div>
  );
}
