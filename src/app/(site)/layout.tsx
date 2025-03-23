import type { Metadata } from 'next';
import './globals.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RainbowBg from '../../components/RainbowBg';
import Navbar from '../../components/Navbar';

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
        <RainbowBg>
          <Navbar />
          <Header />

          {children}
          <Footer />
        </RainbowBg>
      </body>
    </html>
  );
}
