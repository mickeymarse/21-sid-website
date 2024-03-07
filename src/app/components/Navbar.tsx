import React from 'react';

// shadcn.ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#9FC131] py-2 px-4 w-full max-h-20 opacity-95 sticky top-0 border-b border-gray-200">
      <div className="flex items-start w-40">
        <Avatar className="h-14 w-14">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>21 SID Logo</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-wrap m-0 p-0 items-center justify-center">
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm px-4 py-2 rounded-xl text-slate-900 font-medium hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Home
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm font-medium px-4 py-2 rounded-xl text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Bespoke Cakes
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm px-4 py-2 rounded-xl text-slate-900 font-medium hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Tarot Readings
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2">
          <button className="inline-block text-sm font-medium px-4 py-2 rounded-xl text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none">
            About us
          </button>
        </a>
        <a href="/" className="block mt-4 lg:inline-block lg:mt-0">
          <button className="inline-block text-sm px-4 py-2 rounded-xl font-medium text-slate-900 hover:bg-[#E55982] mt-4 lg:mt-0 shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Contacts
          </button>
        </a>
      </div>
      <div className="w-40">
        <a
          href="#"
          className="inline-block text-sm px-4 py-2 border rounded shadow-xl bg-[#E55982] text-slate-200 border-slate-700 font-medium mt-4 lg:mt-0"
        >
          <button>Download the app</button>
        </a>
      </div>
      {/* Download the app alternative */}
      {/* <div className="w-40">
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
      </div> */}
    </nav>
  );
};

export default Navbar;
