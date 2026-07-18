"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

const countries = [
  {
    country: "Spain",
    city: "Barcelona",
    period: "2007 – Present",
    description:
      "General Management, Corporate Leadership and Business Transformation."
  },
  {
    country: "Guatemala",
    city: "Guatemala City",
    period: "2004 – 2007",
    description:
      "Chief Financial Officer leading Finance and Business Development."
  },
  {
    country: "Mexico",
    city: "Mexico City",
    period: "2002 – 2004",
    description:
      "Financial Planning, Business Intelligence and Commercial Decision Support."
  },
  {
    country: "Puerto Rico",
    city: "San Juan",
    period: "1996 – 2002",
    description:
      "Regional Finance, Operations, Supply Chain and Digital Transformation."
  },
  {
    country: "Dominican Republic",
    city: "Santo Domingo",
    period: "1994 – 1996",
    description:
      "Manufacturing Operations and Operational Excellence."
  }
];

export default function ExecutiveMap() {
  return (
    <section id="international" className="section-grey">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="section-title">
            International Experience
          </p>

          <div className="gold-line mt-5 mb-10" />

          <h2>
            More than three decades leading multinational businesses
            across Europe and Latin America.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
            My international career has provided first-hand experience in
            diverse markets, cultures and business environments. Living and
            leading across multiple countries has shaped a global perspective
            focused on collaboration, transformation and sustainable growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 mt-24 items-start">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card flex items-center justify-center min-h-[650px]"
          >
            <div className="text-center">
              <Globe
                size={260}
                strokeWidth={1}
                className="mx-auto text-[#B08D57]"
              />

              <div className="gold-line w-24 mx-auto mt-10 mb-8" />

              <p className="uppercase tracking-[0.35em] text-xs text-slate-500">
                Global Leadership
              </p>

              <p className="mt-5 text-lg text-slate-600 max-w-sm mx-auto leading-8">
                International assignments across Europe,
                Central America and the Caribbean,
                leading multicultural teams and complex
                business transformations.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {countries.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08
                }}
                className="border-t border-slate-200 pt-8"
              >
                <div className="flex gap-5">

                  <div className="mt-1">
                    <MapPin
                      size={22}
                      className="text-[#B08D57]"
                    />
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">

                      <h3 className="text-2xl font-semibold">
                        {country.country}
                      </h3>

                      <span className="uppercase tracking-[0.25em] text-xs text-slate-500">
                        {country.period}
                      </span>

                    </div>

                    <p className="mt-2 text-[#0B2545] font-medium">
                      {country.city}
                    </p>

                    <p className="mt-5 text-slate-600 leading-8">
                      {country.description}
                    </p>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}