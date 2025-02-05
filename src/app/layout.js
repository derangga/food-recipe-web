import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

import ArchiveSolidIcon from "@/components/icons/archive-solid-icon";
import GlobeIcon from "@/components/icons/globe-icon";
import HeartSolidIcon from "@/components/icons/heart-solid-icon";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/main-layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainLayout>
          <HeroUIProvider>{children}</HeroUIProvider>
        </MainLayout>
      </body>
    </html>
  );
}
