import { ArrowLeft } from "lucide-react"
import rekariBlog from "@/content/projects/project-rekari.json"
import foosballBlog from "@/content/projects/project-foosball.json"
import ekesBlog from "@/content/projects/project-ekes.json"
import jufoBlog from "@/content/cv/cv-jugend-forscht.json"
import isefBlog from "@/content/cv/cv-isef.json"
import stemtutor from "@/content/cv/cv-bufdi.json"
import abitur from "@/content/cv/cv-abitur.json"
import colMicrosoft from "@/content/collaboration/col-microsoft.json"
import colRohdeUndSchwarz from "@/content/collaboration/col-rohdeandschwarz.json"
import colProductware from "@/content/collaboration/col-productware.json"
import colFramatome from "@/content/collaboration/col-framatome.json"
import colASC from "@/content/collaboration/col-asc.json"
import colST from "@/content/collaboration/col-st.json"
import colUblox from "@/content/collaboration/col-ublox.json"
import colNordicSemi from "@/content/collaboration/col-nordicsemi.json"
import colDeutscheBank from "@/content/collaboration/col-deutschebank.json"
import technicalDetails from "@/content/other/technical-detail.json"
import { getDictionary } from "@/i18n/get-dictionaries";
import { i18n, Locale } from "@/i18n/i18n-config";
import BlogEntryPreview from "@/components/articles/BlogEntryPreview";
import BlogSeparator from "@/components/BlogSeparator"
import Link from "next/link"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}



export default async function page(  props: {params: Promise<{ lang: Locale }>}) {
    const language = await props.params;
    const dictionary = await getDictionary(language.lang);

    
    return <div className=" mt-40 flex flex-col gap-5 mb-20">
         <div className="flex items-center gap-2  mb-5 sm:ml-30 ml-5  self-start">
            <Link href={"/"+language.lang+"/"} className="text-xl font-bold text-gray-600 flex flex-row gap-2 items-center underline-offset-4 hover:underline"><ArrowLeft/>{dictionary.back} </Link>
        </div>
        <h1 className="text-6xl sm:ml-30 self-center sm:self-start  font-bold text-big-headline">{dictionary.articles}</h1>

        <div className="flex flex-col w-[100vw] items-center">
            <div className="flex lg:w-[70%] w-[90%] flex-col gap-8 ">
                <BlogSeparator id="recentprojects" text={dictionary.recentProjects}></BlogSeparator>
                <BlogEntryPreview lang={language.lang} data={rekariBlog} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={foosballBlog} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={ekesBlog} ></BlogEntryPreview>
                <BlogSeparator id="experienceandsuccess" text={dictionary.experienceandsuccess}></BlogSeparator>
                <BlogEntryPreview lang={language.lang} data={jufoBlog} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={isefBlog} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={stemtutor} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={abitur} ></BlogEntryPreview>
                <BlogSeparator id="collaborationSection" text={dictionary.collaborationSection}></BlogSeparator>
                <BlogEntryPreview lang={language.lang} data={colMicrosoft} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colRohdeUndSchwarz} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colST} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colNordicSemi} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colProductware} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colFramatome} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colUblox} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colDeutscheBank} ></BlogEntryPreview>
                <BlogEntryPreview lang={language.lang} data={colASC} ></BlogEntryPreview>
                <BlogSeparator id="other" text={dictionary.other}></BlogSeparator>
                <BlogEntryPreview lang={language.lang} data={technicalDetails} ></BlogEntryPreview>

            </div>

        </div>
    </div>
}