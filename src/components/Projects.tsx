import { Plus } from 'lucide-react';
import Image from 'next/image'

const projects = [
    {
        id: 0,
        img: "/projects/rekari.webp",
        title: "Rekari",
        desc: "Empower the team",
        link: "https://www.rekari.de",
        linkText: "Visit Rekari",
    },

    {
        id: 2,
        img: "/projects/foosball.webp",
        title: "AI football table",
        desc: "Robot vs. Human",
        link: "https://www.rekari.de",
        linkText: "Visit Rekari",
    },


    {
        id: 1,
        img: "/projects/ekes.webp",
        title: "Evolution Simulation",
        desc: "AI visualized",
        link: "https://www.rekari.de",
        linkText: "Visit Rekari",
    },

   
    
];



const ListImte = (item:any) => {
    return <div className="flex flex-col shadow rounded-3xl h-[70vh] max-h-170 w-auto aspect-[0.55] relative justify-between gap-12 cursor-pointer hover:scale-[101.6%] transition-transform will-change-transform duration-300">
        
        <div className="pl-6 pt-6 flex flex-col items-start gap-0 max-w-[90%]">
            <p className='text-l text-white font-bold'>{item.desc}</p>
            <h3 className="text-3xl text-white font-bold">{item.title}</h3>
        </div>

       


        <div className="p-2 cursor-pointer self-end mr-8 mb-8 z-10 bg-white opacity-85 rounded-full">
            <Plus className='text-gray-800' strokeWidth={3}/>
        </div>

        <div className="absolute textreadabilityGradient w-full h-full rounded-3xl -z-5"></div>
 
        <div className="h-full overflow-hidden absolute rounded-3xl textreadabilityGradient -z-10">
        <Image src={item.img} width={744} height={1360} alt='asd' className=""/>
        </div>

    </div>
        
}

export default function Projects() {
    return <div className="flex flex-col w-dvw mt-24 mb-24 items-center gap-8 ">

        <div className="mt-12 ml-12 text-5xl text-primary font-bold self-start">
            Recent Projects
        </div>

        {/*Has page width*/}
        <div className="w-dvw  overflow-x-scroll pl-12">
        <div className="flex flex-row w-max gap-8 pt-5 pb-5 pr-12"> {/*Has width of all children*/}
            {projects.map((project) => (
                <ListImte key={project.id} {...project} />
            ))}

        </div>

    </div>

    </div>
}