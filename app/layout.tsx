import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import React from "react";
import ViewportSwitcher from "./ViewportSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARL TECHNISOL — Industrial Insulation & PSE",
  description:
    "SARL TECHNISOL — Fabricant de PSE et solutions d'isolation depuis 1997. Production industrielle, isolation thermique et emballages.",
  metadataBase: new URL("https://technisol.example"),
};

export const viewport: Viewport = {
  width: 1280,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} h-full antialiased bg-white text-slate-900`}
    >
      <body className="min-h-full flex flex-col">
  <ViewportSwitcher />
  {children}
</body>
    </html>
  );
}
