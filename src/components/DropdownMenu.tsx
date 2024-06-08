"use client";

import React, { useState } from "react";
import Link from "next/link";

// shadcn.ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


// This is the dropdown menu that appears once clicking the burger menu icon
const Dropdown = () => {
  // Variable and hooks to toggle icons from burger menu icon to closing one
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex justify-start p-6 sticky top-0">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          {/* DropdownMenuTrigger is the "button" that triggers the menu */}
          <DropdownMenuTrigger asChild className=" bg-[#f2f2f2]/80 h-14 w-14 rounded-full flex items-center justify-center shadow-xl">
            <button
              onClick={handleToggleDropdown}
              className="focus:outline-none "
            >
              {isOpen ? (
                <div className="">
                  <div className=" w-7 h-0.5 bg-green_sid transform rotate-45"></div>
                  <div className=" w-7 h-0.5 bg-pink_sid transform -rotate-45"></div>
                </div>
              ) : (
                <div className="space-y-[0.3rem]">
                  <span className="block w-7 h-[0.2rem] bg-green_sid"></span>
                  <span className="block w-5 h-[0.18rem] bg-pink_sid"></span>
                  <span className="block w-6 h-[0.2rem] bg-green_sid"></span>
                </div>
              )}
            </button>
          </DropdownMenuTrigger>
          {/* Style DropdownMenuContent to style the whole container */}
          <DropdownMenuContent className="bg-[#f2f2f2]/90 h-screen w-screen mt-6">
            <div className="space-y-10 m-6">
              <div className="flex flex-row m-0 p-0">
                <DropdownMenuLabel>
                  <Link
                    className="text-slate-900 font-medium relative text-slate-900 font-medium line-gradient"
                    style={{ "--line-color": "#27D507" }}
                    href="/"
                  >
                    Home
                  </Link>
                </DropdownMenuLabel>
              </div>
              <div className="m-0 p-0 space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuLabel>
                    <Link
                      className="text-slate-900 font-medium relative text-slate-900 font-medium line-gradient"
                      style={{ "--line-color": "#FF69B4" }}
                      href="/bespoke-cakes"
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
                      className="text-slate-900 font-medium relative text-slate-900 font-medium line-gradient"
                      style={{ "--line-color": "#27D507" }}
                      href="/tarot-readings"
                    >
                      Tarot Readings
                    </Link>
                  </DropdownMenuLabel>
                </div>
              </div>
              <div className="flex flex-row">
                <DropdownMenuLabel>
                  <Link
                    className="text-slate-900 font-medium relative text-slate-900 font-medium line-gradient"
                    style={{ "--line-color": "#FF69B4" }}
                    href="/about-us"
                  >
                    About us
                  </Link>
                </DropdownMenuLabel>
              </div>
              <div className="flex flex-row">
                <DropdownMenuLabel>
                  <Link
                    className="text-slate-900 font-medium relative text-slate-900 font-medium line-gradient"
                    style={{ "--line-color": "#27D507" }}
                    href="/contacts"
                  >
                    Contact
                  </Link>
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
