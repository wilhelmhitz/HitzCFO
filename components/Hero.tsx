"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero bg-white scroll-mt-32"
    >

      <div className="container grid lg:grid-cols-[1.28fr_0.72fr] gap-14 items-start">


        {/* LEFT COLUMN */}


        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >


          <p className="uppercase tracking-[0.45em] text-[13px] font-medium text-[#C8A96A]">

            Managing Director · Business Transformation Executive

          </p>



          <h1 className="max-w-none text-[#0B1736] font-bold">

            Building Better
            <br />
            Businesses

          </h1>



          <h2 className="max-w-[760px] text-3xl font-medium text-[#C8A96A]">

            Through People, Strategy & Technology

          </h2>



          <div className="gold-line" />



          <p className="max-w-[760px] text-xl text-slate-600">

            Managing Director with more than 30 years of international
            experience leading business transformation, operational
            excellence and profitable growth across multinational and
            family-owned companies.

          </p>



          <div className="flex flex-wrap gap-5 mt-9">


            <a
              href="/files/Wilhelm Hitz - Executive biography - July 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >

              <Download
                className="mr-3"
                size={18}
              />

              Executive Biography

            </a>



            <a
              href="/files/Wilhelm Hitz - Executive CV - July 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >

              <Download
                className="mr-3"
                size={18}
              />

              Complete CV

            </a>


          </div>


        </motion.div>





        {/* RIGHT COLUMN */}



        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >



          <div
            className="
              relative
              w-[460px]
              h-[575px]
              overflow-hidden
              rounded-[34px]
              border
              border-slate-200
              shadow-[0_28px_60px_rgba(15,23,42,.16)]
            "
          >


            <Image
              src="/images/leadership.jpg"
              alt="Wilhelm Hitz"
              fill
              priority
              className="object-cover object-[50%_18%]"
            />



            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />


          </div>



        </motion.div>



      </div>


    </section>
  );
}