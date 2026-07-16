import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Career",
  description:
    "Executive Career of Wilhelm Hitz | Managing Director | Business Transformation Executive",
};

const experience = [
  {
    company: "Herraiz",
    position: "Managing Director",
    period: "2026 – Present",
    description:
      "Leading the transformation of a family-owned industrial distribution company across Commercial, Operations, Procurement, Finance, HR and IT.",
    achievements: [
      "Business Transformation",
      "Customer Experience (NPS)",
      "Employee Experience (eNPS)",
      "Operational Excellence",
      "Digital Transformation",
      "AI Adoption",
    ],
  },
  {
    company: "Herraiz",
    position: "Interim CFO & Transformation Director",
    period: "2025 – 2026",
    description:
      "Stabilized Finance while building governance, management control, executive reporting and the digital transformation roadmap.",
    achievements: [
      "Financial Transformation",
      "ERP (Odoo)",
      "Executive Dashboards",
      "Working Capital",
      "Governance",
    ],
  },
  {
    company: "Grupo Agora Invest",
    position: "Corporate General Director",
    period: "2021 – 2025",
    description:
      "Led the turnaround of a multinational family-owned holding, returning the Group to profitability and modernizing governance.",
    achievements: [
      "Business Turnaround",
      "Shared Services",
      "SAP S/4",
      "Operational Excellence",
      "Corporate Governance",
    ],
  },
  {
    company: "Lacer Pharmaceutical Group",
    position: "General Manager - Corporate Services",
    period: "2018 – 2020",
    description:
      "Executive Committee member leading Finance, HR, IT and Legal while accelerating enterprise-wide transformation.",
    achievements: [
      "Executive Committee",
      "McKinsey Strategic Plan",
      "Digital Transformation",
      "Corporate Services",
    ],
  },
  {
    company: "PepsiCo",
    position: "International Executive Career",
    period: "1994 – 2018",
    description:
      "Twenty-four years progressing from Plant Manager to Global Director across Operations, Supply Chain, Finance, IT, Risk & Compliance and Global Transformation.",
    achievements: [
      "Global Leadership",
      "25+ Countries",
      "100,000+ IT Assets",
      "$4.5M Productivity",
      "22% CAGR",
    ],
  },
];

export default function CareerPage() {
  return (
    <main>

      <section className="pt-40 pb-20">

        <div className="container max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A] mt-14">
            Executive Career
          </p>

          <h1 className="mt-8">
            30+ Years Creating Sustainable Value
          </h1>

          <p className="text-2xl text-slate-600 mt-6 max-w-3xl">
            An international executive career spanning General
            Management, Finance, Operations, Supply Chain,
            Information Technology and Business Transformation.
          </p>

          <a
            href="/files/Wilhelm_Hitz_Executive_CV.pdf"
            className="button-primary mt-12 inline-flex"
          >
            <Download className="mr-3" size={18} />
            Download Executive CV
          </a>

        </div>

      </section>

      <section className="pb-32">

        <div className="container max-w-6xl">

          <div className="space-y-14">

            {experience.map((job) => (

              <div
                key={`${job.company}-${job.position}`}
                className="card"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-8">

                  <div>

                    <p className="uppercase tracking-[0.25em] text-sm text-[#C8A96A]">
                      {job.period}
                    </p>

                    <h2 className="mt-4 text-3xl">
                      {job.position}
                    </h2>

                    <p className="text-xl text-slate-500 mt-3">
                      {job.company}
                    </p>

                  </div>

                </div>

                <p className="mt-8 leading-8">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-10">

                  {job.achievements.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-slate-100 text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}