import Link from 'next/link';
import React from 'react';

interface NavigationButton {
  href: string;
  page: string;
  color: 'green' | 'pink';
}


const NavigationButton: React.FC<NavigationButton> = ({ href, page, color }) => {

  const colorVariants = {
    green: 'hover:bg-green_sid/60',
    pink: 'hover:bg-pink_sid/60',
  }

  return (
    <div>
      <Link
        href={href}
        className={`block hover:no-underline mt-4 lg:inline-block lg:mt-0 mr-6 text-[1.2rem] font-normal px-4 py-2 rounded-xl text-slate-900 font-medium  shadow-m hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none bg-[#f2f2f2] ${colorVariants[color]}`}
        >
        {page}
      </Link>
    </div>
  );
};

export default NavigationButton;
