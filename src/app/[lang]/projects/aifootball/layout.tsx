import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";
import React from "react";

export async function generateStaticParams() {
    return [{ lang: "de" }, { lang: "en" }];
}

export default async function AIFootball(props: {
    params: Promise<{ lang: Locale }>;
    children: React.ReactNode;
}) {
    const language = await props.params;
    const dictionary = await getDictionary(language.lang);


    return <div className="flex flex-col mt-40 items-center gap-4">
        <h1 className="text-5xl font-bold text-herotext">Tischfußball Roboter</h1>
        <p className="max-w-200 text-lg text-center">Das Ziel: Ein autonomer Tischkicker-Roboter! Ein menschlicher Mitspieler soll durch einen Roboter ersetzt werden. Es gilt zunächst die Mechanik und Elektronik zu entwerfen, sodass die Maschine die gleichen Möglichkeiten, wie der Mensch hat. Im folgenden Schritt soll dann das Programm, welches den Roboter steuert solange optimiert werden, bis der Mensch geschlagen werden kann. Dafür verfolgt eine Kamera das Spielgeschehen und trackt Spieler und Ball in Echtzeit.</p>

        <div className="flex flex-row gap-4 items-center">
            <a className="text-lg font-bold hover:underline underline-offset-4 text-primary">Startseite</a>
            <a className="text-lg font-bold hover:underline underline-offset-4">Sponsoren und Unterstützungsleistungen</a>
            <a className="text-lg font-bold hover:underline underline-offset-4">Hintergrundinformationen</a>
        </div>

        {props.children}


    </div>
}