import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { i18n, Locale } from "@/i18n/i18n-config";

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

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params?: Promise<{ lang: Locale }>;
}>) {
  const slangs = await params;

  

  return (
    <html lang={slangs?.lang ?? "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        
        {children}

        <Footer/>
      </body>
    </html>
  );
}
