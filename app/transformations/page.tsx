import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Transformation Portfolio",
  description:
    "Selected business transformation programmes led by Wilhelm Hitz.",
};

const transformations = [
  {
    company: "Herraiz",
    period: "2025 – Present",
    title: "Business Transformation",

    challenge:
      "Transform a traditional family-owned industrial distribution company into a modern, customer-centric and data-driven organization.",

    approach: [
      "Customer-centric strategy",
      "People-first culture",
      "Digital Transformation",
      "Executive Governance",
      "Operational Excellence",
      "AI adoption"
    ],

    impact: [
      "Company-wide transformation roadmap",
      "Implementation of Executive KPIs",
      "NPS implementation",
      "eNPS implementation",
      "Procurement optimization",
      "Inventory optimization",
      "ERP modernization (Odoo)",
      "Culture of accountability"
    ]
  },

  {
    company: "Grupo Agora Invest",
    period: "2021 – 2025",
    title: "Business Turnaround",

    challenge:
      "Return the Group to profitability while simplifying governance and integrating multiple businesses into one shared-services model.",

    approach: [
      "Corporate Governance",
      "Financial Discipline",
      "Shared Services",
      "SAP S/4",
      "Operational Excellence",
      "Cost Optimization"
    ],

    impact: [
      "Returned Group to profitability",
      "Shared Services implementation",
      "Corporate restructuring",
      "Working capital optimization",
      "Executive dashboards",
      "Governance model"
    ]
  },

  {
    company: "Lacer Pharmaceutical Group",
    period: "2018 – 2020",
    title: "Digital Transformation",

    challenge:
      "Modernize Corporate Services and prepare the organization for its next strategic growth phase.",

    approach: [
      "Digital Strategy",
      "Executive Committee",
      "Corporate Governance",
      "ERP modernization",
      "Cybersecurity",
      "Strategic Planning"
    ],

    impact: [
      "McKinsey Strategic Plan",
      "Corporate transformation",
      "Digital roadmap",
      "Governance improvements",
      "Cross-functional leadership"
    ]
  },

  {
    company: "PepsiCo",
    period: "1994 – 2018",
    title: "Global Transformation",

    challenge:
      "Lead international transformation programmes across Operations, Supply Chain, Finance, IT and Global Governance.",

    approach: [
      "Global Leadership",
      "Operational Excellence",
      "Finance",
      "Supply Chain",
      "Risk & Compliance",
      "Technology"
    ],

    impact: [
      "25+ countries supported",
      "$4.5M productivity savings",
      "100,000+ technology assets",
      "22% CAGR",
      "Global governance framework",
      "Business continuity programmes"
    ]
  }

];

export default function TransformationsPage() {

  return (

    <main>

      <section className="pt-40 pb-24">

        <div className="container max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18}/>
            Back to Home
          </Link>

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A] mt-14">

            Transformation Portfolio

          </p>

          <h1 className="mt-8">

            Four Organizations.
            <br />

            Four Transformations.

          </h1>

          <p className="text-2xl text-slate-600 mt-8 max-w-4xl">

            Every organization presented a different challenge.
            The common denominator has always been creating
            sustainable value by aligning strategy,
            people, processes and technology.

          </p>

        </div>

      </section>

      <section className="pb-32">

        <div className="container max-w-6xl">

          <div className="space-y-16">

            {transformations.map((item)=>(

              <article
                key={item.company}
                className="card"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-10">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-sm text-[#C8A96A]">

                      {item.period}

                    </p>

                    <h2 className="mt-4">

                      {item.company}

                    </h2>

                    <h3 className="mt-2 text-xl text-slate-500">

                      {item.title}

                    </h3>

                  </div>

                  <ArrowUpRight
                    size={32}
                    className="text-[#C8A96A]"
                  />

                </div>

                <div className="grid lg:grid-cols-3 gap-12 mt-14">

                  <div>

                    <h4 className="font-semibold mb-6">

                      Challenge

                    </h4>

                    <p>

                      {item.challenge}

                    </p>

                  </div>

                  <div>

                    <h4 className="font-semibold mb-6">

                      Executive Approach

                    </h4>

                    <ul className="space-y-3">

                      {item.approach.map((a)=>(

                        <li key={a}>
                          • {a}
                        </li>

                      ))}

                    </ul>

                  </div>

                  <div>

                    <h4 className="font-semibold mb-6">

                      Business Impact

                    </h4>

                    <ul className="space-y-3">

                      {item.impact.map((i)=>(

                        <li key={i}>
                          • {i}
                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}