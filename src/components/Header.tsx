import Image from 'next/image';
import { ReactElement } from 'react';

export default function Header():ReactElement {
  return (
    <section className='flex flex-col items-center justify-center -mb-10 h-auto max-w-full '>
        <Image
          className='h-auto max-w-full rounded-lg'
          src='/logo.png'
          alt='21 Sid logo'
          width={350}
          height={350}
        />
    </section>
  );
};