import { ExternalLink } from "lucide-react"
import Image from "next/image"

export interface Blog {
    title: string,
    content_en: Array<{ type: string, text?: string, href?: string, src?: string }>,
    image: string
}
export default function BlogEntry(props: { data: Blog }) {
    return <div className="w-full flex flex-col gap-4">
        <Image src={props.data.image} alt={"Image of Blog Post"} width={1966} height={1106} className="w-full h-auto" />

        <article className="flex flex-col gap-4 p-12 w-[70%] self-center">
            <div className="text-4xl font-bold text-gray-800 mb-4" key={"title"}>{props.data.title}</div>


            {
                props.data.content_en.map((element, index) => {

                    if (element.type === "headline") {
                        return <div className="text-2xl font-bold mt-6" key={index}>{element.text}</div>
                    }

                    if (element.type === "text") {
                        return <div className="text-lg" key={index}>{element.text}</div>
                    }

                    if (element.type === "link") {
                        return <a className="hover:underline w-fit underline-offset-4 font-bold flex flex-row gap-2 items-center" key={index} href={element.href} target="_blank">{element.text}<ExternalLink /></a>
                    }

                    if(element.type === "image") {
                        return <div className="w-full flex flex-col gap-0">
                            <Image src={element.src!} alt={element.text??"Blog post image"} width={1966} height={1106} className="w-full h-auto rounded-xl"/>
                            <div className=" text-gray-700">{element.text}</div>
                        </div>
                    }

                    return <></>

                })
            }

        </article>
    </div>
}