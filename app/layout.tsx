import type React from "react";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { businessSchema, websiteSchema } from "./schema";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sugarblooms.co.uk"),
  verification: {
    google: "google-site-verification",
  },
  title:
    "Sugar Blooms | Handcrafted Cupcakes Derry – Boutique Pink Cupcake Bakery",
  description:
    "Sugar Blooms is a Derry-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic. Order freshly baked cupcakes for birthdays, weddings, and special occasions in Northern Ireland.",
  keywords: [
    "Derry cupcakes",
    "handcrafted cupcakes",
    "bakery Derry",
    "custom cupcakes Derry",
    "Sugar Blooms",
    "order cupcakes online Derry",
    "birthday cupcakes Derry",
    "wedding cupcakes Derry",
    "cupcakes Northern Ireland",
    "boutique cupcakes",
    "artisan cupcakes",
    "special occasion cupcakes",
    "best cupcakes Derry",
    "Northern Ireland bakery",
    "custom cake orders Derry",
    "sugarblooms",
    "sugarbloomsbakery",
    "pink cupcakes Derry",
    "luxury cupcakes Northern Ireland",
  ],
  alternates: {
    canonical: "https://sugarblooms.co.uk",
  },
  openGraph: {
    title:
      "Sugar Blooms | Handcrafted Cupcakes Derry – Boutique Pink Cupcake Bakery",
    description:
      "Sugar Blooms is a Derry-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
    url: "https://sugarblooms.co.uk",
    siteName: "Sugar Blooms",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/website-banner.png",
        width: 1200,
        height: 630,
        alt: "Sugar Blooms - Handcrafted Cupcakes Derry",
      },
      {
        url: "/sugarblooms.png",
        width: 512,
        height: 512,
        alt: "Sugar Blooms Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sugar Blooms | Handcrafted Cupcakes Derry – Boutique Pink Cupcake Bakery",
    description:
      "Sugar Blooms is a Derry-based bakery specialising in handcrafted cupcakes, custom orders, and sweet treats made with love, sprinkles, and a touch of magic.",
    images: ["/website-banner.png"],
  },
  icons: {
    icon: [
      { url: "/sugarblooms.png", type: "image/png", sizes: "48x48" },
      { url: "/sugarblooms.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: [{ url: "/sugarblooms.png" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
