"use client";

import { motion } from "framer-motion";

const companies = [
  {
    company: "Herraiz",
    sector: "Industrial Distribution",
    years: "2025 – Present",
    description:
      "Leading business transformation, operational excellence, digitalization and people-first leadership."
  },
  {
    company: "Grupo Agora Invest",
    sector: "Logistics · Real Estate · Holding",
    years: "2021 – 2025",
    description:
      "Business turnaround, governance, shared services and value creation."
  },
  {
    company: "Lacer Pharmaceutical Group",
    sector: "Pharmaceuticals",
    years: "2018 – 2020",
    description:
      "Corporate transformation, digital strategy and executive committee leadership."
  },
  {
    company: "PepsiCo",
    sector: "Consumer Goods",
    years: "1994 – 2018",
    description:
      "24-year international executive career across Operations, Supply Chain, Finance, IT and Global Transformation."
  }
];

export default function Companies() {

  return (

    <section className="section-light">

      <div className="container">

        <motion.div

          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}

        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

            Industries & Companies

          </p>

          <h2 className="mt-5 max-w-4xl">

            A leadership journey across multinational corporations
            and family-owned businesses.

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {companies.map((item,index)=>(

            <motion.div

              key={item.company}

              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}

              transition={{
                delay:index*.12
              }}

              className="card"

            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="text-3xl">

                    {item.company}

                  </h3>

                  <p className="uppercase tracking-[0.2em] text-sm text-[#C8A96A] mt-3">

                    {item.sector}

                  </p>

                </div>

                <span className="text-sm text-slate-500">

                  {item.years}

                </span>

              </div>

              <p className="mt-8 leading-8">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}