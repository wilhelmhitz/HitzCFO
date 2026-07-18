"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    category: "BUSINESS TRANSFORMATION",
    initials: "HER",
    company: "Herraiz",
    role: "Managing Director",
    period: "2025 – Present",
    challenge:
      "Leading the transformation of a family-owned industrial distribution business by modernising governance, customer experience, commercial execution and operational performance while preparing the organisation for sustainable growth.",

    initiatives: [
      "Digital Transformation",
      "ERP Implementation (Odoo)",
      "Customer Experience (NPS)",
      "Employee Engagement (eNPS)",
      "Governance & KPI Management",
      "Procurement Optimisation"
    ],

    impact: [
      "Operational Excellence",
      "Customer Centricity",
      "Digital Capabilities",
      "Profitable Growth"
    ]
  },

  {
    category: "BUSINESS TURNAROUND",
    initials: "AGA",
    company: "Grupo Agora",
    role: "Transformation Director",
    period: "2023 – 2025",
    challenge:
      "Driving a company-wide transformation programme to restore profitability, strengthen financial control and improve operational performance across multiple business units.",

    initiatives: [
      "Business Restructuring",
      "Finance Transformation",
      "Performance Management",
      "Cost Optimisation",
      "Governance",
      "Leadership Alignment"
    ],

    impact: [
      "Return to Profitability",
      "Higher Efficiency",
      "Better Decision Making",
      "Stronger Financial Control"
    ]
  },

  {
    category: "FINANCE TRANSFORMATION",
    initials: "LAC",
    company: "Lacer",
    role: "Finance Director",
    period: "2018 – 2023",
    challenge:
      "Modernising finance while supporting business growth through stronger planning, reporting, governance and cross-functional collaboration.",

    initiatives: [
      "Financial Planning",
      "Business Partnering",
      "Digital Reporting",
      "Governance",
      "Management Control",
      "Process Optimisation"
    ],

    impact: [
      "Financial Visibility",
      "Faster Decisions",
      "Business Alignment",
      "Operational Efficiency"
    ]
  },

  {
    category: "GLOBAL TRANSFORMATION",
    initials: "EUR",
    company: "PepsiCo Europe",
    role: "Senior Finance Leader",
    period: "2013 – 2018",
    challenge:
      "Leading strategic finance initiatives across multiple European markets while supporting organisational transformation and continuous improvement.",

    initiatives: [
      "Regional Governance",
      "Business Planning",
      "Shared Services",
      "Transformation Projects",
      "Performance Management",
      "Cross-country Leadership"
    ],

    impact: [
      "Regional Standardisation",
      "Operational Excellence",
      "Leadership Development",
      "Business Performance"
    ]
  },

  {
    category: "GLOBAL LEADERSHIP",
    initials: "LAT",
    company: "PepsiCo Latin America",
    role: "Regional Finance Leader",
    period: "2008 – 2013",
    challenge:
      "Supporting finance transformation and business integration across diverse Latin American markets while strengthening governance and financial planning.",

    initiatives: [
      "Regional Finance",
      "Business Integration",
      "Financial Planning",
      "Governance",
      "Cross-functional Leadership",
      "Talent Development"
    ],

    impact: [
      "Regional Alignment",
      "Leadership Growth",
      "Financial Discipline",
      "Business Support"
    ]
  },

  {
    category: "OPERATIONAL EXCELLENCE",
    initials: "OPS",
    company: "PepsiCo",
    role: "Operations & Finance",
    period: "1995 – 2008",
    challenge:
      "Developing a solid operational and financial foundation through increasingly senior leadership roles across manufacturing, supply chain and corporate finance.",

    initiatives: [
      "Operations",
      "Manufacturing Finance",
      "Supply Chain",
      "Business Control",
      "Continuous Improvement",
      "Team Leadership"
    ],

    impact: [
      "Operational Excellence",
      "Financial Expertise",
      "Leadership Foundation",
      "Business Acumen"
    ]
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-white">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="section-title">
            Transformation Portfolio
          </p>

          <div className="gold-line mt-5 mb-10" />

          <h2>
            Leading business transformation across multinational
            corporations and family-owned businesses.
          </h2>
        </motion.div>

        <div className="mt-24 space-y-12">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.08
              }}
              className="card"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

                <div className="max-w-3xl">

                  <span className="uppercase tracking-[0.3em] text-xs text-[#B08D57]">
                    {item.category}
                  </span>

                  <div className="flex items-center gap-5 mt-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B08D57] text-xl font-semibold text-[#B08D57]">
                      {item.initials}
                    </div>

                    <div>
                      <h3 className="text-3xl font-semibold">
                        {item.company}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        {item.role} · {item.period}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="uppercase tracking-[0.25em] text-sm text-slate-500">
                      Challenge
                    </h4>

                    <p className="mt-4 text-lg leading-8 text-slate-600">
                      {item.challenge}
                    </p>
                  </div>

                </div>

                <div className="lg:w-[380px] space-y-10">

                  <div>
                    <h4 className="uppercase tracking-[0.25em] text-sm text-slate-500 mb-5">
                      Key Initiatives
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {item.initiatives.map((initiative) => (
                        <span
                          key={initiative}
                          className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700"
                        >
                          {initiative}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="uppercase tracking-[0.25em] text-sm text-slate-500 mb-5">
                      Business Impact
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {item.impact.map((result) => (
                        <span
                          key={result}
                          className="rounded-full border border-[#B08D57] px-4 py-2 text-sm text-[#0B2545]"
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}