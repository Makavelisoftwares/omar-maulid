import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Flag, Mail, Phone, User, Youtube } from "lucide-react";
import Link from "next/link";

export const EmailMe = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">About Information</CardTitle>
        {/* <CardDescription className="text-xs">
          Feel free to reach me using the below information
        </CardDescription> */}
        <CardContent className='space-y-1'>
          <div className="flex items-center text-xs">
            <div className="w-[50px]">
              <User />
            </div>
            <div className="text-xs font-bold">Omar Maulid</div>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-[50px]">
              <Flag />
            </div>
            <div className="text-xs font-bold">Kenyan</div>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-[50px]">
              <Mail />
            </div>
            <div className="text-xs font-bold">technerdke@gmail.com</div>
          </div>
          <div className="flex items-center text-xs">
            <div className="w-[50px]">
              <Phone />
            </div>
            <div className="text-xs font-bold">+254780679077</div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};
