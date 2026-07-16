"use client";

import { motion } from "framer-motion";
import {
    Compass,
    Users,
    GitBranch,
    BarChart3,
    Rocket
} from "lucide-react";

const framework = [
    {
        icon: Compass,
        letter: "S",
        title: "Strategy",
        description:
            "Define a clear strategic direction aligned with long-term value creation, customer needs and shareholder expectations."
    },
    {
        icon: Users,
        letter: "P",
        title: "People",
        description:
            "Build high-performing, customer-centric and people-first organizations through leadership, engagement and accountability."
    },
    {
        icon: GitBranch,
        letter: "P",
        title: "Processes",
        description:
            "Simplify and standardize end-to-end business processes to improve efficiency, governance and scalability."
    },
    {
        icon: BarChart3,
        letter: "T",
        title: "Technology",
        description:
            "Leverage digital transformation, AI and modern ERP platforms to enable better decisions and operational excellence."
    },
    {
        icon: Rocket,
        letter: "E",
        title: "Execution",
        description:
            "Deliver sustainable value through disciplined execution, KPIs, governance and continuous improvement."
    }
];

export default function TransformationModel() {

    return (

        <section
            id="transformation"
            className="section-light"
        >

            <div className="container">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                >

                    <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

                        My Transformation Framework

                    </p>

                    <h2 className="mt-6 max-w-4xl">

                        Every successful transformation starts by aligning
                        <span className="highlight">
                            {" "}strategy, people, processes and technology{" "}
                        </span>
                        to execute consistently and create sustainable value.

                    </h2>

                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8 mt-24">

                    {framework.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 60
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    delay: index * .12,
                                    duration: .7
                                }}

                                className="card text-center"

                            >

                                <div
                                    className="
                                    w-20
                                    h-20
                                    mx-auto
                                    rounded-full
                                    bg-slate-100
                                    flex
                                    items-center
                                    justify-center
                                    "
                                >

                                    <Icon
                                        size={34}
                                        className="text-[#0B2545]"
                                    />

                                </div>

                                <div
                                    className="
                                    mt-8
                                    text-sm
                                    tracking-[0.35em]
                                    uppercase
                                    text-[#C8A96A]
                                    font-semibold
                                    "
                                >

                                    {item.letter}

                                </div>

                                <h3 className="mt-4">

                                    {item.title}

                                </h3>

                                <p className="mt-5">

                                    {item.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

                <motion.div

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        delay: .4
                    }}

                    className="
                    mt-28
                    text-center
                    max-w-4xl
                    mx-auto
                    "

                >

                    <blockquote
                        className="
                        text-3xl
                        lg:text-5xl
                        font-light
                        leading-tight
                        tracking-tight
                        "
                    >

                        "Business transformation is not about implementing
                        technology. It is about creating organizations where
                        strategy, people, processes and technology work
                        together to deliver sustainable value."

                    </blockquote>

                </motion.div>

            </div>

        </section>

    );

}