import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { HeaderMegaMenu } from "@/components/Header/HeaderMegaMenu";
import NavbarSpace from "@/components/NavbarSpace";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">
        <HeaderMegaMenu/>
        <NavbarSpace/>
          {children}</MantineProvider>
      </body>
    </html>
  );
}
