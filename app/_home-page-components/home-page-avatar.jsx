import { CalendarDays, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { TypewriterEffectDemo } from "./home-page-typewriter";

export const HomePageAvatar = () => {
  return (
    <div>
      <HoverCard>
        <HoverCardTrigger>
          <TypewriterEffectDemo />
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="text-xs">
            The React Framework – created and maintained by @vercel.
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
