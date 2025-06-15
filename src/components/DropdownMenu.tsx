"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaInstagram } from "react-icons/fa6";

// This is the dropdown menu that appears once clicking the burger menu icon
const Dropdown = () => {
  // Variable and hooks to toggle icons from burger menu icon to closing one
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative block">
      <div className="flex justify-start m-4 mb-6">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          {/* DropdownMenuTrigger is the "button" that triggers the menu */}
          <DropdownMenuTrigger
            asChild
            className=" bg-[#f2f2f2]/10 h-12 w-12 rounded-full flex items-center justify-center shadow-xl"
          >
            <button
              onClick={handleToggleDropdown}
              className="focus:outline-none "
            >
              {isOpen ? (
                <div className="relative w-6 h-6">
                  <div className="absolute w-6 h-0.5 bg-green_sid transform rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute w-6 h-0.5 bg-pink_sid transform -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              ) : (
                <div className="space-y-[0.3rem]">
                  <span className="block w-6 h-[0.2rem] bg-green_sid"></span>
                  <span className="block w-4 h-[0.18rem] bg-pink_sid"></span>
                  <span className="block w-5 h-[0.2rem] bg-green_sid"></span>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          {/* Style DropdownMenuContent to style the whole container */}
          <DropdownMenuContent className="bg-[#f2f2f2] h-screen w-screen mt-4 border-none">
            <div className="space-y-10 m-6">
              <div className="flex flex-row m-0 p-0">
                <DropdownMenuLabel>
                  <Link
                    className="text-lg text-slate-900 font-normal relative  line-gradient-green"
                    href="/"
                    onClick={handleToggleDropdown}
                  >
                    Home
                  </Link>
                </DropdownMenuLabel>
              </div>
              <div className="m-0 p-0 space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuLabel>
                    <Link
                      className="text-lg text-slate-900 font-normal relative  line-gradient-pink"
                      href="/bespoke-cakes"
                      onClick={handleToggleDropdown}
                    >
                      Bespoke Cakes
                    </Link>
                  </DropdownMenuLabel>
                </div>
              </div>
              <div className="space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuLabel>
                    <Link
                      className="text-lg text-slate-900 font-normal relative  line-gradient-green"
                      href="/tarot-readings"
                      onClick={handleToggleDropdown}
                    >
                      Tarot Readings
                    </Link>
                  </DropdownMenuLabel>
                </div>
              </div>
              <div className="flex flex-row">
                <DropdownMenuLabel>
                  <Link
                    className="text-lg text-slate-900 font-normal relative   line-gradient-pink"
                    href="/about-us"
                    onClick={handleToggleDropdown}
                  >
                    About us
                  </Link>
                </DropdownMenuLabel>
              </div>
              <div className="flex flex-row">
                <DropdownMenuLabel>
                  <Link
                    className="text-lg text-slate-900 font-normal relative   line-gradient-green"
                    href="/contacts"
                    onClick={handleToggleDropdown}
                  >
                    Contact
                  </Link>
                </DropdownMenuLabel>
              </div>
              <div className="flex flex-row">
                <DropdownMenuLabel>
                  <section className="flex justify-start align-middle gap-7 relative">
                    <Link
                      href="https://www.instagram.com/21_tarot_and_coffee/"
                      target="_blank"
                    >
                      <FaInstagram className="text-pink_sid text-5xl hover:text-white hover:bg-pink_sid hover:rounded-md" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/laura_21-bakes/"
                      target="_blank"
                    >
                      <FaInstagram className="text-green_sid text-5xl hover:text-white hover:bg-green_sid hover:rounded-md" />
                    </Link>
                  </section>
                </DropdownMenuLabel>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Dropdown;
