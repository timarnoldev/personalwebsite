"use client";
import { ExternalLink, Pause, Play } from "lucide-react";
import Image from 'next/image'
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Modal from "./modal";
import jufoBlog from "@/content/cv/cv-jugend-forscht.json"
import isefBlog from "@/content/cv/cv-isef.json"
import stemtutor from "@/content/cv/cv-bufdi.json"
import abitur from "@/content/cv/cv-abitur.json"
import { Blog } from "./BlogEntry";
import { Dictionary } from "@/i18n/get-dictionaries";

const cvHighlights = (lang:Dictionary) => {
    return [

        {
            id: 0,
            img: "/cv/jufo.jpg",
            headline: lang.cvJufoHeadline,
            text: lang.cvJufoText,
            blogPost: jufoBlog
        },
    
        {
            id: 1,
            img: "/cv/isef.webp",
            headline: lang.cvISEFHeadline,
            text: lang.cvISEFText,
            blogPost: isefBlog
        },
    
        {
            id: 2,
            img: "/cv/bufdi.webp",
            headline: lang.cvBufdiHeadline,
            text: lang.cvBufdiText,
            blogPost: stemtutor
        },
    
        {
            id: 3,
            img: "/projects/ekes.webp",
            headline: lang.cvAbiturHeadline,
            text: lang.cvAbiturText,
            blogPost: abitur
        }
    
    ];
};


interface CVSectionProps {
    id: number;
    img: string;
    headline: string;
    text: string;
    blogPost: Blog
}

function CVSection(props: { section: CVSectionProps, lang: Dictionary }) {
    const { section } = props;
    return <>

        <div className="flex flex-col sm:gap-4 gap-0 sm:ml-20 ml-10 sm:mb-20 mb-15">
            <div className="text-white sm:text-5xl text-2xl font-bold md:max-w-[80%] w-full">{section.headline}</div>
            <p className="text-white text-lg w-[55%] min-w-140 hidden md:block">{section.text}</p>
            <Modal data={props.section.blogPost}><div  tabIndex={0} className="text-[#61ab21] hover:underline underline-offset-4 font-bold flex flex-row gap-2 items-center w-fit cursor-pointer">{props.lang.moreInformation} <ExternalLink /></div></Modal>
        </div>

        <div className="cvGradient h-full w-full absolute -z-10" />
        <div className="absolute h-fullrounded-3xl -z-20">
            <Image src={section.img} alt="Image" width={3000} height={1333} className="aspect-[1.5]  object-cover" />
        </div>


    </>
}

function Carousel(props: { lang: Dictionary }) {

    const [page, setPage] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const next = () => setPage((page) => (page === cvHighlights.length - 1 ? 0 : page + 1));
    const prev = () => setPage((page) => (page === 0 ? cvHighlights.length - 1 : page - 1));

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setAutoSlide(false);
            next();
        },
        onSwipedRight: () => {
            setAutoSlide(false);
            prev();
        },
        swipeDuration: 250,
        trackMouse: true
    });


    useEffect(() => {
        const slideInterval = setInterval(() => {
            if (autoSlide) next();
        }, 4000);

        return () => clearInterval(slideInterval);
    }, [autoSlide])

    return <div className="w-fit relative flex flex-col rounded-3xl overflow-hidden"> {/*View box wrapper*/}


        <div tabIndex={0} onClick={() => {
            setAutoSlide(!autoSlide);
        }} className="absolute self-end mr-5 p-2 mt-5 bg-gray-200 rounded-full cursor-pointer opacity-80 z-30">
            {autoSlide ? <Pause /> : <Play />}

        </div>


        <div className="flex flex-col justify-end xl:w-[80vw] w-[95vw] aspect-[1.5] max-w-[1160px] relative overflow-hidden"> {/*View box*/}
            <div {...handlers} className="flex h-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${(page) * 100}%)` }}> {/*Large Container*/}

                {
                    cvHighlights(props.lang).map(highlight => {
                        return <div key={highlight.id} className="flex h-full relative flex-col self-center justify-end rounded-3xl xl:w-[80vw] w-[95vw] aspect-[1.5] max-w-[1160px]">


                            <CVSection lang={props.lang} section={highlight} ></CVSection>

                        </div>
                    })
                }
            </div>

        </div>


        {/*Buttons*/}
        <div className="absolute self-center mt-auto bottom-0 flex flex-row gap-2 mb-5">

            {
                cvHighlights(props.lang).map(highlight => {
                    return <div className={`h-2 w-7 ${page === highlight.id ? "bg-white" : "bg-gray-500"} rounded-2xl cursor-pointer`} onClick={() => {
                        setPage(highlight.id);
                        setAutoSlide(false);
                    }} key={highlight.id}></div>
                })
            }

        </div>

    </div>
}

export default function CVHighlights(props: {lang: Dictionary}) {


    return <div className="flex flex-col mb-10 gap-8">

        <div className="sm:ml-12 ml-6 mt-20 text-5xl text-primary font-bold self-start">
            {
                props.lang["cvHighlights"]
            }
        </div>

        <div className="flex flex-col gap-2 self-center">


            <Carousel lang={props.lang}></Carousel>

            <div className="xl:w-[80vw] w-[95vw] max-w-[1160px] self-center">
                <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className="hover:underline underline-offset-4 font-bold text-gray-500 flex flex-row gap-2 items-center w-fit">

                    {props.lang.cvOnLinkedin}
                    <ExternalLink size={20} />

                </a>
            </div>
        </div>

    </div >

}

