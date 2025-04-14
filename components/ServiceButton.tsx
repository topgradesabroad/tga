import React from 'react';

interface ServiceButtonProps {
  serviceTitle: string;
  calendlyUrl: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ serviceTitle, calendlyUrl }) => {
    const getButtonText = (title: string): string => {
        // Add console log to debug the incoming title
        console.log('Service Title:', title);
        const lowerCaseTitle = title.toLowerCase();
        console.log('Lowercase Title:', lowerCaseTitle);
        
        switch (lowerCaseTitle) {
          case 'counseling':
          case 'counselling':
            return 'Get Free Counselling';
          case 'admission':
          case 'admissions':
            return 'Start Your Application';
          case 'visa assistance':
          case 'visa':
            return 'Get Visa Guidance';
          case 'test preparation':
          case 'test prep':
            return 'Begin Test Prep Journey';
          case 'housing':
          case 'accommodation':
            return 'Find Your Stay';
          case 'jobs':
          case 'job':
            return 'Plan Your Career';
          case 'education loan':
          case 'finance':
            return 'Explore Financial Options';
          case 'visa help':
          case 'documents':
            return 'Get Visa Help';
          default:
            console.log('No match found, using default text');
            return 'Book Free Consultation';
        }
    };

  const handleClick = () => {
    if (calendlyUrl) {
      window.open(calendlyUrl, '_blank');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="mt-16 px-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg 
                 transition-all duration-300 flex items-center space-x-2 group"
    >
      <span>{getButtonText(serviceTitle)}</span>
      <svg 
        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default ServiceButton;