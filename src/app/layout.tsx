import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";
import { Toaster } from "react-hot-toast";
import ViewportHandler from "@/components/ViewportHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="darkreader-lock" />
      </head>
      <body>
        <ViewportHandler />
        <SkipToContent />
        <Navbar />
        <main id="main-content">{children}</main>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
