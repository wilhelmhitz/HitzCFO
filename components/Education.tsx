"use client";

import { motion } from "framer-motion";

const education = [
  {
    title: "Digital Transformation",
    institution: "MIT",
    location: "Executive Education",
    description:
      "Advanced programme focused on digital transformation, technology strategy and business innovation.",
  },
  {
    title: "MBA Accounting",
    institution: "University of Phoenix",
    location: "Master of Business Administration",
    description:
      "Graduate business education focused on accounting, finance and management decision-making.",
  },
  {
    title: "MBA Marketing",
    institution: "University of Phoenix",
    location: "Master of Business Administration · GPA 3.9 / 4.0",
    description:
      "Graduated with outstanding academic performance, specialising in marketing strategy, customer value creation and business growth.",
  },
  {
    title: "Industrial Engineering",
    institution: "University of Murcia",
    location: "Engineering Degree · Top Graduate",
    description:
      "Graduated as the highest-ranked student of the class, combining engineering excellence with strong foundations in operations, processes and industrial management.",
  },
  {
    title: "Technical Engineering (Electronics)",
    institution: "University of Murcia",
    location: "Engineering Degree",
    description:
      "Technical engineering background combining electronics, technology and analytical problem-solving capabilities.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-grey">

      <div className="container">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.4em] text-sm font-medium text-[#C8A96A]">
            Education & Executive Development
          </p>


          <h2 className="mt-5">
            Building the knowledge foundation
            <br />
            behind business leadership.
          </h2>


          <div className="h-6" />


          <div className="gold-line !mt-0" />


          <p className="section-intro mt-6 max-w-5xl">
            Academic foundation combining engineering, business administration
            and executive education, supporting a career built around
            transformation, leadership and sustainable value creation.
          </p>


        </motion.div>



        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">


          {education.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="card"
            >

              <h3 className="text-2xl text-[#0B2545]">
                {item.title}
              </h3>


              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#C8A96A]">
                {item.institution}
              </p>


              <p className="mt-2 text-sm text-slate-500">
                {item.location}
              </p>


              <p className="mt-6 leading-8 text-slate-600">
                {item.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}