import { CalendarClock, CalendarDays, GithubIcon, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TypewriterEffectDemo } from "./home-page-typewriter";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const HomePageAvatar = () => {
  const items = [
    {
      name: "Github",
      href: "https://github.com/makavelisoftwares",
      icon: <GithubIcon />,
    },
    {
      name: "Whatsapp",
      href: "https://wa.me/254780679077",
      icon: <IconBrandWhatsapp />,
    },
  ];
  return (
    <div className="cursor-default  ">
      <Card className="w-[450px]">
        <CardHeader className=" ">
          <CardTitle className="flex items-center space-x-3 text-sm ">
            <div>
              <Avatar>
                <AvatarImage src="/logo-profile.jpg" className='object-cover' alt="image" />
                <AvatarFallback>Image</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <div className="tracking-widest">Omar Maulid</div>
              <div className="text-xs text-zinc-500 tracking-wider">
                @software engineer
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <div>
            <TypewriterEffectDemo/>
          </div>
        </CardContent>

        <CardFooter className='w-full flex items-center justify-between'>
          <div className="flex items-center space-x-3 text-xs">
            <CalendarClock />
            <div>started 2019</div>
          </div>

          <div className="flex items-center space-x-4">
            {items?.map((item, i) => (
              <Link target="_blank" key={i} href={item?.href}>
                <span>{item?.icon}</span>
              </Link>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
