import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  MapPin,
  Download,
  Calendar,
  Briefcase
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Wilhelm Hitz | Managing Director | Business Transformation Executive",
};

export default function ContactPage() {
  return (
    <main>

      {/* HERO */}

      <section className="pt-40 pb-24">

        <div className="container max-w-5xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A] mt-14">

            Contact

          </p>

          <h1 className="mt-8">

            Let's Start
            <br />

            a Conversation

          </h1>

          <p className="text-2xl text-slate-600 mt-8 max-w-3xl">

            Whether you are looking for a Managing Director,
            CEO, Transformation Executive, Board Advisor
            or Interim Executive, I would be pleased to
            discuss how I can help your organization.

          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="pb-32">

        <div className="container max-w-6xl">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}

            <div className="card">

              <h2>

                Contact Details

              </h2>

              <div className="space-y-10 mt-12">

                <div className="flex gap-5">

                  <Mail
                    className="text-[#C8A96A]"
                  />

                  <div>

                    <p className="uppercase text-sm tracking-[0.25em] text-slate-500">

                      Email

                    </p>

                    <a
                      href="mailto:your@email.com"
                      className="text-xl hover:text-[#0B2545]"
                    >

                      your@email.com

                    </a>

                  </div>

                </div>

                <div className="flex gap-5">

                  <Linkedin
                    className="text-[#C8A96A]"
                  />

                  <div>

                    <p className="uppercase text-sm tracking-[0.25em] text-slate-500">

                      LinkedIn

                    </p>

                    <a
                      href="https://linkedin.com/in/xxxxxxxx"
                      target="_blank"
                      className="text-xl hover:text-[#0B2545]"
                    >

                      linkedin.com/in/xxxxxxxx

                    </a>

                  </div>

                </div>

                <div className="flex gap-5">

                  <MapPin
                    className="text-[#C8A96A]"
                  />

                  <div>

                    <p className="uppercase text-sm tracking-[0.25em] text-slate-500">

                      Location

                    </p>

                    <p className="text-xl">

                      Barcelona, Spain

                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="card">

              <h2>

                Executive Profile

              </h2>

              <p className="mt-8 leading-8">

                International executive with more than
                thirty years of experience leading
                General Management, Finance,
                Operations, Supply Chain,
                IT and Business Transformation
                across multinational corporations
                and family-owned businesses.

              </p>

              <div className="space-y-5 mt-12">

                <div className="flex gap-4">

                  <Briefcase className="text-[#C8A96A]" />

                  <span>

                    Managing Director

                  </span>

                </div>

                <div className="flex gap-4">

                  <Calendar className="text-[#C8A96A]" />

                  <span>

                    Available for Executive,
                    Advisory and Board opportunities

                  </span>

                </div>

              </div>

              <div className="mt-14 flex flex-wrap gap-5">

                <a
                  href="/files/Wilhelm_Hitz_Executive_CV.pdf"
                  className="button-primary"
                >

                  <Download
                    className="mr-3"
                    size={18}
                  />

                  Executive CV

                </a>

                <a
                  href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
                  className="button-secondary"
                >

                  Executive Biography

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}