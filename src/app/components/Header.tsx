import React from 'react';

// shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <Avatar className="w-20 h-20 my-6">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>21 SID</AvatarFallback>
      </Avatar>
      <h1 className="mb-2 text-xl font-medium text-slate-800">21 SID</h1>
      <p className="flex flex-wrap text-center max-w-xl text-slate-800 mx-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Header;
