import React from 'react';

interface ThankYouMessageProps {
  onClose: () => void;
}

const ThankYouMessage = ({ onClose }: ThankYouMessageProps) => {
  return (
    <div className="text-center p-6 space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-rose-600 mb-4">Thank You for Your Interest!</h2>
      <div className="space-y-4 text-gray-700">
        <p>Your application has been successfully submitted to Top Grades Abroad.</p>
        <p>Our dedicated counseling team will review your details and contact you within 24 hours to guide you through the next steps of your educational journey.</p>
        <p className="font-semibold">Your dreams of studying at a prestigious university are now one step closer to reality!</p>
      </div>
      <button
        onClick={onClose}
        className="mt-6 px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-300"
      >
        Close
      </button>
    </div>
  );
};

export default ThankYouMessage;