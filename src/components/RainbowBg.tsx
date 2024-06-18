"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface RainbowBgProps {
  children: ReactNode;
}

export default function RainbowBg({ children }: RainbowBgProps) {
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
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
            <div className="rainbow_pink absolute top-0 left-10"></div>
            {contentHeight > 720 && (
              <div className="rainbow_green absolute top-[45rem] left-10"></div>
            )}
            {contentHeight > 1360 && (
              <div className="rainbow_pink absolute top-[85rem] left-10"></div>
            )}
          </>
        )}
      </div>

      {/* right */}
      <div className="block">
        {contentHeight > 0 && (
          <>
            <div className="rainbow_green absolute top-0 lg:right-10"></div>
            {contentHeight > 560 && (
              <div className="rainbow_pink absolute top-[35rem] top-[40rem] lg:right-10"></div>
            )}
            {contentHeight > 960 && (
              <div className="rainbow_green absolute top-[60rem] top-[80rem] lg:right-10"></div>
            )}
            {contentHeight > 1360 && (
              <div className="rainbow_pink absolute top-[90rem] top-[120rem] lg:right-10"></div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
