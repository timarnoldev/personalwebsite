import { getDictionary } from "@/i18n/get-dictionaries";
import { i18n, Locale } from "@/i18n/i18n-config";
import Image from "next/image";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Sponsorship(props: {params: Promise<{ lang: Locale }>}) {
        const language = await props.params;
        const dictionary = await getDictionary(language.lang);
    
    return <div className="flex flex-col-reverse">
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold sm:w-[80%] w-[95%] self-center">{dictionary.sponsoredby}</h1>
            <Sponsor name={dictionary.wriSponsor} logo="/projects/footballai/sponsor/wri.webp" text={dictionary.wriSponsorText} />
<Sponsor name={dictionary.tracopowerSponsor} logo="/projects/footballai/sponsor/tracopower.webp" text={dictionary.tracopowerSponsorText} />
<Sponsor name={dictionary.carromcoSponsor} logo="/projects/footballai/sponsor/carromco.webp" text={dictionary.carromcoSponsorText} />
<Sponsor name={dictionary.stemmerSponsor} logo="/projects/footballai/sponsor/stemmer.webp" text={dictionary.stemmerSponsorText} />
<Sponsor name={dictionary.idsSponsor} logo="/projects/footballai/sponsor/ids.webp" text={dictionary.idsSponsorText} />

            <p className="text-lg sm:w-[80%] w-[95%] self-center ">{dictionary.lookingforsponsors}</p>
        </div>
    </div>
}

function Sponsor(props: { name: string; logo: string; text: string }) {
    return <div className="flex md:flex-row flex-col sm:w-[80%] w-[95%] self-center gap-5">
        <div className="md:w-70 h-40 grow shrink-0 rounded-xl bg-white shadow px-4">
            <Image src={props.logo} alt={props.name}  width={1966} height={1106} className=" h-40 object-contain" />

        </div>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{props.name}</h2>
                <p className="text-lg">{props.text}</p>
            </div>            

    </div>

}