import React from 'react';

import Image from 'next/image'


const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className="h-auto w-full flex justify-center">
        <Image
            className="h-auto max-w-full"
            src="/logo-removebg.png"
            alt=""
            width={500}
            height={500}
          />
        </div>
      <p className='flex flex-wrap text-center max-w-xl text-slate-800 mx-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  );
};

export default Header;
