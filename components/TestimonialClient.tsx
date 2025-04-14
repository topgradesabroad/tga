// components/TestimonialSectionClient.tsx
'use client';
import React, { useState } from 'react';
import { GraduationCap, BookOpen, Quote, Sparkles } from 'lucide-react';
import { Testimonial } from './TestimonialSection';

interface TestimonialSectionClientProps {
  testimonials: Testimonial[];
}

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:-translate-y-1 transition-transform duration-300 relative">
    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
      <Sparkles className="w-4 h-4 text-purple-400" />
    </div>

    <div className="relative">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center">
        <GraduationCap className="w-6 h-6 text-white" />
      </div>
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-24 h-24 rounded-xl object-cover mx-auto mb-4 ring-4 ring-purple-50"
      />
    </div>

    <div className="text-center mb-4">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
      <div className="flex items-center justify-center space-x-2 text-purple-600 mb-1">
        <BookOpen className="w-4 h-4" />
        <span className="font-medium text-sm">{testimonial.course}</span>
      </div>
      <p className="text-gray-600 text-sm">{testimonial.university}</p>
      <p className="text-sm text-gray-500">Class of {testimonial.year}</p>
    </div>

    <div className="relative">
      <Quote className="w-6 h-6 text-purple-200 absolute -top-2 -left-2" />
      <p className="text-gray-600 italic leading-relaxed text-sm">
        {testimonial.quote}
      </p>
    </div>
  </div>
);

const TestimonialSectionClient: React.FC<TestimonialSectionClientProps> = ({ testimonials }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / itemsPerPage);
  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      {/* Static Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -right-8 top-1/4 w-24 h-24 bg-pink-100 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Student Success Stories
          </h2>
          <p className="text-purple-600 text-lg max-w-3xl mx-auto">
            Hear from our talented students about their learning journey and how they're achieving their academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination Navigation */}
        <div className="flex justify-center mt-10">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`mx-1 transition-all duration-300 ${
                index === currentPage
                  ? 'w-8 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-purple-200 hover:bg-purple-300'
              } rounded-full`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSectionClient;
