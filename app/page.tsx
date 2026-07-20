import Hero from "@/components/Hero";
import ExecutiveStats from "@/components/ExecutiveStats";
import CareerTimeline from "@/components/CareerTimeline";
import ExecutiveInsights from "@/components/ExecutiveInsights";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <ExecutiveStats />

      <CareerTimeline />

      <ExecutiveInsights />

      <Education />

      <Leadership />

      <Contact />
    </main>
  );
}