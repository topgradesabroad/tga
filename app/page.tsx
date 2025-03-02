import Image from "next/image";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
export default function Home() {
  return (
    <main>
    <Hero />
    <StatsSection />
    <ExpertiseSection />
        
    </main>
  );
}