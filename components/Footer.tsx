"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#081a31] text-white">

      <div className="container py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* Brand */}

          <div>

            <h3 className="text-3xl font-semibold">

              Wilhelm Hitz

            </h3>

            <p className="mt-6 text-slate-300 leading-8">

              Managing Director and Business Transformation Executive
              helping organizations create sustainable value through
              customer-centric leadership, operational excellence
              and digital transformation.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#C8A96A]">

              Navigation

            </p>

            <div className="flex flex-col gap-5 mt-8">

              <Link href="#leadership">Leadership</Link>

              <Link href="#transformation">Transformation</Link>

              <Link href="#career">Career</Link>

              <Link href="#insights">Thought Leadership</Link>

              <Link href="#contact">Contact</Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#C8A96A]">

              Connect

            </p>

            <div className="space-y-6 mt-8">

              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 hover:text-[#C8A96A] transition"
              >
                <Mail size={18} />

                your@email.com

              </a>

              <a
                href="https://linkedin.com/in/xxxxxxxx"
                target="_blank"
                className="flex items-center gap-4 hover:text-[#C8A96A] transition"
              >
                <Linkedin size={18} />

                LinkedIn

              </a>

            </div>

          </div>

        </div>

        <div className="divider my-14 opacity-20" />

        <div className="flex flex-col lg:flex-row justify-between gap-6 text-sm text-slate-400">

          <p>

            © {year} Wilhelm Hitz. All rights reserved.

          </p>

          <p>

            Designed & Built with Next.js · React · Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}