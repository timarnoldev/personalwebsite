import Awards from "@/components/awards";
import CollaborationSection from "@/components/CollaborationSection";
import CVHighlights from "@/components/cvhighlights";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";


export async function generateStaticParams() {
  return [{ lang: "de" }, { lang: "en" }];
}

export const dynamicParams = false 


export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {


  
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  return (
   <div className="flex flex-col">

      <HeroSection lang={dictionary}/>
      <CollaborationSection lang={dictionary}/>
      <CVHighlights lang={dictionary}/>
      <Projects lang={dictionary}/>
      <Awards lang={dictionary}/>
    </div>
  );
}
