"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero bg-white">
      <div className="container grid lg:grid-cols-[1.2fr_0.8fr] gap-32 items-start">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="uppercase tracking-[0.45em] text-[13px] font-medium text-[#C8A96A] mb-10">
            Managing Director · Business Transformation Executive
          </p>

          <h1>
            Building
            <br />
            Better
            <br />
            Businesses
          </h1>

          <h2 className="mt-8 !text-3xl !font-medium !leading-tight text-[#C8A96A]">
            Through People, Strategy & Technology
          </h2>

          <div className="gold-line" />

          <p className="mt-10 max-w-lg text-xl leading-9">
            Managing Director with more than 30 years of international
            experience leading business transformation, operational
            excellence and profitable growth across multinational and
            family-owned companies.
          </p>

          <div className="flex flex-wrap gap-5 mt-14">
            <a
              href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
              className="button-primary"
            >
              <Download className="mr-3" size={18} />
              Executive Biography
            </a>

            <a
              href="#transformation"
              className="button-secondary"
            >
              Explore my work
              <ArrowDownRight className="ml-3" size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative self-start w-[430px] ml-auto"
        >
          <div className="absolute -inset-8 rounded-full bg-[#C8A96A]/5 blur-3xl" />

          <div className="relative w-[430px] h-[540px] overflow-hidden rounded-[34px] border border-slate-200 shadow-[0_28px_60px_rgba(15,23,42,.16)]">
            <Image
              src="/images/leadership.jpg"
              alt="Wilhelm Hitz"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="mt-8 w-[430px]">
            <div className="grid grid-cols-3 items-start">

              <div className="text-center">
                <div className="text-5xl font-bold leading-none text-[#0B2545]">
                  30+
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">
                  YEARS
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-l border-slate-200 h-16"></div>
              </div>

              <div className="hidden"></div>

            </div>

            <div className="-mt-16 grid grid-cols-3 items-start">

              <div></div>

              <div className="text-center">
                <div className="text-5xl font-bold leading-none text-[#0B2545]">
                  4
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">
                  INDUSTRIES
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-l border-slate-200 h-16"></div>
              </div>

            </div>

            <div className="-mt-16 grid grid-cols-3 items-start">

              <div></div>
              <div></div>

              <div className="text-center">
                <div className="text-[2rem] font-bold leading-none tracking-tight text-[#0B2545] whitespace-nowrap">
                  International
                </div>

                <div className="mt-2 text-xs uppercase tracking-[0.35em] text-slate-500">
                  LEADERSHIP
                </div>
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}