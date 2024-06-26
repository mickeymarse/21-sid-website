import React from "react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="m-5 grid sm:grid-rows-2 gap-y-16 h-56">
{/* /////////////////// */}
      <section className="m-5 text-center grid grid-cols-1 gap-y-4 sm:grid-cols-3 justify-evenly content-start">
      {/* /////////////////// */}
        <article className="grid justify-items-center">
          <p className="text-lg font-bold">21 SID</p>
          <br />
          <Image
          src="/health-safety.png"
          alt="Food Hygiene Rating badge showing a rate of 5 out of 5, meaning Very Good."
          className="w-32"
          width={300}
          height={300}
        />
        </article>
      {/* /////////////////// */}
        <p className="whitespace-pre-wrap ">{`21 Sidworth Street\nLondon, UK\nE8 3SD`}</p>
      {/* /////////////////// */}
        <article>
          <p className="whitespace-pre-wrap ">{`Mon - Fri: 8am - 6pm\nSat: 9am - 6pm\nSun: 10am - 4pm`}</p>
          <br />
          <p className="whitespace-pre-wrap">{`+447777777777\nexample@email.com`}</p>
        </article>
      </section>
{/* /////////////////// */}
        <p className="text-slate-400 self-end whitespace-pre-wrap text-center">{`Copyright ©2024 The Busy Badger Ltd. All rights reserved.\nPhotographs by X  Illustrations by Y`}</p>
    </footer>
  );
}
