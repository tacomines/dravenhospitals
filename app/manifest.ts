import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Draven Hospitals",

    short_name: "Draven",

    description:
      "Premium healthcare services with advanced medical infrastructure.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#1D4ED8",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}