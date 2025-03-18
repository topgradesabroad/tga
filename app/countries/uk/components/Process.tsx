import React from 'react';

export default function UKProcess() {
  return (
    <section id="process" className="scroll-mt-32 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4 mb-3">
            UK Application & Visa Process
          </h2>
          <p className="text-lg text-gray-700">
            A comprehensive guide to university applications and student visa procedures for international students seeking to study in the United Kingdom.
          </p>
        </header>

        {/* Main Content - All sections rendered at once for SSR/SSG */}
        <div className="space-y-12">
          {/* Application Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              UK University Application Process
            </h3>
            
            {/* Undergraduate */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Undergraduate Studies
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">1. Research & Preparation</h5>
                  <p className="text-gray-700">Research universities based on course offerings, location, rankings, and tuition fees. Most UK undergraduate degrees are 3 years (4 years in Scotland).</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. UCAS Registration</h5>
                  <p className="text-gray-700">Create an account on UCAS (Universities and Colleges Admissions Service). You can apply to up to 5 courses/universities.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. English Proficiency</h5>
                  <p className="text-gray-700">Take the IELTS Academic, TOEFL, or PTE Academic. Most universities require IELTS scores of 6.0-7.0 overall, with no component below 5.5-6.0.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. Personal Statement</h5>
                  <p className="text-gray-700">Write a focused academic personal statement (4,000 characters) highlighting your academic interests, relevant experience, and motivation for your chosen course.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. References & Documentation</h5>
                  <p className="text-gray-700">Secure an academic reference, prepare certified translations of academic transcripts, and gather predicted grades if applicable.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Submission & Deadlines</h5>
                  <p className="text-gray-700">October 15 for Oxford, Cambridge, medicine. January 31 for most other courses. Later applications go through UCAS Extra or Clearing.</p>
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
                  <p className="text-gray-700">Research departments, potential supervisors (for research degrees), and specialist programs. UK Master's degrees are typically 1 year (full-time).</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">2. Direct Applications</h5>
                  <p className="text-gray-700">Apply directly to universities through their online portals. There's no limit to applications, but deadlines vary by institution.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">3. Application Materials</h5>
                  <p className="text-gray-700">Prepare a research proposal (for PhD programs), personal statement, CV, transcripts, degree certificates, and 2-3 academic references.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">4. English Requirements</h5>
                  <p className="text-gray-700">Meet English proficiency requirements (typically IELTS scores of 6.5-7.5 overall). Some universities offer pre-sessional English courses.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">5. Funding Applications</h5>
                  <p className="text-gray-700">Apply for scholarships like Chevening, Commonwealth, or institution-specific funding. Deadlines are often earlier than course deadlines.</p>
                </div>
                
                <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                  <h5 className="font-semibold mb-2">6. Interviews & Acceptance</h5>
                  <p className="text-gray-700">Prepare for interviews for competitive programs. Once accepted, secure your place with a deposit and apply for accommodation promptly.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visa Process Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
              UK Student Visa Process
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">1. CAS Issuance</h5>
                <p className="text-gray-700">After accepting an offer, receive a Confirmation of Acceptance for Studies (CAS) from your university with a unique reference number for your visa application.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">2. Visa Application</h5>
                <p className="text-gray-700">Apply online for a Student visa up to 6 months before your course starts. The application fee is £363 if applying from outside the UK.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">3. Health Surcharge</h5>
                <p className="text-gray-700">Pay the Immigration Health Surcharge (£490 per year for students in 2025), which gives you access to the UK's National Health Service (NHS).</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">4. Financial Requirements</h5>
                <p className="text-gray-700">Demonstrate funds for course fees plus living costs (£1,334/month in London or £1,023/month outside London) for nine months.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">5. Biometric Information</h5>
                <p className="text-gray-700">Provide fingerprints and photo at a Visa Application Centre (VAC) or use the UK Immigration: ID Check app where available.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">6. Supporting Documents</h5>
                <p className="text-gray-700">Prepare passport, CAS letter, financial evidence (28+ consecutive days), academic qualifications, ATAS certificate (if applicable), and TB test results (if required).</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">7. Credibility Interviews</h5>
                <p className="text-gray-700">Some applicants may be asked to attend a credibility interview. Be prepared to discuss your course, university choice, and career plans.</p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-400 bg-purple-50 rounded-r shadow-sm">
                <h5 className="font-semibold mb-2">8. Post-Arrival Requirements</h5>
                <p className="text-gray-700">Collect your BRP within 10 days of arrival, register with the police (if required), attend university enrollment, and register with a local GP.</p>
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
                  <p className="mt-2 text-sm text-gray-600">Research universities</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">12</span>
                  </div>
                  <h5 className="font-semibold text-sm">12 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Prepare applications</p>
                </div>
                
                <div className="w-full sm:w-1/5 text-center mb-6 sm:mb-0 relative z-10">
                  <div className="w-10 h-10 mx-auto rounded-full bg-purple-600 text-white flex items-center justify-center mb-2">
                    <span className="text-sm font-bold">6</span>
                  </div>
                  <h5 className="font-semibold text-sm">6 Months Before</h5>
                  <p className="mt-2 text-sm text-gray-600">Apply for visa</p>
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
                    <span className="text-gray-700"><strong>October 15:</strong> Oxford, Cambridge, medicine applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>January 31:</strong> Most UCAS undergraduate applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>Jan-Mar:</strong> Many postgraduate program deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700"><strong>Nov-Feb:</strong> Most scholarship application deadlines</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-purple-800">Post-Brexit Considerations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">EU/EEA/Swiss students now require Student visas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">European students face international fee levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">EU students need Electronic Travel Authorisation (ETA) from 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                    <span className="text-gray-700">Turing Scheme has replaced Erasmus+ for exchanges</span>
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
                      <span className="text-gray-700">Graduate Route allows 2-year post-study work (3 years for PhDs)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">English requirements can be met through IELTS, TOEFL, PTE or prior education</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Students can work 20 hours/week during term time, full-time during holidays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mt-1.5 mr-2"></span>
                      <span className="text-gray-700">Dependents can accompany students on postgrad courses lasting 9+ months</span>
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