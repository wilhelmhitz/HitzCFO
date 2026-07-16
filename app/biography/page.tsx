import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Biography",
  description:
    "Executive Biography of Wilhelm Hitz, Managing Director and Business Transformation Executive.",
};

export default function BiographyPage() {
  return (
    <main className="bg-white">

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

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A] mt-16">

            Executive Biography

          </p>

          <h1 className="mt-8">

            Wilhelm Hitz

          </h1>

          <p className="text-3xl mt-6 text-slate-600">

            Managing Director

            <br />

            Business Transformation Executive

          </p>

        </div>

      </section>

      {/* BIOGRAPHY */}

      <section className="pb-32">

        <div className="container max-w-4xl">

          <div className="prose prose-lg max-w-none">

            <p>

              International Managing Director and Business Transformation
              Executive with more than 30 years of international leadership
              experience across multinational corporations and family-owned
              businesses in consumer goods, pharmaceuticals, logistics,
              industrial distribution and retail.

            </p>

            <p>

              Throughout his career, Wilhelm has successfully led business
              turnarounds, enterprise-wide transformation programmes and
              digital modernization initiatives by aligning strategy,
              people, processes and technology to create sustainable value.

            </p>

            <p>

              His executive experience spans General Management,
              Finance, Operations, Supply Chain, Procurement,
              Commercial, Human Resources and Information Technology,
              having held progressively broader leadership roles across
              Europe and Latin America.

            </p>

            <p>

              Wilhelm is recognized for building customer-centric and
              people-first organizations, improving profitability,
              strengthening governance, accelerating digital
              transformation and creating high-performing cultures
              based on accountability, operational excellence and
              continuous improvement.

            </p>

            <p>

              Today he serves as Managing Director of Herraiz,
              leading the transformation of a family-owned industrial
              distribution company while driving profitable growth,
              customer experience, employee engagement and
              digital transformation.

            </p>

          </div>

          <div className="mt-20">

            <a
              href="/files/Wilhelm_Hitz_Executive_Biography.pdf"
              className="button-primary"
            >

              <Download
                size={18}
                className="mr-3"
              />

              Download Executive Biography

            </a>

          </div>

        </div>

      </section>

    </main>
  );
}