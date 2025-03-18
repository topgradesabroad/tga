'use client'

import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

const countries = [
  { value: 'usa', label: 'USA' },
  { value: 'uk', label: 'UK' },
  { value: 'canada', label: 'Canada' },
  { value: 'australia', label: 'Australia' },
  { value: 'new-zealand', label: 'New Zealand' },
  { value: 'germany', label: 'Germany' },
  { value: 'france', label: 'France' }
]

const courses = [
  { value: 'management', label: 'Management' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'accounting', label: 'Accounting' },
  { value: 'finance', label: 'Finance' },
  { value: 'nursing', label: 'Nursing' },
  { value: 'mba', label: 'MBA' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'ai-ml', label: 'Artificial Intelligence & ML' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'other', label: 'Other' }
]

export function Sidebarclient() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()

  const disabledDays = {
    before: new Date(),
  }

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-2.5 px-4 rounded-lg bg-white/60 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2.5 px-4 rounded-lg bg-white/60 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full py-2.5 px-4 rounded-lg bg-white/60 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
            
            <select 
              className="w-full py-2.5 px-4 rounded-lg bg-white/60 backdrop-blur-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Select Preferred Country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>

            <select 
              className="w-full py-2.5 px-4 rounded-lg bg-white/60 backdrop-blur-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              defaultValue=""
            >
              <option value="" disabled>Select Preferred Course</option>
              {courses.map((course) => (
                <option key={course.value} value={course.value}>
                  {course.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold hover:from-amber-600 hover:to-rose-600 transition-all duration-200 text-sm mt-2"
            >
              Book Your Appointment
            </button>
          </form>
        )

      case 2:
        return (
          <div className="space-y-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={disabledDays}
                modifiers={{
                    available: (date) => {
                    const day = date.getDay()
                    return day !== 0 && day !== 6
                    }
                }}
                modifiersStyles={{
                    selected: { 
                    backgroundColor: '#f59e0b',
                    color: 'white',
                    border: 'none'  // Remove border
                    }
                }}
                styles={{
                    caption: { color: '#374151' },
                    head: { color: '#374151' },
                    day: {
                    margin: 0,  // Remove margin
                    borderRadius: '0.375rem'  // Match your rounded-lg style
                    }
                }}
                className="!bg-transparent"  // Make calendar background transparent
                />
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full py-2.5 px-4 rounded-lg bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 text-sm"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!selectedDate}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold hover:from-amber-600 hover:to-rose-600 transition-all duration-200 text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Selected Date:</p>
              <p className="font-medium text-gray-900">
                {selectedDate && format(selectedDate, 'MMMM d, yyyy')}
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4">
              <div className="grid grid-cols-3 gap-2">
                {['9:00', '10:00', '11:00', '12:00', '14:00', '15:00'].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 px-3 rounded text-sm transition-colors
                      ${selectedTime === time 
                        ? 'bg-amber-500 text-white' 
                        : 'bg-white/60 hover:bg-amber-100 text-gray-600'
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-2.5 px-4 rounded-lg bg-gray-200 text-gray-600 font-semibold hover:bg-gray-300 text-sm"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={!selectedTime}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold hover:from-amber-600 hover:to-rose-600 transition-all duration-200 text-sm disabled:opacity-50"
              >
                Submit
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="space-y-3">
      {renderStep()}
    </div>
  )
}