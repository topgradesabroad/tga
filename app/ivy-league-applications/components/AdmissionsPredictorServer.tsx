// This is the server component file: app/admissions-predictor/page.tsx
'use client';
import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const AdmissionsPredictor = dynamic(
  () => import('./AdmissionsPredictor'),
  { ssr: false }
);

// Export metadata for better SEO
export const metadata: Metadata = {
  title: 'Ivy League Admissions Predictor | Your College Application Success Tool',
  description: 'Our advanced AI algorithm analyzes your profile against 50,000+ historical applications to provide accurate admission predictions with 93% accuracy rate.',
  keywords: 'college admissions, ivy league, application predictor, admission chances, university acceptance, undergraduate admissions, MBA admissions',
  openGraph: {
    title: 'Ivy League Admissions Predictor',
    description: 'Get personalized admission predictions for top universities based on your academic profile, extracurriculars, and achievements.',
  },
};

export default function AdmissionsPredictorServer() {
  return (
    <div className="min-h-screen bg-purple-700">
      {/* SEO-friendly server-rendered content */}
      <div className="hidden">
        <h1>Ivy League Admissions Predictor</h1>
        <p>
          Our advanced AI algorithm analyzes your profile against 50,000+ historical applications
          to provide accurate admission predictions with 93% accuracy rate.
        </p>
        <h2>Key Features</h2>
        <ul>
          <li>Predict your chances at top universities</li>
          <li>Personalized strength analysis</li>
          <li>Compare your profile to ideal candidates</li>
          <li>Get improvement suggestions</li>
          <li>Undergraduate and MBA program support</li>
        </ul>
        <h2>How It Works</h2>
        <p>
          Our predictor uses machine learning algorithms trained on historical admission data 
          to analyze your academic profile, extracurricular activities, essays strength, 
          and other factors to calculate your admission probability at various institutions.
        </p>
      </div>

      {/* Client-side interactive component */}
      <AdmissionsPredictor />
    </div>
  );
}