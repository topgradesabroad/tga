"use client";
import React from "react";

interface StepChoosePreferenceProps {
  preference: "ivy" | "aplus" | "other" | "";
  updateData: (data: Partial<{ preference: "ivy" | "aplus" | "other" | "" }>) => void;
  nextStep: () => void;
}

const StepChoosePreference: React.FC<StepChoosePreferenceProps> = ({
  preference,
  updateData,
  nextStep
}) => {
  const handleSelect = (pref: "ivy" | "aplus" | "other") => {
    updateData({ preference: pref });
  };

  return (
    <div className="text-center space-y-6 fade-in">
      <h2 className="text-xl font-semibold">Choose Your Preference</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button
          type="button"
          onClick={() => handleSelect("ivy")}
          className={`px-4 py-2 rounded-lg ripple ${
            preference === "ivy"
              ? "bg-purple-800 text-white"
              : "bg-purple-600 text-white"
          }`}
        >
          Ivy League
        </button>
        <button
          type="button"
          onClick={() => handleSelect("aplus")}
          className={`px-4 py-2 rounded-lg ripple ${
            preference === "aplus"
              ? "bg-purple-800 text-white"
              : "bg-purple-600 text-white"
          }`}
        >
          A+ Universities
        </button>
        <button
          type="button"
          onClick={() => handleSelect("other")}
          className={`px-4 py-2 rounded-lg ripple ${
            preference === "other"
              ? "bg-purple-800 text-white"
              : "bg-purple-600 text-white"
          }`}
        >
          Other
        </button>
      </div>
      <button
        type="button"
        onClick={nextStep}
        disabled={!preference}
        className="mt-4 bg-rose-600 text-white px-8 py-2 rounded-lg disabled:opacity-50 ripple"
      >
        Next
      </button>
    </div>
  );
};

export default StepChoosePreference;
