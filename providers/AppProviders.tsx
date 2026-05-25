"use client";

import { ReactNode } from "react";

import { Toaster } from "sonner";

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <>
      {children}

      <Toaster
        position="top-right"
        richColors
      />
    </>
  );
}