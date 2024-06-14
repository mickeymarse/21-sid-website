import React from "react";

export default function RainbowBg() {
  return (
    <>
      {/* left */}
      <div className="hidden lg:block">
        <div className=" rainbow_pink top-0 left-10"></div>
        <div className=" rainbow_green top-[45rem] left-10"></div>
        <div className=" rainbow_pink top-[85rem] left-10"></div>
      </div>

      {/* right */}
        <div className="rainbow_green sm:top-0 sm:right-10"></div>
        <div className="rainbow_pink top-[35rem] sm:top-[40rem] sm:right-10"></div>
        <div className="rainbow_green top-[60rem] sm:top-[80rem] sm:right-10"></div>
    </>
  );
}
