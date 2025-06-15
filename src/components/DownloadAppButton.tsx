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
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

export default function DownloadAppButton() {
  return (
    <div className="w-40">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="inline-block text-sm px-4 py-2 border rounded-full md:rounded shadow-xl bg-pink_sid/70 hover:bg-green_sid/70 text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Download the app
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-sm md:min-w-lg">
          <DialogHeader>
            <DialogTitle>It's not ready yet!</DialogTitle>
            <DialogDescription>
              In the meantime, you can follow us to receive updates.
            </DialogDescription>
          </DialogHeader>
          <section className="flex justify-start align-middle gap-7">
            <Link
              href="https://www.instagram.com/21_tarot_and_coffee/"
              target="_blank"
            >
              <FaInstagram className="text-pink_sid text-5xl hover:text-white hover:bg-pink_sid hover:rounded-md" />
            </Link>
            <Link
              href="https://www.instagram.com/lauras_21_cakes/"
              target="_blank"
            >
              <FaInstagram className="text-green_sid text-5xl hover:text-white hover:bg-green_sid hover:rounded-md" />
            </Link>
          </section>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
