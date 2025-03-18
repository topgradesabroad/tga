import React from 'react';

export default function AustraliaProcess() {
  return (
    <section id="process" className="scroll-mt-32 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4 mb-3">
            Australian Application & Visa Process
          </h2>
          <p className="text-lg text-gray-700">
            A comprehensive guide to university applications and student visa procedures for international students seeking to study in Australia.
          </p>
        </header>

        {/* Main Content - All sections rendered at once for SSR/SSG */}
        <div className="space-y-12">
          {/* Application Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              Australian University Application Process
            </h3>
            
            {/* Undergraduate */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Undergraduate Studies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">1. Research & Preparation</h5>
                  <p className="text-gray-700">Research universities based on program offerings, location, rankings, and tuition fees. Most Australian undergraduate degrees are 3 years (some professional degrees are 4-6 years).</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Application Methods</h5>
                  <p className="text-gray-700">Apply through state-based Tertiary Admissions Centres (TACs) like UAC, VTAC, QTAC, or directly to universities via their online portals. International students often apply directly.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. English Proficiency</h5>
                  <p className="text-gray-700">Take the IELTS Academic, TOEFL, PTE Academic, or CAE. Most universities require IELTS scores of 6.0-6.5 overall, with no band below 5.5-6.0.</p>
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
                  <p className="text-gray-700">For February (Semester 1) intake, apply by October-November. For July (Semester 2) intake, apply by April-May. International students should apply 6-9 months in advance.</p>
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
                  <p className="text-gray-700">Research departments, potential supervisors (for research degrees), and specialist programs. Australian Master's degrees typically take 1-2 years, PhDs 3-4 years.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Direct Applications</h5>
                  <p className="text-gray-700">Apply directly to university graduate schools/faculties through their online portals. There's no limit to applications, but fees apply for each submission.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. Application Materials</h5>
                  <p className="text-gray-700">Prepare a research proposal (for research degrees), statement of intent, CV, transcripts, degree certificates, and 2-3 academic references.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Language Requirements</h5>
                  <p className="text-gray-700">Meet English proficiency requirements (typically IELTS scores of 6.5-7.0 overall). Some universities offer conditional admissions with English language pathway programs.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. Funding Applications</h5>
                  <p className="text-gray-700">Apply for scholarships like Australia Awards, Endeavour Scholarships, Research Training Program (RTP), university scholarships, or research assistantships. Deadlines often precede program deadlines.</p>
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
              Australian Student Visa Process
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">1. Confirmation of Enrolment</h5>
                <p className="text-gray-700">After accepting an offer, receive a Confirmation of Enrolment (CoE) from your Australian institution, which is required for your student visa application.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">2. Student Visa Application</h5>
                <p className="text-gray-700">Apply online for a Student Visa (Subclass 500) through the Department of Home Affairs. The application fee is AUD$650. Apply at least 2-3 months before your program starts.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">3. Biometrics</h5>
                <p className="text-gray-700">Provide biometrics (fingerprints and a photograph) at an Australian Visa Application Centre (AVAC) in your country if required based on your nationality.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">4. Financial Requirements</h5>
                <p className="text-gray-700">Demonstrate funds for tuition fees plus living expenses (approximately AUD$21,000 per year for living costs, in addition to tuition) for the first year of study.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">5. Health Insurance</h5>
                <p className="text-gray-700">Purchase Overseas Student Health Cover (OSHC) for the duration of your visa. This is mandatory for all international students and must be arranged before visa application.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">6. Supporting Documents</h5>
                <p className="text-gray-700">Prepare passport, CoE, proof of funds, OSHC certificate, statement of purpose, academic transcripts, English proficiency results, and identity documents.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">7. Health Examination</h5>
                <p className="text-gray-700">Complete a health examination by a panel physician if required based on your nationality, intended length of stay, or study field (e.g., healthcare courses).</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">8. Post-Arrival Requirements</h5>
                <p className="text-gray-700">Attend your institution's orientation program, confirm your address with your institution, activate your OSHC, and open a local bank account.</p>
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
                  <p className="mt-2 text-sm text-gray-600">Research programs</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">9</span>
                  </div>
                  <h5 className="font-semibold text-sm">9 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Submit applications</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <h5 className="font-semibold text-sm">4 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Apply for student visa</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <h5 className="font-semibold text-sm">2 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Prepare for travel</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">0</span>
                  </div>
                  <h5 className="font-semibold text-sm">Arrival</h5>
                  <p className="mt-2 text-sm text-gray-600">Complete orientation</p>
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
                    <span className="text-gray-700"><strong>September-October:</strong> Deadlines for Semester 1 (February) undergraduate intake</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>April-May:</strong> Deadlines for Semester 2 (July) undergraduate intake</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>August-October:</strong> Most research-based postgraduate deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>July-September:</strong> Major scholarship application deadlines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Regional Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Regional universities offer additional post-study work visa opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">State/territory nomination programs offer migration pathways post-graduation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Cost of living varies significantly between major cities and regional areas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Some states offer public transport concessions for international students</span>
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
                      <span className="text-gray-700">Post-Study Work Visa allows graduates to work for 2-4 years depending on qualification level and location</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Genuine Temporary Entrant (GTE) requirement must be met for all student visa applications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Students can work unlimited hours while their course is in session</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Spouses/de facto partners can apply for dependent visas and work full-time during your studies</span>
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