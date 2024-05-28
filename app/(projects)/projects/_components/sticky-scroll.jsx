"use client";
import React from "react";
import { StickyScroll } from "@/components/aceternity-ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const content = [
  {
    title: "MAisomo LMS",
    description:
      "MAisomo is a cutting-edge Learning Management System (LMS) designed to revolutionize the educational experience for students, instructors, and administrators. Utilizing advanced AI technologies, Maisomo provides personalized content recommendations to enhance learning outcomes. The platform is built using modern technologies including Next.js 14, server actions, Node.js, Tailwind CSS, Shadcn UI, Auth.js, OpenAI, and UploadThing, ensuring a seamless and efficient user experience. Integration with GitHub facilitates collaborative development and version control. Whether you are managing course content, teaching, or learning, Maisomo offers a robust and dynamic environment tailored to meet the diverse needs of its users.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Link
          target="_blank"
          className="underline"
          href="https://maisomo-pi.vercel.app"
        >
          MAisomo
        </Link>
      </div>
    ),
  },
  {
    title: "internX",
    description:
      "internX is an innovative Internship Management System designed to streamline the process of managing internships for students, mentors, and administrators. The system is built using cutting-edge technologies including Next.js 14, server actions, Node.js, Tailwind CSS, Shadcn UI, Clerk for user management and authentication, and UploadThing. These technologies ensure a robust, secure, and user-friendly platform. With seamless integration via GitHub, internX supports collaborative development and efficient management, making it the ideal solution for all stakeholders in the internship process.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Link
          target="_blank"
          className="underline"
          href="https://internx-ims.vercel.app/"
        >
          internX
        </Link>
      </div>
    ),
  },
  {
    title: "Pydev",
    description:
      "PyDev is a powerful Integrated Development Environment (IDE) designed for Python programmers to practice, improve, and collaborate on their Python skills. With PyDev, users can save and edit code snippets, create forums, and share their work with a vibrant community of Python developers. This platform not only facilitates coding and learning but also fosters a collaborative environment where developers can exchange ideas, seek help, and grow together. PyDev is the go-to tool for anyone looking to enhance their Python programming skills while being part of a supportive and active community.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Link
          target="_blank"
          className="underline"
          href="https://pydev.vercel.app/"
        >
          Pydev
        </Link>
      </div>
    ),
  },
  {
    title: "Easeride",
    description:
      "EaseRide is an advanced Car Hire Management System that allows clients to effortlessly hire their desired vehicles and make payments via PayPal. Built with the latest technologies including Next.js 14, server actions, Node.js, Tailwind CSS, Shadcn UI, Auth.js, and UploadThing, EaseRide ensures a seamless, secure, and efficient user experience. The platform is designed to be highly scalable, accommodating the growing needs of users and businesses. Whether you are a client looking for a vehicle or a business managing a fleet, EaseRide provides a robust solution for all your car hire needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--rose-500))] flex items-center justify-center text-white">
        <Link
          target="_blank"
          className="underline"
          href="https://easeride.vercel.app/"
        >
          EaseRide
        </Link>
      </div>
    ),
  },

  {
    title: "About Me",
    description:
      "Hello! I'm Omar Maulid, a professional software engineer with a passion for creating innovative and efficient software solutions. With a diverse skill set spanning Python, JavaScript, PHP, Expo (React Native), React.js, Next.js, Node.js, Tailwind CSS, version control, HTML, and CSS, I bring a wealth of knowledge and experience to every project. Whether you're looking to develop a dynamic web application, a seamless mobile app, or robust backend systems, I have the expertise to turn your vision into reality. My proficiency in modern technologies ensures that your project will be built using the latest best practices, making it scalable, maintainable, and future-proof.I am dedicated to delivering high-quality code and exceptional user experiences, and my commitment to continuous learning ensures that I stay at the forefront of technological advancements. Let's collaborate to create something remarkable and drive your business forward. Get in touch with me today, and let's make your next project a success!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--amber-500))] flex items-center justify-center text-white">
        About Me
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 text-sm">
      <StickyScroll content={content} />
    </div>
  );
}
