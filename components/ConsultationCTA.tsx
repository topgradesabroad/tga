import React, { type ReactElement } from "react";
import Link from "next/link";
import {
  FaUserTie,
  FaGraduationCap,
  FaUniversity,
  FaHome,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

// Simulate a server-side call to fetch CTA data
async function getCTAData(): Promise<{ heading: string; text: ReactElement }> {
  // Replace with your actual data fetching logic
  return {
    heading: "Unlock Your Future: 2024 Students Won Over $5M in Scholarships!",
    text: (
      <>
        Don’t wait another moment—{" "}
        <span className="text-purple-600 font-semibold">
          join our free, expert-guided program
        </span>{" "}
        and be the next success story. From counselling and admissions to education loans, accommodation, and job assistance, we’re here to power your dreams.
      </>
    ),
  };
}

// Async server component
const ConsultationCTA = async () => {
  const { heading, text } = await getCTAData();

  const services = [
    { name: "Counselling", icon: <FaUserTie className="text-indigo-600 w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Admissions", icon: <FaGraduationCap className="text-indigo-600 w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Education Loans", icon: <FaUniversity className="text-indigo-600 w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Accommodation", icon: <FaHome className="text-indigo-600 w-6 h-6 md:w-8 md:h-8" /> },
    { name: "Job Assistance", icon: <FaBriefcase className="text-indigo-600 w-6 h-6 md:w-8 md:h-8" /> },
  ];

  return (
    <section className="bg-amber-100 py-12 px-4 text-center">
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
        <p className="mt-4 text-base md:text-lg text-gray-700">{text}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.icon}
              <span className="mt-1 text-sm md:text-base font-medium text-gray-800">
                {service.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/consultation"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white text-base md:text-lg font-semibold py-2 px-6 md:py-3 md:px-10 rounded-full transition"
          >
            Book Your Free Consultation Now
            <FaRocket className="ml-2 w-4 h-4 md:w-5 md:h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
