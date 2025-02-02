"use client";
import { ExternalLink } from "lucide-react";
import Image from 'next/image'
import { useState } from "react";

const cvHighlights = [

    {
        id: 0,
        img: "/cv/jufo.jpg",
        headline: "Jugend forscht National Winner",
        text: "At Germany's most prestigious youth science competition, Jugend forscht, my project Rekari won the national technology award. Rekari simplifies drone missions with intuitive planning and real-time collaboration, making it accessible for professionals and volunteer teams alike."

    },

    {
        id: 1,
        img: "/projects/ekes.webp",
        headline: "ISEF Finalist",
        text: "In 2024, I participated in the Regeneron International Science and Engineering Fair (ISEF), the world's largest pre-university science competition in Los Angeles. Competing among top young researchers globally, I had the opportunity to present my project on an international stage and exchange ideas with leading scientists."

    },

    {
        id: 2,
        img: "/cv/bufdi.webp",
        headline: "STEM-Tutor at Institut for Technology",
        text: "As a tutor at the Walter Reis Foundation, I design courses and workshops to introduce students to key engineering concepts. The focus is on practical skills like designing, soldering, and programming, while also covering AI applications to give students a broader understanding of modern technology."

    },

    {
        id: 3,
        img: "/projects/ekes.webp",
        headline: "Abitur prize winner",
        text: "With my Abitur, I was awarded the prize for the best math Abitur by the Deutsche Mathematiker-Vereinigung and the prize for the best physics Abitur by the Deutsche Physikalische Gesellschaft. Additionally, I received the STEM Excellence Certificate from MINT-EC, Germany’s national excellence initiative for STEM education."

    }

];


interface CVSectionProps {
    id: number;
    img: string;
    headline: string;
    text: string;
}

function CVSection(section: CVSectionProps) {
    return <div className="flex flex-row justify-between grow items-center">
        <Image src={section.img} alt={section.headline} width={500} height={300} />
        <article className="flex flex-col">
            <h1 className="text-3xl">{section.headline}</h1>

            <p>{section.text}</p>

            <p className="">Learn more</p>

        </article>
    </div>
}

export default function CVHighlights() {

    const [page, setPage] = useState(1);

    return <div className="flex flex-col mb-10 gap-8">

        <div className="mt-12 sm:ml-12 ml-6 text-5xl text-primary font-bold self-start">
            Highlights from my CV
        </div>

        <div className="flex flex-col gap-2">
            <div className="flex relative flex-col self-center justify-end rounded-3xl xl:w-[80vw] w-[95vw] aspect-[1.5] max-w-[1160px]">

                <div className="flex flex-col sm:gap-4 gap-0 sm:ml-20 ml-5 sm:mb-10 mb-5">
                    <div className="text-white sm:text-5xl text-2xl font-bold md:max-w-[80%] w-full">{cvHighlights[page].headline}</div>
                    <p className="text-white text-lg w-[55%] min-w-140 hidden md:block">{cvHighlights[page].text}</p>
                    <a href="#" className="text-[#61ab21] hover:underline underline-offset-4 font-bold flex flex-row gap-2 items-center w-fit">More Information <ExternalLink /></a>
                </div>

                <div className="self-center flex flex-row gap-2 mb-5">

                    {
                        cvHighlights.map(highlight => {
                            return <div className={`h-2 w-7 ${page === highlight.id ? "bg-white" : "bg-gray-500"} rounded-2xl cursor-pointer`} onClick={() => {
                                setPage(highlight.id)
                            }} key={highlight.id}></div>
                        })
                    }

                </div>

                <div className="h-full w-full cvGradient absolute rounded-2xl -z-10" />
                <div className="absolute rounded-3xl -z-20">
                    <Image src={cvHighlights[page].img} alt="Image" width={3000} height={1333} className="aspect-[1.5] rounded-3xl object-cover" />
                </div>

            </div>

            <div className="xl:w-[80vw] w-[95vw] self-center">
                <a href="https://www.linkedin.com/in/timarnold-/" className="hover:underline underline-offset-4 font-bold text-gray-500 flex flex-row gap-2 items-center w-fit">

                    See complete CV on LinkedIn
                    <ExternalLink size={20} />

                </a>
            </div>
        </div>

    </div>

}