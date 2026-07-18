import Image from "next/image";
import { leadershipPhilosophy } from "@/lib/content/leadership-philosophy";

export default function LeadershipPage() {
  const paragraphs = leadershipPhilosophy.content
    .trim()
    .split("\n\n");

  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}

      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">

      <img
  src="/images/leadership.jpg"
  alt="Wilhelm Hitz"
  className="absolute inset-0 h-full w-full object-cover"
/>

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center">

          <div className="mx-auto max-w-7xl px-8">

            <span className="uppercase tracking-[0.35em] text-blue-300 font-semibold">
              Leadership Philosophy
            </span>

            <h1 className="mt-8 max-w-4xl text-6xl font-bold leading-tight text-white md:text-7xl">
              {leadershipPhilosophy.title}
            </h1>

            <p className="mt-8 max-w-3xl text-2xl leading-relaxed text-gray-200">
              {leadershipPhilosophy.subtitle}
            </p>

          </div>

        </div>

      </section>

      {/* QUOTE */}

      <section className="bg-gray-950 py-28">

        <div className="mx-auto max-w-5xl px-8">

          <blockquote className="text-center">

            <p className="text-4xl leading-relaxed italic text-white md:text-5xl">

              Leadership is not about building dependency.

              <br />
              <br />

              <span className="text-blue-400">
                It is about building organizations that no longer depend on you.
              </span>

            </p>

            <footer className="mt-10 text-gray-400 text-lg">
              Wilhelm Hitz
            </footer>

          </blockquote>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-28">

        <div className="mx-auto max-w-4xl px-8">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-blue-600 font-semibold">
              Introduction
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Building Better Businesses,
              <br />
              Not Simply Better Results
            </h2>

          </div>

          <div className="space-y-10 text-xl leading-10 text-gray-700">

            {paragraphs.slice(0, 12).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}