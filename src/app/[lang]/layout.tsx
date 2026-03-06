import { Instrument_Serif, Outfit, Figtree } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import { i18n, Locale } from "@/i18n/i18n-config";
import { getDictionary } from "@/i18n/get-dictionaries";
import { LanguageProvider } from "@/context/LanguageContext";
import { PostHogProvider } from "@/components/PostHogProvider";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const dynamic = 'force-static';

export async function generateMetadata({params}: {params: { lang: Locale }}) {
  const dictionary = await getDictionary(params.lang ?? "en");
  const lang = params.lang ?? "en";
  const title = lang === "de"
    ? "Tim Arnold – Software-Entwickler & Ingenieurstudent an der TUM"
    : "Tim Arnold – Software Developer & Engineering Student at TUM";
  return {
    metadataBase: new URL("https://tim-arnold.de"),
    title,
    description: dictionary.metadescription,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        de: "/de",
      },
    },
    openGraph: {
      title,
      description: dictionary.metadescription,
      url: `https://tim-arnold.de/${lang}`,
      siteName: "Tim Arnold",
      images: [{ url: "https://tim-arnold.de/mainimage.webp", width: 1400, height: 1400 }],
      locale: lang === "de" ? "de_DE" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dictionary.metadescription,
      images: ["https://tim-arnold.de/mainimage.webp"],
    },
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
            "jobTitle": "Engineering Science Student",
            "description": "Software developer and engineering student at TUM with interests in AI, full-stack development, and automation.",
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Technical University of Munich"
            },
            "knowsAbout": ["Artificial Intelligence", "Full-Stack Development", "Automation", "Embedded Systems"],
            "sameAs": [
              "https://www.linkedin.com/in/timarnold-/",
              "https://github.com/timarnoldev",
              "https://tim-arnold.de"
            ]
           }`
          }
        </script>
      </head>
      <body className={`${instrumentSerif.variable} ${outfit.variable} ${figtree.variable} antialiased`}>
        <PostHogProvider>
          <LanguageProvider lang={lang}>
            <Header lang={dictionary} />
            {children}
            <Footer lang={dictionary} />
          </LanguageProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
