"use client";
import info from "../../../public/info.svg";

import { useState } from "react";
import { Input1 } from "../components/Input";
import { Textarea } from "../components/Textarea";
import Button from "../components/Button";
import Image from "next/image";
import Info from "./ContactMe/Info";

export default function ContactMe() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="flex flex-col font-medium  gap-2 ">
      <h1 className="text-xl text-gray-200 flex ">
        Contact me
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex flex-col py-8 pr-8 gap-2">
          <div className="flex gap-2 items-center">
            <Input1
              type="text"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-800 border-neutral-700 text-gray-200 active:border-neutral-700"
            />
            <Info />
          </div>
          <Button className="text-gray-200 text-medium text-sm hover:cursor-pointer border-neutral-700 hover:bg-neutral-700 hover:border-white ">
            Send message
          </Button>
        </div>

        <Textarea
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="bg-neutral-800 border-neutral-700 resize-none h-full"
        />
      </div>
    </div>
  );
}
