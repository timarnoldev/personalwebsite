import Image from 'next/image'
import SocialButtons from './SocialLinks'
import Modal from './modal'
import cvJufo from "@/content/cv/cv-jugend-forscht.json"

function Introduction() {
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

export default function HeroSection() {
    return <><div className="flex flex-col sm:flex-row justify-between w-dvw bg-herobackground sm:mt-24 pt-[10vh] items-center sm:items-start max-w-400 self-center gap-6 md:gap-0">
        <div className="flex flex-col justify-center sm:items-start items-center sm:w-1/2  sm:pl-30 pt-15">
            <p className="uppercase text-gray-500 tracking-widest mb-4 text-xl">Nice to meet you!</p>
            <h1 className="text-herotext text-6xl text-center sm:text-start font-bold px-4 sm:px-0">Hello, I'm Tim Arnold</h1>

            <div className="hidden md:block">
                <Introduction />
            </div>

            <div className="md:block hidden">
                <SocialButtons enableMotion />
            </div>
        </div>
        <div className="w-1/2 flex justify-center items-center select-none">
            <Image src={"/mainimage.webp"} alt="Hero Image" width={1400} height={1400} className="object-cover rounded-full w-2/3 shadow-2xl max-w-150" />
        </div>





        {/* Mobile */}
        <div className="flex flex-col justify-center sm:hidden items-center px-10">
            <Introduction />

            <SocialButtons enableMotion={false}/>

        </div>
    </div>

            {/*Tablet */}


        <div className="flex flex-col justify-center max-sm:hidden md:hidden items-center px-20">
            <Introduction />

            <SocialButtons enableMotion={false}/>

        </div>
    </>
}