"use client";
import { useState } from "react";
import { Input1 } from "../components/Input";
import { Textarea } from "../components/Textarea";
import Button from "../components/Button";

export default function ContactMe() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="flex flex-col font-medium p-8 gap-4">
      <h1 className="text-3xl text-gray-200">Contact me</h1>
      <Input1
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="bg-neutral-800 border-neutral-700 text-gray-200 active:border-neutral-700"
      />

      <Textarea
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        className="bg-neutral-800 border-neutral-700 resize-none "
      />
      <Button className="text-gray-200 text-medium text-sm hover:cursor-pointer border-neutral-700 hover:bg-neutral-700 hover:border-white ">Send message</Button>
    </div>
  );
}
