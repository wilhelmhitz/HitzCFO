"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MapPin
} from "lucide-react";

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
      "Financial Planning and Business Intelligence."
  },

  {
    country: "Puerto Rico",
    city: "San Juan",
    period: "1996 – 2002",
    description:
      "Operations, Supply Chain, IT and Digital Transformation."
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

    <section className="section-grey">

      <div className="container">

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500">

            International Experience

          </p>

          <h2 className="mt-5 max-w-4xl">

            More than three decades leading
            multinational organizations across
            Europe and Latin America.

          </h2>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mt-24">

          {/* MAP */}

          <div
            className="
            rounded-[32px]
            bg-white
            border
            border-slate-200
            shadow-lg
            p-12
            flex
            items-center
            justify-center
            min-h-[650px]
            "
          >

            <Globe
              size={280}
              strokeWidth={1}
              className="text-[#0B2545]"
            />

          </div>

          {/* Countries */}

          <div className="space-y-10">

            {countries.map((country,index)=>(

              <motion.div

                key={country.country}

                initial={{
                  opacity:0,
                  x:40
                }}

                whileInView={{
                  opacity:1,
                  x:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  delay:index*.08
                }}

                className="
                border-b
                border-slate-200
                pb-8
                "

              >

                <div className="flex gap-4 items-start">

                  <MapPin
                    size={22}
                    className="text-[#C8A96A] mt-1"
                  />

                  <div>

                    <h3>

                      {country.country}

                    </h3>

                    <p className="text-sm uppercase tracking-[0.2em] mt-2">

                      {country.city} · {country.period}

                    </p>

                    <p className="mt-5">

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