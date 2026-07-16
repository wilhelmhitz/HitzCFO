"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">

      <div className="container grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >

          <p className="uppercase tracking-[0.35em] text-sm text-slate-500 mb-8">

            Managing Director · Business Transformation Executive

          </p>

          <h1>

            Transforming
            <br />

            Businesses

            <span className="block text-[#C8A96A]">
              Through
              <br />
              People,
              Strategy &
              Technology
            </span>

          </h1>

          <p className="mt-10 max-w-xl text-xl leading-9">

            Helping organizations create sustainable value by putting
            customers and people at the center, aligning strategy,
            processes and technology to accelerate profitable growth
            and operational excellence.

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

              <ArrowDownRight
                className="ml-3"
                size={18}
              />

            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div

          initial={{
            opacity: 0,
            scale: .92,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 1.2,
          }}

          className="relative"

        >

          <div
            className="
            rounded-[32px]
            overflow-hidden
            shadow-2xl
            "
          >

            <img
              src="/profile.jpg"
              alt="Wilhelm Hitz"
              className="w-full object-cover"
            />

          </div>

          {/* Floating Card */}

          <div
            className="
            absolute
            -bottom-8
            -left-8
            bg-white
            rounded-3xl
            shadow-xl
            border
            border-slate-200
            p-8
            hidden
            lg:block
            "
          >

            <p className="uppercase text-xs tracking-[0.25em] text-slate-500">

              Leadership Philosophy

            </p>

            <h3 className="mt-3 text-xl leading-8">

              Customer-Centric

              <br />

              People-First

              <br />

              Value Creation

            </h3>

          </div>

        </motion.div>

      </div>

    </section>
  );
}