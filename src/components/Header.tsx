import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
    return <nav className="bg-herobackground shadow-lg w-dvw h-24 flex items-center fixed top-0 z-50 overscroll-y-none"> {/* Header */}

        <div className="my-3 sm:mx-10 mx-3 flex-grow flex flex-row items-center justify-between">


            <div>
                <label tabIndex={0} htmlFor="toggleSocialMenu" className="peer hover:bg-herobackgroundhover group-has-checked:bg-herobackgroundhover p-2 rounded-2xl transition-colors group flex flex-row items-center cursor-pointer overflow-visible" title="Click to see socials" aria-haspopup> {/* Hero Image */}
                    <input type="checkbox" id="toggleSocialMenu" className='hidden'/>
                    <div className='relative overflow-visible'>
                        <Image src={"/timarnold.webp"} alt="Picture of Tim Arnold" width={75} height={75} className="rounded-full object-cover w-[75px] h-[75px] aspect-square shadow" />
                        <Image src={"/wave.webp"} alt="Wave" width={30} height={30} className="group-hover:opacity-100 group-has-checked:opacity-100 opacity-0 transition-opacity absolute bottom-0 right-0 w-[30px] h-[30px] drop-shadow-2xl" />

                    </div>
                    <div className="sm:flex hidden flex-col gap-0.5 items-start justify-center">
                        <p className="text-xl font-bold text-herotext ml-5 leading-none">Tim</p>
                        <p className="text-xl font-bold text-herotext ml-5 leading-none">Arnold</p>
                    </div>


                </label>

                {/* Name dropdown - socials*/}

                <div aria-label="submenu" className='border speechbubble border-gray-400 absolute left-0 top-0 flex-col gap-4 rounded-2xl shadow-xl p-4 ml-4 mt-28 bg-herobackgroundhover hidden peer-has-checked:flex'>
                    <p className="text-herotext font-bold px-7">Get in touch with me</p>

                    <div className="flex flex-col gap-3 w-full">
                        {/* Email */}

                        <a href="mailto:hello@tim-arnold.de" className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                            <div className="flex flex-row gap-2 items-center">
                                <Mail />
                                <p  className="">E-Mail</p>
                            </div>
                            <ExternalLink />
                        </a>

                        {/* Linkedin */}
                    

                        <a href="https://www.linkedin.com/in/timarnold-/" target='_blank' className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                            <div className="flex flex-row gap-2 items-center">
                                <Linkedin />
                                <p  className="">LinkedIn</p>
                            </div>
                            <ExternalLink />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/timarnoldev" target='_blank' className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                            <div className="flex flex-row gap-2 items-center">
                                <Github />
                                <p  className="">Github</p>
                            </div>
                            <ExternalLink />
                        </a>

                    </div>

                </div>

            </div>

            {/* Display name center on smaller devices */}

            <div className='sm:hidden flex flex-col items-center justify-center text-xl font-bold text-herotext'> {/* Hero Image */}
                Tim Arnold
            </div>



            <div className="flex flex-row items-center gap-6"> {/* Header Links */}

                <div className="flex-row items-center gap-6 hidden sm:flex">
                    <a href="#" className="hover:underline underline-offset-4 transition-all">About me</a>
                    <a href="#" className="hover:underline underline-offset-4 transition-all">Projects</a>
                    <a href="#" className="hover:underline underline-offset-4 transition-all">More Info</a>
                </div>

                <a title="hello@tim-arnold.de" href='mailto:hello@tim-arnold.de' className="bg-primary transition-colors text-white rounded-3xl pb-2 pt-2 pl-4 pr-4 hover:bg-primary-hover cursor-pointer">Contact me</a>

            </div>


        </div>
    </nav>
}