"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface RainbowBgProps {
  children: ReactNode;
}

export default function RainbowBg({ children }: RainbowBgProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [contentHeight, setContentHeight] = useState(0);

  const pathname = usePathname();

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [pathname]); // Depend on router.events for useEffect dependencies

  return (
    <div className="relative">
      <div ref={contentRef}>{children}</div>

      {/* left */}
      <div className="hidden lg:block">
        {contentHeight > 0 && (
          <>
            <div className="rainbow_pink   top-0 left-0"></div>
            {contentHeight > 720 && (
              <div className="rainbow_green  top-[45rem] left-0"></div>
            )}
            {contentHeight > 1360 && (
              <>
              <div className="rainbow_pink  top-[85rem] left-0"></div>
              <div className="rainbow_green  top-[120rem] left-0  "></div>
              </>
            )}
          </>
        )}
      </div>

      {/* right */}
      <div className="block">
        {contentHeight > 0 && (
          <>
            <div className="rainbow_green  top-0 right-1/12  lg:right-0"></div>
            {contentHeight > 560 && (
              <div className="rainbow_pink  top-[35rem] lg:top-[40rem] right-1/12  lg:right-0"></div>
            )}
            {contentHeight > 960 && (
              <div className="rainbow_green top-[60rem] lg:top-[80rem] right-1/12  lg:right-0"></div>
            )}
            {contentHeight > 1360 && (
              <div className="rainbow_pink  top-[90rem] lg:top-[120rem] right-1/12  lg:right-0"></div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
