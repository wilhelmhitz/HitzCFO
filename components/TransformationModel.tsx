"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Users,
  GitBranch,
  BarChart3,
  Rocket,
} from "lucide-react";

const framework = [
  {
    icon: Compass,
    title: "Strategic Direction",
    description:
      "Define a clear strategic path focused on long-term value creation, customer needs and profitable growth.",
  },
  {
    icon: Users,
    title: "People & Culture",
    description:
      "Build high-performing teams, accountability and a culture where people and customers succeed together.",
  },
  {
    icon: GitBranch,
    title: "Operating Model",
    description:
      "Simplify end-to-end processes, governance and ways of working to improve efficiency and scalability.",
  },
  {
    icon: BarChart3,
    title: "Digital & Data",
    description:
      "Leverage technology, digital platforms and data to accelerate decisions and business transformation.",
  },
  {
    icon: Rocket,
    title: "Performance Discipline",
    description:
      "Deliver measurable results through clear priorities, KPIs, governance and execution discipline.",
  },
];

export default function TransformationModel() {
  return (
    <section id="transformation" className="section-light">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#C8A96A]">
            Transformation Framework
          </p>


          <h2 className="mt-5">
            Sustainable Transformation
            <br />
            Requires Alignment Across Strategy, People,
            Processes, Technology ... and Perfect Execution.
          </h2>


          <div className="h-6" />


          <div className="gold-line !mt-0" />


          <p className="section-intro mt-4 max-w-5xl">
            Every successful transformation I have led has followed the same
            principle: align the organisation before accelerating execution.
          </p>


        </motion.div>



        <div className="relative mt-20">

          <div className="grid gap-8 lg:grid-cols-5">

            {framework.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="card text-center"
                >

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-white shadow-md">

                    <Icon
                      size={30}
                      className="text-[#0B2545]"
                    />

                  </div>


                  <h3 className="mt-8 text-xl">
                    {item.title}
                  </h3>


                  <p className="mt-5 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>


                </motion.div>

              );

            })}

          </div>

        </div>



        <motion.blockquote
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-24 max-w-5xl text-center text-2xl font-light leading-tight tracking-tight lg:text-4xl"
        >
          “Technology alone never transforms a business. Lasting transformation
          happens when strategy, people, processes and execution move together.”
        </motion.blockquote>


      </div>
    </section>
  );
}