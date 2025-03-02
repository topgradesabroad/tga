'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    badge: "Discover Your Future",
    headline: "Make your study-abroad dream a reality in 2025.",
    buttonText: "Book Free Consultation",
  },
  {
    badge: "Proven Success",
    headline: "90% of our students get selected for their dream universities.",
    buttonText: "Connect on Whatsapp",
  },
  {
    badge: "Expert Advantage",
    headline: "Succeed with expert guidance and a global network.",
    buttonText: "Explore Courses",
  },
];

export default function HeroClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Phases: slideIn → typewriter → visible → slideOut → pause
  const [phase, setPhase] = useState("slideIn");
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorHeight, setCursorHeight] = useState("1em");
  const headlineRef = useRef(null);

  // After slide-in, start the typewriter effect.
  useEffect(() => {
    if (phase === "slideIn") {
      const timer = setTimeout(() => setPhase("typewriter"), 500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Typewriter effect: reveal headline text gradually.
  useEffect(() => {
    if (phase === "typewriter") {
      const currentHeadline = slides[currentSlide].headline;
      if (displayText.length < currentHeadline.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentHeadline.substring(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("visible"), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [displayText, phase, currentSlide]);

  // Keep headline visible for a short duration.
  useEffect(() => {
    if (phase === "visible") {
      const timer = setTimeout(() => setPhase("slideOut"), 2000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Slide-out the headline.
  useEffect(() => {
    if (phase === "slideOut") {
      const timer = setTimeout(() => setPhase("pause"), 500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Pause before moving to the next slide.
  useEffect(() => {
    if (phase === "pause") {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setDisplayText("");
        setPhase("slideIn");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  // Blinking cursor effect.
  useEffect(() => {
    const cursorInterval = setInterval(() => setCursorVisible((prev) => !prev), 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Set the cursor's height based on the computed line-height.
  useEffect(() => {
    if (headlineRef.current) {
      const computedStyle = window.getComputedStyle(headlineRef.current);
      let lineHeight = computedStyle.lineHeight;
      if (lineHeight === "normal") {
        lineHeight = "1em";
      }
      setCursorHeight(lineHeight);
    }
  }, [displayText, phase]);

  return (
    <div key={`slide-${currentSlide}`} className="animate-slideInFromRight">
      {/* Badge */}
      <div className="mb-4">
        <div className="flex items-center">
          <span className="w-6 h-0.5 bg-indigo-600 inline-block mr-2"></span>
          <span className="text-indigo-600 text-md font-medium">
            {slides[currentSlide].badge}
          </span>
        </div>
      </div>

      {/* Fixed headline area */}
      <div className="relative h-64 w-full overflow-hidden mb-4 bg-white flex items-start pt-8">
        {(phase === "typewriter" || phase === "visible" || phase === "slideOut") && (
          <h1
            ref={headlineRef}
            className={`text-3xl md:text-6xl lg:text-7xl font-bold text-black leading-tight ${
              phase === "slideOut" ? "animate-slideOutDown" : ""
            }`}
            style={{ margin: 0 }}
          >
            {displayText}
            <span
              className="ml-1 inline-block"
              style={{
                width: "6px",
                height: cursorHeight,
                backgroundColor: "indigo",
                opacity: cursorVisible ? 1 : 0,
                verticalAlign: "middle",
              }}
            ></span>
          </h1>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-4">
        <button className="px-4 py-2 bg-purple-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-md">
          {slides[currentSlide].buttonText}
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            transform: translateX(200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideInFromRight {
          animation: slideInFromRight 0.5s ease-out forwards;
        }
        @keyframes slideOutDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .animate-slideOutDown {
          animation: slideOutDown 0.5s ease-in forwards;
        }
      `}</style>
    </div>
  );
}
