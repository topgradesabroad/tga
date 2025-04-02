import React from 'react';

export default function FranceEntryRequirements() {
  return (
    <section id="requirements" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-4 pl-4 border-purple-600">
          France Study Requirements Guide
        </h2>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Undergraduate Programs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                French Academic Requirements
              </h4>
              <div className="text-gray-700 space-y-2">
                <p>Baccalauréat or equivalent qualification with strong grades (mention Très Bien for top universities)</p>
                <p>International Baccalaureate (IB) accepted with 30-36+ points total</p>
                <p>Many programs require specific subject prerequisites (mathematics, sciences)</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                French Language Requirements
              </h4>
              <div className="text-gray-700">
                <div className="mt-2 grid grid-cols-3 gap-2">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">DELF</p>
                    <p className="text-sm">B2-C1</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">TCF</p>
                    <p className="text-sm">Intermediate-Advanced</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="font-medium text-purple-600">English*</p>
                    <p className="text-sm">B2-C1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600 mt-8">
            <h4 className="text-xl font-medium mb-4 text-gray-900">
              French Undergraduate Application Process
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">1</span>
                <p className="text-gray-700">Apply directly to universities or through Campus France central admissions service</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">2</span>
                <p className="text-gray-700">Submit motivation letter and relevant documentation</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">3</span>
                <p className="text-gray-700">Provide authenticated academic transcripts and certificates</p>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">4</span>
                <p className="text-gray-700">Key deadlines: December 15 for fall semester, April 15 for spring semester</p>
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
                  French Postgraduate Entry Requirements
                </h4>
                <div className="text-gray-700">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Master's Degrees</p>
                      <p className="text-sm mt-1">Bachelor's degree with good grades (typically 12/20 or higher)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Research Degrees</p>
                      <p className="text-sm mt-1">Master's degree with excellent grades plus research proposal for PhD</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900">
                  French Postgraduate Language Requirements
                </h4>
                <div className="text-gray-700">
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">DELF</p>
                      <p className="text-sm">B2-C1</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">IELTS*</p>
                      <p className="text-sm">6.5-7.0</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">TOEFL*</p>
                      <p className="text-sm">90-100+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-medium mb-4 text-gray-900">
                French Postgraduate Application Strategy
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Direct university applications</p>
                    <p className="text-gray-600 text-sm">Apply to each institution separately through their online portal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">French scholarship deadlines</p>
                    <p className="text-gray-600 text-sm">Apply early for Erasmus+, Campus France, and university-specific scholarships</p>
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

        {/* French Professional Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            French Professional Programs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* French Medical School */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">French Medicine (Médecine)</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Requirements</p>
                  <p className="text-sm mt-1">Highly competitive: excellent Baccalauréat grades (typically mention Très Bien) or success in the first-year health exam (PASS)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Entrance Exams</p>
                  <p className="text-sm mt-1">Competitive entrance exam (PASS) for health studies at select universities</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">French-Specific Note</p>
                  <p className="text-sm mt-1">6- to 9-year program with national exams; strong French language skills required; qualification for medical practice</p>
                </div>
              </div>
            </div>
            
            {/* French Law Programs */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">French Law Programs</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Licence en Droit</p>
                  <p className="text-sm mt-1">Rigorous undergraduate law curriculum with strong academic performance</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">LLM</p>
                  <p className="text-sm mt-1">Requires first law degree with good grades (typically 12/20 or higher)</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">French-Specific Note</p>
                  <p className="text-sm mt-1">Civil law system; post-graduation professional training required for legal practice</p>
                </div>
              </div>
            </div>
            
            {/* French MBA Programs */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <h4 className="text-xl font-medium text-gray-900">French MBA Programs</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Requirements</p>
                  <p className="text-sm mt-1">Bachelor's degree, 2-3+ years work experience, GMAT 600+</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Top Business Schools</p>
                  <p className="text-sm mt-1">HEC Paris, INSEAD, ESSEC, EDHEC, ESCP Europe</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">French Advantage</p>
                  <p className="text-sm mt-1">Strong post-study work opportunities and robust industry connections in finance, technology, and luxury sectors</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* French Visa Requirements */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            French Student Visa Information (Updated March 2025)
          </h3>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium mb-2 text-gray-900">French Student Visa Requirements</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Acceptance letter from a French university</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Proof of financial support: Approximately €7,380 per year (bank guarantee or scholarship)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Valid passport and clean criminal record</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Visa application fee: €99 (current 2025 rate)</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Health insurance coverage (public or private coverage approved for students)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium mb-2 text-gray-900">French Visa Key Information</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Long-stay student visa: apply at the French embassy/consulate in your home country</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Convert to residence permit after arrival in France</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Post-Study Work Option: 18 months to secure employment after graduation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2 mt-2"></div>
                    <p>Work rights: Up to 964 hours per year (approx. 60% of full-time)</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400 mt-4">
                    <p className="font-medium text-gray-900">Important French Update</p>
                    <p className="text-sm mt-1">As of March 2025, France has introduced a streamlined digital visa application process and increased the required financial support amount for student visas.</p>
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
