"use client";
import React from "react";
import { countryOptions } from "./data";

interface StepOtherDetailsProps {
  details: {
    name: string;
    email: string;
    phone: string;
    countryPreference: string;
  };
  updateData: (data: Partial<StepOtherDetailsProps["details"]>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepOtherDetails: React.FC<StepOtherDetailsProps> = ({ details, updateData, nextStep, prevStep }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-center">Personal Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <input 
          type="text" 
          name="name" 
          value={details.name} 
          onChange={handleChange} 
          placeholder="Full Name" 
          className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          type="email" 
          name="email" 
          value={details.email} 
          onChange={handleChange}
          placeholder="Email" 
          className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500" 
        />
        <input 
          type="tel" 
          name="phone" 
          value={details.phone} 
          onChange={handleChange} 
          placeholder="Phone Number" 
          className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500" 
        />
        <select 
          name="countryPreference" 
          value={details.countryPreference} 
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Country Preference</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <button 
          type="button" 
          onClick={prevStep} 
          className="text-rose-600 border border-rose-600 px-6 py-3 rounded-lg"
        >
          Back
        </button>
        <button 
          type="button"
          onClick={nextStep}
          disabled={!details.name || !details.email || !details.phone || !details.countryPreference}
          className="bg-rose-600 text-white px-6 py-3 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOtherDetails;
