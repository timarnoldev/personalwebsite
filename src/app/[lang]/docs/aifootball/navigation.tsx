"use client";
import { Dictionary } from "@/i18n/get-dictionaries";
import { usePathname } from "next/navigation";

export default function AIFootballNavigation(props: {language: Dictionary}) {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === "/"+props.language.lang+"/docs/aifootball/"+path || pathname === "/"+props.language.lang+"/docs/aifootball/"+path+"/" || (path === "" && pathname === "/"+props.language.lang+"/docs/aifootball");
    }
    return <div className="flex flex-row gap-4 items-center">
            <a href={"/"+props.language.lang+"/docs/aifootball"} className={`text-lg cursor-pointer font-bold hover:underline underline-offset-4 ${isActive("")&&"text-primary"}`}>Startseite</a>
            <a href={"/"+props.language.lang+"/docs/aifootball/sponsorship"} className={`text-lg cursor-pointer font-bold hover:underline underline-offset-4 ${isActive("sponsorship")&&"text-primary"}`}>Sponsoren und Unterstützungsleistungen</a>
            <a href={"/"+props.language.lang+"/docs/aifootball/backgroundinfo"} className={`text-lg cursor-pointer font-bold hover:underline underline-offset-4 ${isActive("backgroundinfo")&&"text-primary"}`}>Hintergrundinformationen</a>
        </div>
}