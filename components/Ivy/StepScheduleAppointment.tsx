"use client";
import React, { useState } from "react";

interface StepScheduleAppointmentProps {
  appointment: {
    date: string;
    time: string;
  };
  
  updateData: (data: Partial<{ date: string; time: string }>) => void;
  prevStep: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM"
];

const StepScheduleAppointment: React.FC<StepScheduleAppointmentProps> = ({
  appointment,
  updateData,
  prevStep,
  onSubmit,
  isSubmitting
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateData({ date: e.target.value });
  };

  const handleTimeSelect = (time: string) => {
    updateData({ time });
  };

  return (
    <div className="space-y-6 text-center fade-in">
      {!showPicker ? (
        <>
          <button
            type="button"
            onClick={() => setShowPicker(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg ripple transition transform hover:scale-105"
          >
            Schedule Your Free Consultation
          </button>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={prevStep}
              className="text-rose-600 border border-rose-600 px-8 py-2 rounded-lg text-md ripple transition transform hover:scale-105"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <input
              type="date"
              min={today}
              value={appointment.date}
              onChange={handleDateChange}
              className="px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:outline-none mx-auto"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleTimeSelect(slot)}
                  className={`px-4 py-2 rounded-lg border text-sm ripple transition transform hover:scale-105 ${
                    appointment.time === slot
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2 text-rose-600 border border-rose-600 rounded-lg hover:bg-rose-50"
              disabled={isSubmitting}
            >
              Previous
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-300 disabled:bg-rose-400 flex items-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⭕</span>
                  <span>Submitting...</span>
                </>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default StepScheduleAppointment;
