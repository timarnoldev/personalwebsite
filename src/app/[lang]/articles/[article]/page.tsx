import { ArrowLeft, ExternalLink } from "lucide-react"
import data from "@/content/projects/project-foosball.json"
import BlogEntry from "@/components/articles/BlogEntry"
import { useContext } from "react"
import { getDictionary } from "@/i18n/get-dictionaries";
import { Locale } from "@/i18n/i18n-config";
import { blogs } from "@/data/blogs";
import BlogEntryPreview from "@/components/articles/BlogEntryPreview";

export async function generateStaticParams() {
    let articles: Array<{ lang: string, article: string }> = [];
    const articles_de = blogs.map((blog) => ({ lang: "de", article: blog.slug }));
    const articles_en = blogs.map((blog) => ({ lang: "en", article: blog.slug }));
    return articles.concat(articles_de, articles_en);
}


export default async function page(props: { params: Promise<{ lang: Locale, article: string }> }) {
    const params = await props.params;
    const language = params.lang;
    const article = params.article;
    const dictionary = await getDictionary(language);

    //find article 
    const data = blogs.find((blog) => blog.slug === article);
    //next article or the first one if this is the last
    const nextArticle = blogs[(blogs.findIndex((blog) => blog.slug === article) + 1) % blogs.length];




    return <div className=" mt-20  flex flex-col items-center justify-center">

        <div className="flex items-center gap-2 mt-10 mb-5 sm:ml-30 ml-5  self-start">
            <a href={"/" + language + "/articles"} className="text-xl font-bold text-gray-600 flex flex-row gap-2 items-center underline-offset-4 hover:underline"><ArrowLeft />{dictionary.back} </a>
        </div>

        {
            !data &&
            <div className="mt-40 text-3xl h-[55vh] ml-10">404 Not found</div>

        }

        {
            data && <div className="max-w-500">
                
                    <script type="application/ld+json">
                        {
                            `{
                "@context": "https://schema.org/",
                "@type": "Article",
                "headline": "${language === "de" ? data.title_de ?? data.title : data.title}",
                "image": "${data.image}",
                "author": {
                    "@type": "Person",
                    "name": "Tim Arnold"
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://tim-arnold.de"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Tim Arnold",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://tim-arnold.de/timarnold.webp"
                    }
                },
                "description": "${language === "de" ? data.content.find(item => item.type !== "headline")?.text_de ?? data.content.find(item => item.type !== "headline")?.text : data.content.find(item => item.type !== "headline")?.text}"
                }`
                        }
                    </script>
                <BlogEntry large data={data} ></BlogEntry>
            </div>
        }

        <div className="self-center mt-5 bg-gray-600 rounded h-1 w-[80%]" />

        <div aria-label="readmore" className="flex-col flex items-center md:items-start gap-3 mt-5 mb-4">
            <h2 className="font-bold text-2xl ml-4">{dictionary.readmore}</h2>


            <BlogEntryPreview lang={language} data={nextArticle} ></BlogEntryPreview>

        </div>



    </div>
}