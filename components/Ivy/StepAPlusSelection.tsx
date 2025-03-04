"use client";
import React from "react";
import { aPlusUniversities } from "./data";

interface StepAPlusSelectionProps {
  selectedAPlus: string[];
  updateData: (data: { selectedAPlus?: string[] }) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const StepAPlusSelection: React.FC<StepAPlusSelectionProps> = ({
  selectedAPlus,
  updateData,
  nextStep,
  prevStep
}) => {
  const handleAPlusSelect = (uni: string) => {
    if (selectedAPlus.includes(uni)) {
      updateData({ selectedAPlus: selectedAPlus.filter((item) => item !== uni) });
    } else {
      updateData({ selectedAPlus: [...selectedAPlus, uni] });
    }
  };

  return (
    <div className="space-y-4 fade-in">
      <h2 className="text-lg font-semibold text-center">Select A+ Universities</h2>
      
        <div className="mb-2">
          <p className="text-center text-sm font-medium mb-1"></p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {aPlusUniversities.map((uni) => (
              <button
                key={uni}
                type="button"
                onClick={() => handleAPlusSelect(uni)}
                className={`px-3 py-3 rounded-md text-sm ripple transition transform hover:scale-105 ${
                  selectedAPlus.includes(uni)
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-white shadow-sm text-gray-900 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {uni}
              </button>
            ))}
          </div>
        </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="mt-4 bg-black text-white px-8 py-3 rounded-lg text-sm ripple transition transform hover:scale-105"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          disabled={selectedAPlus.length === 0}
          className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg text-sm disabled:opacity-50 ripple transition transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepAPlusSelection;
