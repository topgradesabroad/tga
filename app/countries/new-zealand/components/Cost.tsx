// app/countries/new-zealand/components/CostsCalculator.client.tsx
'use client';

import { useState } from 'react';
import { CITIES, PROGRAMS } from './CostData';

type ProgramType = 'undergraduate' | 'postgraduate';
type CityType = keyof typeof CITIES;
type StudyField = keyof typeof PROGRAMS[ProgramType];

interface CalculatorState {
  city: CityType;
  programType: ProgramType;
  studyField: StudyField;
  accommodation: 'Shared' | 'Studio';
}

export default function Cost() {
  const [selections, setSelections] = useState<CalculatorState>({
    city: 'Auckland',
    programType: 'undergraduate',
    studyField: 'Business Management' as StudyField,
    accommodation: 'Shared'
  });

  const currentProgram = PROGRAMS[selections.programType][selections.studyField];
  const duration = currentProgram.duration;

  const calculateProgramCost = () => {
    const averageCost = (currentProgram.cost[0] + currentProgram.cost[1]) / 2;
    return averageCost * duration;
  };

  const calculateLivingCosts = () => {
    const cityData = CITIES[selections.city];
    const rent = selections.accommodation === 'Shared' 
      ? cityData.sharedRent 
      : cityData.studioRent;
    const monthlyAverage = (rent[0] + rent[1] + cityData.expenses[0] + cityData.expenses[1]) / 2;
    return monthlyAverage * duration * 10; // 10 months/year
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Location Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-700">University Location</label>
            <select
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
              value={selections.city}
              onChange={e => setSelections({...selections, city: e.target.value as CityType})}
            >
              {Object.keys(CITIES).map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-700">Accommodation Type</label>
            <div className="grid grid-cols-2 gap-3">
              {['Shared', 'Studio'].map(type => (
                <button
                  key={type}
                  onClick={() => setSelections({...selections, accommodation: type as 'Shared' | 'Studio'})}
                  className={`p-3 rounded-lg transition-colors ${
                    selections.accommodation === type
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Program Section */}
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-lg font-medium text-gray-700">Study Program</label>
            <div className="space-y-4">
              <select
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                value={selections.programType}
                onChange={e => {
                  const programType = e.target.value as ProgramType;
                  const studyField = Object.keys(PROGRAMS[programType])[0] as StudyField;
                  setSelections({
                    ...selections,
                    programType,
                    studyField
                  });
                }}
              >
                <option value="undergraduate">Undergraduate Degree</option>
                <option value="postgraduate">Postgraduate Degree</option>
              </select>

              <select
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                value={selections.studyField}
                onChange={e => setSelections({...selections, studyField: e.target.value as StudyField})}
              >
                {Object.keys(PROGRAMS[selections.programType]).map(field => (
                  <option key={field} value={field}>{field}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="block text-lg font-medium text-gray-700">Course Duration</label>
              <div className="p-3 bg-gray-50 rounded-lg">
                {duration} year{duration > 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-700">Tuition Fees:</span>
            <span className="font-semibold">NZD {calculateProgramCost().toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg text-gray-700">Living Costs:</span>
            <span className="font-semibold">NZD {calculateLivingCosts().toLocaleString()}</span>
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-900">Total Estimate:</span>
              <span className="text-2xl font-bold text-purple-600">
                NZD {(calculateProgramCost() + calculateLivingCosts()).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}