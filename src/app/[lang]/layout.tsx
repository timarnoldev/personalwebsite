import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { i18n, Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/get-dictionaries";
import { LanguageProvider } from "@/context/LanguageContext";
import { PostHogProvider } from "@/components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = 'force-static';

export async function generateMetadata({params}: {params: { lang: Locale }}) {
  const dictionary = await getDictionary(params.lang ?? "en");
  return {
    title: "Tim Arnold",
    description: dictionary.metadescription,
    keywords: [
      "Tim Arnold",
      "Portfolio",
      "Software Developer",
      "Jugend forscht",
      "Germany",
      "Deutschland",
      "Munich",
      "München",
      "Obernburg",
      "Linkedin",
      "Tim",
      "Arnold",
      "tim arnold websites",
      "projects",
      "private",
      "personal"
    ],
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type LangParam = { lang: string };
type RootLayoutProps = {
  children: React.ReactNode;
  params?: Promise<LangParam>;
};

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  const rawParams = props.params ? await props.params : { lang: "en" };
  const lang: Locale = rawParams.lang === "de" || rawParams.lang === "en" ? rawParams.lang : "en";
  const dictionary = await getDictionary(lang);


  return (
  <html lang={lang}>
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>
          <LanguageProvider lang={slangs?.lang ?? "en"}>
            <Header lang={dictionary} />
            {children}
            <Footer lang={dictionary} />
          </LanguageProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
