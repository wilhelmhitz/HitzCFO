"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  BarChart3,
  ShieldCheck,
  Cpu,
  TrendingUp
} from "lucide-react";

const principles = [
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Every transformation starts by understanding how to create more value for customers."
  },
  {
    icon: Users,
    title: "People First",
    description:
      "Engaged people build extraordinary organizations. Leadership is about developing people before managing performance."
  },
  {
    icon: BarChart3,
    title: "Data Driven",
    description:
      "Facts over opinions. KPIs, governance and transparency enable better decisions."
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "Clear ownership, disciplined execution and governance create sustainable performance."
  },
  {
    icon: Cpu,
    title: "Technology as an Enabler",
    description:
      "Technology and AI should simplify work, improve decisions and empower people—not replace leadership."
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Transformation is not a project. It is a mindset embedded in the organization's culture."
  }
];

export default function Leadership() {
  return (
    <section className="section-grey">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Leadership Philosophy
          </p>

          <h2 className="mt-5 max-w-5xl">
            Building customer-centric and people-first organizations
            through disciplined execution, operational excellence
            and sustainable value creation.
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24">

          {principles.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .08
                }}
                className="card"
              >

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

                <h3 className="mt-8 text-2xl">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-28"
        >

          <div className="divider mb-16" />

          <blockquote
            className="
            max-w-5xl
            text-3xl
            lg:text-5xl
            font-light
            leading-tight
            tracking-tight
            "
          >
            “I build customer-centric and people-first organizations by aligning
            strategy, people, processes and technology to deliver sustainable
            value creation, operational excellence and profitable growth.”
          </blockquote>

          <p className="mt-10 uppercase tracking-[0.3em] text-sm text-slate-500">
            Wilhelm Hitz
          </p>

        </motion.div>

      </div>

    </section>
  );
}