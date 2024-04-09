import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';

import Header from './components/Header';


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
    <html lang="en">
      <body className={inter.className}>

        <Navbar />

        <Header />

        {children}
      </body>
    </html>
  );
}
