"use client";
import React, { useState } from "react";
import Headline from "./Headline";
import ImageSlider from "./ImageSlider";
import StepChoosePreference from "./StepChoosePreference";
import StepIvySelection from "./StepIvySelection";
import StepAPlusSelection from "./StepAPlusSelection";
import StepPersonalDetails from "./StepPersonalDetails";
import StepOtherDetails from "./StepOtherDetails";
import StepScheduleAppointment from "./StepScheduleAppointment";
import { IvyFlowData } from "./types"; // if you separate types

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<IvyFlowData>({
    preference: "",
    selectedIvy: [],
    selectedAPlus: [],
    personalDetails: {
      name: "",
      email: "",
      phone: "",
      admissionType: "",
      course: ""
    },
    otherDetails: {
      name: "",
      email: "",
      phone: "",
      countryPreference: ""
    },
    appointment: {
      date: "",
      time: ""
    }
  });

  // For Ivy or A+ flows: 4 steps; For Other flow: 3 steps.
  const totalSteps =
    formData.preference === "ivy" || formData.preference === "aplus" ? 4 : formData.preference === "other" ? 3 : 1;

  // Renamed update function to avoid collisions.
  const handleUpdateData = (data: Partial<IvyFlowData>) => {
    setFormData((prev: IvyFlowData) => ({ ...prev, ...data }));
  };

  const updatePersonalDetails = (
    data: Partial<IvyFlowData["personalDetails"]>
  ) => {
    setFormData((prev: IvyFlowData) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, ...data }
    }));
  };

  const updateOtherDetails = (
    data: Partial<IvyFlowData["otherDetails"]>
  ) => {
    setFormData((prev: IvyFlowData) => ({
      ...prev,
      otherDetails: { ...prev.otherDetails, ...data }
    }));
  };

  const updateAppointment = (data: Partial<IvyFlowData["appointment"]>) => {
    setFormData((prev: IvyFlowData) => ({
      ...prev,
      appointment: { ...prev.appointment, ...data }
    }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleSubmit = () => {
    console.log("Final Data Submitted: ", formData);
    // You could trigger a confetti or Lottie animation here on success
    alert("Form submitted!");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Headline />
      {/* Glassmorphism container with frosted glass effect */}
      <div className="mb-30 flex flex-col md:flex-row bg-white/60 backdrop-blur-md shadow-xl rounded-lg overflow-hidden h-[400px]">
        {/* Left Column (Content) with fade-in animation */}
        <div className="bg-rose-50 bg-opacity-50 md:w-1/2 w-full p-4 overflow-y-auto flex flex-col justify-center fade-in">
          
          {currentStep === 1 && (
            <StepChoosePreference
              preference={formData.preference}
              updateData={handleUpdateData}
              nextStep={nextStep}
            />
          )}
          {formData.preference === "ivy" && currentStep === 2 && (
            <StepIvySelection
              selectedIvy={formData.selectedIvy}
              updateData={handleUpdateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {formData.preference === "aplus" && currentStep === 2 && (
            <StepAPlusSelection
              selectedAPlus={formData.selectedAPlus}
              updateData={handleUpdateData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {(formData.preference === "ivy" || formData.preference === "aplus") && currentStep === 3 && (
            <StepPersonalDetails
              details={formData.personalDetails}
              updateData={updatePersonalDetails}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {formData.preference === "other" && currentStep === 2 && (
            <StepOtherDetails
              details={formData.otherDetails}
              updateData={updateOtherDetails}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {currentStep === (formData.preference === "other" ? 3 : 4) && (
            <StepScheduleAppointment
              appointment={formData.appointment}
              updateData={updateAppointment}
              prevStep={prevStep}
              onSubmit={handleSubmit}
            />
          )}
        </div>
        {/* Right Column (Image Slider) */}
        <div className="md:w-1/2 w-full">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
