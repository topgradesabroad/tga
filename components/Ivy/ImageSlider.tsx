"use client";
import React, { useEffect, useState } from "react";

const images = [
  "/ExpertiseSection/loan.webp",
  "/ExpertiseSection/job.webp",
  "/ExpertiseSection/counselling.webp",
  "/ExpertiseSection/test.webp"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full">
      <img 
        src={images[current]} 
        alt={`Slide ${current + 1}`} 
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
  );
};

export default ImageSlider;
