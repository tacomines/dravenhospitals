import type { Metadata } from "next";

import { siteConfig } from "@/config/siteConfig";

export const seoConfig: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Draven Hospitals",
    "Healthcare",
    "Hospital",
    "Medical Services",
    "Emergency Care",
    "Patient Care",
  ],

  openGraph: {
    title: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    siteName: siteConfig.name,

    images: [
      {
        url: "/images/seo/og-image.jpg",

        width: 1200,

        height: 630,

        alt: siteConfig.name,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description,

    images: ["/images/seo/og-image.jpg"],
  },

  robots: {
    index: true,

    follow: true,
  },
};