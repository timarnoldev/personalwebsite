"use client";
import { LanguageContext } from "@/context/LanguageContext";
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { useContext } from "react";

export interface Blog {
    title: string,
    slug: string,
    title_de?: string,
    content: Array<{ type: string, text?: string, href?: string, src?: string, text_de?: string }>,
    image: string | null,
    company_image?: string | null,
    hide_image?: boolean,
    date?: string,
    date_de?: string,
}
export default function BlogEntry(props: { data: Blog, large?: boolean }) {
    const language = useContext(LanguageContext);
    return <div className="w-full flex flex-col gap-4">
        {
            !props.large && props.data.image && !props.data.hide_image && <Image src={props.data.image} alt={"Image of Blog Post"} width={1966} height={1106} className="w-full h-auto" key={"mainimage"} />
        }

        {
            !props.large && props.data.company_image && <Image src={props.data.company_image} alt={"Image of Company"} width={1966} height={1106} className="w-[30%] self-center pt-30 pb-10 h-auto" key={"companyimage"} />
        }

        <article className="flex flex-col gap-4 sm:p-12 px-4 p-12 sm:w-[70%] self-center" key={"article"}>
            <div className="flex flex-col gap-2">
            <h1 className="sm:text-4xl text-3xl font-bold text-gray-800" key={"title"}>{language === "de" ? props.data.title_de ?? props.data.title : props.data.title}</h1>
            {
                props.data.date && <h3 className=" text-gray-700">{language === "de" ? props.data.date_de ?? props.data.date : props.data.date}</h3>
            }

            <div className="mb-4"/>

            </div>

            {
                props.large && props.data.image && !props.data.hide_image && <Image src={props.data.image} alt={"Image of Blog Post"} width={1966} height={1106} className="w-full h-auto rounded-xl" key={"mainimage"} />
            }
            {
                props.large && props.data.company_image && <Image src={props.data.company_image} alt={"Image of Company"} width={1966} height={1106} className="w-[30%] self-center pb-10 pt-10 h-auto" key={"companyimage"} />
            }


            {
                props.data.content.map((element, index) => {

                    if (element.type === "headline") {
                        return <h2 className="text-2xl font-bold mt-6" key={index}>{language === "de" ? element.text_de ?? element.text : element.text}</h2>
                    }

                    if (element.type === "text") {
                        return <p className="text-lg" key={index}>{language === "de" ? element.text_de ?? element.text : element.text}</p>
                    }

                    if (element.type === "link") {
                        return <a className="hover:underline w-fit underline-offset-4 font-bold flex flex-row gap-2 items-center" key={index} href={element.href} target="_blank">{language === "de" ? element.text_de ?? element.text : element.text}<ExternalLink /></a>
                    }

                    if (element.type === "image") {
                        return <div className="w-full flex flex-col gap-0" key={index}>
                            <Image src={element.src!} alt={(language === "de" ? element.text_de ?? element.text : element.text) ?? "Blog post image"} width={1966} height={1106} className="w-full h-auto rounded-xl" />
                            <h3 className=" text-gray-700">{language === "de" ? element.text_de ?? element.text : element.text}</h3>
                        </div>
                    }

                     if(element.type === "ytembed") {
                        return <div className="w-full flex flex-col gap-2" key={index}>
                            <iframe src={element.src!} title={language === "de" ? element.text_de ?? element.text : element.text} className="w-full h-[500px] rounded-xl" allowFullScreen/>
                            <p>{language === "de" ? element.text_de ?? element.text : element.text}</p>
                        </div>
                    }

                    return <></>

                })
            }

        </article>
    </div>
}