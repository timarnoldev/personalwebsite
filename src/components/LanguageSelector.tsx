import { Dictionary } from "@/i18n/get-dictionaries";

export default function LanguageSelector(props: { lang: Dictionary, switchLanguage: (lang: string) => void }) {

    return (
        <div className="language-selector absolute flex flex-col bg-gray-200 top-full left-1/2 transform -translate-x-[calc(50%+1rem)] mt-4 mr-8 rounded-2xl overflow-hidden shadow-xl">
            <div tabIndex={0} onKeyDown={(e)=>{if(e.key === "Enter") props.switchLanguage("en")}} onClick={()=>props.switchLanguage("en")} className={"flex items-center p-6 hover:bg-gray-300 cursor-pointer"+(props.lang.lang === "en" ? " bg-gray-300" : "")}>
                English
            </div>
            <div tabIndex={0} onKeyDown={(e)=>{if(e.key === "Enter") props.switchLanguage("de")}} onClick={()=>props.switchLanguage("de")} className={"flex items-center p-6 hover:bg-gray-300 cursor-pointer"+(props.lang.lang === "de" ? " bg-gray-300" : "")}>
                Deutsch
            </div>
        </div>
    );
}