"use client";

import { motion } from "framer-motion";
import {
    Download,
    FileText,
    BookOpen,
    Presentation,
    ArrowUpRight
} from "lucide-react";

const downloads = [

    {
        icon: BookOpen,
        title: "Executive Biography",
        description:
            "One-page executive biography highlighting leadership philosophy, international experience and value creation.",
        file: "/files/Wilhelm_Hitz_Executive_Biography.pdf"
    },

    {
        icon: FileText,
        title: "Executive CV",
        description:
            "Comprehensive executive curriculum vitae covering more than thirty years of international leadership.",
        file: "/files/Wilhelm_Hitz_Executive_CV.pdf"
    },

    {
        icon: Presentation,
        title: "Transformation Portfolio",
        description:
            "Selected business transformation case studies across Herraiz, Grupo Agora, Lacer and PepsiCo.",
        file: "/files/Transformation_Portfolio.pdf"
    }

];

export default function ExecutiveDownloads() {

    return (

        <section className="section-grey">

            <div className="container">

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                >

                    <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

                        Executive Documents

                    </p>

                    <h2 className="mt-5 max-w-4xl">

                        Download executive documents,
                        leadership material and selected
                        transformation case studies.

                    </h2>

                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mt-24">

                    {downloads.map((item,index)=>{

                        const Icon=item.icon;

                        return(

                            <motion.a

                                key={item.title}

                                href={item.file}

                                download

                                initial={{
                                    opacity:0,
                                    y:40
                                }}

                                whileInView={{
                                    opacity:1,
                                    y:0
                                }}

                                viewport={{
                                    once:true
                                }}

                                transition={{
                                    delay:index*.12
                                }}

                                className="
                                card
                                group
                                block
                                "

                            >

                                <div className="flex justify-between">

                                    <div
                                        className="
                                        w-16
                                        h-16
                                        rounded-full
                                        bg-slate-100
                                        flex
                                        items-center
                                        justify-center
                                        "
                                    >

                                        <Icon
                                            className="text-[#0B2545]"
                                            size={30}
                                        />

                                    </div>

                                    <ArrowUpRight
                                        className="
                                        text-slate-400
                                        group-hover:text-[#C8A96A]
                                        group-hover:-translate-y-1
                                        group-hover:translate-x-1
                                        transition
                                        "
                                    />

                                </div>

                                <h3 className="mt-10 text-2xl">

                                    {item.title}

                                </h3>

                                <p className="mt-5">

                                    {item.description}

                                </p>

                                <div className="mt-10 flex items-center gap-3 text-[#0B2545] font-semibold">

                                    <Download size={18}/>

                                    Download

                                </div>

                            </motion.a>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}