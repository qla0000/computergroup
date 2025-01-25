"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ViewportHandler = () => {
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    
    // Késleltetett frissítés az iOS Safari számára
    window.addEventListener('resize', () => {
      const timeout = setTimeout(setViewportHeight, 50);
      return () => clearTimeout(timeout);
    });

    // Orientációváltás kezelése
    window.addEventListener('orientationchange', () => {
      const timeout = setTimeout(setViewportHeight, 50);
      return () => clearTimeout(timeout);
    });
  }, []);

  return null;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-primary-950 min-h-screen text-neutral-50 antialiased`}
      >
        <SkipToContent />
        <main id="main-content">
          <Navbar />
          {children}
        </main>
        <Toaster position="bottom-right" />
        <ViewportHandler />
      </body>
    </html>
  );
}
