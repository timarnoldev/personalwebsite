import Image from 'next/image'
import SocialButtons from './SocialLinks'
import Modal from './modal'
import cvJufo from "@/content/cv/cv-jugend-forscht.json"
import { Dictionary } from '@/i18n/get-dictionaries'

function IntroductionEN() {
    return <div className="text-lg text-gray-500 mt-4 max-w-200">
        Since 2024, I have been
        a <a href="https://www.linkedin.com/posts/timarnold-_mint-bildung-innovation-activity-7257803861682196480-WC-K" target="_blank" className="hover:underline underline-offset-4 font-bold">STEM coach at the Walter-Reis-Institute</a>
        , focusing on AI, full-stack development and automation — especially in
        hardware-related <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4">projects</a>.
        Through internships at companies like <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className="hover:underline underline-offset-4 font-bold">Rohde & Schwarz, ASC Technologies, and Framatome</a>, I gained valuable hands-on experience.
        I have also successfully competed in <Modal data={cvJufo}><div className="hover:underline underline-offset-4 font-bold cursor-pointer inline">well-known competitions</div></Modal>.
        I regularly attend workshops and enjoy working on <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4 font-bold">personal projects</a> to apply my knowledge in practice.
    </div>
}

function IntroductionDE() {
    return <div className="text-lg text-gray-500 mt-4 max-w-200">
        Seit 2024 bin ich
        als <a href="https://www.linkedin.com/posts/timarnold-_mint-bildung-innovation-activity-7257803861682196480-WC-K" target="_blank" className="hover:underline underline-offset-4 font-bold">MINT-Tutor am Walter-Reis-Institut </a>
        tätig und interessiere mich für KI, Full-Stack-Entwicklung und Automatisierung - insbesondere in
        hardwarebezogenen <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4">Projekten</a>.
        Durch Praktika bei Unternehmen wie <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className="hover:underline underline-offset-4 font-bold">Rohde & Schwarz, ASC Technologies und Framatome</a> konnte ich wertvolle Erfahrungen sammeln.
        Erfolgreich habe ich an <Modal data={cvJufo}><div className="hover:underline underline-offset-4 font-bold cursor-pointer inline">bekannten Wettbewerben</div></Modal> teilgenommen.
        Außerdem besuche ich Workshops und arbeite gerne an <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4 font-bold">persönlichen Projekten</a>, um mein Wissen in der Praxis anzuwenden.
    </div>
}

export default function HeroSection(props: { lang: Dictionary }) {
    return <><div id="aboutme" className="flex flex-col sm:flex-row justify-between w-dvw bg-herobackground sm:mt-24 pt-[10vh] items-center sm:items-start max-w-400 self-center gap-6 md:gap-0">
        <div className="flex flex-col justify-center sm:items-start items-center sm:w-1/2  sm:pl-30 pt-15">
            <h2 className="uppercase text-gray-500 tracking-widest mb-4 text-xl sm:text-left sm:max-w-full max-w-[80%] text-center">{props.lang.niceToMeetYou}</h2>
            <h1 className="text-herotext text-6xl text-center sm:text-start font-bold px-4 sm:px-0">{props.lang.iamtim}</h1>

            <div className="hidden md:block">
                {
                    props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
                }
            </div>

            <div className="md:block hidden">
                <SocialButtons enableMotion lang={props.lang} />
            </div>
        </div>
        <div className="sm:w-1/2 w-full flex justify-center items-center select-none">
            <Image title="Tim Arnold" src={"/mainimage.webp"} alt="Hero Image" width={1400} height={1400} className="object-cover rounded-full w-2/3 shadow-2xl max-w-150" />
        </div>





        {/* Mobile */}
        <div className="flex flex-col justify-center sm:hidden items-center px-10">
            {
                props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
            }
            <SocialButtons enableMotion={false} lang={props.lang} />

        </div>
    </div>

        {/*Tablet */}


        <div className="flex flex-col justify-center max-sm:hidden md:hidden items-center px-20">
            {
                props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
            }
            <SocialButtons enableMotion={false} lang={props.lang} />

        </div>
    </>
}