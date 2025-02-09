import { ExternalLink } from "lucide-react"
import Image from "next/image"

export interface Blog {
    title: string,
    title_de?: string,
    content: Array<{ type: string, text?: string, href?: string, src?: string, text_de?: string }>,
    image: string | null
}
export default function BlogEntry(props: { data: Blog }) {
     const language = "de";
    return <div className="w-full flex flex-col gap-4">
        {
            props.data.image && <Image src={props.data.image} alt={"Image of Blog Post"} width={1966} height={1106} className="w-full h-auto" key={"mainimage"}/>
        }

        <article className="flex flex-col gap-4 p-12 w-[70%] self-center" key={"article"}>
            <div className="text-4xl font-bold text-gray-800 mb-4" key={"title"}>{props.data.title_de??props.data.title}</div>


            {
                props.data.content.map((element, index) => {

                    if (element.type === "headline") {
                        return <div className="text-2xl font-bold mt-6" key={index}>{element.text_de??element.text}</div>
                    }

                    if (element.type === "text") {
                        return <div className="text-lg" key={index}>{element.text_de??element.text}</div>
                    }

                    if (element.type === "link") {
                        return <a className="hover:underline w-fit underline-offset-4 font-bold flex flex-row gap-2 items-center" key={index} href={element.href} target="_blank">{element.text_de??element.text}<ExternalLink /></a>
                    }

                    if(element.type === "image") {
                        return <div className="w-full flex flex-col gap-0" key={index}>
                            <Image src={element.src!} alt={element.text_de??element.text??"Blog post image"} width={1966} height={1106} className="w-full h-auto rounded-xl"/>
                            <div className=" text-gray-700">{element.text_de??element.text}</div>
                        </div>
                    }

                    return <></>

                })
            }

        </article>
    </div>
}