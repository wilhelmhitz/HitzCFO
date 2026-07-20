"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Purpose & Direction",
    description:
      "Creating clarity around priorities, strategy and value creation to align the entire organisation towards common goals.",
  },
  {
    number: "02",
    title: "People First",
    description:
      "Building an organisation where every person can contribute, develop and succeed through trust, collaboration, recognition and empowerment. I believe leaders must coach, mentor and create a workplace where people feel valued, engaged and proud to belong.",
  },
  {
    number: "03",
    title: "Ownership & Accountability",
    description:
      "Establishing a culture where commitments are clear, decisions are owned and everyone understands their contribution to business results.",
  },
  {
    number: "04",
    title: "Transformation Mindset",
    description:
      "Leading change with energy, resilience and discipline to turn challenges into opportunities and create sustainable improvement.",
  },
  {
    number: "05",
    title: "Customer & Value Focus",
    description:
      "Ensuring every decision improves customer value and strengthens long-term business performance.",
  },
  {
    number: "06",
    title: "Knowledge & Data Driven Decisions",
    description:
      "Combining theoretical knowledge, practical business experience and measurable KPIs to make informed decisions, continuously improve and deliver sustainable results.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-grey">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#C8A96A]">
            Leadership Philosophy
          </p>


          <h2 className="mt-5">
            Leading through clarity,
            <br />
            accountability and people.
          </h2>


          <div className="h-10" />


          <div className="gold-line !mt-0" />


          <p className="section-intro mt-6 max-w-5xl">
            Sustainable business transformation happens when strategy,
            people and execution are fully aligned. Leaders create impact by
            setting a clear direction, empowering the organisation and
            building a culture of accountability, continuous improvement and
            sustainable value creation.
          </p>


        </motion.div>



        <div className="mt-16 flex flex-col gap-6">


          {principles.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="card"
            >

              <div className="grid gap-6 md:grid-cols-[90px_1fr] items-start">


                <div className="text-3xl font-bold text-[#C8A96A]">
                  {item.number}
                </div>


                <div>

                  <h3 className="text-2xl text-[#0B2545]">
                    {item.title}
                  </h3>


                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>


                </div>


              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}