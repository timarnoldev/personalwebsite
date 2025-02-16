import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { i18n, Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/get-dictionaries";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata({params}: {params?: Promise<{ lang: Locale }>}) {
  const slangs = await params;
  const dictionary = await getDictionary(slangs?.lang ?? "en");
  return {
    title: "Tim Arnold",
    description: dictionary.metadescription,
    keywords: ["Tim Arnold", "Portfolio", "Software Developer", "Jugend forscht", "Germany", "Deutschland", "Munich", "München", "Obernburg", "Linkedin", "Tim", "Arnold", "tim arnold websites", "projects", "private", "personal"],
  };
}

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

  const dictionary = await getDictionary(slangs?.lang ?? "en");


  return (
    <html lang={slangs?.lang ?? "en"}>
      <head>
      <script type="application/ld+json">
          {
           `{
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "Tim Arnold",
            "url": "https://tim-arnold.de",
            "image": "https://tim-arnold.de/mainimage.webp",
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
        <link rel="alternate" href="https://tim-arnold.de/en" hrefLang="x-default" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider lang={slangs?.lang ?? "en"}>
          <Header lang={dictionary} />

          {children}
          <Footer lang={dictionary} />

        </LanguageProvider>

      </body>
    </html>
  );
}
