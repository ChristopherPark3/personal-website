// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

import { createContext, useState } from "react";

export type NavbarContextType = {
  navbarSection: string;
  setNavbarSection: (section: string) => void;
};
export const NavbarContext = createContext<NavbarContextType | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [navbarSection, setNavbarSection] = useState<string>("");

  return (
    <NextUIProvider>
      <NavbarContext.Provider value={{ navbarSection, setNavbarSection }}>
        {children}
      </NavbarContext.Provider>
    </NextUIProvider>
  );
}
