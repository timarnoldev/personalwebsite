'use client';

import { Dictionary } from '@/i18n/get-dictionaries'
import { ArrowRight, ExternalLink, Github, Globe, Linkedin, Mail, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSelector from './LanguageSelector';
import { useEffect, useState } from 'react';
import timarnold from "../../public/timarnold.webp"
import wave from "../../public/wave.webp"

function smoothScroll (event: React.UIEvent<HTMLAnchorElement, UIEvent>) {

    event.preventDefault()

    const link = event.currentTarget
    const anchorId = new URL(link!.href).hash.replace('#', '')
    const anchor = document.getElementById(anchorId)
     //if the anchor is not on the page, redirect to the root
     if(!anchor){
        window.location.href = "/";
        return;
    }
    window.scrollTo({
        top: anchor!.offsetTop-100,
        behavior: 'smooth'
    })
}

export default function Header(props: { lang: Dictionary }) {
    const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);
    const [isUserLanguageGerman, setIsUserLanguageGerman] = useState(false);

    function toggleLanguageSelector() {
        setIsLanguageSelectorOpen(!isLanguageSelectorOpen);
    }

    useEffect(() => {
        //detect browser language
        const browserLanguage = navigator.language.split("-")[0];
        if(window.localStorage.getItem("germanCleared") === null){
            setIsUserLanguageGerman(browserLanguage === "de");
        }
    }, []);

    function switchLanguage(lang: string) {
        //replace slug (first location in the url) in the url with the new language if the slug is not present add it (if the user is on the root page)
        
        //if on root page, add the language to the url
        if (window.location.pathname === "/") {
            window.location.href = `/${lang}${window.location.pathname}`;
        }
        //if on a subpage, replace the slug which is the first location in the url
        else {
            const url = window.location.pathname;
            const newUrl = url.replace(props.lang.lang, lang);
            window.location.href = newUrl;
        }
      
    }


    return <div className='flex flex-col top-0 fixed z-50 w-full'>
        {
            isUserLanguageGerman && props.lang.lang !== "de" && <div className='hidden md:flex bg-primary cursor-pointer text-center p-2 flex-row items-center justify-between px-4 text-white' onClick={switchLanguage.bind(null, "de")}>
                <div></div>
                <div className="flex flex-row gap-4 items-center">
                Es sieht aus, als würdest du Deutsch sprechen. Hier kannst du auf die deutsche Seite wechseln. <ArrowRight/>
                </div>
                <div className='self-end justify-self-end cursor-pointer' onClick={(e)=>{
                    setIsUserLanguageGerman(false);
                    window.localStorage.setItem("germanCleared", "true");
                    e.stopPropagation();
                }}>
                    <X/>
                </div>
            </div>
        }

        <nav className="bg-herobackground shadow-lg w-full sm:h-24 h-22 flex items-center   overscroll-y-none"> {/* Header */}

            <div className="my-3 sm:mx-10 mx-3 flex-grow flex flex-row items-center justify-between">


                <div>
                    <label onClick={() => {
                        if (!['/', '/en', '/de'].includes(window.location.pathname)) {
                            window.location.href = `/${props.lang.lang}`;
                        }
                    }} tabIndex={0} htmlFor="toggleSocialMenu" className="peer hover:bg-herobackgroundhover group-has-checked:bg-herobackgroundhover p-2 rounded-2xl transition-colors group flex flex-row items-center cursor-pointer overflow-visible" title="Social-Menu" aria-haspopup> {/* Hero Image */}
                        <input type="checkbox" id="toggleSocialMenu" className='hidden' />
                        <div className='relative overflow-visible'>
                            <Image src={timarnold} alt="Picture of Tim Arnold" title="Tim Arnold" width={75} height={75} className="rounded-full object-cover w-[75px] h-[75px] aspect-square shadow" />
                            <Image src={wave} alt="Wave" width={30} height={30} className="group-hover:opacity-100 group-has-checked:opacity-100 opacity-0 transition-opacity absolute bottom-0 right-0 w-[30px] h-[30px] drop-shadow-2xl" />

                        </div>
                        <div className="sm:flex hidden flex-col gap-0.5 items-start justify-center">
                            <p className="text-xl font-bold text-herotext ml-5 leading-none">Tim</p>
                            <p className="text-xl font-bold text-herotext ml-5 leading-none">Arnold</p>
                        </div>


                    </label>

                    {/* Name dropdown - socials*/}


                    <div aria-label="submenu" className='border speechbubble border-gray-400 absolute left-0 top-0 flex-col gap-4 rounded-2xl shadow-xl p-4 ml-4 mt-28 bg-herobackgroundhover hidden peer-has-checked:flex'>
                        <p className="text-herotext font-bold px-7">{props.lang.getintouchwithme}</p>

                        <div className="flex flex-col gap-3 w-full">
                            {/* Email */}

                            <a href="mailto:hello@tim-arnold.de" className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                                <div className="flex flex-row gap-2 items-center">
                                    <Mail />
                                    <p className="">E-Mail</p>
                                </div>
                                <ExternalLink />
                            </a>

                            {/* Linkedin */}


                            <a href="https://www.linkedin.com/in/timarnold-/" target='_blank' className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                                <div className="flex flex-row gap-2 items-center">
                                    <Linkedin />
                                    <p className="">LinkedIn</p>
                                </div>
                                <ExternalLink />
                            </a>

                            {/* Github */}
                            <a href="https://github.com/timarnoldev" target='_blank' className="flex flex-row gap-2 p-4 flex-grow rounded-2xl shadow justify-between items-center cursor-pointer bg-cardbackground hover:bg-cardbackgroundhover">
                                <div className="flex flex-row gap-2 items-center">
                                    <Github />
                                    <p className="">Github</p>
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



                <div className="flex flex-row items-center sm:gap-6 gap-2"> {/* Header Links */}

                    <div className="flex-row items-center gap-6 hidden sm:flex">
                        <a onClick={smoothScroll} onKeyDown={(e)=>{if(e.key === "Enter") smoothScroll(e)}} href="#aboutme" className="hover:underline underline-offset-4 transition-all text-nowrap">{props.lang.aboutme}</a>
                        <a onClick={smoothScroll} onKeyDown={(e)=>{if(e.key === "Enter") smoothScroll(e)}} href="#achievements" className="hover:underline underline-offset-4 transition-all text-nowrap hidden md:block">{props.lang.achievements}</a>
                        <a onClick={smoothScroll} onKeyDown={(e)=>{if(e.key === "Enter") smoothScroll(e)}} href="#projects" className="hover:underline underline-offset-4 transition-all text-nowrap">{props.lang.projects}</a>
                    </div>

                    <a title="hello@tim-arnold.de" href='mailto:hello@tim-arnold.de' className="bg-primary transition-colors text-white rounded-3xl pb-2 pt-2 pl-4 pr-4 hover:bg-primary-hover cursor-pointer text-nowrap">{props.lang.contactme}</a>

                    <div className='relative '>
                        <Globe onClick={toggleLanguageSelector}  tabIndex={0} onKeyDown={(e)=>{if(e.key === "Enter") toggleLanguageSelector()}} className="text-gray-500 cursor-pointer" />
                        <div className={isLanguageSelectorOpen ? "" : "hidden"}>
                            <LanguageSelector lang={props.lang} switchLanguage={switchLanguage} />
                        </div>
                    </div>
                </div>


            </div>
        </nav>
    </div>
}