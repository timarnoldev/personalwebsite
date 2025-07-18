import Image, { StaticImageData } from 'next/image'
import { Blog } from './articles/BlogEntry'
import stemtutor from "@/content/cv/cv-bufdi.json"
import jufo from "@/content/cv/cv-jugend-forscht.json"
import isef from "@/content/cv/cv-isef.json"
import rohdeundschwarz from "@/content/collaboration/col-rohdeandschwarz.json"
import asc from "@/content/collaboration/col-asc.json"
import microsoft from "@/content/collaboration/col-microsoft.json"
import framatome from "@/content/collaboration/col-framatome.json"
import productware from "@/content/collaboration/col-productware.json"
import st from "@/content/collaboration/col-st.json"
import nordic from "@/content/collaboration/col-nordicsemi.json"
import deutschebank from "@/content/collaboration/col-deutschebank.json"
import ublox from "@/content/collaboration/col-ublox.json"
import { Dictionary } from '@/i18n/get-dictionaries'
import Marquee from "react-fast-marquee";

import microsoftImage from "../../public/logos/microsoft.svg"
import framatomeImage from "../../public/logos/framatome.svg"
import deutschebankImage from "../../public/logos/deutschebank.svg"
import rohdeundschwarzImage from "../../public/logos/rohdeundschwarz.svg"
import ascImage from "../../public/logos/asc.svg"
import stImage from "../../public/logos/st.svg"
import productwareImage from "../../public/logos/productware.svg"
import nordicImage from "../../public/logos/nordicsemi.svg"
import ubloxImage from "../../public/logos/ublox.svg"
import stemtutorImage from "../../public/logos/walterreisstiftung.svg"
import jufoImage from "../../public/logos/jugendforscht.svg"
import isefImage from "../../public/logos/societyforscience.svg"
import BlogModal from './BlogModal'


function Logo(props: { src: StaticImageData, alt: string, enlarge?: boolean, height: number, width?: number, blog:Blog}) {
    if (props.enlarge) {
        return <BlogModal blog={props.blog}><Image src={props.src} height={props.height} width={props.width??280} alt={props.alt} className=" shrink-0 max-h-20 opacity-40 hover:opacity-100 transition-all duration-500 hover:brightness-100 brightness-0 contrast-100 cursor-pointer self-center mr-16" /></BlogModal>
    } else {
        return <BlogModal blog={props.blog}><Image src={props.src} height={props.height} width={props.width??200} alt={props.alt} className=" shrink-0 max-h-15 opacity-40 hover:opacity-100 transition-all duration-500 hover:brightness-100 brightness-0 contrast-100 cursor-pointer self-center mr-16" /></BlogModal>
    }
}


export default function CollaborationSection(props: {lang: Dictionary}) {
    return <div className="flex flex-col items-center sm:items-start gap-6 sm:mx-10 mt-10 mx-2 overflow-hidden">
        <div>
            <h2 className="text-2xl font-bold sm:ml-20  text-center self-center text-gray-600">{props.lang.collaborationSection}</h2>
        </div>

        <div className="fade-out-container overflow-hidden " >
            <Marquee className="" autoFill={true}>
                <Logo blog={microsoft} src={microsoftImage} alt="Microsoft Logo - Trademark of microsoft" height={43.65} />
                <Logo blog={framatome} src={framatomeImage} alt="Framatome Logo - Trademark of framatome" height={31.25}/>
                <Logo blog={deutschebank} src={deutschebankImage} alt="Deutsche Bank Logo - Trademark of deutsche bank" height={60} width={60}/>
                <Logo blog={rohdeundschwarz} src={rohdeundschwarzImage} alt="Rohde und Schwarz Logo - Trademark of rohdeundschwarz" height={58.82}/>
                <Logo blog={asc} src={ascImage} alt="ASC Technologies Logo - Trademark of asc technologies" height={59.99} width={108.62}/>
                <Logo blog={st} src={stImage} alt="STMicroelectronics Logo - Trademark of STMicroelectronics" height={79.99} width={104.04} enlarge/>
                <Logo blog={productware} src={productwareImage} alt="Productware Logo - Trademark of productware" height={46} width={138}/>
                <Logo blog={nordic} src={nordicImage} alt="Nordic semiconductor Logo - Trademark of nordic semiconductor" height={53.13} width={62}/>
                <Logo blog={ublox} src={ubloxImage} alt="ublox Logo - Trademark of ublox" height={59.99} width={153.59}/>
                <Logo blog={stemtutor} src={stemtutorImage} alt="Walter Reis Fundation Logo - Trademark of walter reis fundation" height={59.99} width={180.48}/>
                <Logo blog={jufo} src={jufoImage} alt="Jugend forscht - Trademark of Jugend forscht" height={30.77} enlarge/>
                <Logo blog={isef} src={isefImage} alt="Society for science - Trademark of Society for science" width={223} height={48.77} />
          </Marquee>
        </div>
    </div>
}