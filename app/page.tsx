// app/page.tsx
import Hero from "@/components/Hero";
import ImpactStatsServer from "@/components/ImpactStatsServer";
import ExpertiseSection from "@/components/ExpertiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import MultiStepForm from "@/components/Ivy/MultiStepForm";
import ScholarshipsSection from "@/components/ScholarshipsSection";
import DestinationServer from "@/components/DestinationServer";
import { destinations, Destination } from "@/data/destinations";
import FAQServer from "@/components/FAQServer";
import ConsultationCTA from "@/components/ConsultationCTA";

interface HomeProps {
  searchParams: { id?: string } | Promise<{ id?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  // Await the searchParams before using them.
  const sp = await searchParams;
  const { id } = sp;
  const activeDestination: Destination =
    destinations.find((dest) => dest.id === id) || destinations[0];

  return (
    <main>
      <Hero />
      <ImpactStatsServer />
      <ExpertiseSection />
      <TestimonialSection />
      <MultiStepForm />
      <ScholarshipsSection />
      <DestinationServer activeDestination={activeDestination} />
      <FAQServer />
      <ConsultationCTA />
    </main>
  );
}
