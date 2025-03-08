"use client";
import React from "react";

interface StepPersonalDetailsProps {
  details: {
    name: string;
    email: string;
    phone: string;
    admissionType: string;
    course: string;
  };
  updateData: (data: Partial<StepPersonalDetailsProps["details"]>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepPersonalDetails: React.FC<StepPersonalDetailsProps> = ({
  details,
  updateData,
  nextStep,
  prevStep
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4 fade-in">
      <h2 className="text-lg font-semibold text-center">Personal Details</h2>
      <div className="grid grid-cols-1 gap-3">
        {["name", "email", "phone", "course"].map((field) => (
          <div key={field} className="relative">
            <input 
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} 
              name={field}
              value={(details as any)[field]}
              onChange={handleChange}
              placeholder={field === "name" ? "Full Name" : field === "email" ? "Email" : field === "phone" ? "Phone Number" : "Preferred Course"}
              className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {(details as any)[field] && (
              <span className="absolute right-3 top-3 text-green-500 text-xs">✓</span>
            )}
          </div>
        ))}
        <div className="relative">
          <select 
            name="admissionType" 
            value={details.admissionType} 
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Admission Type</option>
            <option value="undergrad">Undergraduate</option>
            <option value="postgrad">Postgraduate</option>
          </select>
          {details.admissionType && (
            <span className="absolute right-3 top-3 text-green-500 text-xs">✓</span>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <button 
          type="button" 
          onClick={prevStep} 
          className="text-rose-600 border border-rose-600 px-8 py-2 rounded-lg text-md ripple transition transform hover:scale-105"
        >
          Back
        </button>
        <button 
          type="button"
          onClick={nextStep}
          disabled={
            !details.name || 
            !details.email || 
            !details.phone || 
            !details.admissionType || 
            !details.course
          }
          className="bg-rose-600 text-white px-8 py-2 rounded-lg text-md disabled:opacity-50 ripple transition transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepPersonalDetails;
