'use client';
// ServicesCarousel.jsx (Client Component)
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { 
  ArrowUpRight,
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import ServiceButton from './ServiceButton';

interface Service {
  image: string;
  title: string;
  description: string;
  descriptionLong: string;
  icon: React.ReactNode;
  accentColor: string;
  calendlyUrl: string; // Add this new property
}

interface ServicesCarouselProps {
  services: Service[];
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ services }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? services.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === services.length - 1 ? 0 : current + 1));
  };

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Automatic carousel
  useEffect(() => {
    if (!mounted) return;
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex, mounted]);

  // During SSR or before hydration, hide the client component
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0"
              onMouseEnter={stopAutoSlide}
              onMouseLeave={startAutoSlide}
            >
              <div className="bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/2 relative h-64 md:h-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-200">
                      <div className="relative w-full h-full">
                        <Image 
                          src={service.image} 
                          alt={service.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-1/2 p-6 md:p-8 relative">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-white shadow-sm mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                        {service.title}
                        <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </h3>
                    </div>
                    
                    <div className="mb-6 text-gray-600 whitespace-pre-line">
                      <div className="md:hidden">
                        {service.description}
                      </div>
                      <div className="hidden md:block">
                        {service.descriptionLong}
                      </div>
                    </div>
                    
                    <ServiceButton 
                      serviceTitle={service.title}
                      calendlyUrl={service.calendlyUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Previous service"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
        aria-label="Next service"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
      
      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === index ? 'bg-purple-600 w-6' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
