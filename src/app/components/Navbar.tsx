import React from 'react';

// shadcn.ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#9FC131] py-2 px-4 w-full max-h-20 opacity-95 sticky top-0">
      <div className="flex items-start w-40">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>21 SID Logo</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap m-0 p-0 items-center justify-center">
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm px-4 py-2 rounded-xl text-slate-900 font-medium hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl">
            Home
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm font-medium px-4 py-2 rounded-xl text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl">
            Bespoke Cakes
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm px-4 py-2 rounded-xl text-slate-900 font-medium hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl">
            Tarot Readings
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm font-medium px-4 py-2 rounded-xl text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl">
            About us
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0">
          <button className="inline-block text-sm px-4 py-2 rounded-xl font-medium text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl">
            Contacts
          </button>
        </a>
      </div>
      <div className="w-40">
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 border rounded shadow-xl bg-[#E55982] text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0"
        >
          Download the app
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
