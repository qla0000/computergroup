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
    "weboldal készítés",
    "webdesign",
    "webalkalmazás fejlesztés",
    "Harmony Design"
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
