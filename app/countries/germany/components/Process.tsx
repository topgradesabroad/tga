import React from 'react';

export default function GermanyProcess() {
  return (
    <section id="process" className="scroll-mt-32 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4 mb-3">
            German Application & Visa Process
          </h2>
          <p className="text-lg text-gray-700">
            A comprehensive guide to university applications and student visa procedures for international students seeking to study in Germany.
          </p>
        </header>

        {/* Main Content - All sections rendered at once for SSR/SSG */}
        <div className="space-y-12">
          {/* Application Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              German University Application Process
            </h3>
            
            {/* Undergraduate */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Undergraduate Studies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">1. Research & Preparation</h5>
                  <p className="text-gray-700">
                    Explore universities and courses in Germany. Note that most undergraduate programs are taught in German, although a growing number of courses are offered in English. Verify that your school-leaving certificate is recognized (e.g., via the DAAD portal).
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Application Methods</h5>
                  <p className="text-gray-700">
                    Apply via UniAssist or directly through university portals. Always check the specific requirements for each institution.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. Language Proficiency</h5>
                  <p className="text-gray-700">
                    For German-taught programs, provide TestDaF, DSH, or Goethe-Institut certificates. For English-taught courses, submit IELTS or TOEFL scores as required.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Motivation Letter</h5>
                  <p className="text-gray-700">
                    Write a compelling letter of motivation outlining your academic interests, career goals, and reasons for choosing Germany as your study destination.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. Documentation</h5>
                  <p className="text-gray-700">
                    Gather academic transcripts, school certificates, language test results, and a copy of your passport. Some institutions may also require a CV or letters of recommendation.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Submission & Deadlines</h5>
                  <p className="text-gray-700">
                    Review deadlines carefully. For the winter semester (starting in October), deadlines often fall between May and July. For the summer semester, deadlines are typically between January and March.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Postgraduate */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Postgraduate Studies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">1. Programme Research</h5>
                  <p className="text-gray-700">
                    Investigate departments, research groups, and potential supervisors. Master's programs typically last 1-2 years, while PhD programs require 3-4 years.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Direct Applications</h5>
                  <p className="text-gray-700">
                    Apply directly through the university’s online system. Some universities use UniAssist for initial evaluation.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. Application Materials</h5>
                  <p className="text-gray-700">
                    Submit your bachelor's degree certificate, academic transcripts, CV, statement of purpose, and, if applicable, a research proposal along with 2-3 academic references.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Language Requirements</h5>
                  <p className="text-gray-700">
                    Provide proof of language proficiency: TestDaF or DSH for German-taught programs, and IELTS/TOEFL for courses in English.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. Funding Applications</h5>
                  <p className="text-gray-700">
                    Explore scholarships like DAAD, Erasmus+, or institution-specific funding. Note that scholarship deadlines are often earlier than program application deadlines.
                  </p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Interviews & Acceptance</h5>
                  <p className="text-gray-700">
                    Some competitive programs may require interviews. Upon acceptance, follow the enrollment procedures as instructed by the university.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visa Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              German Student Visa Process
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">1. Admission Confirmation</h5>
                <p className="text-gray-700">
                  Once you receive your admission letter, ensure you have all the required documents ready for your visa application.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">2. Visa Application</h5>
                <p className="text-gray-700">
                  Apply for a National Visa for study at the German embassy or consulate. The visa fee is around €75. It’s recommended to apply at least 2-3 months before your course begins.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">3. Proof of Financial Resources</h5>
                <p className="text-gray-700">
                  Demonstrate your financial means through a blocked account, which currently requires approximately €11,208 per year to cover living expenses.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">4. Health Insurance</h5>
                <p className="text-gray-700">
                  Obtain mandatory health insurance. Students can opt for public or private plans, provided they meet the visa requirements.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">5. Supporting Documents</h5>
                <p className="text-gray-700">
                  Prepare your passport, admission letter, financial proof, language certificates, and any additional documents requested by the embassy.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">6. Biometrics & Interview</h5>
                <p className="text-gray-700">
                  Provide biometric data and attend an interview if required by German authorities.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">7. Post-Arrival Procedures</h5>
                <p className="text-gray-700">
                  After arrival, register your address (Anmeldung) and apply for a residence permit at the local Foreigners' Office.
                </p>
              </div>
            </div>
          </div>
          
          {/* Timeline Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              Key Timelines & Important Considerations
            </h3>
            
            {/* Timeline visualization - Static version for SSR */}
            <div className="mb-8 overflow-hidden">
              <div className="flex flex-wrap justify-between relative mb-12">
                {/* Timeline bar */}
                <div className="absolute h-1 w-full bg-purple-200 top-5 left-0"></div>
                
                {/* Timeline points */}
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">12+</span>
                  </div>
                  <h5 className="font-semibold text-sm">12+ Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Begin researching programs & language courses</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">9</span>
                  </div>
                  <h5 className="font-semibold text-sm">9 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Prepare application materials</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <h5 className="font-semibold text-sm">4 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Submit visa application</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-sm">2 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Finalize travel arrangements</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">0</span>
                  </div>
                  <h5 className="font-semibold text-sm">Arrival</h5>
                  <p className="mt-2 text-sm text-gray-600">Complete registration & permit process</p>
                </div>
              </div>
            </div>
            
            {/* Critical Deadlines */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Critical Deadlines</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>May-July:</strong> Deadlines for Winter Semester (October intake) applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>January-March:</strong> Deadlines for Summer Semester (April intake) applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>Scholarship deadlines:</strong> Vary by funding agency and institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>Visa processing:</strong> Initiate 2-3 months before departure</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Regional Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Living costs and dialects vary between urban and rural areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Some regions offer extra support programs for international students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Consider tuition differences and living expenses between locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Public transport discounts are widely available for students</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Current Policies */}
            <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-3 text-purple-800">Current Policies (2025)</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Students can work up to 120 full or 240 half days per year during their studies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">After graduation, an 18-month residence permit is available to seek employment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">International students may work part-time without restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Health insurance is mandatory and must meet German standards</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
