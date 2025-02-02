import CollaborationSection from "@/components/CollaborationSection";
import CVHighlights from "@/components/cvhighlights";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <div className="flex flex-col">
     <HeroSection/>
     <CollaborationSection/>
     <Projects/>
     <CVHighlights/>
    </div>
  );
}
