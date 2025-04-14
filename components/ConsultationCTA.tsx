import React, { type ReactElement } from "react";
import Link from "next/link";
import {
  FaUserTie,
  FaGraduationCap,
  FaUniversity,
  FaHome,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

// Simulate a server-side call to fetch CTA data
async function getCTAData(): Promise<{ heading: string; text: ReactElement }> {
  // Replace with your actual data fetching logic
  return {
    heading: "Unlock Your Future: 2024 Students Won Over $5M in Scholarships!",
    text: (
      <>
        Don't wait another moment—{" "}
        <span className="text-rose-600 font-semibold">
          join our free, expert-guided program
        </span>{" "}
        and be the next success story. From counselling and admissions to education loans, accommodation, and job assistance, we're here to power your dreams.
      </>
    ),
  };
}

// Async server component
const ConsultationCTA = async () => {
  const { heading, text } = await getCTAData();

  const services = [
    { name: "Counselling", icon: <FaUserTie className="text-purple-600 w-5 h-5" /> },
    { name: "Admissions", icon: <FaGraduationCap className="text-purple-600 w-5 h-5" /> },
    { name: "Education Loans", icon: <FaUniversity className="text-purple-600 w-5 h-5" /> },
    { name: "Accommodation", icon: <FaHome className="text-purple-600 w-5 h-5" /> },
    { name: "Job Assistance", icon: <FaBriefcase className="text-purple-600 w-5 h-5" /> },
  ];

  return (
    <section className="bg-gradient-to-br from-purple-50 to-rose-50 py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Left purple accent */}
            <div className="hidden md:block w-16 bg-gradient-to-b from-purple-600 to-rose-500">
              <div className="h-full flex items-center justify-center">
                <div className="text-white rotate-90 transform origin-center text-xl font-bold tracking-wider whitespace-nowrap">
                  SUCCESS AWAITS
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left bg-gradient-to-r from-purple-700 to-rose-600 bg-clip-text text-transparent">
                {heading}
              </h2>
              
              <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
                {text}
              </p>

              {/* Services with horizontal layout */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors duration-300"
                  >
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      {service.icon}
                    </div>
                    <span className="mt-2 text-sm font-medium text-gray-800 text-center">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="https://calendly.com/apply-topgradesabroad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600 text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Book Your Free Consultation</span>
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;