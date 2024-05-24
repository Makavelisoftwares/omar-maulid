import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const EmailMe = () => {
  return (
    <div>
      <div>
        <Label>Your Email</Label>
        <Input placeholder='example@email.com' />
      </div>

      <div>
        <Label>Your Message</Label>
        <Textarea />
      </div>

      <div className="mt-4 w-full">
        <Button className='w-full'>Submit Message</Button>
      </div>
    </div>
  );
};
