"use client";
import { TypewriterEffect } from "@/components/aceternity-ui/typewriter-effect";
import { useEffect, useState } from "react";

export function TypewriterEffectDemo() {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  });

  if (!isMounted) {
    return null;
  }
  const words = [
    {
      text: "Hover",
      className: "text-white dark:text-white",
    },
    {
      text: "Me",
      className: "text-white dark:text-white",
    },
    {
      text: "..",
      className: "text-white dark:text-white",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffect words={words} />
    </div>
  );
}
