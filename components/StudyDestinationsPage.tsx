import React from 'react';
import WorldMap from './WorldMap';

const StudyDestinationsPage: React.FC = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">
        Explore Study Destinations
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Click on the markers to learn more about each study destination. 
        Discover universities, student populations, and average costs.
      </p>
      <div className="w-full">
        <WorldMap />
      </div>
    </section>
  );
};

export default StudyDestinationsPage;