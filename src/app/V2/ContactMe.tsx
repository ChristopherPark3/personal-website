"use client";
import { useState } from "react";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";

export default function ContactMe() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className=" font-medium">
      <Input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}
