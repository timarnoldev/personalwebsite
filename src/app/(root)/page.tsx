import Awards from "@/components/awards";
import CollaborationSection from "@/components/CollaborationSection";
import CVHighlights from "@/components/cvhighlights";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { LanguageProvider } from "@/context/LanguageContext";
import { getDictionary } from "@/i18n/get-dictionaries";

export default async function Home() {

  const dictionary = await getDictionary("en");


  return (
   <div className="flex flex-col">
    <LanguageProvider lang={"en"}>
     <HeroSection lang={dictionary}/>
     <CollaborationSection lang={dictionary}/>
     <CVHighlights lang={dictionary}/>
     <Projects lang={dictionary}/>
     <Awards lang={dictionary}/>
     </LanguageProvider>
    </div>
  );
}
