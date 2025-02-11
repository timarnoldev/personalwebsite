import { Dictionary } from "@/i18n/get-dictionaries";
import ekes from "@/content/projects/project-ekes.json";
import Modal from "./modal";
import { CalendarDays, ChevronDown, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

const awards = (lang:Dictionary) => {
    return [
        {
            name: lang.awardsHGSHeadline,
            date: "05/2021", 
            localation: "Vilsbiburg, Germany",
            image: "/awards/hgs.webp",
            text: lang.awardsHGSText,
            reference: "modal",
            modalData: ekes
        },
        {
            name: lang.awardsFraunhoferHeadline,
            date: "05/2022",
            localation: "Munich, Germany",
            image: "/awards/fraunhofer.webp",
            text: lang.awardsFraunhoferText,
            reference: "external",
            link: "https://www.linkedin.com/in/timarnold-/"
        },
        {
            name: lang.awardsGFBMHeadline,
            date: "11/2024",
            image: "/awards/gfbm.webp",
            localation: "Berlin, Germany",
            text: lang.awardsGFBMText,
            reference: "external",
            link: "https://www.linkedin.com/posts/timarnold-_ein-spannender-tag-in-berlin-ging-gestern-activity-7266103194676613121-Iv_W"

        },
       
    ]
}

export default function Awards(props: { lang: Dictionary }) {
    return <div className="flex flex-col w-dvw items-center gap-1 mb-20 ">

        <div className="mt-12 3xl:self-center sm:ml-12 ml-6 text-5xl text-[#2e2e2e] font-bold self-start">
            {props.lang.furtherAwardsAndAchievements}
        </div>

        {/*Has page width*/}
            <div className="flex md:flex-row flex-col  max-w-400 mt-4 mb-5 xl:gap-16 gap-8 mx-10"> {/*Has width of all children*/}

                {
                    awards(props.lang).map((award, index) => {
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
                                    award.reference === "modal" && <Modal data={award.modalData}><div className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">{props.lang.learnmore} <ExternalLink/></div></Modal>
                                }

                                {
                                    award.reference === "external" && <a href={award.link} target="_blank" className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">{props.lang.learnmore} <ExternalLink/></a>
                                }
                        </div>
                    })
                }


            </div>


    </div>
}