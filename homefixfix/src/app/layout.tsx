import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
// 1. ADD THIS IMPORT (check your actual path to auth-context)
import { AuthProvider } from "@/lib/auth-context"; 
import ChatWidget from "@/components/ChatWidget";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
    default: "HomeFix",
    template: "%s - HomeFix",
  },
  description: "Your one stop solution for all home repair and maintenance needs",
  icons: {
    icon: "/Images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script crossOrigin="anonymous" src="//unpkg.com/react-grab/dist/index.global.js" />
        <Script crossOrigin="anonymous" src="//unpkg.com/same-runtime/dist/index.global.js" />
      </head>
      <body suppressHydrationWarning className="antialiased"> 
  <AuthProvider>
    <Navbar />
    <ChatWidget/>
    <ClientBody>{children}</ClientBody>
  </AuthProvider>
</body>
    </html>
  );
}