"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  Download,
  ArrowUpRight
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B2545] text-white"
    >
      {/* Background decoration */}

      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-white"></div>
        <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full border border-white"></div>
      </div>

      <div className="container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="max-w-4xl"
        >

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A]">

            Let's Connect

          </p>

          <h2 className="mt-6 text-white">

            Looking for an executive to lead
            transformation, accelerate performance
            and create sustainable value?

          </h2>

          <p className="mt-10 text-slate-300 text-xl leading-9">

            I enjoy working with Boards, shareholders,
            executive teams and family-owned businesses
            that are ready to transform their organizations,
            strengthen leadership and achieve profitable growth.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 mt-24">

          {/* Left */}

          <motion.div

            initial={{
              opacity:0,
              x:-40
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}

            transition={{
              duration:.8
            }}

          >

            <div className="space-y-10">

              <div className="flex items-start gap-5">

                <Mail
                  className="text-[#C8A96A] mt-1"
                  size={24}
                />

                <div>

                  <p className="uppercase tracking-[0.25em] text-sm text-slate-400">

                    Email

                  </p>

                  <a
                    href="mailto:your@email.com"
                    className="text-xl hover:text-[#C8A96A] transition"
                  >
                    your@email.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <Linkedin
                  className="text-[#C8A96A] mt-1"
                  size={24}
                />

                <div>

                  <p className="uppercase tracking-[0.25em] text-sm text-slate-400">

                    LinkedIn

                  </p>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="text-xl hover:text-[#C8A96A]"
                  >
                    View Profile
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <MapPin
                  className="text-[#C8A96A] mt-1"
                  size={24}
                />

                <div>

                  <p className="uppercase tracking-[0.25em] text-sm text-slate-400">

                    Location

                  </p>

                  <p className="text-xl">

                    Barcelona, Spain

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div

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
              duration:.8
            }}

          >

            <div
              className="
              bg-white/5
              border
              border-white/10
              rounded-[28px]
              p-10
              backdrop-blur-lg
              "
            >

              <h3 className="text-3xl">

                Executive Documents

              </h3>

              <p className="mt-6 text-slate-300 leading-8">

                Download my Executive Biography
                and Executive CV.

              </p>

              <div className="space-y-5 mt-10">

                <a
                  href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
                  className="
                  flex
                  justify-between
                  items-center
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  hover:bg-white/5
                  transition
                  "
                >

                  <span className="flex items-center gap-4">

                    <Download size={18} />

                    Executive Biography

                  </span>

                  <ArrowUpRight size={20} />

                </a>

                <a
                  href="/files/Wilhelm_Hitz_Executive_CV.pdf"
                  className="
                  flex
                  justify-between
                  items-center
                  border
                  border-white/10
                  rounded-2xl
                  px-6
                  py-5
                  hover:bg-white/5
                  transition
                  "
                >

                  <span className="flex items-center gap-4">

                    <Download size={18} />

                    Executive CV

                  </span>

                  <ArrowUpRight size={20} />

                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}