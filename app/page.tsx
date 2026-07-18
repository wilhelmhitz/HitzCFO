import Hero from "@/components/Hero";
import ExecutiveStats from "@/components/ExecutiveStats";
import CareerTimeline from "@/components/CareerTimeline";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>

      <Hero />

      <ExecutiveStats />

      <CareerTimeline />

      <Education />

      <Leadership />

      <Contact />

    </main>
  );
}