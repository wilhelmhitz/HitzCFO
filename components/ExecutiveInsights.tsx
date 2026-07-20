"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    title: "The Real Job of a MD / GM: Creating Value",
    category: "Leadership",
    date: "July 2026 · 8 min read",
    description:
      "Creating value is the true responsibility of every Managing Director. Operations keep the business running today. Leadership prepares the organisation for tomorrow.",
    href: "/insights/creating-value",
  },
];

export default function ExecutiveInsights() {
  return (
    <section id="insights" className="section-grey">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#C8A96A]">
            Executive Insights
          </p>

          <h2 className="mt-5">
            Practical insights on leadership,
            <br />
            transformation and sustainable value creation.
          </h2>

          <div className="h-6" />

          <div className="gold-line !mt-0" />

          <p className="section-intro mt-6 max-w-5xl">
            A collection of articles sharing practical reflections on
            leadership, business transformation, operational excellence and
            value creation, drawn from more than thirty years of executive
            experience across multinational corporations and family-owned
            businesses.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="card flex flex-col"
            >
              <h3 className="text-2xl text-[#0B2545]">
                {article.title}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C8A96A]">
                {article.category}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {article.date}
              </p>

              <p className="mt-6 leading-8 text-slate-600 flex-grow">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-8 inline-flex font-medium text-[#0B2545] hover:text-[#C8A96A] transition-colors"
              >
                Read article →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}