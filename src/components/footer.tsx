"use client";
import { Dictionary } from "@/i18n/get-dictionaries";
import technicalDetails from "@/content/other/technical-detail.json";
import imprint from "@/content/other/imprint.json";
import BlogModal from "./BlogModal";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";

export default function Footer(props: { lang: Dictionary }) {
    return (
        <div className="flex flex-col w-full">
            {/* CTA Section */}
            <ScrollReveal>
                <div className="relative bg-[#2d4a0f] rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden">
                    {/* Organic gradient blobs */}
                    <div className="absolute -top-[15%] -right-[8%] w-[45%] h-[70%] bg-[#4a7020]/25 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-[10%] -left-[6%] w-[35%] h-[55%] bg-[#3a5c15]/35 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32">
                        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">
                            <div className="lg:flex-1">
                                <p className="text-[#b5d98a] text-sm font-heading uppercase tracking-[0.25em] mb-6">
                                    {props.lang.contactme}
                                </p>
                                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic text-white/95 tracking-tight leading-[0.88]">
                                    {props.lang.exchangeIdeas}
                                </h2>
                            </div>
                            <div className="lg:flex-1 lg:max-w-md">
                                <p className="text-[#a3c87a]/80 text-lg leading-relaxed">
                                    {props.lang.footerText}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                                    <a
                                        href="mailto:hello@tim-arnold.de"
                                        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#2d4a0f] rounded-full font-heading font-semibold text-sm hover:bg-[#f0f5e4] transition-colors"
                                    >
                                        <Mail size={16} />
                                        {props.lang.letstalk}
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/timarnold-/"
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 text-white/90 rounded-full font-heading font-medium text-sm hover:bg-white/10 transition-colors"
                                    >
                                        <Linkedin size={16} />
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            {/* Bottom section */}
            <div className="bg-[#243d0b]">
                <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 pt-10 pb-8">
                    <div className="flex flex-col md:flex-row md:justify-between gap-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-white/70 font-heading font-bold text-lg">Tim Arnold</p>
                            <a
                                href="mailto:hello@tim-arnold.de"
                                className="text-white/25 text-sm hover:text-white/45 transition-colors w-fit"
                            >
                                hello@tim-arnold.de
                            </a>
                        </div>

                        <div className="flex flex-row gap-14 sm:gap-20">
                            <nav className="flex flex-col gap-2.5">
                                <a className="text-white/30 hover:text-white/60 transition-colors text-sm flex items-center gap-1.5 group w-fit" href="mailto:hello@tim-arnold.de">
                                    Email <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a className="text-white/30 hover:text-white/60 transition-colors text-sm flex items-center gap-1.5 group w-fit" href="https://www.linkedin.com/in/timarnold-/" target="_blank">
                                    LinkedIn <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a className="text-white/30 hover:text-white/60 transition-colors text-sm flex items-center gap-1.5 group w-fit" href="https://github.com/timarnoldev" target="_blank">
                                    GitHub <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </nav>

                            <nav className="flex flex-col gap-2.5">
                                <a className="text-white/30 hover:text-white/60 transition-colors text-sm w-fit" href={"/" + props.lang.lang + "/articles/"}>
                                    {props.lang.articles}
                                </a>
                                <BlogModal blog={technicalDetails}>
                                    <div className="text-white/30 hover:text-white/60 transition-colors text-sm cursor-pointer w-fit">
                                        {props.lang.technicalDetails}
                                    </div>
                                </BlogModal>
                                <BlogModal blog={imprint}>
                                    <div className="text-white/30 hover:text-white/60 transition-colors text-sm cursor-pointer w-fit">
                                        {props.lang.imprint}
                                    </div>
                                </BlogModal>
                            </nav>
                        </div>
                    </div>

                    <div className="h-px bg-white/[0.06] mt-8 mb-5" />
                    <p className="text-white/15 text-xs font-heading">
                        &copy; {new Date().getFullYear()} Tim Arnold
                    </p>
                </div>
            </div>
        </div>
    );
}
