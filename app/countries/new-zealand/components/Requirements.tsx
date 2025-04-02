import React from 'react';

export default function NewZealandEntryRequirements() {
  return (
    <section id="requirements" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-4 pl-4 border-purple-600">
          New Zealand Study Requirements Guide
        </h2>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Undergraduate Programs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                New Zealand Academic Requirements
              </h4>
              <div className="text-gray-700 space-y-2">
                <p>
                  National Certificate of Educational Achievement (NCEA) Level 3 or equivalent with strong results 
                  (top universities may require distinctions)
                </p>
                <p>
                  International Baccalaureate (IB) accepted with 30-36+ points total
                </p>
                <p>
                  Many programs require specific subject prerequisites (mathematics, sciences)
                </p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                English Language Requirements
              </h4>
              <div className="text-gray-700">
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">IELTS</p>
                    <p className="text-sm">6.0-7.0</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">TOEFL</p>
                    <p className="text-sm">90-100+</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">PTE</p>
                    <p className="text-sm">58-65</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 mt-8">
            <h4 className="text-xl font-medium mb-4 text-gray-900">
              New Zealand Undergraduate Application Process
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">1</span>
                <p className="text-gray-700">Apply directly to universities or through an accredited New Zealand education agent</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">2</span>
                <p className="text-gray-700">Submit a motivation letter and all relevant documentation</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">3</span>
                <p className="text-gray-700">Provide authenticated academic transcripts and certificates</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">4</span>
                <p className="text-gray-700">Key deadlines vary by institution; generally, apply at least 6 months before program start</p>
              </div>
            </div>
          </div>
        </div>

        {/* Postgraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Postgraduate Programs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900">
                  New Zealand Postgraduate Entry Requirements
                </h4>
                <div className="text-gray-700">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Master's Degrees</p>
                      <p className="text-sm mt-1">Bachelor's degree with a minimum GPA requirement (typically 3.0 or above)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Research Degrees</p>
                      <p className="text-sm mt-1">Master's degree with excellent results plus a competitive research proposal for PhD</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900">
                  English Language Requirements
                </h4>
                <div className="text-gray-700">
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">IELTS</p>
                      <p className="text-sm">6.5-7.0</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">TOEFL</p>
                      <p className="text-sm">90-100+</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">PTE</p>
                      <p className="text-sm">58-65</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                New Zealand Postgraduate Application Strategy
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Direct university applications</p>
                    <p className="text-gray-600 text-sm">Apply directly through each institution's online portal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">New Zealand scholarship deadlines</p>
                    <p className="text-gray-600 text-sm">Apply early for government, institutional, and private scholarships</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Research supervisors</p>
                    <p className="text-gray-600 text-sm">For PhD programs, contact potential supervisors before applying</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Zealand Professional Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            New Zealand Professional Programs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* New Zealand Medicine */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">New Zealand Medicine</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Requirements</p>
                  <p className="text-sm mt-1">
                    Highly competitive: outstanding NCEA results or equivalent, plus success in medical entrance assessments (e.g., UMAT)
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Entrance Exams</p>
                  <p className="text-sm mt-1">
                    Competitive entrance exams for medical studies at select universities
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">New Zealand-Specific Note</p>
                  <p className="text-sm mt-1">
                    6-year program with rigorous clinical training and national accreditation; high standards required for entry into the medical profession
                  </p>
                </div>
              </div>
            </div>
            
            {/* New Zealand Law Programs */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">New Zealand Law Programs</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Bachelor of Laws (LLB)</p>
                  <p className="text-sm mt-1">
                    Rigorous undergraduate law curriculum with strong academic performance
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">LLM</p>
                  <p className="text-sm mt-1">
                    Requires a first law degree with good academic results
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">New Zealand-Specific Note</p>
                  <p className="text-sm mt-1">
                    Based on a common law system; additional professional training required for legal practice
                  </p>
                </div>
              </div>
            </div>
            
            {/* New Zealand MBA Programs */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">New Zealand MBA Programs</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Requirements</p>
                  <p className="text-sm mt-1">
                    Bachelor's degree, 2-3+ years work experience, and a competitive GMAT or equivalent score
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Top Business Schools</p>
                  <p className="text-sm mt-1">
                    University of Auckland, Victoria University of Wellington, University of Otago, AUT, Massey University
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">New Zealand Advantage</p>
                  <p className="text-sm mt-1">
                    Strong post-study work opportunities and a dynamic business environment with global connections
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Zealand Visa Requirements */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            New Zealand Student Visa Information (Updated March 2025)
          </h3>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium mb-2 text-gray-900">New Zealand Student Visa Requirements</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Acceptance letter from a New Zealand institution</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Proof of financial support: Approximately NZD $15,000 per year for living expenses (bank guarantee or scholarship)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Valid passport and a clean criminal record</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Visa application fee: NZD $330 (current 2025 rate)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Health insurance coverage (public or private, as approved for students)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium mb-2 text-gray-900">New Zealand Visa Key Information</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>
                      Student visa: apply online or at the New Zealand embassy/consulate in your home country
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>
                      Maintain full-time enrollment to keep your visa valid and check eligibility for post-study work visas
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Post-Study Work Option: Up to 3 years for eligible graduates</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>
                      Work rights: Up to 20 hours per week during academic terms and full-time during scheduled breaks
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400 mt-4">
                    <p className="font-medium text-gray-900">Important New Zealand Update</p>
                    <p className="text-sm mt-1">
                      As of March 2025, New Zealand has implemented a streamlined digital visa application process and updated financial requirements for student visas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
