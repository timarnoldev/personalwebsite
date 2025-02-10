"use client";
import { Dictionary } from "@/i18n/get-dictionaries";
import SocialButtons from "./SocialLinks";
import technicalDetails from "@/content/other/technical-detail.json"
import Modal from "./modal";

export default function Footer(props: {lang: Dictionary}) {
    return <div className="flex flex-col">

        <div className=" bg-test flex md:flex-row flex-col gap-5 xl:gap-18 justify-center items-center py-20 px-10">
            <div className="lg:text-8xl text-6xl leading-none text-[#2e2e2e] max-w-135 font-bold  text-center">{props.lang.exchangeIdeas}</div>
            <div className="flex flex-col gap-2 ">
                <div className="text-gray-700 max-w-100 text-lg">
                    {
                        props.lang.footerText
                    }
                </div>
                <SocialButtons enableMotion={false} lang={props.lang}></SocialButtons>
            </div>
        </div>

        <div className="bg-[#2e2e2e] flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 md:px-32 py-10">
            <div className="flex flex-col items-center xl:flex-row xl:gap-24 gap-5">
                <div className="flex flex-row sm:gap-14 gap-8 font-bold text-lg ">
                    <a className="text-white hover:underline underline-offset-4" href="mailto:hello@tim-arnold.de">Email</a>
                    <a className="text-white hover:underline underline-offset-4" href="https://www.linkedin.com/in/timarnold-/">Linkedin</a>
                    <a className="text-white hover:underline underline-offset-4" href="https://github.com/timarnoldev">Github</a>
                </div>
                <div className="flex flex-row sm:gap-14 gap-8  text-lg ">
                    <a className="text-white hover:underline underline-offset-4" href="articles">{props.lang.articles}</a>
                    <Modal data={technicalDetails}>
                        <div className="text-white hover:underline underline-offset-4 cursor-pointer">{props.lang.technicalDetails}</div>
                    </Modal>
                    <a className="text-white hover:underline underline-offset-4" href="https://github.com/timarnoldev">{props.lang.imprint}</a>
                </div>
            </div>

            <div className="text-white text-lg">
                © 2025 Tim Arnold
            </div>
        </div>

    </div>
}