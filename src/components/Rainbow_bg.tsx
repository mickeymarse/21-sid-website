import React from "react";

export default function RainbowBg() {
  return (
    <>
      {/* left */}
      <div className="hidden sm:visible">
        <div className="hidden sm:visible sm:rainbow_pink sm:top-0"></div>
        <div className="hidden sm:visible sm:rainbow_green sm:top-[45rem]"></div>
        <div className="hidden sm:visible sm:rainbow_pink sm:top-[85rem]"></div>
      </div>

      {/* right */}
      <div className="absolute right-0">
        <div className="rainbow_green sm:top-0"></div>
        <div className="top-[20rem] rainbow_pink sm:top-[40rem]"></div>
        <div className="top-[40rem] rainbow_green sm:top-[80rem]"></div>
      </div>
    </>
  );
}
