import React from 'react';

export default function CanadaProcess() {
  return (
    <section id="process" className="scroll-mt-32 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4 mb-3">
            Canadian Application & Visa Process
          </h2>
          <p className="text-lg text-gray-700">
            A comprehensive guide to university applications and student visa procedures for international students seeking to study in Canada.
          </p>
        </header>

        {/* Main Content - All sections rendered at once for SSR/SSG */}
        <div className="space-y-12">
          {/* Application Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              Canadian University Application Process
            </h3>
            
            {/* Undergraduate */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Undergraduate Studies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">1. Research & Preparation</h5>
                  <p className="text-gray-700">Research universities based on program offerings, location, rankings, and tuition fees. Most Canadian undergraduate degrees are 4 years (3 years in Quebec for students with CEGEP).</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Direct Applications</h5>
                  <p className="text-gray-700">Apply directly to each university through their online portals. Some provinces (Ontario, Alberta, BC) have centralized application services like OUAC.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. English/French Proficiency</h5>
                  <p className="text-gray-700">Take the IELTS Academic, TOEFL, CAEL, or TEF/TCF (for French programs). Most universities require IELTS scores of 6.0-6.5 overall, with no band below 5.5-6.0.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Personal Statement</h5>
                  <p className="text-gray-700">Write a focused statement of purpose highlighting your academic interests, extracurricular activities, and reasons for choosing the program and institution.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. References & Documentation</h5>
                  <p className="text-gray-700">Secure academic references, prepare certified translations of academic transcripts, and submit supporting documents as required by each institution.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Submission & Deadlines</h5>
                  <p className="text-gray-700">Early deadlines for competitive programs are in January-February. Regular deadlines typically fall between February-April. International students should apply 8-12 months in advance.</p>
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
                  <p className="text-gray-700">Research departments, potential supervisors (for research degrees), and specialist programs. Canadian Master's degrees typically take 1-2 years, PhDs 4-6 years.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Direct Applications</h5>
                  <p className="text-gray-700">Apply directly to university graduate schools/faculties through their online portals. There's no limit to applications, but fees apply for each submission.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. Application Materials</h5>
                  <p className="text-gray-700">Prepare a research proposal (for thesis-based programs), statement of intent, CV, transcripts, degree certificates, and 2-3 academic references.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Language Requirements</h5>
                  <p className="text-gray-700">Meet English/French proficiency requirements (typically IELTS scores of 6.5-7.5 overall). Some universities offer conditional admissions with language pathway programs.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. Funding Applications</h5>
                  <p className="text-gray-700">Apply for scholarships like Vanier, Trudeau Foundation, CBIE, institutional funding, or research/teaching assistantships. Deadlines often precede program deadlines.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Interviews & Acceptance</h5>
                  <p className="text-gray-700">Prepare for interviews for competitive programs. Once accepted, secure your place according to institution guidelines and apply for housing promptly.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visa Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              Canadian Student Visa Process
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">1. Letter of Acceptance</h5>
                <p className="text-gray-700">After accepting an offer, receive an official Letter of Acceptance from your Canadian institution, which is required for your study permit application.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">2. Study Permit Application</h5>
                <p className="text-gray-700">Apply online for a study permit through IRCC. The application fee is CAD$150. Apply at least 3-4 months before your program starts due to processing times.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">3. Biometrics</h5>
                <p className="text-gray-700">Pay a biometrics fee (CAD$85) and provide fingerprints and a photo at a Visa Application Centre (VAC) in your country within 30 days of submitting your application.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">4. Financial Requirements</h5>
                <p className="text-gray-700">Demonstrate funds for tuition fees plus living expenses (minimum CAD$10,000-$13,000 per year depending on the province, in addition to tuition).</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">5. Medical Examination</h5>
                <p className="text-gray-700">Complete a medical examination by an IRCC-approved physician if required based on your country of origin or length of stay.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">6. Supporting Documents</h5>
                <p className="text-gray-700">Prepare passport, acceptance letter, proof of funds, immigration medical exam results, study plan explaining program choice and career goals.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">7. Temporary Resident Visa (TRV)</h5>
                <p className="text-gray-700">Citizens of certain countries also need a TRV or Electronic Travel Authorization (eTA) to enter Canada, typically issued with approved study permits.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">8. Post-Arrival Requirements</h5>
                <p className="text-gray-700">Activate your study permit at the port of entry, apply for a Social Insurance Number (SIN), register for health insurance, and attend institution orientation.</p>
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
                    <span className="text-sm font-bold">18+</span>
                  </div>
                  <h5 className="font-semibold text-sm">18+ Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Research programs</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">12</span>
                  </div>
                  <h5 className="font-semibold text-sm">12 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Submit applications</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">6</span>
                  </div>
                  <h5 className="font-semibold text-sm">6 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Apply for study permit</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <h5 className="font-semibold text-sm">3 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Prepare for travel</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">0</span>
                  </div>
                  <h5 className="font-semibold text-sm">Arrival</h5>
                  <p className="mt-2 text-sm text-gray-600">Complete registration</p>
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
                    <span className="text-gray-700"><strong>January-February:</strong> Early admission deadlines for competitive programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>February-April:</strong> Regular undergraduate application deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>December-February:</strong> Most graduate program deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>October-January:</strong> Major scholarship application deadlines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Provincial Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Quebec requires a CAQ (Quebec Acceptance Certificate) before study permit application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Francophone institutions require French proficiency tests (TEF/TCF)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Provincial health coverage varies (some provinces have waiting periods)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Provincial nominee programs offer immigration pathways post-graduation</span>
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
                      <span className="text-gray-700">Post-Graduation Work Permit (PGWP) allows work for up to 3 years after studies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Language requirements can be met through IELTS, TOEFL, CAEL, or prior education</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Students can work 20 hours/week off-campus during term, full-time during scheduled breaks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Spouses/common-law partners can apply for open work permits during your studies</span>
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