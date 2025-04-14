'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AdmissionsPredictorServer from './components/AdmissionsPredictorServer';

// Component for the hero section badge
const Badge = ({ text }: { text: string }) => (
  <div className="bg-gradient-to-r from-purple-200 to-rose-200 text-purple-800 text-xs font-medium px-4 py-1.5 rounded-full mb-6 inline-block">
    {text}
  </div>
);

// Component for buttons with hover animation
const Button = ({
  primary = false,
  text,
  onClick
}: {
  primary?: boolean;
  text: string;
  onClick?: () => void;
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    className={`px-7 py-3 rounded-lg font-medium transition-all shadow-md ${
      primary
        ? 'bg-gradient-to-r from-purple-600 to-rose-600 text-white hover:from-purple-700 hover:to-rose-700'
        : 'bg-white text-purple-700 border border-purple-300 hover:border-purple-500 hover:bg-purple-50'
    }`}
  >
    {text}
  </motion.button>
);

const HeroSection: React.FC = () => {
  const scrollToAdmissionsPredictor = () => {
    const element = document.getElementById('admissions-predictor');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-b from-purple-50 to-rose-50 py-24 px-4 relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <Badge text="Ivy League Excellence" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
          Your Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-rose-600">Ivy League</span> Success Begins Here
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Get personalized guidance from experts who've helped students gain admission to all 8 Ivy League universities. Our proven strategies increase your chances by up to 3x.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Button primary text="Predict My Chances" onClick={scrollToAdmissionsPredictor} />
          <Button text="Book Consultation" onClick={() => window.open('https://calendly.com/apply-topgradesabroad', '_blank')}/> 
        </div>
      </div>
      {/* Ensure no overlapping elements */}
      <div className="absolute inset-0 pointer-events-none"></div>
    </section>
  );
};



// University Card Component with hover effect
const UniversityCard = ({ 
  name, 
  location, 
  acceptanceRate, 
  imgSrc 
}: { 
  name: string; 
  location: string; 
  acceptanceRate: string; 
  imgSrc: string;
}) => (
  <motion.div 
    whileHover={{ y: -7 }}
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
  >
    <div className="relative h-52 w-full">
      <Image 
        src={imgSrc} 
        alt={name} 
        layout="fill" 
        objectFit="cover" 
        className="transition-transform duration-700 ease-in-out hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-200 text-sm">{location}</p>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-indigo-800">Acceptance Rate</span>
        <span className="text-sm font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-700">{acceptanceRate}</span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">Known for excellence in <span className="font-medium text-gray-800">research, innovation, and preparing future leaders</span>.</p>
      </div>
    </div>
  </motion.div>
);

// Blog Post Card Component with hover effect
const BlogPostCard = ({ 
  title, 
  excerpt, 
  imgSrc, 
  url,
  readTime
}: { 
  title: string; 
  excerpt: string; 
  imgSrc: string; 
  url: string;
  readTime: string;
}) => (
  <motion.div
    whileHover={{ y: -7 }}
  >
    <Link href={url} legacyBehavior>
      <a className="block group">
        <div className="rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-all border border-gray-100">
          <div className="relative h-52 w-full">
            <Image 
              src={imgSrc} 
              alt={title} 
              layout="fill" 
              objectFit="cover" 
              className="transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4">
              <span className="text-xs font-medium text-white bg-indigo-600/80 px-3 py-1 rounded-full">{readTime}</span>
            </div>
          </div>
          <div className="p-6 bg-white">
            <h3 className="text-lg font-bold group-hover:text-indigo-700 transition-colors text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{excerpt}</p>
            <div className="mt-4 text-indigo-600 font-medium text-sm flex items-center">
              Read more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </Link>
  </motion.div>
);

// Testimonial Card Component
const TestimonialCard = ({
  quote,
  name,
  school,
  imgSrc
}: {
  quote: string;
  name: string;
  school: string;
  imgSrc: string;
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
    <div className="absolute -top-5 left-8 text-indigo-600 text-5xl">"</div>
    <p className="text-gray-700 italic leading-relaxed mb-6 pt-4">{quote}</p>
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        <Image src={imgSrc} alt={name} width={48} height={48} objectFit="cover" />
      </div>
      <div>
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-indigo-600 text-sm">Accepted to {school}</p>
      </div>
    </div>
  </div>
);

// Timeline Item Component
const TimelineItem = ({
  month,
  title,
  description
}: {
  month: string;
  title: string;
  description: string;
}) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="w-px h-full bg-indigo-200"></div>
      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold z-10">
        {month}
      </div>
    </div>
    <div className="pb-12">
      <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);


// Main Ivy League Page Component
const IvyLeaguePage: React.FC = () => {
  // Universities Data
  const universities = [
    {
      name: "Harvard University",
      location: "Cambridge, MA",
      acceptanceRate: "3.2% (2025)",
      imgSrc: "/universities/harvard.jpg"
    },
    {
      name: "Yale University",
      location: "New Haven, CT",
      acceptanceRate: "4.5% (2025)",
      imgSrc: "/universities/brown.jpg"
    },
    {
      name: "Princeton University",
      location: "Princeton, NJ",
      acceptanceRate: "3.8% (2025)",
      imgSrc: "/universities/mit.jpg"
    },
    {
      name: "Columbia University",
      location: "New York, NY",
      acceptanceRate: "3.9% (2025)",
      imgSrc: "/universities/stanford.jpg"
    },
    {
      name: "Brown University",
      location: "Providence, RI",
      acceptanceRate: "5.1% (2025)",
      imgSrc: "/universities/stanford.jpg"
    },
    {
      name: "University of Pennsylvania",
      location: "Philadelphia, PA",
      acceptanceRate: "4.9% (2025)",
      imgSrc: "/universities/mit.jpg"
    },
    {
      name: "Dartmouth College",
      location: "Hanover, NH",
      acceptanceRate: "6.2% (2025)",
      imgSrc: "/universities/brown.jpg"
    },
    {
      name: "Cornell University",
      location: "Ithaca, NY",
      acceptanceRate: "7.1% (2025)",
      imgSrc: "/universities/harvard.jpg"
    }
  ];

  

  // Blog Posts Data
  const blogPosts = [
    {
      title: "The Hidden Factors in Ivy League Admissions Decisions",
      excerpt: "Beyond grades and test scores: discover the subtle elements that can make or break your application in the eyes of admission committees.",
      imgSrc: "/images/blog-mistakes.jpg",
      url: "/blog/ivy-league-application-mistakes",
      readTime: "8 min read"
    },
    {
      title: "Crafting Your Personal Narrative: The Art of the Ivy League Essay",
      excerpt: "How to write compelling essays that showcase your authentic voice while addressing what admission officers are truly looking for.",
      imgSrc: "/images/blog-essays.jpg",
      url: "/blog/ivy-league-essay-tips",
      readTime: "10 min read"
    },
    {
      title: "Early Decision vs. Regular Decision: Strategic Approaches for Ivy Applicants",
      excerpt: "A data-driven analysis of application timing strategies and how to position yourself for maximum success.",
      imgSrc: "/images/blog-stats.jpg",
      url: "/blog/ivy-league-admission-statistics",
      readTime: "7 min read"
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Working with this consultancy transformed my application. Their personalized guidance helped me showcase my unique strengths in ways I never would have thought of on my own.",
      name: "Sophia Chen",
      school: "Harvard University",
      imgSrc: "/images/testimonial-1.jpg"
    },
    {
      quote: "The essay development process was invaluable. My consultant helped me find my authentic voice while addressing exactly what Yale was looking for in their applicants.",
      name: "Marcus Johnson",
      school: "Yale University",
      imgSrc: "/images/testimonial-2.jpg"
    },
    {
      quote: "As a first-generation college student, I had no idea how to approach Ivy League applications. This team provided the guidance I needed to gain acceptance to my dream school.",
      name: "Leila Patel",
      school: "Princeton University",
      imgSrc: "/images/testimonial-3.jpg"
    }
  ];

  // Timeline Data
  const timelineItems = [
    {
      month: "Aug",
      title: "Strategy Development & School Selection",
      description: "Create your personalized application roadmap and finalize your balanced school list with safety, target, and reach schools."
    },
    {
      month: "Sep",
      title: "Essays & Personal Statement Development",
      description: "Brainstorm, outline, and draft your Common App personal statement and supplemental essays with expert guidance."
    },
    {
      month: "Oct",
      title: "Early Decision/Early Action Submissions",
      description: "Finalize and submit applications for Early Decision and Early Action deadlines with comprehensive review."
    },
    {
      month: "Nov",
      title: "Interview Preparation",
      description: "Practice with mock interviews and receive personalized feedback to help you showcase your strengths effectively."
    },
    {
      month: "Dec",
      title: "Regular Decision Application Refinement",
      description: "Optimize remaining applications based on early application experiences and outcomes."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-rose-50">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Overview Section with Modern Design */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Ivy League Advantage</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              An unparalleled educational experience combining academic excellence, powerful networks, and life-changing opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-purple-100 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">World-Class Education</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">5:1 student-faculty ratio with 73% of classes under 20 students</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">$45+ billion in combined endowments funding world-class facilities</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Cutting-edge research opportunities for undergraduates</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-rose-100 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Exceptional Career Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">96% job placement rate within 6 months of graduation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Average starting salary of $82,400 across all industries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-rose-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Preferential recruitment by top global employers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Powerful Alumni Network</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Over 1.5 million combined Ivy League alumni worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">64 Nobel laureates, 450+ CEOs of Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Lifetime access to mentorship and career opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Chance Calculator Section */}
      <section id="admissions-predictor" className="py-20 bg-purple-700">
        
        
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white font-bold mb-4">Calculate Your Ivy League Admission Chances</h2>
            <p className="text-white max-w-2xl mx-auto">
              Our advanced algorithm uses real admission data to estimate your likelihood of acceptance at each Ivy League school.
            </p>
          </div>
          <div  className="bg-rose-200">
            <AdmissionsPredictorServer />
          </div>
        
      </section>
      
      {/* Universities Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge text="The Ivy League" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Prestigious Institutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The eight Ivy League schools represent the pinnacle of academic excellence and prestige in higher education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>
        </div>
      </section>
      
      
      
      {/* Premium Admissions Packages Section */}
<section className="py-20 bg-gradient-to-b from-purple-50 to-rose-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="bg-gradient-to-r from-purple-200 to-rose-200 text-purple-800 text-xs font-medium px-4 py-1.5 rounded-full mb-6 inline-block">
        Ivy League Packages
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Premium Admissions Packages</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Tailored solutions to maximize your chances of Ivy League success. Our expert consultants have helped hundreds of students secure admissions to top universities.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Complete Application Guidance */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all flex flex-col h-full">
        <div className="flex-1">
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-purple-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Application Guidance</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive support for every step of your Ivy League application journey, from strategy to submission.
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">6-8 months of personalized guidance with dedicated consultant</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Development of personalized application strategy</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">College selection guidance (8-10 schools)</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Unlimited essay reviews and editing (Common App + supplements)</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Extracurricular profile development and positioning</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">3 mock interviews with feedback</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Assistance with recommendation letters</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Application review and final submission strategy</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-auto pt-6 border-t border-gray-100">
          <div className="text-4xl font-extrabold text-purple-600 mb-2">₹1,50,000</div>
          <p className="text-sm text-gray-500 mb-6">All-inclusive package</p>
          <a
            href="https://calendly.com/apply-topgradesabroad"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-rose-600 text-white text-center py-3 rounded-lg font-medium hover:from-purple-700 hover:to-rose-700 transition-all"
          >
            Book 30-Min Free Consultation
          </a>
        </div>
      </div>

      {/* Essay Review */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-rose-100 hover:shadow-xl transition-all flex flex-col h-full relative">
        <div className="absolute -top-4 left-0 right-0 mx-auto w-max">
          <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
            Most Popular
          </div>
        </div>
        
        <div className="flex-1">
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-rose-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Essay Review</h3>
            <p className="text-gray-600 mb-6">
              Expert feedback and guidance to craft compelling essays that showcase your unique strengths and story.
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Essay brainstorming sessions (2 sessions of 1 hour each)</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Personal narrative development</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Common App essay (650 words) with unlimited revisions</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Up to 4 supplemental essays for one university</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Detailed written feedback on each draft</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Style, grammar, and structure review</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-rose-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">48-hour turnaround on all drafts</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-auto pt-6 border-t border-gray-100">
          <div className="text-4xl font-extrabold text-rose-600 mb-2">₹45,000</div>
          <p className="text-sm text-gray-500 mb-6">Per application</p>
          <a
            href="https://calendly.com/apply-topgradesabroad"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-rose-600 text-white text-center py-3 rounded-lg font-medium hover:from-purple-700 hover:to-rose-700 transition-all"
          >
            Book 30-Min Free Consultation
          </a>
        </div>
      </div>

      {/* Application Review */}
      <div className="bg-white p-8 rounded-xl shadow-lg border border-purple-100 hover:shadow-xl transition-all flex flex-col h-full">
        <div className="flex-1">
          <div className="text-center mb-6">
            <div className="inline-block p-3 rounded-full bg-purple-100 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Review</h3>
            <p className="text-gray-600 mb-6">
              Comprehensive evaluation of your application to ensure it stands out to Ivy League admissions committees.
            </p>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Complete review of one university application</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Evaluation of Common App profile and activities list</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">One round of detailed feedback on essays</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Review of extracurricular presentation</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Assessment of application strengths and weaknesses</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">Recommendations for improvements</p>
            </div>
            <div className="flex items-start">
              <svg className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">90-minute consultation to discuss findings</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-auto pt-6 border-t border-gray-100">
          <div className="text-4xl font-extrabold text-purple-600 mb-2">₹35,000</div>
          <p className="text-sm text-gray-500 mb-6">Per application</p>
          <a
            href="https://calendly.com/apply-topgradesabroad"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-purple-600 to-rose-600 text-white text-center py-3 rounded-lg font-medium hover:from-purple-700 hover:to-rose-700 transition-all"
          >
            Book 30-Min Free Consultation
          </a>
        </div>
      </div>
    </div>

    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-4">Not sure which package is right for you? Contact us for a personalized recommendation.</p>
      <a
            href="https://calendly.com/apply-topgradesabroad"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray=900 text-center py-3 rounded-lg font-medium hover:from-purple-700 hover:to-rose-700 transition-all"
          >
        Get in touch
        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
      
      {/* Testimonials Section with Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge text="Success Stories" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">From Our Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who achieved their dreams of attending Ivy League universities with our guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <Badge text="Application Timeline" />
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Your Roadmap to Ivy League Success</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Follow our step-by-step timeline to stay on track and maximize your chances of admission.
      </p>
    </div>

    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-rose-500 h-full"></div>

      <div className="space-y-12">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            {/* Timeline Content */}
            <div
              className={`w-full md:w-1/2 p-6 bg-white rounded-xl shadow-lg border ${
                index % 2 === 0
                  ? 'border-purple-100'
                  : 'border-rose-100'
              }`}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>

            {/* Timeline Marker */}
            <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-rose-500 rounded-full shadow-lg mx-6">
              <span className="text-white font-bold text-lg">{item.month}</span>
              <div className="absolute inset-0 animate-ping bg-gradient-to-r from-purple-500 to-rose-500 rounded-full opacity-30"></div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center mt-16">
      <Button primary text="Download Full Timeline" />
    </div>
  </div>
</section>
      
      
      
      {/* Blog Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge text="Admissions Insights" />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Latest from Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert advice, insider tips, and strategic guidance for your Ivy League journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button text="View All Articles" />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/ivy-pattern-bg.jpg" 
            alt="Background pattern" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Ivy League Journey?</h2>
              <p className="text-indigo-200 max-w-xl">
                Take the first step toward your dream school with a free consultation with our admissions experts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button primary text="Book Free Consultation" />
              <Button text="Learn About Our Process" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">IvyPrep</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner in navigating the complex Ivy League admissions process.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Application Strategy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Essay Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Prep</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">School Selection</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Scholarship Guidance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Admissions Calculator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Ivy League Stats</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">info@ivyprep.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">(800) 555-1234</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-400 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-400">123 Ivy Lane<br />Cambridge, MA 02138</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 IvyPrep. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IvyLeaguePage;