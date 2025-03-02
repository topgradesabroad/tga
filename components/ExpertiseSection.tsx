// ExpertiseSection.jsx (Server Component)
import React from 'react';
import Head from 'next/head';
import { 
  Users, BookOpen, GraduationCap, Landmark, Stamp, 
  Home, Plane, HeartPulse, Briefcase
} from 'lucide-react';
import ServicesCarousel from './ServicesCarousel';

export const services = [
  {
    title: "Counselling",
    description: "Expert guidance for your academic journey. Personalized advice tailored to your needs. Support throughout your application process.",
    icon: <Users className="w-6 h-6 text-gray-700" />,
    accentColor: "from-blue-500/20 to-violet-500/20",
    image: "/images/counselling.jpg"
  },
  {
    title: "Test Prep",
    description: "Comprehensive preparation for IELTS, TOEFL & PTE. Access to expert study materials. Practice tests with personalized feedback.",
    icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    accentColor: "from-purple-500/20 to-pink-500/20",
    image: "/images/test-prep.jpg"
  },
  {
    title: "Admissions",
    description: "Guidance on university selection and applications. Step-by-step assistance through the process. Maximize your chances of acceptance.",
    icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
    accentColor: "from-pink-500/20 to-rose-500/20",
    image: "/images/admissions.jpg"
  },
  {
    title: "Education Loan",
    description: "Assistance with financial planning for education. Access to various loan options. Expert advice to secure the best rates.",
    icon: <Landmark className="w-6 h-6 text-gray-700" />,
    accentColor: "from-amber-500/20 to-orange-500/20",
    image: "/images/education-loan.jpg"
  },
  {
    title: "Visa Help",
    description: "Simplifying the visa application process. Professional guidance for paperwork. Ensuring compliance with immigration laws.",
    icon: <Stamp className="w-6 h-6 text-gray-700" />,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    image: "/images/visa-help.jpg"
  },
  {
    title: "Housing",
    description: "Finding your perfect accommodation abroad. Detailed neighborhood insights and options. Seamless booking and support services.",
    icon: <Home className="w-6 h-6 text-gray-700" />,
    accentColor: "from-cyan-500/20 to-sky-500/20",
    image: "/images/housing.jpg"
  },
  {
    title: "Travel",
    description: "Flight booking and pre-departure assistance. Personalized travel itinerary planning. Support for a smooth journey.",
    icon: <Plane className="w-6 h-6 text-gray-700" />,
    accentColor: "from-indigo-500/20 to-blue-500/20",
    image: "/images/travel.jpg"
  },
  {
    title: "Insurance",
    description: "Tailored health and travel insurance plans. Comprehensive coverage options. Expert advice to protect your journey.",
    icon: <HeartPulse className="w-6 h-6 text-gray-700" />,
    accentColor: "from-rose-500/20 to-pink-500/20",
    image: "/images/insurance.jpg"
  },
  {
    title: "Jobs",
    description: "Career support and job placement assistance. Access to international job opportunities. Personalized career counseling.",
    icon: <Briefcase className="w-6 h-6 text-gray-700" />,
    accentColor: "from-violet-500/20 to-purple-500/20",
    image: "/images/jobs.jpg"
  }
];

const ExpertiseSection = () => {
  return (
    <>
      <Head>
        <title>Your Journey, Our Expertise - International Education Solutions</title>
        <meta name="description" content="End-to-end solutions designed to make your international education journey seamless and successful. Our services include Counselling, Test Prep, Admissions, Education Loan, Visa Help, Housing, Travel, Insurance, and Jobs." />
        <meta name="keywords" content="international education, counselling, test prep, admissions, education loan, visa help, housing, travel, insurance, jobs" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <section className="mt-10 pt-10 pb-16 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto relative">
                Your Journey, Our Expertise
              </h2>
            </div>
            <div className="mt-4 max-w-2xl mx-auto">
              <p className="text-lg md:text-md text-purple-600 leading-relaxed">
                End-to-end solutions designed to make your international education journey seamless and successful
              </p>
            </div>
          </div>

          {/* Static fallback for SSR - This will be displayed during SSR */}
          <div className="block md:hidden">
            <StaticServiceCard service={services[0]} />
          </div>

          {/* Client component carousel */}
          <ServicesCarousel services={services} />
        </div>
      </section>
    </>
  );
};

// This static card is used as a fallback during SSR
const StaticServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="relative flex flex-col">
        {/* Image Section (Static Placeholder) */}
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {/* Showing a colored div instead of Image component for SSR */}
          <div className="absolute inset-0 bg-blue-100"></div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 relative">
          <div className="flex items-center mb-4">
            <div className="p-2 rounded-lg bg-white shadow-sm mr-3">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
          </div>
          
          <div className="text-gray-600 whitespace-pre-line">
            {service.description}
          </div>
          
          <div className="mt-4">
            <button className="text-purple-600 font-medium flex items-center">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;