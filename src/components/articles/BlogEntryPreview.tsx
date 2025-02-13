import Image from "next/image";
import { Blog } from "./BlogEntry";
import { Locale } from "@/i18n/i18n-config";
import Link from "next/link";

export default function BlogEntryPreview(props: {data: Blog, lang: Locale}) {

    let text = props.lang === "de"
        ? props.data.content.find(item => item.type !== "headline")?.text_de ?? props.data.content.find(item => item.type !== "headline")?.text
        : props.data.content.find(item => item.type !== "headline")?.text;
    const title = props.lang==="de"?props.data.title_de??props.data.title:props.data.title;
    //limit text to 200 characters but only cut off at a space
    if(text!.length > 200) {
        text = text!.substring(0, text!.lastIndexOf(" ", 200)) + "..."
    }

   return  <Link href={"/"+props.lang+"/articles/"+props.data.slug} >
    <div className="group cursor-pointer flex flex-row justify-between p-4 rounded-xl">
        <div className="flex md:flex-row flex-col justify-center gap-4 items-start">
            {
                props.data.image &&
                <Image src={props.data.image} alt={"Image of Blog Post"} width={1966} height={1106} className="md:h-40 h-auto md:w-70 w-full object-cover rounded-xl" key={"mainimage"}/>
            }

            {
                props.data.company_image &&
                <div className="md:h-40 md:w-70 flex items-center p-4">
                    <Image src={props.data.company_image} alt={"Image of Company"} width={1966} height={1106} className=" w-full h-auto" key={"companyimage"}/>

                </div>
            }

            <article className="flex flex-col justify-center w-fit">
                <h1 className="text-xl font-bold text-gray-800 mb-4 md:max-w-110 underline-offset-4 group-hover:underline w-fit" key={"title"}>{title}</h1>
                <p className="text-lg md:max-w-140 w-fit">{text}</p>
            </article>

        </div>

    </div>
   </Link>
}