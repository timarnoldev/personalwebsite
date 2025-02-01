"use client";
import { Linkedin, Mail } from 'lucide-react'
import { motion, MotionValue, useMotionValue, useTransform } from 'motion/react'
import Image from 'next/image'

function Introduction() {
    return <p className="text-lg text-gray-500 mt-4 max-w-200">
        Since 2024, I have been
        a <a href="https://www.linkedin.com/posts/timarnold-_mint-bildung-innovation-activity-7257803861682196480-WC-K" target="_blank" className="hover:underline underline-offset-4 font-bold">STEM coach at the Walter-Reis-Institute</a>
        , focusing on AI, full-stack development and automation — especially in
        hardware-related <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4">projects</a>.
        Through internships at companies like <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className="hover:underline underline-offset-4 font-bold">Rohde & Schwarz, ASC Technologies, and Framatome</a>, I gained valuable hands-on experience.
        I have also successfully competed in <a href="#" target="_blank" className="hover:underline underline-offset-4 font-bold">well-known competitions</a>.
        I regularly attend workshops and enjoy working on <a href="https://github.com/timarnoldev" target="_blank" className="hover:underline underline-offset-4 font-bold">personal projects</a> to apply my knowledge in practice.
    </p>
}

const mapRange = (inputLower: number, inputUpper: number, outputLower: number, outputUpper: number) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;
    return (value: number) => {
        return outputLower + ((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE;
    };
}
    

const setTransform = (item: HTMLElement & EventTarget, event: React.PointerEvent, x:MotionValue<number>, y:MotionValue<number>) => {
    const bounds = item.getBoundingClientRect();
    const xValue = event.clientX - bounds.left
    const yValue = event.clientY - bounds.top
    const xRange = mapRange(0, bounds.width, -1, 1)(xValue)
    const yRange = mapRange(0, bounds.height, -1, 1)(yValue)
    x.set(xRange * 10)
    y.set(yRange * 10)

}

function SocialButtons() {
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const textX = useTransform(x, value => value * 0.5);
    const textY = useTransform(y, value => value * 0.5);

    return <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">

        <motion.a style={{x,y}} onPointerMove={(event) =>{
            const item = event.currentTarget;
            setTransform(item, event, x, y);
        }} onPointerLeave={()=>{
            x.set(0)
            y.set(0)
        }} title="hello@tim-arnold.de" href='mailto:hello@tim-arnold.de' target="_blank" className='bounce flex flex-row  whitespace-nowrap items-center justify-center gap-2 px-8 py-3 bg-primary rounded-3xl text-white cursor-pointer hover:bg-primary-hover transition-colors select-none'>
            <motion.div className='flex flex-row items-center gap-2 bounce' style={{ x:textX, y:textY}}>
            <Mail />
            Let's Talk
            </motion.div>
        </motion.a>

        <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className='flex flex-row whitespace-nowrap items-center justify-center gap-2 px-8 py-3 border-2  border-primary hover:text-white rounded-3xl text-primary cursor-pointer hover:bg-primary transition-colors select-none'>
            <Linkedin />
            Connect on LinkedIn
        </a>

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
                <SocialButtons />
            </div>
        </div>
        <div className="w-1/2 flex justify-center items-center select-none">
            <Image src={"/mainimage.webp"} alt="Hero Image" width={1400} height={1400} className="object-cover rounded-full w-2/3 shadow-2xl max-w-150" />
        </div>





        {/* Mobile */}
        <div className="flex flex-col justify-center sm:hidden items-center px-10">
            <Introduction />

            <SocialButtons />

        </div>
    </div>

            {/*Tablet */}


        <div className="flex flex-col justify-center max-sm:hidden md:hidden items-center px-20">
            <Introduction />

            <SocialButtons />

        </div>
    </>
}