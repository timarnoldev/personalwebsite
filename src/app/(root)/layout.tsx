import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { getDictionary } from "@/i18n/get-dictionaries";

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
  description: "Hello, I'm Tim Arnold. Nice to meet you! On my website I share my projects, awards and more. I'm always curious to hear new perspectives and exchange ideas.",
  keywords: ["Tim Arnold", "Portfolio", "Software Developer", "Jugend forscht", "Germany", "Deutschland", "Munich", "München", "Obernburg", "Linkedin", "Tim", "Arnold", "tim arnold websites", "projects", "private", "personal"],

};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const dictionary = await getDictionary("en");

  return (
    <html lang="en">

      <head>
        <script type="application/ld+json">
          {
           `{
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Tim Arnold",
            "url": "https://tim-arnold.de",
            "image": "https://tim-arnold.de/timarnold.webp",
            "sameAs": [
            "https://www.linkedin.com/in/timarnold-/",
            "https://github.com/timarnoldev",
            "https://tim-arnold.de"
            ]  
           }`
        }
        </script>
        <link rel="alternate" hrefLang="en" href="https://tim-arnold.de/en" />
        <link rel="alternate" hrefLang="de" href="https://tim-arnold.de/de" />
        <link rel="alternate" href="https://tim-arnold.de/" hrefLang="x-default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header lang={dictionary} />

        {children}

        <Footer lang={dictionary} />
      </body>
    </html>
  );
}
