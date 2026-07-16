"use client";

import { motion } from "framer-motion";
import {
    TrendingUp,
    Globe2,
    Cpu,
    Users,
    Building2,
    Target
} from "lucide-react";

const metrics = [

    {
        icon: TrendingUp,
        value: "22%",
        label: "Bottom-line CAGR",
        description: "Achieved as CFO leading the Central America Business Unit."
    },

    {
        icon: Cpu,
        value: "$4.5M",
        label: "Productivity Savings",
        description: "Generated through global technology optimization programmes."
    },

    {
        icon: Globe2,
        value: "25+",
        label: "Countries",
        description: "International leadership across Europe and Latin America."
    },

    {
        icon: Building2,
        value: "100,000+",
        label: "IT Assets",
        description: "Global governance and lifecycle management."
    },

    {
        icon: Users,
        value: "30+",
        label: "Years",
        description: "Executive leadership experience."
    },

    {
        icon: Target,
        value: "4",
        label: "Industries",
        description: "Consumer Goods, Pharma, Logistics and Industrial Distribution."
    }

];

export default function TransformationMetrics() {

    return (

        <section className="section-light">

            <div className="container">

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                >

                    <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

                        Executive Impact

                    </p>

                    <h2 className="mt-5 max-w-4xl">

                        Measurable results delivered across
                        three decades of transformation,
                        leadership and value creation.

                    </h2>

                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mt-24">

                    {metrics.map((metric,index)=>{

                        const Icon = metric.icon;

                        return(

                            <motion.div

                                key={metric.label}

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
                                    delay:index*.08
                                }}

                                className="card"

                            >

                                <Icon
                                    size={34}
                                    className="text-[#C8A96A]"
                                />

                                <h3
                                    className="
                                    text-6xl
                                    font-bold
                                    mt-8
                                    text-[#0B2545]
                                    "
                                >

                                    {metric.value}

                                </h3>

                                <h4 className="mt-5 text-2xl">

                                    {metric.label}

                                </h4>

                                <p className="mt-5">

                                    {metric.description}

                                </p>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}