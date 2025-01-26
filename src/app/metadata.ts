import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Harmony Design",
    template: "%s | Harmony Design",
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
    "Harmony Design",
    "weboldal",
    "webshop",
    "webshop fejlesztés",
    "weboldal fejlesztés",
    "weboldal fejlesztő",
    "webshop fejlesztő",
    "egyedi weboldal",
    "reszponzív weboldal",
    "modern weboldal",
    "webalkalmazás",
    "webalkalmazás fejlesztés",
    "webes alkalmazás",
    "webdesign",
    "webfejlesztő",
    "webtervezés",
    "webprogramozás",
    "SEO optimalizálás",
    "teljesítmény optimalizálás",
    "mobilbarát weboldal",
    "e-commerce",
    "online bolt",
    "online értékesítés",
    "digitális megoldások",
    "vállalati weboldal",
    "céges weboldal",
  ],
  
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://yourdomain.com",
    siteName: "Harmony Design",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harmony Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@harmonydesign",
    creator: "@harmonydesign",
  },
  robots: {
    index: true,
    follow: true,
  },
};
