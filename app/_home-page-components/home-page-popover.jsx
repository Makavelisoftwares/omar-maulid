import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare } from "lucide-react";
import { EmailMe } from "./email-me";

export const HomePagePopOver = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
            <Button className='rounded-full bg-sky-500 text-white hover:bg-sky-500 h-[70px] w-[70px]'>
                <MessageSquare/>
            </Button>
        </PopoverTrigger>
        <PopoverContent>
            <EmailMe/>
        </PopoverContent>
      </Popover>
    </div>
  );
};
