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
    description: "Expert guidance for course selection and university admissions, with personalized support throughout your journey.",
    descriptionLong: `Our experienced counselors will help you choose the right course and university, ensuring you make informed decisions. We provide continuous support from the initial consultation to your final acceptance. 

Our team is dedicated to understanding your aspirations and helping you achieve your academic goals. We offer one-on-one sessions, workshops, and resources to help you navigate the complexities of studying abroad.`,
    icon: <Users className="w-6 h-6 text-gray-700" />,
    accentColor: "from-blue-500/20 to-violet-500/20",
    image: "/ExpertiseSection/counselling.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Test Prep",
    description: "Comprehensive test preparation with expert instructors, practice tests, and proven strategies.",
    descriptionLong: `Our test prep courses are designed to help you achieve the highest scores. We offer interactive classes, mock tests, and one-on-one tutoring to ensure you are fully prepared for your exams. 

Our experienced instructors provide tips and strategies to tackle each section of the test. We also offer flexible schedules and online resources to fit your busy lifestyle.`,
    icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    accentColor: "from-purple-500/20 to-pink-500/20",
    image: "/ExpertiseSection/test.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Admissions",
    description: "Professional assistance with applications, personal statements, and interview preparation.",
    descriptionLong: `We help you craft compelling personal statements, gather strong recommendation letters, and prepare for interviews. Our goal is to make your application stand out. 

We provide insights into what top universities are looking for and help you highlight your strengths. Our team also offers mock interviews and feedback sessions to ensure you are well-prepared.`,
    icon: <GraduationCap className="w-6 h-6 text-gray-700" />,
    accentColor: "from-pink-500/20 to-rose-500/20",
    image: "/ExpertiseSection/admission.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Education Loan",
    description: "Simplified loan application process with competitive rates and flexible repayment options.",
    descriptionLong: `We guide you through the loan application process, helping you understand the terms and conditions. Our aim is to make education affordable and accessible. 

We work with reputable financial institutions to offer you the best loan options. Our team provides personalized financial counseling to help you plan your budget and manage your expenses.`,
    icon: <Landmark className="w-6 h-6 text-gray-700" />,
    accentColor: "from-amber-500/20 to-orange-500/20",
    image: "/ExpertiseSection/loan.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Visa Help",
    description: "Expert guidance through visa application process with updated regulation support.",
    descriptionLong: `We provide detailed instructions and support to help you gather the necessary documents. Our experts stay updated on visa regulations to ensure a smooth application process. 

We offer personalized consultations to address your specific visa needs and concerns. Our team also provides resources and workshops on visa requirements and procedures.`,
    icon: <Stamp className="w-6 h-6 text-gray-700" />,
    accentColor: "from-emerald-500/20 to-teal-500/20",
    image: "/ExpertiseSection/visa.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Housing",
    description: "Safe and comfortable accommodation options to suit your budget and preferences.",
    descriptionLong: `We help you find safe and comfortable housing that fits your budget. Our team provides information on local amenities and transportation to make your stay enjoyable. 

We offer a range of housing options, from dormitories to private apartments, to suit your preferences. Our team also provides tips on adjusting to your new environment.`,
    icon: <Home className="w-6 h-6 text-gray-700" />,
    accentColor: "from-cyan-500/20 to-sky-500/20",
    image: "/ExpertiseSection/room.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Travel",
    description: "Comprehensive travel planning with best flight deals and pre-departure support.",
    descriptionLong: `We help you find the best flight deals and prepare for your trip. Our services include travel insurance, packing tips, and advice on navigating airports and customs. 

We also offer resources on cultural adaptation and safety tips for international travel. Our team is dedicated to ensuring you have a stress-free travel experience.`,
    icon: <Plane className="w-6 h-6 text-gray-700" />,
    accentColor: "from-indigo-500/20 to-blue-500/20",
    image: "/ExpertiseSection/travel.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Insurance",
    description: "Complete coverage for medical emergencies and travel-related incidents.",
    descriptionLong: `We offer insurance plans that cover medical emergencies, trip cancellations, and lost luggage. Our team helps you choose the right plan to ensure peace of mind while you study abroad. 

We also provide resources on understanding insurance policies and making claims. With our support, you can travel with confidence knowing you are protected.`,
    icon: <HeartPulse className="w-6 h-6 text-gray-700" />,
    accentColor: "from-rose-500/20 to-pink-500/20",
    image: "/ExpertiseSection/insurance.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
  },
  {
    title: "Jobs",
    description: "Career guidance and job placement support for international opportunities.",
    descriptionLong: `We help you build a strong resume, prepare for interviews, and connect with potential employers. Our goal is to help you secure a job that aligns with your career aspirations. 

We offer workshops on job search strategies, networking, and professional development. Our team also provides resources on work permits and visa requirements.`,
    icon: <Briefcase className="w-6 h-6 text-gray-700" />,
    accentColor: "from-violet-500/20 to-purple-500/20",
    image: "/ExpertiseSection/job.webp",
    calendlyUrl: "https://calendly.com/apply-topgradesabroad"
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

          <ServicesCarousel services={services} />
        </div>
      </section>
    </>
  );
};

export default ExpertiseSection;