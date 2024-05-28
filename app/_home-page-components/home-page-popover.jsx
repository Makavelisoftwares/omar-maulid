import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare, UserCircle } from "lucide-react";
import { EmailMe } from "./email-me";

export const HomePagePopOver = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
            <Button className='rounded-full bg-sky-500 text-white hover:bg-sky-500 h-[50px] w-[50px]'>
                <UserCircle/>
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <EmailMe/>
        </PopoverContent>
      </Popover>
    </div>
  );
};
