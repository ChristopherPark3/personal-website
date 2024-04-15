"use client";

import { useState } from "react";
import Image from "next/image";

export default function V2ProjectImage({
  image,
  href,
}: {
  image: any;
  href: string;
}) {
  return (
    <div className="relative w-full h-full">
      <a className="w-full h-full" href={href} target="_blank">
        <Image
          src={image}
          alt="creator cards screen shot"
          className="w-full h-full rounded-lg hover:scale-[102%] hover:shadow-lg hover:shadow-black transition ease-linear"
        />
      </a>
    </div>
  );
}
