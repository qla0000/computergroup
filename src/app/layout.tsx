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
    const setAppHeight = () => {
      document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    };
    
    window.addEventListener('resize', setAppHeight);
    setAppHeight(); // Initial set
    
    return () => window.removeEventListener('resize', setAppHeight);
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
