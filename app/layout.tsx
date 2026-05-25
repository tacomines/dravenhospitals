import type { Metadata } from "next";

import "@/styles/globals.css";

import Navbar from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Draven Hospitals",
  description: "Advanced Healthcare Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}