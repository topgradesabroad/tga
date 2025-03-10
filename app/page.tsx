import Image from "next/image";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TestimonialSection from "@/components/TestimonialSection";
import MultiStepForm from "@/components/Ivy/MultiStepForm";
import StudyDestinationsPage from "@/components/StudyDestinationsPage";


export default function Home() {
  return (
    <main>
    <Hero />
    <StatsSection />
    <ExpertiseSection />
    <TestimonialSection />
    <MultiStepForm />
    <StudyDestinationsPage />
   
    
        
    </main>
  );
}