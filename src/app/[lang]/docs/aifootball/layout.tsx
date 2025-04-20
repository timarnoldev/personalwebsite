import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";
import React from "react";
import AIFootballNavigation from "./navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    return [{ lang: "de" }, { lang: "en" }];
}

export default async function AIFootball(props: {
    params: Promise<{ lang: Locale }>;
    children: React.ReactNode;
}) {
    const language = await props.params;
    const dictionary = await getDictionary(language.lang);


    return <div className="flex flex-col mt-30 items-center gap-4 mb-10">
        <div className="flex items-center gap-2  mb-5 sm:ml-30 ml-5  self-start">
            <Link href={"/"+language.lang+"/"} className="text-xl font-bold text-gray-600 flex flex-row gap-2 items-center underline-offset-4 hover:underline"><ArrowLeft/>{dictionary.back} </Link>
        </div>
        <h1 className="text-5xl font-bold text-center text-herotext max-w-[90%]">{dictionary.footballai}</h1>
        <p className="max-w-200 w-[90%] text-lg sm:text-center">{dictionary.footballai_desc}</p>

        <AIFootballNavigation language={dictionary} />

        {props.children}


    </div>
}