import { Dictionary } from "@/i18n/get-dictionaries";
import ekes from "@/content/projects/project-ekes.json";
import Modal from "./modal";
import { CalendarDays, ChevronDown, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

const awards = () => {
    return [
        {
            name: "Hermann-Gutmann-Prize for AI-Research",
            date: "05/2021", 
            localation: "Vilsbiburg, Germany",
            image: "/awards/hgs.webp",
            text: "I received this award for the development of an AI-based Evolution Simulation. Digital creatures based on neuronal networks evolve and adapt to their environment. The project was developed in the context of the Jugend Forscht competition.",
            reference: "modal",
            modalData: ekes
        },
        {
            name: "Frauenhofer Talent - Cybersecurity",
            date: "05/2022",
            localation: "Munich, Germany",
            image: "/awards/fraunhofer.webp",
            text: "As a special award I received the Fraunhofer Cybersecurity Talent School invitation. The program is designed to teach students in the field of Cybersecurity. Core topics are cryptography, network security and penetration testing.",
            reference: "external",
            link: "https://www.linkedin.com/in/timarnold-/"
        },
        {
            name: "Digital Solution Award",
            date: "11/2024",
            image: "/awards/gfbm.webp",
            localation: "Berlin, Germany",
            text: "I received this award for the development of Rekari. A platform for collaborative data collection and analysis using drones and mobile sensors. All relevant data get synchronized with every team member in real-time.",
            reference: "external",
            link: "https://www.linkedin.com/posts/timarnold-_ein-spannender-tag-in-berlin-ging-gestern-activity-7266103194676613121-Iv_W"

        },
       
    ]
}

export default function Awards(props: { lang: Dictionary }) {
    return <div className="flex flex-col w-dvw items-center gap-1 ">

        <div className="mt-12 3xl:self-center sm:ml-12 ml-6 text-5xl text-[#2e2e2e] font-bold self-start">
            Further Awards and Achievements
        </div>

        {/*Has page width*/}
            <div className="flex md:flex-row flex-col  max-w-400 mt-4 mb-5 xl:gap-16 gap-8 mx-10"> {/*Has width of all children*/}

                {
                    awards().map((award, index) => {
                        return <div key={index} className="flex flex-1 flex-col justify-between gap-4 max-w-[80vw]">
                            <div className="flex flex-col gap-3 sm:items-center">
                                {
                                    award.image && <div className="lg:m-10 m-5 bg-white shadow-2xl p-4 rounded-xl aspect-square flex flex-col items-center justify-center">
                                        <Image src={award.image} alt="Logo" width={600} height={600} className="  "/>
                                    </div>
                                }
                                
                                <h2 className="text-xl font-bold flex flex-row gap-2 mt-3 items-center">{award.name}</h2>
                                <div className="flex flex-row gap-4">
                                    <div className="text-gray-600 flex flex-row gap-2 items-center"><CalendarDays />{award.date}</div>
                                    <div className="text-gray-600 flex flex-row gap-2 items-center"><MapPin />{award.localation}</div>
                                </div>


                                {
                                    award.text && <p className="text text-gray-600">{award.text}</p>
                                }

                            
                            </div>
                           
                            {
                                    award.reference === "modal" && <Modal data={award.modalData}><div className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">Learn more <ExternalLink/></div></Modal>
                                }

                                {
                                    award.reference === "external" && <a href={award.link} target="_blank" className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">Learn more <ExternalLink/></a>
                                }
                        </div>
                    })
                }


            </div>


    </div>
}