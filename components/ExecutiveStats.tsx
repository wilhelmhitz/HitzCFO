"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "30+",
    title: "Years",
    subtitle: "Executive Leadership",
  },
  {
    value: "5",
    title: "Countries",
    subtitle: "International Experience",
  },
  {
    value: "4",
    title: "Industries",
    subtitle: "Global Expertise",
  },
  {
    value: "12+",
    title: "Executive",
    subtitle: "Leadership Roles",
  },
  {
    value: "25+",
    title: "Countries",
    subtitle: "Supported Globally",
  },
  {
    value: "$4.5M",
    title: "Productivity",
    subtitle: "Savings Delivered",
  },
];

export default function ExecutiveStats() {
  return (
    <section
      id="leadership"
      className="section-grey"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

            Executive Impact

          </p>

          <h2 className="mt-5 max-w-3xl">

            More than three decades creating
            sustainable value through business
            transformation and executive leadership.

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .1,
              }}
              className="card"
            >

              <h3 className="text-6xl font-bold text-[#0B2545]">

                {item.value}

              </h3>

              <h4 className="mt-6 text-2xl font-semibold">

                {item.title}

              </h4>

              <p className="mt-3">

                {item.subtitle}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}