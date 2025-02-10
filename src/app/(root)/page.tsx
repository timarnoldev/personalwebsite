import CollaborationSection from "@/components/CollaborationSection";
import CVHighlights from "@/components/cvhighlights";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import { getDictionary } from "@/i18n/get-dictionaries";

export default async function Home() {

  const dictionary = await getDictionary("en");

  return (
   <div className="flex flex-col">
     <HeroSection lang={dictionary}/>
     <CollaborationSection lang={dictionary}/>
     <CVHighlights lang={dictionary}/>
     <Projects lang={dictionary}/>
    </div>
  );
}
