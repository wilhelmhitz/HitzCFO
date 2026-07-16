import Hero from "@/components/Hero";
import ExecutiveStats from "@/components/ExecutiveStats";
import TransformationModel from "@/components/TransformationModel";
import CareerTimeline from "@/components/CareerTimeline";
import CaseStudies from "@/components/CaseStudies";
import Leadership from "@/components/Leadership";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>

      {/* Hero */}

      <Hero />

      {/* Executive Impact */}

      <ExecutiveStats />

      {/* Framework */}

      <TransformationModel />

      {/* Career */}

      <CareerTimeline />

      {/* Portfolio */}

      <CaseStudies />

      {/* Leadership */}

      <Leadership />

      {/* Articles */}

      <ThoughtLeadership />

      {/* Contact */}

      <Contact />

    </>
  );
}