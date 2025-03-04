"use client";
import React, { useState } from "react";

interface StepScheduleAppointmentProps {
  appointment: {
    date: string;
    time: string;
  };
  updateData: (data: Partial<{ date: string; time: string }>) => void;
  prevStep: () => void;
  onSubmit: () => void;
}

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM"
];

const StepScheduleAppointment: React.FC<StepScheduleAppointmentProps> = ({
  appointment,
  updateData,
  prevStep,
  onSubmit
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
            className="bg-green-600 text-white px-4 py-2 rounded-lg ripple transition transform hover:scale-105"
          >
            Schedule Your Free Consultation
          </button>
          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-xs ripple transition transform hover:scale-105"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <input
              type="date"
              min={today}
              value={appointment.date}
              onChange={handleDateChange}
              className="px-4 py-3 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none mx-auto"
            />
            <div className="flex flex-wrap justify-center gap-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => handleTimeSelect(slot)}
                  className={`px-3 py-1 rounded-lg border text-xs ripple transition transform hover:scale-105 ${
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
              className="bg-gray-300 text-gray-800 px-3 py-2 rounded-lg text-xs ripple transition transform hover:scale-105"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onSubmit}
              disabled={!appointment.date || !appointment.time}
              className="bg-blue-600 text-white px-3 py-2 rounded-lg text-xs disabled:opacity-50 ripple transition transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StepScheduleAppointment;
