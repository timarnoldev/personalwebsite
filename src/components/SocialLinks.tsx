"use client";
import { Dictionary } from '@/i18n/get-dictionaries';
import { Linkedin, Mail } from 'lucide-react'
import { motion, MotionValue, useMotionValue, useTransform } from 'motion/react'

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
export default function SocialButtons(props: {enableMotion: boolean, lang: Dictionary}) {
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const textX = useTransform(x, value => value * 0.5);
    const textY = useTransform(y, value => value * 0.5);

    return <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">

        <motion.a style={{x,y}} onPointerMove={(event) =>{
            if(props.enableMotion) {
                const item = event.currentTarget;
                setTransform(item, event, x, y);
            }
        }} onPointerLeave={()=>{
            x.set(0)
            y.set(0)
        }} title="hello@tim-arnold.de" href='mailto:hello@tim-arnold.de' target="_blank" className='bounce flex flex-row  whitespace-nowrap items-center justify-center gap-2 px-8 py-3 bg-primary rounded-3xl text-white cursor-pointer hover:bg-primary-hover transition-colors select-none'>
            <motion.div className='flex flex-row items-center gap-2 bounce' style={{ x:textX, y:textY}}>
            <Mail />
            {
                props.lang.letstalk
            }
            </motion.div>
        </motion.a>

        <a href="https://www.linkedin.com/in/timarnold-/" target="_blank" className='flex flex-row whitespace-nowrap items-center justify-center gap-2 px-8 py-3 border-2  border-primary hover:text-white rounded-3xl text-primary cursor-pointer hover:bg-primary transition-colors select-none'>
            <Linkedin />
            Connect on LinkedIn
        </a>

    </div>
}