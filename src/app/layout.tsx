import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tim Arnold",
  description: "Hello, I'm Tim Arnold. Nice to meet you!",
  keywords: ["Tim Arnold", "Portfolio", "Software Developer", "Jugend forscht", "Germany", "Deutschland", "Munich", "München", "Obernburg", "Linkedin", "Tim", "Arnold", "tim arnold websites", "projects", "private", "personal"],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        
        {children}
      </body>
    </html>
  );
}
