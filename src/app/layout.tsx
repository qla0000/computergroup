import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SkipToContent from "@/components/ui/SkipToContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digitális Megoldások a Jövőért",
    template: "%s | Cégnév",
  },
  description:
    "Modern webalkalmazások fejlesztése, amelyek előreviszik vállalkozását",
  keywords: [
    "webfejlesztés",
    "frontend",
    "backend",
    "UI/UX",
    "React",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://yourdomain.com",
    siteName: "Cégnév",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cégnév",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cegnev",
    creator: "@cegnev",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </body>
    </html>
  );
}
