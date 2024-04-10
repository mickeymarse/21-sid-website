import React from 'react';

export default function Footer() {
  return (
    <footer className='m-5 grid grid-rows-2 h-56'>
      <section className='m-5 grid grid-cols-3 place-items-center justify-evenly'>
        <article>
          <p className='text-lg font-bold'>21 SID</p>
        </article>

        <p className='whitespace-pre-wrap'>{`21 Sidworth Street\nLondon, UK\nE8 3SD`}</p>
        <article>
          <p className='whitespace-pre-wrap'>{`Mon - Fri: 8am - 6pm\nSat: 9am - 6pm  Sun: 10am - 4pm`}</p>
          <br />
          <p className='whitespace-pre-wrap'>{`+447777777777\nexample@email.com`}</p>
        </article>
      </section>
      <section className='m-5 grid grid-cols-3 place-items-center justify-evenly'>
        <img
          src='health-safety.png'
          alt='Food Hygiene Rating badge showing a rate of 5 out of 5, meaning Very Good.'
          className='w-32'
        />
        <p className='text-slate-400 self-end whitespace-pre-wrap'>{`Copyright ©2024 The Busy Badger Ltd. All rights reserved.\nPhotographs by X  Illustrations by Y`}</p>
      </section>
    </footer>
  );
}
