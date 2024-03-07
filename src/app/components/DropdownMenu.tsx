'use client';

import React, { useState } from 'react';

// icons
import { GiHouse } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import { GiCardJoker } from 'react-icons/gi';
import { GiInfo } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';

// closing icon for dropdown menu
import { IoMdCloseCircleOutline } from 'react-icons/io';

// shadcn.ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

// This is the dropdown menu that appears once clicking the burger menu icon
const Dropdown = () => {
  // Variable and hooks to toggle icons from burger menu icon to closing one
  // Currently NOT working
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-start p-4 py-10">
        <DropdownMenu>
          <DropdownMenuTrigger onClick={handleToggleDropdown}>
            {isOpen ? (
              <IoMdCloseCircleOutline />
            ) : (
              <div className="space-y-1 border-none">
                <span className="block w-5 h-0.5 bg-[#9FC131]"></span>
                <span className="block w-3 h-0.5 bg-[#E55982]"></span>
                <span className="block w-4 h-0.5 bg-[#9FC131]"></span>
              </div>
            )}
          </DropdownMenuTrigger>
          {/* Style DropdownMenuContent to style the whole container */}
          <DropdownMenuContent className="bg-white h-screen border rounded-xl">
            <div className="space-y-10 m-6">
              <div className="flex flex-row m-0 p-0">
                <DropdownMenuItem>
                  <GiHouse />
                </DropdownMenuItem>
                <DropdownMenuLabel>
                  <Link href="/">Home</Link>
                </DropdownMenuLabel>
              </div>
              <div className="m-0 p-0 space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuItem>
                    <GiCakeSlice />
                  </DropdownMenuItem>
                  <DropdownMenuLabel>
                    <Link href="/bespoke-cakes">Bespoke Cakes</Link>
                  </DropdownMenuLabel>
                </div>
                <DropdownMenuItem className="flex flex-wrap">
                  Lorem Ipsum Yabba Dabba Doooooo
                </DropdownMenuItem>
              </div>
              <div className="space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuItem>
                    <GiCardJoker />
                  </DropdownMenuItem>
                  <DropdownMenuLabel>
                    <Link href="/tarot-readings">Tarot Readings</Link>
                  </DropdownMenuLabel>
                </div>
                <DropdownMenuItem className="flex flex-wrap">
                  Lorem Ipsum Yabba Dabba Doooooo
                </DropdownMenuItem>
              </div>
              <div className="flex flex-row">
                <DropdownMenuItem>
                  <GiInfo />
                </DropdownMenuItem>
                <DropdownMenuLabel>
                  <Link href="/about-us">About us</Link>
                </DropdownMenuLabel>
              </div>
              <div className="flex flex-row">
                <DropdownMenuItem>
                  <MdPermContactCalendar />
                </DropdownMenuItem>
                <DropdownMenuLabel>
                  <Link href="/contacts">Contact</Link>
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
