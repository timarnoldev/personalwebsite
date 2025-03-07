import { Dictionary } from "@/i18n/get-dictionaries";
import ekes from "@/content/projects/project-ekes.json";
import Modal from "./modal";
import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";
import hgsImage from "../../public/awards/hgs.webp"
import fraunhoferImage from "../../public/awards/fraunhofer.webp"
import gfbmImage from "../../public/awards/gfbm.webp"
import hackathonImage from "../../public/awards/hackathon-fulda.svg"

const awards = (lang:Dictionary) => {
    return [
        {
            name: lang.awardsHGSHeadline,
            date: "05/2021", 
            localation: "Vilsbiburg, Germany",
            image: hgsImage,
            text: lang.awardsHGSText,
            reference: "modal",
            modalData: ekes
        },
        {
            name: lang.awardsFraunhoferHeadline,
            date: "05/2022",
            localation: "Munich, Germany",
            image: fraunhoferImage,
            text: lang.awardsFraunhoferText,
            reference: "external",
            link: "https://www.linkedin.com/in/timarnold-/"
        },
        {
            name: lang.awardsGFBMHeadline,
            date: "11/2024",
            image: gfbmImage,
            localation: "Berlin, Germany",
            text: lang.awardsGFBMText,
            reference: "external",
            link: "https://www.linkedin.com/posts/timarnold-_ein-spannender-tag-in-berlin-ging-gestern-activity-7266103194676613121-Iv_W"

        },
        {
            name: lang.awardsFuldaHackathonHeadline,
            date: "10/2024",
            image: hackathonImage,
            localation: "Fulda, Germany",
            text: lang.awardsFuldaHackathonText,
            reference: "external",
            link: "https://www.linkedin.com/posts/timarnold-_gestern-ging-der-6-fulda-hackathon-in-der-activity-7256757551994736642-Fo2T"

        },
    ]
}

export default function Awards(props: { lang: Dictionary }) {
    return <div className="flex flex-col w-[99dvw] items-center gap-1 mb-20 ">

        <h2 className="mt-12 3xl:self-center sm:ml-12 ml-6 md:text-5xl text-4xl text-[#2e2e2e] font-bold self-start">
            {props.lang.furtherAwardsAndAchievements}
        </h2>

        {/*Has page width*/}
            <div className="flex flex-col xl:flex-row xl:flex md:grid md:grid-cols-2  max-w-400 mt-4 mb-5 xl:gap-8 gap-8 mx-10"> {/*Has width of all children*/}

                {
                    awards(props.lang).map((award, index) => {
                        return <div key={index} className="flex flex-1 flex-col justify-between gap-4 max-w-[80vw]">
                            <div className="flex flex-col gap-3 sm:items-center">
                                {
                                    award.image && <div className="lg:m-10 m-5 max-w-100 bg-white shadow-2xl p-4 rounded-xl aspect-square flex flex-col items-center self-center justify-center">
                                        <Image src={award.image} alt="Logo" width={600} height={600} className="  "/>
                                    </div>
                                }
                                
                                <h3 className="text-xl font-bold flex flex-row gap-2 mt-3 items-center text-center">{award.name}</h3>
                                <div className="flex flex-row gap-4">
                                    <div className="text-gray-600 flex flex-row gap-2 items-center"><CalendarDays />{award.date}</div>
                                    <div className="text-gray-600 flex flex-row gap-2 items-center"><MapPin />{award.localation}</div>
                                </div>


                                {
                                    award.text && <p className="text text-gray-600">{award.text}</p>
                                }

                            
                            </div>
                           
                            {
                                    award.reference === "modal" && <Modal data={award.modalData}><div className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">{props.lang.learnmoreaward} <ExternalLink/></div></Modal>
                                }

                                {
                                    award.reference === "external" && <a href={award.link} target="_blank" className="flex flex-row gap-2 items-center cursor-pointer hover:underline underline-offset-4 font-bold w-fit">{props.lang.learnmoreaward} <ExternalLink/></a>
                                }
                        </div>
                    })
                }


            </div>


    </div>
}