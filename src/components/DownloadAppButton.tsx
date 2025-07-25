import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SocialLinks from "./SocialLinks";

export default function DownloadAppButton() {
  return (
    <div className="w-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="inline-block text-sm px-4 py-2 border rounded-full md:rounded shadow-xl bg-pink_sid/70 hover:bg-green_sid/70 hover:cursor-pointer text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Download the app
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm md:max-w-md">
          <DialogHeader>
            <DialogTitle>{`It\'s not ready yet!`}</DialogTitle>
            <DialogDescription>
              In the meantime, you can follow us to receive updates
              <br/>
              or
              <br/>
              leave us a <a href="https://maps.app.goo.gl/9DoGYp21NnQ8h4z19" target="_blank" className="underline hover:text-pink_sid">Google review</a>.
            </DialogDescription>
          </DialogHeader>
          <SocialLinks />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" className="hover:cursor-pointer">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
