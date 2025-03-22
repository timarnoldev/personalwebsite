import BlogEntryPreview from "@/components/articles/BlogEntryPreview";
import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";
import article from "@/content/project-site/footballai/001-mechanical-prototype.json";

export async function generateStaticParams() {
    return [{ lang: "de" }, { lang: "en" }];
}

export default async function AIFootball(props: {
    params: Promise<{ lang: Locale }>;
}) {
    const language = await props.params;
    const dictionary = await getDictionary(language.lang);


    return <div>

        <BlogEntryPreview lang={language.lang} data={article} />

    </div>
}