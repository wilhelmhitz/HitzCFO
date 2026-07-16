import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thought Leadership",
  description:
    "Articles and executive insights by Wilhelm Hitz on Business Transformation, Leadership and Operational Excellence.",
};

const articles = [
  {
    category: "Business Transformation",
    title: "Business Transformation Starts with People, Not Technology",
    date: "Coming Soon",
    readTime: "8 min",
    excerpt:
      "Technology enables transformation, but sustainable change only happens when strategy, people, governance and execution move in the same direction."
  },
  {
    category: "Leadership",
    title: "Why Customer-Centric and People-First Organizations Outperform",
    date: "Coming Soon",
    readTime: "6 min",
    excerpt:
      "The organizations that consistently outperform competitors are those capable of aligning customer experience with employee engagement."
  },
  {
    category: "General Management",
    title: "The CEO Dashboard: The KPIs That Really Matter",
    date: "Coming Soon",
    readTime: "7 min",
    excerpt:
      "Every CEO should monitor a concise set of strategic indicators that balance financial performance, operational excellence, customer satisfaction and people engagement."
  },
  {
    category: "Artificial Intelligence",
    title: "AI as an Executive Management Enabler",
    date: "Coming Soon",
    readTime: "9 min",
    excerpt:
      "Artificial Intelligence should empower leadership, simplify decision-making and improve execution—not replace management."
  },
  {
    category: "Operational Excellence",
    title: "Operational Excellence Beyond Cost Reduction",
    date: "Coming Soon",
    readTime: "8 min",
    excerpt:
      "Operational excellence is about creating scalable organizations capable of delivering superior customer value while continuously improving efficiency."
  },
  {
    category: "Family Business",
    title: "Professionalizing Family-Owned Companies",
    date: "Coming Soon",
    readTime: "10 min",
    excerpt:
      "Balancing entrepreneurial spirit with governance, accountability and professional management is one of the greatest challenges facing family-owned businesses."
  }
];

export default function InsightsPage() {
  return (
    <main>

      <section className="pt-40 pb-24">

        <div className="container max-w-6xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <p className="uppercase tracking-[0.35em] text-sm text-[#C8A96A] mt-14">

            Thought Leadership

          </p>

          <h1 className="mt-8">

            Ideas That Drive
            <br />
            Business Transformation

          </h1>

          <p className="text-2xl text-slate-600 mt-8 max-w-4xl">

            Practical insights on leadership, business transformation,
            operational excellence, governance, AI and sustainable value creation.

          </p>

        </div>

      </section>

      <section className="pb-32">

        <div className="container max-w-6xl">

          <div className="grid lg:grid-cols-2 gap-10">

            {articles.map((article) => (

              <article
                key={article.title}
                className="card group cursor-pointer"
              >

                <p className="uppercase tracking-[0.25em] text-xs text-[#C8A96A]">

                  {article.category}

                </p>

                <h2 className="mt-5 text-3xl leading-tight group-hover:text-[#0B2545] transition">

                  {article.title}

                </h2>

                <p className="mt-8 leading-8">

                  {article.excerpt}

                </p>

                <div className="flex justify-between items-center mt-12">

                  <div className="flex gap-6 text-sm text-slate-500">

                    <span className="flex items-center gap-2">

                      <Calendar size={15} />

                      {article.date}

                    </span>

                    <span className="flex items-center gap-2">

                      <Clock size={15} />

                      {article.readTime}

                    </span>

                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-[#C8A96A]"
                  />

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}