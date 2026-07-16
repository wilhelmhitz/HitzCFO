"use client";

import { motion } from "framer-motion";

const career = [
  {
    year: "1994",
    title: "Plant Manager",
    company: "PepsiCo",
    location: "Dominican Republic",
    description:
      "Started an international career leading manufacturing operations, KPI-driven performance and operational excellence."
  },
  {
    year: "1996",
    title: "Logistics Manager",
    company: "PepsiCo",
    location: "Puerto Rico",
    description:
      "Expanded responsibilities into Supply Chain, Procurement and Distribution, delivering significant service and cash flow improvements."
  },
  {
    year: "1998",
    title: "IT & Financial Planning Manager",
    company: "PepsiCo",
    location: "Puerto Rico",
    description:
      "Combined Information Technology and Finance, leading digital transformation, ERP modernization and Business Intelligence."
  },
  {
    year: "2002",
    title: "Financial Planning Manager",
    company: "PepsiCo",
    location: "Mexico",
    description:
      "Led FP&A for four business units, supporting strategic planning, investment decisions and commercial performance."
  },
  {
    year: "2004",
    title: "Chief Financial Officer",
    company: "PepsiCo",
    location: "Guatemala",
    description:
      "Partnered with the General Manager to drive profitable growth, strategic planning, governance and business development."
  },
  {
    year: "2007",
    title: "Europe IT CFO",
    company: "PepsiCo",
    location: "Barcelona",
    description:
      "Built the European IT Finance organization while supporting one of PepsiCo's largest transformation programmes."
  },
  {
    year: "2011",
    title: "Risk & Compliance Director",
    company: "PepsiCo",
    location: "Europe & SSA",
    description:
      "Led Governance, SOX, Cybersecurity and Business Continuity across more than 25 countries."
  },
  {
    year: "2014",
    title: "Global Director",
    company: "PepsiCo",
    location: "Global",
    description:
      "Defined global strategy and governance for technology assets supporting worldwide operations."
  },
  {
    year: "2018",
    title: "General Manager",
    company: "Lacer",
    location: "Barcelona",
    description:
      "Executive Committee member leading Finance, HR, IT and Legal while accelerating enterprise-wide transformation."
  },
  {
    year: "2021",
    title: "Corporate General Director",
    company: "Grupo Agora",
    location: "Barcelona",
    description:
      "Led the turnaround of a multinational family-owned holding through governance, operational excellence and value creation."
  },
  {
    year: "2026",
    title: "Managing Director",
    company: "Herraiz",
    location: "Spain",
    description:
      "Leading company-wide transformation focused on profitable growth, people, customers and digital transformation."
  }
];

export default function CareerTimeline() {
  return (
    <section id="career" className="section-grey">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Leadership Journey
          </p>

          <h2 className="mt-5 max-w-4xl">
            Thirty years of continuous leadership evolution,
            expanding from operations to global transformation
            and general management.
          </h2>

        </motion.div>

        <div className="relative mt-24">

          {/* Vertical line */}

          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-300"></div>

          <div className="space-y-14">

            {career.map((item, index) => (

              <motion.div

                key={item.year}

                initial={{
                  opacity: 0,
                  x: -40
                }}

                whileInView={{
                  opacity: 1,
                  x: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: .7,
                  delay: index * .05
                }}

                className="relative pl-20"

              >

                {/* Dot */}

                <div
                  className="
                  absolute
                  left-[14px]
                  top-2
                  w-5
                  h-5
                  rounded-full
                  bg-[#C8A96A]
                  border-4
                  border-white
                  shadow
                  "
                />

                <div className="card">

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    <div>

                      <span className="text-sm uppercase tracking-[0.25em] text-slate-500">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 font-medium text-slate-700">
                        {item.company} · {item.location}
                      </p>

                    </div>

                  </div>

                  <p className="mt-6">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}