"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ExecutiveCTA() {

    return (

        <section className="relative overflow-hidden bg-[#071C35]">

            {/* Background */}

            <div
                className="
                absolute
                inset-0
                opacity-[0.04]
                bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)]
                [background-size:32px_32px]
                "
            />

            <div className="container relative py-40">

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

                    className="
                    max-w-5xl
                    mx-auto
                    text-center
                    "

                >

                    <p
                        className="
                        uppercase
                        tracking-[0.35em]
                        text-[#C8A96A]
                        text-sm
                        "
                    >

                        Executive Leadership

                    </p>

                    <h2
                        className="
                        mt-8
                        text-white
                        text-6xl
                        lg:text-7xl
                        font-semibold
                        leading-tight
                        tracking-tight
                        "
                    >

                        Great businesses
                        <br />

                        are transformed
                        <br />

                        by great leadership.

                    </h2>

                    <p
                        className="
                        mt-12
                        text-xl
                        leading-9
                        text-slate-300
                        max-w-3xl
                        mx-auto
                        "
                    >

                        Whether leading a business transformation,
                        accelerating profitable growth,
                        strengthening governance or building
                        a people-first culture,
                        my focus has always been the same:

                        creating sustainable value.

                    </p>

                    <div
                        className="
                        flex
                        flex-wrap
                        justify-center
                        gap-6
                        mt-16
                        "
                    >

                        <a
                            href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
                            className="button-primary"
                        >

                            Executive Biography

                            <ArrowRight
                                className="ml-3"
                                size={18}
                            />

                        </a>

                        <a
                            href="#contact"
                            className="
                            button-secondary
                            bg-white
                            "
                        >

                            Let's Connect

                        </a>

                    </div>

                </motion.div>

            </div>

        </section>

    );

}