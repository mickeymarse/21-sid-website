import React from "react";

export default function RainbowBg() {
  return (
    <>
      {/* left */}
      <div className="hidden sm:block">
        <div className=" rainbow_pink top-0"></div>
        <div className=" rainbow_green top-[45rem]"></div>
        <div className=" rainbow_pink top-[85rem]"></div>
      </div>

      {/* right */}
      <div className="sm:absolute sm:right-0">
        <div className="rainbow_green sm:top-0"></div>
        <div className="rainbow_pink top-[20rem]  sm:top-[40rem]"></div>
        <div className="rainbow_green top-[40rem] rainbow_green sm:top-[80rem]"></div>
      </div>
    </>
  );
}
