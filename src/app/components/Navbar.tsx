import React from 'react';

// shadcn.ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-500 p-6 w-full">
      <div className="flex items-start">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>21 SID Logo</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex m-0 p-0 items-center justify-center">
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
        >
          Home
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
        >
          Bespoke Cakes
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
        >
          Tarot Readings
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
        >
          About us
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-slate-900 hover:text-white mr-4"
        >
          Contacts
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 border rounded text-white border-white mt-4 lg:mt-0"
        >
          Download the app
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
