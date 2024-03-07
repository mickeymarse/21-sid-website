'use client';

import React, { useEffect, useState } from 'react';

// icons
import { GiHouse } from 'react-icons/gi';
import { GiCakeSlice } from 'react-icons/gi';
import { GiCardJoker } from 'react-icons/gi';
import { GiInfo } from 'react-icons/gi';
import { MdPermContactCalendar } from 'react-icons/md';

// shadcn.ui components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Dropdown = () => {
  return (
    <div>
      <div className="flex justify-start p-4 py-10">
        {/* Burger menu */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="space-y-1 border-none">
              <span className="block w-5 h-0.5 bg-[#9FC131]"></span>
              <span className="block w-3 h-0.5 bg-[#E55982]"></span>
              <span className="block w-4 h-0.5 bg-[#9FC131]"></span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white h-screen border rounded-xl">
            <div className="space-y-10 m-6">
              <div className="flex flex-row m-0 p-0">
                <DropdownMenuItem>
                  <GiHouse />
                </DropdownMenuItem>
                <DropdownMenuLabel>Home</DropdownMenuLabel>
              </div>
              <div className="m-0 p-0 space-y-0">
                <div className="flex flex-row">
                  <DropdownMenuItem>
                    <GiCakeSlice />
                  </DropdownMenuItem>
                  <DropdownMenuLabel>Bespoke Cakes</DropdownMenuLabel>
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
                  <DropdownMenuLabel>Tarot Readings</DropdownMenuLabel>
                </div>
                <DropdownMenuItem className="flex flex-wrap">
                  Lorem Ipsum Yabba Dabba Doooooo
                </DropdownMenuItem>
              </div>
              <div className="flex flex-row">
                <DropdownMenuItem>
                  <GiInfo />
                </DropdownMenuItem>
                <DropdownMenuLabel>About us</DropdownMenuLabel>
              </div>
              <div className="flex flex-row">
                <DropdownMenuItem>
                  <MdPermContactCalendar />
                </DropdownMenuItem>
                <DropdownMenuLabel>Contact</DropdownMenuLabel>
              </div>
            </div>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Dropdown;
