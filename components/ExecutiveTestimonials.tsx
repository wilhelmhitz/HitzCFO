"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Wilhelm combines strategic thinking with exceptional execution. His ability to align people, processes and technology consistently delivers sustainable business results.",
    author: "Chairman",
    company: "Family-Owned Industrial Group",
  },
  {
    quote:
      "A transformational leader capable of simplifying complexity while building trust, accountability and high-performing teams.",
    author: "Chief Executive Officer",
    company: "International Consumer Goods Company",
  },
  {
    quote:
      "His financial expertise, operational vision and people-centric leadership make him a trusted advisor for any Board or executive team.",
    author: "Board Member",
    company: "Multinational Organization",
  },
];

export default function ExecutiveTestimonials() {
  return (
    <section className="section-light">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">
            Recommendations
          </p>

          <h2 className="mt-5 max-w-4xl">
            Leadership is ultimately measured by the impact it has on people,
            organizations and long-term business performance.
          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >

              <Quote
                className="text-[#C8A96A]"
                size={32}
              />

              <p className="mt-8 italic leading-8">
                "{item.quote}"
              </p>

              <div className="mt-10">

                <h4 className="font-semibold">
                  {item.author}
                </h4>

                <p className="text-sm text-slate-500 mt-2">
                  {item.company}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}