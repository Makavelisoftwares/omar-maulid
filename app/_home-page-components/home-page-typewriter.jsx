"use client";
import { TypewriterEffect } from "@/components/aceternity-ui/typewriter-effect";
import { useEffect, useState } from "react";

export function TypewriterEffectDemo() {
  const [isMounted, setisMounted] = useState(false);

  const words = [
    {
      text: "Hello! I’m Omar Maulid, a passionate Software Engineer with over 3 years of hands-on experience in crafting innovative software solutions. My journey in software development has equipped me with a diverse skill set, enabling me to turn complex problems into seamless digital experiences.",
      className: "text-black text-nowrap text-sm dark:text-black",
    },
  ];

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-center  justify-center ">
      <TypewriterEffect words={words} />
    </div>
  );
}
