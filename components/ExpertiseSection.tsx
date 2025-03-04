// ExpertiseSection.jsx (Server Component)
import React, { JSX } from 'react';
import Head from 'next/head';
import { 
  Users, BookOpen, GraduationCap, Landmark, Stamp, 
  Home, Plane, HeartPulse, Briefcase
} from 'lucide-react';
import ServicesCarousel from './ServicesCarousel';

export const services = [
  {
    title: "Counselling",
    description: ` Our experienced counselors will help you choose the right course and university, ensuring you make informed decisions. We provide continuous support from the initial consultation to your final acceptance. 

Our team is dedicated to understanding your aspirations and helping you achieve your academic goals. We offer one-on-one sessions, workshops, and resources to help you navigate the complexities of studying abroad. 

Whether you need help with course selection, application strategies, or career advice, our counselors are here to support you every step of the way.`,
    icon: <Users className="w-6 h-6 text-gray-700" />,
    accentColor: "from-blue-500/20 to-violet-500/20",
    image: "/ExpertiseSection/counselling.webp"
  },
  {
    title: "Test Prep",
    description: ` Our test prep courses are designed to help you achieve the highest scores. We offer interactive classes, mock tests, and one-on-one tutoring to ensure you are fully prepared for your exams. 

Our experienced instructors provide tips and strategies to tackle each section of the test. We also offer flexible schedules and online resources to fit your busy lifestyle. 

With our support, you can approach your exams with confidence and achieve the scores you need to succeed.`,
    icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    accentColor: "from-purple-500/20 to-pink-500/20",
    image: "/ExpertiseSection/test.webp"
  },
  {
    title: "Admissions",
    description: ` We help you craft compelling personal statements, gather strong recommendation letters, and prepare for interviews. Our goal is to make your application stand out. 

We provide insights into what top universities are looking for and help you highlight your strengths. Our team also offers mock interviews and feedback sessions to ensure you are well-prepared. 

From initial research to final submission, we are here to support you in achieving your academic dreams.`,
    icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
    accentColor: "from-pink-500/20 to-rose-500/20",
    image: "/ExpertiseSection/admission.webp"
  },
  {
    title: "Education Loan",
    description: ` We guide you through the loan application process, helping you understand the terms and conditions. Our aim is to make education affordable and accessible. 

We work with reputable financial institutions to offer you the best loan options. Our team provides personalized financial counseling to help you plan your budget and manage your expenses. 

We also offer resources and workshops on financial literacy to ensure you make informed decisions about your education funding.`,
    icon: <Landmark className="w-6 h-6 text-gray-700" />,
    accentColor: "from-amber-500/20 to-orange-500/20",
    image: "/ExpertiseSection/loan.webp"
  },
  {
    title: "Visa Help",
    description: ` We provide detailed instructions and support to help you gather the necessary documents. Our experts stay updated on visa regulations to ensure a smooth application process. 

We offer personalized consultations to address your specific visa needs and concerns. Our team also provides resources and workshops on visa requirements and procedures. 

With our support, you can navigate the visa application process with ease and confidence.`,
    icon: <Stamp className="w-6 h-6 text-gray-700" />,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    image: "/ExpertiseSection/visa.webp"
  },
  {
    title: "Housing",
    description: ` We help you find safe and comfortable housing that fits your budget. Our team provides information on local amenities and transportation to make your stay enjoyable. 

We offer a range of housing options, from dormitories to private apartments, to suit your preferences. Our team also provides tips on adjusting to your new environment and making the most of your living experience. 

With our support, you can find a home away from home.`,
    icon: <Home className="w-6 h-6 text-gray-700" />,
    accentColor: "from-cyan-500/20 to-sky-500/20",
    image: "/ExpertiseSection/room.webp"
  },
  {
    title: "Travel",
    description: ` We help you find the best flight deals and prepare for your trip. Our services include travel insurance, packing tips, and advice on navigating airports and customs. 

We also offer resources on cultural adaptation and safety tips for international travel. Our team is dedicated to ensuring you have a stress-free travel experience. 

From booking your flight to arriving at your destination, we are here to support you every step of the way.`,
    icon: <Plane className="w-6 h-6 text-gray-700" />,
    accentColor: "from-indigo-500/20 to-blue-500/20",
    image: "/ExpertiseSection/travel.webp"
  },
  {
    title: "Insurance",
    description: ` We offer insurance plans that cover medical emergencies, trip cancellations, and lost luggage. Our team helps you choose the right plan to ensure peace of mind while you study abroad. 

We also provide resources on understanding insurance policies and making claims. With our support, you can travel with confidence knowing you are protected against unforeseen events.`,
    icon: <HeartPulse className="w-6 h-6 text-gray-700" />,
    accentColor: "from-rose-500/20 to-pink-500/20",
    image: "/ExpertiseSection/insurance.webp"
  },
  {
    title: "Jobs",
    description: ` We help you build a strong resume, prepare for interviews, and connect with potential employers. Our goal is to help you secure a job that aligns with your career aspirations. 

We offer workshops on job search strategies, networking, and professional development. Our team also provides resources on work permits and visa requirements for international employment. 

With our support, you can achieve your career goals and succeed in the global job market.`,
    icon: <Briefcase className="w-6 h-6 text-gray-700" />,
    accentColor: "from-violet-500/20 to-purple-500/20",
    image: "/ExpertiseSection/job.webp"
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
interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  accentColor: string;
  image: string;
}

const StaticServiceCard = ({ service }: { service: Service }) => {
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