"use client";

import { motion } from "framer-motion";


const career = [
  {
    year: "2026",
    title: "Managing Director",
    company: "Herraiz",
    location: "Tortosa",
    description:
      "Leading the transformation of a family-owned industrial distribution business by modernising governance, customer experience, commercial execution and operational performance while preparing the organisation for sustainable growth.",
  },
  {
    year: "2021",
    title: "Corporate General Director",
    company: "Grupo Agora",
    location: "Barcelona",
    description:
      "Led the transformation of a multinational family-owned holding company, returning the Group to profitability after three consecutive years of losses through organisational redesign, shared services, governance and digital transformation. Member of the Advisory and Compliance Boards.",
  },
  {
    year: "2018",
    title: "General Manager, Corporate Services Division",
    company: "Lacer",
    location: "Barcelona",
    description:
      "Executive Committee member leading Finance, HR, IT and Legal while accelerating enterprise-wide transformation and co-leading the business strategic plan with McKinsey to transform the consumer health division.",
  },
  {
    year: "2014",
    title: "Global Asset Management Director",
    company: "PepsiCo Global",
    location: "Barcelona",
    description:
      "Defined global strategy and governance for technology assets supporting worldwide business operations.",
  },
  {
    year: "2011",
    title: "Risk & Compliance Director - Europe & SSA",
    company: "PepsiCo Europe & SSA",
    location: "Barcelona",
    description:
      "Led Governance, SOX, Cybersecurity and Business Continuity across more than 25 countries.",
  },
  {
    year: "2007",
    title: "Chief Financial Officer - Europe IT",
    company: "PepsiCo Europe",
    location: "Barcelona",
    description:
      "Established the European IT Finance organisation while supporting one of PepsiCo's largest transformation programmes implementing SAP and Global Networks and Data Centers.",
  },
  {
    year: "2004",
    title: "Chief Financial Officer - Central America",
    company: "PepsiCo Central America",
    location: "Guatemala",
    description:
      "Partnered with the General Manager to drive profitable growth, strengthen governance and support business expansion.",
  },
  {
    year: "2002",
    title: "Financial Planning Manager",
    company: "PepsiCo Mexico",
    location: "Monterrey",
    description:
      "Led Financial Planning & Analysis across four business units in one of PepsiCo's largest markets.",
  },
  {
    year: "1998",
    title: "IT & Financial Planning Manager",
    company: "PepsiCo Caribbean",
    location: "San Juan, Puerto Rico",
    description:
      "Integrated Finance and Technology to accelerate ERP modernisation and business intelligence.",
  },
  {
    year: "1996",
    title: "Logistics Manager",
    company: "PepsiCo Caribbean",
    location: "San Juan, Puerto Rico",
    description:
      "Led Supply Chain, Procurement and Distribution improvement.",
  },
  {
    year: "1994",
    title: "Plant Manager",
    company: "PepsiCo Dominican Republic",
    location: "Santo Domingo",
    description:
      "Started an international leadership career driving manufacturing excellence.",
  },
];


export default function CareerTimeline() {

  return (

    <section
      id="career"
      className="section-white scroll-mt-32 !pt-20 !pb-6"
    >

      <div className="container">


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >

          <p className="section-title">
            Career Journey
          </p>


          <h2 className="mt-5">
            Three decades of leadership across
            <br />
            multinational and family-owned businesses.
          </h2>


          <div className="gold-line" />


          <p className="section-intro max-w-5xl">
            International experience combining general management,
            transformation, finance, operations and digital capabilities to
            create sustainable value and profitable growth year after year.
          </p>


        </motion.div>



        <div className="relative mt-2 border-l-2 border-[#C8A96A]/40 pl-10">


          {career.map((item, index) => (

            <motion.div

              key={item.year + item.company}

              initial={{ opacity: 0, x: -30 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{
                duration: 0.5,
                delay: index * 0.04,
              }}

              className="relative mb-6"

            >


              <span
                className="
                absolute
                -left-[49px]
                top-2
                h-4
                w-4
                rounded-full
                border-4
                border-white
                bg-[#C8A96A]
                "
              />


              <div className="card !p-6">


                <div className="grid gap-8 lg:grid-cols-[110px_1fr]">


                  <div className="text-4xl font-bold text-[#0B2545]">
                    {item.year}
                  </div>


                  <div>


                    <h3 className="text-2xl">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-sm uppercase tracking-[0.3em] text-[#C8A96A]">
                      {item.company} · {item.location}
                    </p>


                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>


                  </div>


                </div>


              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>

  );

}