import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import React from "react";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
