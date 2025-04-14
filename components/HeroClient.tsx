'use client';

import { useState, useEffect, useRef } from 'react';

const slides = [
  {
    badge: "Discover Your Future",
    headline: "Make your study-abroad dream a reality in 2025.",
    highlightWords: {
      "study-abroad": "purple-600",
      "reality": "rose-500"
    },
    buttonText: "Book Free Consultation",
    buttonLink: "https://calendly.com/apply-topgradesabroad",
    buttonType: "external",
  },
  {
    badge: "Proven Success",
    headline: "90% of our students get selected for their dream universities.",
    highlightWords: {
      "90%": "rose-500",
      "dream universities": "purple-600"
    },
    buttonText: "Connect on Whatsapp",
    buttonLink: "https://wa.me/919660372374",
    buttonType: "external",
  },
  {
    badge: "Expert Advantage",
    headline: "Succeed with expert guidance and a global network.",
    highlightWords: {
      "expert guidance": "purple-600",
      "global network": "rose-500"
    },
    buttonText: "Ivy League Applications",
    buttonLink: "/ivy-league-applications",
    buttonType: "internal",
  },
];

// Pre-process the headlines to split them into segments for colored typing
const processedSlides = slides.map(slide => {
  const segments = [];
  let remainingHeadline = slide.headline;
  
  // Find all highlight words and their positions
  const positionMap: { word: string; position: number; colorClass: string; endPosition: number }[] = [];
  Object.entries(slide.highlightWords).forEach(([word, colorClass]) => {
    const position = remainingHeadline.indexOf(word);
    if (position !== -1) {
      positionMap.push({
        word,
        position,
        colorClass,
        endPosition: position + word.length
      });
    }
  });
  
  // Sort by position
  positionMap.sort((a, b) => a.position - b.position);
  
  // Create segments
  let lastEnd = 0;
  positionMap.forEach(item => {
    // Add text before the highlight word
    if (item.position > lastEnd) {
      segments.push({
        text: remainingHeadline.substring(lastEnd, item.position),
        color: null
      });
    }
    
    // Add the highlight word
    segments.push({
      text: item.word,
      color: item.colorClass
    });
    
    lastEnd = item.endPosition;
  });
  
  // Add any remaining text
  if (lastEnd < remainingHeadline.length) {
    segments.push({
      text: remainingHeadline.substring(lastEnd),
      color: null
    });
  }
  
  return {
    ...slide,
    segments
  };
});

export default function HeroClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Phases: slideIn → typewriter → visible → slideOut → pause
  const [phase, setPhase] = useState("slideIn");
  const [typedLength, setTypedLength] = useState(0);
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

  // Get full headline text length for current slide
  const getFullHeadlineLength = () => {
    return processedSlides[currentSlide].segments.reduce(
      (total, segment) => total + segment.text.length, 
      0
    );
  };

  // Typewriter effect: reveal headline text gradually.
  useEffect(() => {
    if (phase === "typewriter") {
      const fullLength = getFullHeadlineLength();
      
      if (typedLength < fullLength) {
        const timer = setTimeout(() => {
          setTypedLength(typedLength + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setPhase("visible"), 500);
        return () => clearTimeout(timer);
      }
    }
  }, [typedLength, phase, currentSlide]);

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
        setTypedLength(0);
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
  }, [typedLength, phase]);

  // Function to handle button clicks
  const handleButtonClick = () => {
    const currentLink = slides[currentSlide].buttonLink;
    const currentType = slides[currentSlide].buttonType;
    
    if (currentType === "external") {
      window.open(currentLink, "_blank");
    } else {
      window.location.href = currentLink;
    }
  };

  // Render headline with colored segments during typing
  const renderColoredTypedHeadline = () => {
    const segments = processedSlides[currentSlide].segments;
    let remainingChars = typedLength;
    let result = [];
    
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      
      // If we've used all characters, break
      if (remainingChars <= 0) break;
      
      // Calculate how many characters we can display from this segment
      const charsToDisplay = Math.min(remainingChars, segment.text.length);
      const displayText = segment.text.substring(0, charsToDisplay);
      
      // Add this segment to the result with appropriate styling
      if (segment.color) {
        result.push(
          <span key={i} className={`text-${segment.color}`}>
            {displayText}
          </span>
        );
      } else {
        result.push(displayText);
      }
      
      // Update remaining characters
      remainingChars -= charsToDisplay;
    }
    
    return result;
  };

  // Button styles for each slide
  const buttonStyles = [
    "bg-gradient-to-r from-purple-600 to-rose-500 hover:from-purple-700 hover:to-rose-600",
    "bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700",
    "bg-gradient-to-r from-purple-700 to-rose-400 hover:from-purple-800 hover:to-rose-500"
  ];

  return (
    <div key={`slide-${currentSlide}`} className="animate-slideInFromRight">
      {/* Badge */}
      <div className="mb-6">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-rose-100 border border-purple-200 shadow-sm">
          <span className={`h-2 w-2 rounded-full mr-2 ${currentSlide === 0 ? 'bg-purple-600' : currentSlide === 1 ? 'bg-rose-500' : 'bg-purple-700'}`}></span>
          <span className={`text-sm font-semibold ${currentSlide === 0 ? 'text-purple-700' : currentSlide === 1 ? 'text-rose-600' : 'text-purple-800'}`}>
            {slides[currentSlide].badge}
          </span>
        </div>
      </div>

      {/* Fixed headline area */}
      <div className="relative h-40 w-full md:h-64 overflow-hidden mb-6 bg-white flex items-start pt-8">
        {(phase === "typewriter" || phase === "visible" || phase === "slideOut") && (
          <h1
            ref={headlineRef}
            className={`text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 ${
              phase === "slideOut" ? "animate-slideOutDown" : ""
            }`}
            style={{ margin: 0 }}
          >
            {renderColoredTypedHeadline()}
            <span
              className="ml-1 inline-block"
              style={{
                width: "6px",
                height: cursorHeight,
                backgroundColor: currentSlide === 0 ? "#8b5cf6" : currentSlide === 1 ? "#f43f5e" : "#7e22ce",
                opacity: cursorVisible ? 1 : 0,
                verticalAlign: "middle",
              }}
            ></span>
          </h1>
        )}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <button 
          onClick={handleButtonClick}
          className={`px-6 py-3 ${buttonStyles[currentSlide]} text-white font-medium rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2`}
        >
          <span>{slides[currentSlide].buttonText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
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