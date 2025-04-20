import { Locale } from "@/i18n/i18n-config";
import { project_footballai } from "@/data/blogs";
import BlogEntryPreviewWithModal from "@/components/articles/BlogEntryPreviewWithModal";
import BlogSeparator from "@/components/BlogSeparator";
import foosballBlog from "@/content/projects/project-foosball.json"
import { getDictionary } from "@/i18n/get-dictionaries";
import OpenModalWithURL from "@/utils/OpenModalWithURL";

export async function generateStaticParams() {
    return [{ lang: "de" }, { lang: "en" }];
}

export default async function AIFootball(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const language = await props.params;
    const dictionary = await getDictionary(language.lang);

    return <div className="flex flex-col items-center ">

        <OpenModalWithURL blogs={project_footballai} />

        <BlogSeparator center id="overview" text={dictionary.overview}></BlogSeparator>

        <BlogEntryPreviewWithModal lang={language.lang} data={foosballBlog} />
        
        <BlogSeparator center id="blogposts" text={"Blogposts"}></BlogSeparator>

        {
        project_footballai.map((article, index) => {
            return <BlogEntryPreviewWithModal  key={index} lang={language.lang} data={article} />
        })
        }

    </div>
}