'use client';

import React from 'react';

// shadcn.ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// components
import NavigationButton from './NavigationButton';
import Dropdown from './DropdownMenu';

// Navbar component
const Navbar: React.FC = () => {
  return (
    <div className='mb-4'>
      {/* Larger screens */}
      <nav className='sticky top-0 hidden lg:flex items-center justify-between flex-wrap  py-2 px-8 w-full h-21'>
      {/* bg-[#f2f2f2]/80 */}
        <div className='w-40'>
          <Avatar className='h-14 w-14 border border-slate-700'>
            <AvatarImage src='logo.png' />
            <AvatarFallback >21 SID</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex flex-wrap m-0 p-0 items-center justify-center'>
          <NavigationButton href='/' page='Home' color='green'/>
          <NavigationButton href='/bespoke-cakes' page='Bespoke Cakes' color='pink'/>
          <NavigationButton href='/tarot-readings' page='Tarot Readings' color='green'/>
          <NavigationButton href='/about-us' page='About us' color='pink'/>
          <NavigationButton href='/contacts' page='Contacts' color='green'/>
        </div>
        <div className='w-40  '>
          <a
            href='#'
            className='inline-block text-sm px-4 py-2 border rounded shadow-xl bg-pink_sid/70 text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
          >
            Download the app
          </a>
        </div>
      </nav>

      {/* Smaller screens */}
      <div className='lg:hidden'>
        <Dropdown />
      </div>
    </div>
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
