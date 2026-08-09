"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    number: "001",
    title: "The Real Job of a MD / GM: Creating Value",
    category: "Leadership",
    date: "July 2026 · 8 min read",
    description:
      "Creating value is the true responsibility of every Managing Director. Operations keep the business running today. Leadership prepares the organisation for tomorrow.",
    href: "/insights/001",
  },
  {
    number: "002",
    title: "Strategy Without Execution Creates No Value",
    category: "Strategy",
    date: "July 2026 · 8 min read",
    description:
      "Even the best strategy is worthless without disciplined execution. Sustainable competitive advantage is built by aligning priorities, people and accountability to turn strategic intent into measurable results.",
    href: "/insights/002",
  },
  {
    number: "003",
    title: "Culture: The Competitive Advantage You Can't Copy",
    category: "Leadership",
    date: "August 2026 · 8 min read",
    description:
      "Corporate culture is not built through values displayed on a wall, but through the daily decisions, behaviours and priorities that leaders reinforce. Sustainable competitive advantage emerges when culture consistently supports strategy and execution.",
    href: "/insights/003",
  },
  {
    number: "004",
    title: "Leadership Is About Developing Others' Ability to Decide",
    category: "Leadership",
    date: "August 2026 · 8 min read",
    description:
      "The role of a Managing Director is not to make every important decision, but to build an organisation capable of making sound decisions without constant supervision. Great leadership creates autonomy, accountability and long-term organisational strength.",
    href: "/insights/004",
  },
  {
    number: "005",
    title: "KPIs Don't Exist to Control. They Exist to Help You Decide",
    category: "Performance Management",
    date: "August 2026 · 8 min read",
    description:
      "The purpose of performance indicators is not to monitor activity but to improve decision-making. The most effective organisations focus on the few metrics that drive better decisions, stronger execution and sustainable value creation.",
    href: "/insights/005",
  },
  {
    number: "006",
    title: "Business Transformation Begins When Behaviours Change",
    category: "Business Transformation",
    date: "August 2026 · 8 min read",
    description:
      "Successful transformation is not driven by new strategies, systems or organisational charts, but by changing everyday behaviours. Lasting change happens when new ways of thinking and working become part of the organisation's culture.",
    href: "/insights/006",
  },
];

export default function InsightsPage() {
  return (
    <section className="section-grey">
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
            Drawing on more than thirty years of executive leadership across multinational corporations and family-owned businesses, these articles share practical perspectives to help leaders create sustainable value and drive business performance. Explore topics including Leadership · Strategy · Transformation · Operational Excellence and Finance.
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

              <p
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: ".30em",
                  color: "#64748B",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  marginBottom: "2px",
                }}
              >
                Executive Insights
              </p>

              <p
                style={{
                  fontSize: "0.82rem",
                  letterSpacing: ".28em",
                  color: "#64748B",
                  fontWeight: 600,
                  marginBottom: "18px",
                }}
              >
                {article.number}
              </p>

              <h3
                style={{
                  fontSize: "1.9rem",
                  lineHeight: "1.22",
                  letterSpacing: "-0.5px",
                  color: "#0B2545",
                }}
              >
                {article.title}
              </h3>

              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#C8A96A]">
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