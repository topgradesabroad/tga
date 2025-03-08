"use client";
import React from "react";
import { ivyUniversities } from "./data";

interface StepIvySelectionProps {
  selectedIvy: string[];
  updateData: (data: { selectedIvy?: string[] }) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepIvySelection: React.FC<StepIvySelectionProps> = ({
  selectedIvy,
  updateData,
  nextStep,
  prevStep
}) => {
  const handleIvySelect = (uni: string) => {
    if (selectedIvy.includes(uni)) {
      updateData({ selectedIvy: selectedIvy.filter((item) => item !== uni) });
    } else {
      updateData({ selectedIvy: [...selectedIvy, uni] });
    }
  };

  return (
    <div className="space-y-4 fade-in">
      <h2 className="text-lg font-semibold text-center">Select Ivy League Universities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {ivyUniversities.map((uni) => (
          <button
            key={uni}
            type="button"
            onClick={() => handleIvySelect(uni)}
            className={`px-2 py-3 rounded-md text-sm ripple transition transform hover:scale-105 ${
              selectedIvy.includes(uni)
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "bg-white shadow-sm text-gray-900 hover:bg-purple-600 hover:text-white"
            }`}
          >
            {uni}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="mt-4 text-rose-600 border border-rose-600 px-8 py-2 rounded-lg text-md ripple transition transform hover:scale-105"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={selectedIvy.length === 0}
          className="mt-4 bg-rose-600 text-white px-8 py-2 rounded-lg text-md disabled:opacity-50 ripple transition transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepIvySelection;
