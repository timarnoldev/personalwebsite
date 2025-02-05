import Modal from "./modal";
import SocialButtons from "./SocialLinks";
import technicalDetails from "@/content/other/technical-detail.json"

export default function Footer() {
    return <div className="flex flex-col">

        <div className=" bg-test flex md:flex-row flex-col gap-5 justify-center items-center py-20 px-10">
            <div className="lg:text-8xl text-6xl leading-none text-[#2e2e2e] max-w-135 font-bold  text-center">Exchange ideas!</div>
            <div className="flex flex-col gap-2">
                <div className="text-gray-700 max-w-100 text-lg">
                    I’m always curious to hear new perspectives and exchange ideas. Whether it’s a creative project or a fresh challenge, I’m up for the conversation. Let’s chat and see what we can create together.
                </div>
                <SocialButtons enableMotion={false}></SocialButtons>
            </div>
        </div>

        <div className="bg-[#2e2e2e] flex flex-col md:flex-row md:justify-between justify-center items-center gap-5 md:px-32 py-10">
            <div className="flex flex-col items-center xl:flex-row xl:gap-24 gap-5">
                <div className="flex flex-row gap-14 font-bold text-lg ">
                    <a className="text-white hover:underline underline-offset-4" href="mailto:hello@tim-arnold.de">Email</a>
                    <a className="text-white hover:underline underline-offset-4" href="https://www.linkedin.com/in/timarnold-/">Linkedin</a>
                    <a className="text-white hover:underline underline-offset-4" href="https://github.com/timarnoldev">Github</a>
                </div>
                <div className="flex flex-row gap-14  text-lg ">
                    <a className="text-white hover:underline underline-offset-4" href="/articles">Articles</a>
                    <Modal data={technicalDetails}><div className="text-white hover:underline underline-offset-4">Technical Details</div></Modal>
                    <a className="text-white hover:underline underline-offset-4" href="https://github.com/timarnoldev">Imprint</a>
                </div>
            </div>

            <div className="text-white text-lg">
                © 2025 Tim Arnold
            </div>
        </div>

    </div>
}