import type { Metadata } from "next";

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