import Link from 'next/link';
import React from 'react';

interface NavigationButton {
  href: string;
  page: string;
}

const NavigationButton: React.FC<NavigationButton> = ({ href, page }) => {
  return (
    <div>
      <Link
        href={href}
        className="block mt-4 lg:inline-block lg:mt-0 mr-2 text-sm px-4 py-2 rounded-xl text-slate-900 font-medium hover:bg-[#E55982] shadow-xl hover:shadow-xl transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        {page}
      </Link>
    </div>
  );
};

export default NavigationButton;
