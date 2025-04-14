'use client';

import { useState } from 'react';

type Country = 'usa' | 'uk' | 'canada' | 'australia';
type ScholarshipType = 'undergraduate' | 'postgraduate';
type Scholarship = {
  title: string;
  amount: string;
  deadline: string;
  eligibility: string;
  type: ScholarshipType;
};

const countryColors = {
  usa: 'border-purple-200',
  uk: 'border-purple-200',
  canada: 'border-purple-200',
  australia: 'border-purple-200'
};

const typeColors = {
  undergraduate: 'bg-rose-100 text-rose-800',
  postgraduate: 'bg-purple-100 text-purple-800'
};

const scholarships: Record<Country, Record<ScholarshipType, Scholarship[]>> = {
  usa: {
    undergraduate: [
      { title: 'USA Undergraduate Excellence Scholarship', amount: '$20,000/yr', deadline: '2025-09-15', eligibility: 'High school graduates with 3.8+ GPA', type: 'undergraduate' },
      { title: 'STEM Leaders Scholarship', amount: 'Full Tuition', deadline: '2025-10-30', eligibility: 'Engineering/CS applicants with research experience', type: 'undergraduate' },
      { title: 'Global Citizen Award', amount: '$15,000', deadline: '2025-08-01', eligibility: 'Community service leaders', type: 'undergraduate' }
    ],
    postgraduate: [
      { title: 'Ivy League Research Fellowship', amount: '$45,000', deadline: '2025-11-15', eligibility: 'PhD candidates in STEM fields', type: 'postgraduate' },
      { title: 'MBA Leadership Grant', amount: '$35,000', deadline: '2025-12-01', eligibility: '3+ years work experience', type: 'postgraduate' },
      { title: 'US Academic Excellence Scholarship', amount: 'Full Ride', deadline: '2025-10-01', eligibility: 'First-class degree holders', type: 'postgraduate' }
    ]
  },
  uk: {
    undergraduate: [
      { title: 'UK Undergraduate Merit Scholarship', amount: '£10,000', deadline: '2025-07-31', eligibility: 'AAA in A-levels', type: 'undergraduate' },
      { title: 'International Baccalaureate Award', amount: '£15,000', deadline: '2025-08-15', eligibility: 'IB Diploma holders', type: 'undergraduate' },
      { title: 'Creative Arts Scholarship', amount: '£8,000', deadline: '2025-09-30', eligibility: 'Portfolio-based selection', type: 'undergraduate' }
    ],
    postgraduate: [
      { title: 'Chevening Research Scholarship', amount: 'Full Coverage', deadline: '2025-11-07', eligibility: 'Future leadership potential', type: 'postgraduate' },
      { title: 'Oxbridge Doctoral Fellowship', amount: '£28,000/yr', deadline: '2025-12-01', eligibility: 'Research proposal required', type: 'postgraduate' },
      { title: 'London Business School Grant', amount: '£25,000', deadline: '2025-10-15', eligibility: 'GMAT 700+', type: 'postgraduate' }
    ]
  },
  canada: {
    undergraduate: [
      { title: 'Canadian First Year Excellence Award', amount: 'CAD 15,000', deadline: '2025-08-20', eligibility: '90%+ in Grade 12', type: 'undergraduate' },
      { title: 'Maple Leaf Diversity Scholarship', amount: 'CAD 10,000', deadline: '2025-07-15', eligibility: 'Underrepresented communities', type: 'undergraduate' },
      { title: 'Northern Lights Scholarship', amount: 'CAD 12,000', deadline: '2025-09-01', eligibility: 'Arctic region residents', type: 'undergraduate' }
    ],
    postgraduate: [
      { title: 'Vanier Canada Graduate Scholarship', amount: 'CAD 50,000/yr', deadline: '2025-10-31', eligibility: 'PhD in health/engineering', type: 'postgraduate' },
      { title: 'Pierre Elliott Trudeau Fellowship', amount: 'CAD 60,000', deadline: '2025-12-01', eligibility: 'Social sciences focus', type: 'postgraduate' },
      { title: 'U15 Research Excellence Award', amount: 'Full Funding', deadline: '2025-11-30', eligibility: 'Masters/PhD in research universities', type: 'postgraduate' }
    ]
  },
  australia: {
    undergraduate: [
      { title: 'Australia UG Excellence Scholarship', amount: 'AUD 20,000', deadline: '2025-07-30', eligibility: 'ATAR 90+', type: 'undergraduate' },
      { title: 'Outback Scholarship Program', amount: 'AUD 15,000', deadline: '2025-08-15', eligibility: 'Regional area students', type: 'undergraduate' },
      { title: 'Sydney Scholars Award', amount: 'AUD 10,000', deadline: '2025-09-01', eligibility: 'All undergraduate programs', type: 'undergraduate' }
    ],
    postgraduate: [
      { title: 'Endeavour Research Fellowship', amount: 'AUD 272,500', deadline: '2025-06-30', eligibility: 'Postdoctoral researchers', type: 'postgraduate' },
      { title: 'Melbourne Research Scholarship', amount: 'Full Tuition', deadline: '2025-10-31', eligibility: 'PhD candidates', type: 'postgraduate' },
      { title: 'Australia Global Alumni Grant', amount: 'AUD 50,000', deadline: '2025-11-15', eligibility: 'Previous Australia graduates', type: 'postgraduate' }
    ]
  }
};

const ScholarshipsClient: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('usa');
  const [selectedType, setSelectedType] = useState<ScholarshipType>('undergraduate');

  const handleLearnMore = (title: string) => {
    const slug = title.toLowerCase().replace(/ /g, '-');
    window.location.href = `/blog/${slug}`;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Global Scholarship Programs
          </h2>
          <p className="text-purple-600 text-base max-w-3xl mx-auto">
            Curated funding opportunities for undergraduate and postgraduate studies across top destinations
          </p>
        </div>

        {/* Country Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(scholarships) as Country[]).map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-6 py-1.5 rounded-full text-md font-medium border transition-all
                ${selectedCountry === country 
                  ? 'border-purple-600 bg-purple-600 text-white'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50'
                }`}
            >
              {country.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Scholarship Type Selector */}
        <div className="flex justify-center gap-3 mb-8">
          {(['undergraduate', 'postgraduate'] as ScholarshipType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors
                ${selectedType === type 
                  ? `${typeColors[type]} shadow-sm`
                  : 'bg-white text-gray-500 hover:bg-gray-50'
                }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Scholarship Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {scholarships[selectedCountry][selectedType].map((scholarship, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <span className={`px-2 py-1 rounded-full text-xs ${typeColors[scholarship.type]}`}>
                    {scholarship.type.toUpperCase()}
                  </span>
                  <h3 className="text-base font-semibold text-gray-900 mt-2 leading-tight line-clamp-2">
                    {scholarship.title}
                  </h3>
                </div>
                <span className="text-base font-bold text-purple-600 ml-2">
                  {scholarship.amount}
                </span>
              </div>

              <div className="space-y-3 mb-4 flex-1">
                <div className="flex items-center text-gray-600 text-sm">
                  <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Deadline: {scholarship.deadline}</span>
                </div>
                <div className="flex items-start text-gray-600 text-sm">
                  <svg className="w-4 h-4 mr-2 text-rose-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{scholarship.eligibility}</span>
                </div>
              </div>

              <button
                onClick={() => handleLearnMore(scholarship.title)}
                className="mt-auto w-full py-2.5 bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipsClient;