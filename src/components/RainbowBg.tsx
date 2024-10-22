'use client';
import { useState, useEffect, useRef, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface RainbowBgProps {
  children: ReactNode;
}

export default function RainbowBg({ children }: RainbowBgProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(Math.max(contentRef.current.clientHeight, window.innerHeight));
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [pathname]);

  const renderRainbowElements = (side: 'left' | 'right') => {
    const elements = [];
    const maxHeight = Math.max(contentHeight, 3000); // Ensure a minimum height
    for (let i = 0; i * 30 < maxHeight; i++) {
      const color = i % 2 === 0 ? 'green' : 'pink';
      elements.push(
        <div
          key={`${side}-${i}`}
          className={`rainbow_${color} top-[${i * 30}rem] ${side}-0`}
          style={{ opacity: Math.max(0, 1 - i * 0.1) }} // Fade out gradually
        />
      );
    }
    return elements;
  };

  return (
    <div className='relative overflow-hidden min-h-screen'>
      <div ref={contentRef}>{children}</div>

      {/* white */}
      <div className='hidden lg:block'>
        {contentHeight > 0 && <div className='rainbow_white top-0'></div>}
      </div>

      {/* left */}
      <div className='hidden lg:block'>{contentHeight > 0 && renderRainbowElements('left')}</div>

      {/* right */}
      <div className='hidden lg:block'>{contentHeight > 0 && renderRainbowElements('right')}</div>

      {/* small screen */}
      <div className='block lg:hidden'>{contentHeight > 0 && renderRainbowElements('right')}</div>
    </div>
  );
}
