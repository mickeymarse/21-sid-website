"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavigationButton from "./NavigationButton";
import Dropdown from "./DropdownMenu";
import DownloadAppButton from "./DownloadAppButton";

const Navbar: React.FC = () => {
  return (
    <div className="mb-4">
      {/* Larger screens */}
      <nav className="sticky top-0 hidden lg:flex items-center justify-between flex-wrap  py-2 px-8 w-full h-21">
        {/* bg-[#f2f2f2]/80 */}
        <div className="w-40">
          <Avatar className="h-14 w-14 border border-slate-700">
            <AvatarImage src="logonoline.png" />
            <AvatarFallback>21 SID</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-wrap m-0 p-0 items-center justify-center">
          <NavigationButton href="/" page="Home" color="green" />
          <NavigationButton
            href="/bespoke-cakes"
            page="Bespoke Cakes"
            color="pink"
          />
          <NavigationButton
            href="/tarot-readings"
            page="Tarot Readings"
            color="green"
          />
          <NavigationButton href="/about-us" page="About us" color="pink" />
          <NavigationButton href="/contacts" page="Contacts" color="green" />
        </div>
        <DownloadAppButton />
      </nav>

      {/* Smaller screens */}
      <div className="lg:hidden flex justify-between">
        <Dropdown />
        <DownloadAppButton />
      </div>
    </div>
  );
};

export default Navbar;
