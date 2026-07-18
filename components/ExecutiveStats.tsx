"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "30+",
    title: "Years",
    subtitle:
      "Executive leadership driving profitable growth and business transformation.",
  },
  {
    value: "5",
    title: "Industries",
    subtitle:
      "Consumer Goods, Pharma, Logistics, Real Estate and Industrial Retail.",
  },
  {
    value: "International",
    title: "Leadership",
    subtitle:
      "Leading multicultural teams across global and family-owned businesses.",
  },
  {
    value: "GM / MD",
    title: "Executive Roles",
    subtitle:
      "General Management, transformation and value creation.",
  },
];

export default function ExecutiveStats() {
  return (
    <section id="executive-impact" className="section-grey">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#C8A96A]">
            Executive Impact
          </p>


 
          <h2 className="mt-5 mb-16">
  Experience measured by
  <br />
  business transformation.
</h2>

<div className="gold-line mb-12" />

<p className="section-intro max-w-5xl">
  More than three decades delivering measurable improvements in
  performance, profitability and organisational capability through
  strategy, execution and people leadership.
</p>

        </motion.div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="card h-[280px] flex flex-col"
            >

              {/* VALUE BLOCK - SAME HEIGHT FOR ALL CARDS */}
              <div className="h-[65px] flex items-start">

                <div
                  className={`
                    font-bold
                    leading-none
                    text-[#0B2545]

                    ${
                      item.value === "International"
                        ? "text-[2.6rem] tracking-tight"
                        : item.value === "GM / MD"
                        ? "text-[2.8rem] tracking-tight"
                        : "text-[3.2rem] tracking-tight"
                    }
                  `}
                >
                  {item.value}
                </div>

              </div>


              {/* TEXT BLOCK */}
              <div className="mt-8">

                <div className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  {item.title}
                </div>


                <p className="mt-3 text-base leading-6 text-slate-600">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}