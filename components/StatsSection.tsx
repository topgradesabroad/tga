// components/ImpactStats.tsx
import React from 'react';
import { Users, BookOpen, GraduationCap, Globe, CheckCircle } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    number: "10",
    text: "Years Experience",
    color: "#3B82F6"
  },
  {
    icon: BookOpen,
    number: "10,000+",
    text: "Courses To Choose From",
    color: "#10B981"
  },
  {
    icon: GraduationCap,
    number: "5000+",
    text: "Happy Students",
    color: "#F59E0B"
  },
  {
    icon: Globe,
    number: "12",
    text: "Countries Served",
    color: "#8B5CF6"
  },
  {
    icon: CheckCircle,
    number: "100%",
    text: "Visa Success",
    color: "#EC4899"
  }
];

export const metadata = {
    title: 'Study Abroad Consultancy',
    description:
      'Trusted study abroad consultancy with proven expertise helping thousands of students worldwide.'
  };


const ImpactStats: React.FC = () => {
  return (
    <section className="pt-12 md:py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 max-w-2xl mx-auto">
            Your Successful Career Begins With Our Proven Expertise
            <span className="block mt-4 text-lg md:text-md text-purple-600 font-normal">
              Trusted by thousands of students worldwide
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-xs mx-auto md:max-w-none">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="relative">
                <div className="h-full p-6 bg-white rounded-xl border border-gray-200 transition-all duration-300 shadow-sm flex flex-col items-center">
                  <div className="mb-6 w-full flex justify-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gray-100/50">
                      <Icon className="w-8 h-8" style={{ color: stat.color }} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {stat.text}
                  </p>
                  <div className="w-12 h-1 bg-gray-300 rounded-full mt-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
