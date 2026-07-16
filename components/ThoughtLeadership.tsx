"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Brain,
    Building,
    Users,
    Cpu,
    LineChart,
    BookOpen
} from "lucide-react";

const articles = [

    {
        icon: Brain,
        category: "Business Transformation",
        title: "Creating Sustainable Value Through Business Transformation",
        description:
            "Why successful transformations go beyond cost reduction by aligning strategy, people, processes and technology.",
        readTime: "8 min read"
    },

    {
        icon: Users,
        category: "Leadership",
        title: "Why People-First Organizations Outperform",
        description:
            "How leadership, engagement, accountability and culture drive sustainable business performance.",
        readTime: "6 min read"
    },

    {
        icon: Cpu,
        category: "Artificial Intelligence",
        title: "AI as an Executive Management Enabler",
        description:
            "How Artificial Intelligence should empower leaders instead of replacing human judgement.",
        readTime: "7 min read"
    },

    {
        icon: LineChart,
        category: "Operational Excellence",
        title: "Operational Excellence Beyond Cost Reduction",
        description:
            "Creating competitive advantage through governance, execution, continuous improvement and customer focus.",
        readTime: "9 min read"
    },

    {
        icon: Building,
        category: "Family Business",
        title: "Transforming Family-Owned Companies",
        description:
            "Balancing entrepreneurship, governance and professional management to accelerate sustainable growth.",
        readTime: "10 min read"
    },

    {
        icon: BookOpen,
        category: "Strategy",
        title: "The CEO Dashboard",
        description:
            "The KPIs every executive team should monitor to create long-term value.",
        readTime: "5 min read"
    }

];

export default function ThoughtLeadership() {

    return (

        <section
            id="insights"
            className="section-light"
        >

            <div className="container">

                <motion.div

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
                        duration:.8
                    }}

                >

                    <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

                        Thought Leadership

                    </p>

                    <h2 className="mt-5 max-w-4xl">

                        Ideas, reflections and practical insights on
                        leadership, business transformation,
                        operational excellence and sustainable value creation.

                    </h2>

                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mt-24">

                    {articles.map((article,index)=>{

                        const Icon=article.icon;

                        return(

                            <motion.article

                                key={article.title}

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
                                    duration:.7,
                                    delay:index*.08
                                }}

                                className="card group cursor-pointer"

                            >

                                <div className="flex justify-between items-center">

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
                                        size={24}
                                        className="
                                        text-slate-400
                                        transition
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                        group-hover:text-[#C8A96A]
                                        "
                                    />

                                </div>

                                <p className="mt-8 uppercase tracking-[0.25em] text-xs text-[#C8A96A]">

                                    {article.category}

                                </p>

                                <h3 className="mt-4 text-2xl leading-snug">

                                    {article.title}

                                </h3>

                                <p className="mt-5">

                                    {article.description}

                                </p>

                                <div className="mt-10 text-sm text-slate-500">

                                    {article.readTime}

                                </div>

                            </motion.article>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}