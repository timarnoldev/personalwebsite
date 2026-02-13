"use client";
import Image from 'next/image'
import SocialButtons from './SocialLinks'
import cvJufo from "@/content/cv/cv-jugend-forscht.json"
import { Dictionary } from '@/i18n/get-dictionaries'
import mainimage from "../../public/mainimage.webp"
import BlogModal from './BlogModal'
import { motion } from 'motion/react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function IntroductionEN() {
    return <div className="text-lg text-gray-500 mt-4 max-w-200 leading-relaxed">
        Since 2025 I have been studying <a href="https://www.linkedin.com/posts/timarnold-_%F0%9D%90%92%F0%9D%90%AD%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%AD-%F0%9D%90%9E%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AE%F0%9D%90%9E%F0%9D%90%A7-%F0%9D%90%8A%F0%9D%90%9A%F0%9D%90%A9%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%AC-activity-7376613341525491712-x6Iq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSu4HEBeWq4rMe9nu6eQ-6PyVFrYPaG3bA" target="_blank" className="hover:underline underline-offset-4 font-bold">Engineering Science</a> at TUM
        in Munich
        and have a keen interest in AI, full-stack development and automation - especially in
        hardware-related <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4">projects</a>.
        Through internships at companies such as <a href="/articles#collaborationSection" target="_blank" className="hover:underline underline-offset-4 font-bold">Rohde & Schwarz, QAware, and Framatome</a>, I gained valuable hands-on experience.
        I have successfully competed in <BlogModal blog={cvJufo}><div className="hover:underline underline-offset-4 font-bold cursor-pointer inline">renowned competitions</div></BlogModal>.
        Additionally, I regularly attend workshops and enjoy working on <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4 font-bold">personal projects</a> to apply my knowledge in practice.
    </div>
}

function IntroductionDE() {
    return <div className="text-lg text-gray-500 mt-4 max-w-200 leading-relaxed">
        Seit 2025 studiere ich <a href="https://www.linkedin.com/posts/timarnold-_%F0%9D%90%92%F0%9D%90%AD%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%AD-%F0%9D%90%9E%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%A7%F0%9D%90%9E%F0%9D%90%AE%F0%9D%90%9E%F0%9D%90%A7-%F0%9D%90%8A%F0%9D%90%9A%F0%9D%90%A9%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%AC-activity-7376613341525491712-x6Iq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSu4HEBeWq4rMe9nu6eQ-6PyVFrYPaG3bA" target="_blank" className="hover:underline underline-offset-4 font-bold">Ingenieurwissenschaften</a> an
        der TUM in München und interessiere mich für KI, Full-Stack-Entwicklung und Automatisierung - insbesondere in
        hardwarebezogenen <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4">Projekten</a>.
        Durch Praktika bei Unternehmen wie <a href="/articles#collaborationSection" target="_blank" className="hover:underline underline-offset-4 font-bold">Rohde & Schwarz, QAware und Framatome</a> konnte ich wertvolle Erfahrungen sammeln.
        Erfolgreich habe ich an <BlogModal blog={cvJufo}><div className="hover:underline underline-offset-4 font-bold cursor-pointer inline">bekannten Wettbewerben</div></BlogModal> teilgenommen.
        Außerdem besuche ich Workshops und arbeite gerne an <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4 font-bold">persönlichen Projekten</a>, um mein Wissen in der Praxis anzuwenden.
    </div>
}

export default function HeroSection(props: { lang: Dictionary }) {
    return <><div id="aboutme" className="flex flex-col sm:flex-row justify-between w-dvw bg-herobackground sm:mt-24 pt-[10vh] items-center sm:items-start max-w-400 self-center gap-6 md:gap-0">
        <div className="flex flex-col justify-center sm:items-start items-center sm:w-1/2  sm:pl-30 pt-15">
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="uppercase text-gray-500 tracking-widest mb-4 text-xl sm:text-left sm:max-w-full max-w-[80%] text-center font-heading"
            >
                {props.lang.niceToMeetYou}
            </motion.h2>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.2 }}
                className="text-herotext text-6xl text-center sm:text-start font-bold px-4 sm:px-0 font-display"
            >
                {props.lang.iamtim}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.35 }}
                className="hidden md:block"
            >
                {
                    props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
                }
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.5 }}
                className="md:block hidden"
            >
                <SocialButtons enableMotion lang={props.lang} />
            </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="sm:w-1/2 w-full flex justify-center items-center select-none"
        >
            <Image title="Tim Arnold" src={mainimage} priority={true} fetchPriority={"high"} alt="Hero Image" width={1400} height={1400} className="object-cover rounded-full w-2/3 shadow-2xl max-w-150" />
        </motion.div>



        {/* Mobile */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="flex flex-col justify-center sm:hidden items-center px-10"
        >
            {
                props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
            }
            <SocialButtons enableMotion={false} lang={props.lang} />

        </motion.div>
    </div>

        {/*Tablet */}


        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="flex flex-col justify-center max-sm:hidden md:hidden items-center px-20"
        >
            {
                props.lang.lang === "de" ? <IntroductionDE /> : <IntroductionEN />
            }
            <SocialButtons enableMotion={false} lang={props.lang} />

        </motion.div>
    </>
}
