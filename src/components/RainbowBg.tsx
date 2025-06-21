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
    }, [pathname]);

    return (
        <div className="relative overflow-hidden min-h-screen">
            <div ref={contentRef}>{children}</div>

            {/* white top */}
            <div className="hidden lg:block">
                {contentHeight > 0 && (
                    <>
                        <div className="rainbow_white top-0 right-0 left-0"></div>
                    </>
                )}
            </div>

            {/* left */}
            <div className="hidden lg:block">
                {contentHeight > 0 && (
                    <>
                        {contentHeight > 380 && (
                            <div className="rainbow_green top-120 left-0"></div>
                        )}
                        {contentHeight > 860 && (
                            <div className="rainbow_pink top-240 left-0"></div>
                        )}
                        {contentHeight > 1540 && (
                            <div className="rainbow_green top-360 left-0  "></div>
                        )}
                        {contentHeight > 2020 && (
                            <div className="rainbow_pink top-480 left-0  "></div>
                        )}
                    </>
                )}
            </div>

            {/* right */}
            <div className="hidden lg:block">
                {contentHeight > 0 && (
                    <>
                        {contentHeight > 380 && (
                            <div className="rainbow_pink top-120 right-0"></div>
                        )}
                        {contentHeight > 860 && (
                            <div className="rainbow_green top-240 right-0"></div>
                        )}
                        {contentHeight > 1540 && (
                            <div className="rainbow_pink top-360 right-0  "></div>
                        )}
                        {contentHeight > 2020 && (
                            <div className="rainbow_green top-480 right-0  "></div>
                        )}
                    </>
                )}
            </div>

            {/* small screen */}
            <div className="block lg:hidden">
                {contentHeight > 0 && (
                    <>
                        <div className="rainbow_white  top-0 right-1/12"></div>
                        {contentHeight > 380 && (
                            <div className="rainbow_pink  top-120 right-1/12 "></div>
                        )}
                        {contentHeight > 860 && (
                            <div className="rainbow_green top-240 right-1/12 "></div>
                        )}
                        {contentHeight > 1540 && (
                            <div className="rainbow_pink  top-360 right-1/12 "></div>
                        )}
                        {contentHeight > 2020 && (
                            <div className="rainbow_green top-480 right-1/12  "></div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
