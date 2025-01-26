import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://computergroup.vercel.app"),
  title: {
    default: "Harmony Design | Weboldal és Webáruház Készítés Szegeden",
    template: "%s | Harmony Design",
  },
  description: "Értékesítést segítő, modern weboldalak és webáruházak készítése. Testre szabott megoldások, reszponzív design és SEO optimalizálás. Kérjen árajánlatot még ma!",
  keywords: [
    "webfejlesztés",
    "weboldal készítés",
    "webdesign",
    "webalkalmazás fejlesztés",
    "Harmony Design",
    "Szeged",
    "weboldal",
    "reszponzív weboldal",
    "egyedi weboldal",
    "modern webdesign",
    "SEO optimalizálás",
    "keresőoptimalizálás",
    "webfejlesztő Szeged",
    "webes megoldások",
    "honlap készítés",
    "weboldal karbantartás",
    "webfejlesztő cég",
    "professzionális weboldal",
    "mobilbarát weboldal",
    "e-commerce fejlesztés",
    "webshop készítés"
  ],
  
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://computergroup.vercel.app",
    siteName: "Harmony Design",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Harmony Design | Weboldal és Webáruház Készítés Szegeden",
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
