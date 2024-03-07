'use client';

import React, { useEffect, useState } from 'react';

// shadcn.ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// components
import NavigationButton from './NavigationButton';
import Dropdown from './DropdownMenu';

// Navbar component
const Navbar: React.FC = () => {
  // Variable and hooks to conditionally render navbar based on viewport size
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isVisible ? (
    // Larger screens
    <nav className="lg:flex items-center justify-between flex-wrap bg-[#9FC131] py-2 px-4 w-full lg:h-20 opacity-95 sticky top-0 border-b border-gray-200 hidden h-10">
      <div className="flex items-start w-40">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>21 SID Logo</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap m-0 p-0 items-center justify-center">
        <NavigationButton href="/" page="Home" />
        <NavigationButton href="/bespoke-cakes" page="Bespoke Cakes" />
        <NavigationButton href="/tarot-readings" page="Tarot Readings" />
        <NavigationButton href="/about-us" page="About us" />
        <NavigationButton href="/contacts" page="Contacts" />
      </div>
      {/* Check alternative button for app download */}
      <div className="flex w-40">
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 border rounded shadow-xl bg-[#E55982] text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0"
        >
          <button>Download the app</button>
        </a>
      </div>
    </nav>
  ) : (
    // Smaller screens
    <>
      <Dropdown />
    </>
  );
};

export default Navbar;

/* Download the app alternative */
/* <div className="lg:flex w-40 hidden">
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 border rounded shadow-xl bg-[#E55982] text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0"
        >
          <button className="rounded inline-flex items-center gap-2">
            <span>Get the app</span>
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
          </button>
        </a>
      </div> */
