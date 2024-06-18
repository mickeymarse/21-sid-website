import React from 'react';

import Image from 'next/image';

// shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      {/* <Avatar className='w-20 h-20 my-6 border border-slate-700'>
        <AvatarImage src='logo.png' />
        <AvatarFallback>21 SID</AvatarFallback>
      </Avatar>
      <h1 className='mb-2 text-xl font-medium text-slate-800'>21 SID</h1>*/}
      <article className='h-auto max-w-full flex justify-center'>
        <Image
          className='h-auto max-w-full rounded-lg'
          src='/logo-removebg.png'
          alt=''
          width={350}
          height={350}
        />
      </article>
    </section>
  );
};

export default Header;
