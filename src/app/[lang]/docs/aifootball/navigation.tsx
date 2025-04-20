"use client";
import { Dictionary } from "@/i18n/get-dictionaries";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AIFootballNavigation(props: { language: Dictionary }) {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === "/" + props.language.lang + "/docs/aifootball/" + path || pathname === "/" + props.language.lang + "/docs/aifootball/" + path + "/" || (path === "" && pathname === "/" + props.language.lang + "/docs/aifootball");
    }
    return <div className="flex bg-slate-300 p-2 rounded-3xl items-center justify-center gap-2 max-w-[90%]">
        <LinkComponent
            href={`/${props.language.lang}/docs/aifootball`}
            isActive={isActive("")}>
            {props.language.overview}
        </LinkComponent>

        <LinkComponent
            href={`/${props.language.lang}/docs/aifootball/sponsorship`}
            isActive={isActive("sponsorship")}>
            {props.language.sponsors}
        </LinkComponent>
    </div>
}

function LinkComponent(props: {
    href: string;
    children: React.ReactNode;
    isActive: boolean;
}) {
    return (
        <Link
            href={props.href}
            className="relative cursor-pointer px-4 py-1 rounded-2xl"
        >
            <div
                className={`text-lg relative pointer-events-none font-semibold z-10  text-black  `}
            >
                {props.children}
            </div>

            {
                props.isActive &&
                <motion.div
                 tabIndex={-1}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    layoutId="active"
                    className={`absolute  inset-0 z-0 bg-primary-light px-4 py-2 rounded-2xl`}
                >
                </motion.div>
            }

        </Link>
    );
}