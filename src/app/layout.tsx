import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import RainbowBg from '@/components/Rainbow_bg';



const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '21 SID',
  description: '21 SID website',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className='bg-gray-50 text-gray-950'>
        <RainbowBg />
        <Navbar />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
