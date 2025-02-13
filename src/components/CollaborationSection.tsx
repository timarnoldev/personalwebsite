import Image from 'next/image'
import Modal from './modal'
import { Blog } from './articles/BlogEntry'
import stemtutor from "@/content/cv/cv-bufdi.json"
import jufo from "@/content/cv/cv-jugend-forscht.json"
import isef from "@/content/cv/cv-isef.json"
import rohdeundschwarz from "@/content/collaboration/col-rohdeandschwarz.json"
import asc from "@/content/collaboration/col-asc.json"
import microsoft from "@/content/collaboration/col-microsoft.json"
import productware from "@/content/collaboration/col-productware.json"
import { Dictionary } from '@/i18n/get-dictionaries'

function Logo(props: { src: string, alt: string, enlarge?: boolean, height: number, width?: number, blog?:Blog}) {
    if (props.enlarge) {
        return <Modal data={props.blog}><Image src={props.src} height={props.height} width={props.width??280} alt={props.alt} className=" shrink-0 max-h-20 opacity-40 hover:opacity-100 transition-all duration-500 hover:brightness-100 brightness-0 contrast-100 cursor-pointer" /></Modal>
    } else {
        return <Modal data={props.blog}><Image src={props.src} height={props.height} width={props.width??200} alt={props.alt} className=" shrink-0 max-h-15 opacity-40 hover:opacity-100 transition-all duration-500 hover:brightness-100 brightness-0 contrast-100 cursor-pointer" /></Modal>
    }
}

export default function CollaborationSection(props: {lang: Dictionary}) {
    return <div className="flex flex-col items-center sm:items-start gap-6 sm:mx-10 mt-10 max-w-600">
        <div>
            <h2 className="text-2xl font-bold sm:ml-20  text-center self-center text-gray-600">{props.lang.collaborationSection}</h2>
        </div>

        <div className="fade-out-container overflow-hidden max-w-full">
            <div className=" flex flex-row gap-16 overflow-hidden items-center w-max autoscroll shrink-1 grow">
                <div className='pl-4'></div>
                <Logo blog={microsoft} src="/logos/microsoft.svg" alt="Microsoft Logo - Trademark of microsoft" height={43.65} />
                <Logo src="/logos/framatome.svg" alt="Framatome Logo - Trademark of framatome" height={31.25}/>
                <Logo src="/logos/deutschebank.svg" alt="Deutsche Bank Logo - Trademark of deutsche bank" height={60} width={60}/>
                <Logo blog={rohdeundschwarz} src="/logos/rohdeundschwarz.svg" alt="Rohde und Schwarz Logo - Trademark of rohdeundschwarz" height={58.82}/>
                <Logo blog={asc} src="/logos/asc.svg" alt="ASC Technologies Logo - Trademark of asc technologies" height={59.99} width={108.62}/>
                <Logo src="/logos/st.svg" alt="STMicroelectronics Logo - Trademark of STMicroelectronics" height={79.99} width={104.04} enlarge/>
                <Logo blog={productware} src="/logos/productware.svg" alt="Productware Logo - Trademark of productware" height={46} width={138}/>
                <Logo src="/logos/nordicsemi.svg" alt="Nordic semiconductor Logo - Trademark of nordic semiconductor" height={53.13} width={62}/>
                <Logo src="/logos/ublox.svg" alt="ublox Logo - Trademark of ublox" height={59.99} width={153.59}/>
                <Logo blog={stemtutor} src="/logos/walterreisstiftung.svg" alt="Walter Reis Fundation Logo - Trademark of walter reis fundation" height={59.99} width={180.48}/>
              {/*  <Logo src="/logos/hss.svg" alt="Hanns Seidel Fundation Logo - Trademark of hanns seidel fundation" height={59.99}  width={104.37}/> */}
                <Logo blog={jufo} src="/logos/jugendforscht.svg" alt="Jugend forscht - Trademark of Jugend forscht" height={30.77} enlarge/>
                <Logo blog={isef} src="/logos/societyforscience.svg" alt="Society for science - Trademark of Society for science" width={223} height={48.77} />


                {/*repeat */}
                <Logo src="/logos/microsoft.svg" alt="Microsoft Logo - Trademark of microsoft" height={43.65} />
                <Logo src="/logos/framatome.svg" alt="Framatome Logo - Trademark of framatome" height={31.25}/>
                <Logo src="/logos/deutschebank.svg" alt="Deutsche Bank Logo - Trademark of deutsche bank" height={60} width={60}/>
                <Logo src="/logos/rohdeundschwarz.svg" alt="Rohde und Schwarz Logo - Trademark of rohdeundschwarz" height={58.82}/>
                <Logo src="/logos/asc.svg" alt="ASC Technologies Logo - Trademark of asc technologies" height={59.99} width={108.62}/>
                <Logo src="/logos/st.svg" alt="STMicroelectronics Logo - Trademark of STMicroelectronics" height={79.99} width={104.04} enlarge/>
                <Logo src="/logos/productware.svg" alt="Productware Logo - Trademark of productware" height={46} width={138}/>
                <Logo src="/logos/nordicsemi.svg" alt="Nordic semiconductor Logo - Trademark of nordic semiconductor" height={53.13} width={62}/>
                <Logo src="/logos/ublox.svg" alt="ublox Logo - Trademark of ublox" height={59.99} width={153.59}/>
                <Logo blog={stemtutor} src="/logos/walterreisstiftung.svg" alt="Walter Reis Fundation Logo - Trademark of walter reis fundation" height={59.99} width={180.48}/>
              {/*  <Logo src="/logos/hss.svg" alt="Hanns Seidel Fundation Logo - Trademark of hanns seidel fundation" height={59.99}  width={104.37}/> */}
              <Logo blog={jufo} src="/logos/jugendforscht.svg" alt="Jugend forscht - Trademark of Jugend forscht" height={30.77} enlarge/>
                <Logo blog={isef} src="/logos/societyforscience.svg" alt="Society for science - Trademark of Society for science" width={223} height={48.77} />

          </div>
        </div>
    </div>
}