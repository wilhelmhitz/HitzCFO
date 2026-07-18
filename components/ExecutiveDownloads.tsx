"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  BookOpen,
  Presentation,
  ArrowUpRight
} from "lucide-react";

const downloads = [
  {
    icon: BookOpen,
    title: "Executive Biography",
    description:
      "A concise overview of my leadership philosophy, international experience and approach to business transformation.",
    file: "/files/Wilhelm_Hitz_Executive_Biography.pdf"
  },
  {
    icon: FileText,
    title: "Executive Curriculum Vitae",
    description:
      "A comprehensive executive profile covering more than thirty years of international leadership, finance and transformation.",
    file: "/files/Wilhelm_Hitz_Executive_CV.pdf"
  },
  {
    icon: Presentation,
    title: "Transformation Portfolio",
    description:
      "Selected transformation projects highlighting operational excellence, governance, digital transformation and profitable growth.",
    file: "/files/Transformation_Portfolio.pdf"
  }
];

export default function ExecutiveDownloads() {
  return (
    <section id="downloads" className="section-grey">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="section-title">
            Executive Documents
          </p>

          <div className="gold-line mt-5 mb-10" />

          <h2>
            Download executive documents,
            leadership material and selected
            transformation case studies.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            A curated collection of documents providing additional insight
            into my leadership experience, business transformation journey
            and executive background.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          {downloads.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.file}
                download
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08
                }}
                className="card group flex flex-col"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                    <Icon
                      size={30}
                      className="text-[#0B2545]"
                    />
                  </div>

                  <ArrowUpRight
                    size={24}
                    className="text-slate-400 transition-all duration-300 group-hover:text-[#B08D57] group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

                <h3 className="mt-10 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between">

                  <div className="flex items-center gap-3 font-semibold text-[#0B2545]">
                    <Download size={18} />
                    Download PDF
                  </div>

                  <span className="uppercase tracking-[0.25em] text-xs text-slate-400">
                    PDF
                  </span>

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>
    </section>
  );
}