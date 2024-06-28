import React from 'react';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bottom-0 w-full bg-gray-50 bg-opacity-40 shadow-inner px-16 py-8'>
      {/* Container for the entire footer content */}
      <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
        {/* First article */}
        <article className='flex flex-col items-center m-5 mt-8 text-center'>
          <p className='text-lg font-bold'>21 SID</p>
          <br />
          <Image
            src='/health-safety.png'
            alt='Food Hygiene Rating badge showing a rate of 5 out of 5, meaning Very Good.'
            className='w-32'
            width={300}
            height={300}
          />
        </article>

        {/* Address */}
        <p className='m-5 mt-8 text-center whitespace-pre-wrap sm:mt-8'>
          {`21 Sidworth Street\nLondon, UK\nE8 3SD`}
        </p>

        {/* Second article */}
        <article className='flex flex-col items-center m-5 mt-8 text-center'>
          <p className='whitespace-pre-wrap'>{`Mon - Fri: 8am - 6pm\nSat: 9am - 6pm\nSun: 10am - 4pm`}</p>
          <br />
          <p className='whitespace-pre-wrap'>{`+447777777777\nexample@email.com`}</p>
        </article>
      </div>

      {/* Copyright notice */}
      <p className='text-slate-400 my-5 text-center whitespace-pre-wrap'>
        {`Copyright ©2024 The Busy Badger Ltd. All rights reserved.\nPhotographs by X  Illustrations by Y`}
      </p>
    </footer>
  );
}
