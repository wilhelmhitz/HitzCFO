"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function ExecutiveCTA() {
  return (
    <section className="relative overflow-hidden bg-[#071C35]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:34px_34px] opacity-[0.04]" />

      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-[#0B2545]/40 via-transparent to-transparent" />

      <div className="container relative py-40">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >

          <p className="uppercase tracking-[0.35em] text-sm text-[#B08D57]">
            Executive Leadership
          </p>

          <div className="w-24 h-px bg-[#B08D57] mx-auto mt-6 mb-10" />

          <h2 className="text-white">
            Transforming businesses.
            <br />
            Developing leaders.
            <br />
            Creating sustainable value.
          </h2>

          <p className="mt-10 max-w-3xl mx-auto text-xl leading-9 text-slate-300">
            Throughout my career I have partnered with shareholders,
            boards and executive teams to lead transformation,
            strengthen governance, improve performance and build
            organisations prepared for long-term growth.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a
              href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
              className="button-primary inline-flex items-center"
            >
              <Download size={18} className="mr-3" />
              Download Executive Biography
            </a>

            <a
              href="#contact"
              className="button-secondary inline-flex items-center"
            >
              Let's Connect
              <ArrowRight size={18} className="ml-3" />
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}