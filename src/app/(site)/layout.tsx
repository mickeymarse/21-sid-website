import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Hanken_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RainbowBg from "../../components/RainbowBg";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "21 SID",
  description: "21 SID website",
};

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`!scroll-smooth ${hankenGrotesk.variable} ${playfairDisplay.variable}`}>
      <body className="bg-gray-50 text-gray-950">
        <RainbowBg>
          <Navbar />
          <Header />

          {children}
          <Footer />
        </RainbowBg>
        <Analytics />
      </body>
    </html>
  );
}
