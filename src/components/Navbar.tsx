import NavigationButton from "./NavigationButton";
import Dropdown from "./DropdownMenu";
import DownloadAppButton from "./DownloadAppButton";
import Image from "next/image";
import { ReactElement } from "react";

export default function Navbar(): ReactElement {
  return (
    <div className="mb-4">
      {/* Larger screens */}
      <nav className="sticky top-0 hidden lg:flex items-center justify-between flex-wrap  py-2 px-8 w-full h-21">
        {/* bg-[#f2f2f2]/80 */}
        <div className="w-40">
          <Image
            className="h-auto max-w-full rounded-full border-1 border-gray-900 border-solid"
            src="/logonoline.png"
            alt="21 Sid logo surrounded in a black circle."
            width={55}
            height={55}
          />
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
