import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { FloatingNavBar } from "./_home-page-components/home-navbar";
import { HomePagePopOver } from "./_home-page-components/home-page-popover";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo-profile.jpg",
      href: "/logo-profile.jpg",
    },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />

        <div className="h-screen w-full   bg-black dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div>
            <FloatingNavBar />
          </div>
          <div className="fixed z-50 bottom-10 right-2 text-red-400">
            <HomePagePopOver/>
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
