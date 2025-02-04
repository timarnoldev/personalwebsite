import { ExternalLink } from "lucide-react"
import data from "../../content/rekari.json"
import BlogEntry from "@/components/BlogEntry"


export default function page() {
    
    return <div className=" mt-30 ml-30 mr-30">
        <BlogEntry data={data} ></BlogEntry>

    </div>
}