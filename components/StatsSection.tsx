'use client';

import React from 'react';
import { Users, BookOpen, GraduationCap, Globe, CheckCircle } from 'lucide-react';

const statsData = [
  {
    icon: Users,
    number: "10",
    text: "Years Experience",
    color: "#8B5CF6" // Purple
  },
  {
    icon: BookOpen,
    number: "10,000+",
    text: "Courses",
    color: "#EC4899" // Rose
  },
  {
    icon: GraduationCap,
    number: "3000+",
    text: "Happy Students",
    color: "#8B5CF6" // Purple
  },
  {
    icon: Globe,
    number: "12",
    text: "Countries Served",
    color: "#EC4899" // Rose
  },
  {
    icon: CheckCircle,
    number: "100%",
    text: "Visa Success",
    color: "#8B5CF6" // Purple
  }
];

const ImpactStats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 max-w-2xl mx-auto">
            Your Successful Career Begins With Our Proven Expertise
          </h2>
          <p className="text-lg md:text-md text-purple-600 font-medium">
            Trusted by thousands of students worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="group">
                <div className="relative p-0.5 rounded-2xl overflow-hidden">
                  {/* Gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-rose-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Card content with white background */}
                  <div className="relative bg-white rounded-xl p-8 flex flex-col items-center h-full z-10">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-50 group-hover:scale-110 transition-all duration-300"
                        style={{ boxShadow: `0 0 0 8px ${stat.color}05` }}
                      >
                        <Icon 
                          className="w-7 h-7 transition-all duration-300" 
                          style={{ color: stat.color }}
                        />
                      </div>
                      <div 
                        className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"
                        style={{ background: stat.color }}
                      />
                    </div>
                    
                    {/* Number */}
                    <h3 
                      className="text-3xl font-bold mb-3 tracking-tight transition-all duration-300"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </h3>
                    
                    {/* Text */}
                    <p className="text-indigo-700 text-center font-medium text-md">
                      {stat.text}
                    </p>
                  </div>
                </div>
                
                {/* Card shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;