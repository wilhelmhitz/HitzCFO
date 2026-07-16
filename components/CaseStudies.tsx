"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Pill,
  Globe,
} from "lucide-react";

const caseStudies = [
  {
    icon: Building2,
    title: "Business Transformation",
    company: "Herraiz",
    period: "2025 – Present",
    summary:
      "Leading the end-to-end transformation of a family-owned industrial distribution business, placing customers and employees at the center while modernizing governance, operations and digital capabilities.",
    achievements: [
      "Business Transformation",
      "Operational Excellence",
      "Customer Experience (NPS)",
      "Employee Experience (eNPS)",
      "Procurement Optimization",
      "Digital Transformation"
    ]
  },

  {
    icon: Factory,
    title: "Business Turnaround",
    company: "Grupo Agora",
    period: "2021 – 2025",
    summary:
      "Led the turnaround of a multinational holding company, returning the Group to profitability through governance, organizational redesign, operational excellence and shared services.",
    achievements: [
      "Returned Group to Profitability",
      "Shared Services",
      "SAP S/4",
      "Cost Optimization",
      "Working Capital",
      "Governance"
    ]
  },

  {
    icon: Pill,
    title: "Digital Transformation",
    company: "Lacer Pharmaceutical Group",
    period: "2018 – 2020",
    summary:
      "Accelerated enterprise-wide transformation by modernizing Corporate Services, redefining governance and co-leading the strategic plan together with McKinsey & Company.",
    achievements: [
      "Digital Strategy",
      "ERP Modernization",
      "Cybersecurity",
      "Governance",
      "Corporate Transformation",
      "McKinsey Strategic Plan"
    ]
  },

  {
    icon: Globe,
    title: "Global Transformation",
    company: "PepsiCo",
    period: "1994 – 2018",
    summary:
      "Twenty-four years leading international transformation programmes across Operations, Supply Chain, Finance, Risk, IT and Global Governance in Europe and Latin America.",
    achievements: [
      "Global Leadership",
      "100,000+ IT Assets",
      "25+ Countries",
      "$4.5M Productivity",
      "SOX & Governance",
      "Operational Excellence"
    ]
  }
];

export default function CaseStudies() {
  return (
    <section className="section-light">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

            Selected Transformations

          </p>

          <h2 className="mt-5 max-w-4xl">

            Four organizations.
            Four different challenges.
            One consistent leadership approach.

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-24">

          {caseStudies.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.company}

                initial={{
                  opacity: 0,
                  y: 50
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  duration: .8,
                  delay: index * .15
                }}

                className="
                card
                flex
                flex-col
                h-full
                "

              >

                <div className="flex items-center justify-between">

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
                      size={30}
                      className="text-[#0B2545]"
                    />

                  </div>

                  <ArrowUpRight
                    className="text-[#C8A96A]"
                    size={28}
                  />

                </div>

                <p className="mt-8 uppercase tracking-[0.25em] text-sm text-[#C8A96A]">

                  {item.title}

                </p>

                <h3 className="mt-3 text-3xl">

                  {item.company}

                </h3>

                <p className="text-sm uppercase tracking-[0.2em] mt-2 text-slate-500">

                  {item.period}

                </p>

                <p className="mt-8 leading-8">

                  {item.summary}

                </p>

                <div className="flex flex-wrap gap-3 mt-10">

                  {item.achievements.map((achievement) => (

                    <span

                      key={achievement}

                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-100
                      text-sm
                      "

                    >

                      {achievement}

                    </span>

                  ))}

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );

}