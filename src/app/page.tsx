import CollaborationSection from "@/components/CollaborationSecion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";

export default function Home() {
  return (
   <div className="flex flex-col">
     <Header/>
     <HeroSection/>
     <CollaborationSection/>
     <Projects/>
    </div>
  );
}
