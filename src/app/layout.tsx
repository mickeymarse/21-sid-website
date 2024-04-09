
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';

import Header from './components/Header';

import Footer from "@/components/Footer";

import RainbowBg from "@/components/Rainbow_bg";



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
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 text-gray-950">
        <RainbowBg />
        <NavBar />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
