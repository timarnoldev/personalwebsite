import { Plus } from 'lucide-react';
import Image from 'next/image'
import Modal from './modal';
import rekariBlog from "@/content/projects/project-rekari.json"
import foosballBlog from "@/content/projects/project-foosball.json"
import ekesBlog from "@/content/projects/project-ekes.json"
import { Dictionary } from '@/i18n/get-dictionaries';

const projects = (lang:Dictionary)=>{
    return [
        {
            id: 0,
            img: "/projects/rekari.webp",
            title: lang.rekari,
            desc: lang.rekariDesc,
            link: "https://www.rekari.de",
            blogContent: rekariBlog
        },
    
        {
            id: 2,
            img: "/projects/foosball.webp",
            title: lang.foosball,
            desc: lang.foosballDesc,
            link: "https://www.rekari.de",
            blogContent: foosballBlog
        },
    
    
        {
            id: 1,
            img: "/projects/ekes.webp",
            title: lang.ekes,
            desc: lang.ekesDesc,
            link: "https://www.rekari.de",
            blogContent: ekesBlog
        },
    
    
    
    ];
} 

const ListItem = (item: any) => {
    return <Modal data={item.blogContent}><div tabIndex={0} className=" flex flex-col shadow rounded-3xl h-[70vh] max-h-170 w-auto aspect-[0.55] relative justify-between gap-12 cursor-pointer hover:scale-[101.6%] transition-transform will-change-transform duration-300">

        <div className="pl-6 pt-6 flex flex-col items-start gap-0 max-w-[90%]">
            <p className='text-l text-white font-bold'>{item.desc}</p>
            <h3 className="text-3xl text-white font-bold">{item.title}</h3>
        </div>

        
            <div className="p-2 cursor-pointer self-end mr-8 mb-8 z-10 bg-white opacity-85 rounded-full">
                <Plus className='text-gray-800' strokeWidth={3} />
            </div>
        

        <div className="absolute textreadabilityGradient w-full h-full rounded-3xl -z-5"></div>

        <div className="h-full overflow-hidden absolute rounded-3xl -z-10">
            <Image src={item.img} width={744} height={1360} alt='asd' className="" />
        </div>

    </div></Modal>

}

export default function Projects(props: {lang: Dictionary}) {
    return <div className="flex flex-col w-dvw mb-20 items-center gap-1 ">

        <div className="mt-12 ml-12 text-5xl text-[#2e2e2e] font-bold self-start">
           {props.lang.recentProjects}
        </div>

        {/*Has page width*/}
        <div className="w-dvw  overflow-x-auto pl-12">
            <div className="flex flex-row w-max gap-8 mt-5 mb-5 pr-12"> {/*Has width of all children*/}
                {projects(props.lang).map((project) => (
                    <ListItem key={project.id} {...project} />
                ))}

            </div>

        </div>

    </div>
}