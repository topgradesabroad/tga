import React from 'react';

export default function USAEntryRequirements() {
  return (
    <section id="requirements">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 border-l-4 pl-4 border-purple-600">
          Entry Requirements for US Programs
        </h2>

        {/* Undergraduate Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Undergraduate Programs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  Academic Requirements
                </h4>
                <div className="text-gray-700 ml-10 space-y-2">
                  <p>High school diploma or equivalent with a GPA of 3.0+ on a 4.0 scale (higher for competitive universities).</p>
                  <p>Most schools consider SAT/ACT scores (though many are now test-optional) and prefer students with AP or IB coursework.</p>
                  <p>Strong preparation in core subjects: English, mathematics, science, social studies, and foreign language.</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </span>
                  Language Proficiency
                </h4>
                <div className="text-gray-700 ml-10">
                  <p>International students must demonstrate English proficiency through standardized tests:</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">TOEFL</p>
                      <p className="text-sm">80-100+ IBT</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">IELTS</p>
                      <p className="text-sm">6.5-7.0+</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">Duolingo</p>
                      <p className="text-sm">105-115+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Pro Tips for Success
              </h4>
              <div className="space-y-4 ml-10">
                <div className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">1</span>
                  <p className="text-gray-700">Apply to 6-8 schools across "reach," "target," and "safety" categories.</p>
                </div>
                <div className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">2</span>
                  <p className="text-gray-700">Submit applications early, especially for rolling admissions.</p>
                </div>
                <div className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">3</span>
                  <p className="text-gray-700">Focus on sustained involvement in fewer activities rather than brief participation in many.</p>
                </div>
                <div className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">4</span>
                  <p className="text-gray-700">For competitive schools, aim for SAT scores above 1500 or ACT scores above 33.</p>
                </div>
                <div className="flex items-start">
                  <span className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">5</span>
                  <p className="text-gray-700">Request recommendation letters from teachers who know you well, not just those who taught prestigious courses.</p>
                </div>
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
                <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </span>
                  Academic Requirements
                </h4>
                <div className="text-gray-700">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Essentials</p>
                      <p className="text-sm mt-1">Bachelor's degree from an accredited institution with minimum GPA of 3.0 (higher for top programs)</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Test Scores</p>
                      <p className="text-sm mt-1">GRE or GMAT scores, with requirements varying by program and institution</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Supporting Materials</p>
                      <p className="text-sm mt-1">Letters of recommendation (2-3), statement of purpose, resume highlighting relevant experience</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="font-medium text-purple-600">Transcripts</p>
                      <p className="text-sm mt-1">Complete undergraduate academic records and any post-graduate coursework</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </span>
                  Language Requirements
                </h4>
                <div className="text-gray-700 ml-10">
                  <p>Graduate programs typically require higher English proficiency scores:</p>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">TOEFL</p>
                      <p className="text-sm">90-100+ IBT</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">IELTS</p>
                      <p className="text-sm">7.0-7.5+</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="font-medium text-purple-600">Duolingo</p>
                      <p className="text-sm">115-125+</p>
                    </div>
                  </div>
                  <p className="mt-2 text-sm italic">Note: Teaching assistantships may require higher scores.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="text-xl font-medium mb-4 text-gray-900 flex items-center">
                <span className="h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Strategy for Success
              </h4>
              <div className="space-y-4 ml-10">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Connect with faculty before applying</p>
                    <p className="text-gray-600 text-sm">Reach out to potential advisors to establish rapport and determine research fit.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Customize your materials</p>
                    <p className="text-gray-600 text-sm">Tailor your statement of purpose to each program's strengths and your goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Highlight relevant research</p>
                    <p className="text-gray-600 text-sm">Showcase your research experience that aligns with the program's focus.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Consider subject-specific tests</p>
                    <p className="text-gray-600 text-sm">GRE subject tests can strengthen applications for specialized programs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Apply for funding simultaneously</p>
                    <p className="text-gray-600 text-sm">Seek graduate assistantships and fellowships at the same time as admission.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Professional Programs
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Medical School */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
               
                <h4 className="text-xl font-medium text-gray-900">Medical School (MD)</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Academic</p>
                  <p className="text-sm mt-1">Bachelor's degree with pre-med coursework, 3.5+ GPA (science and overall)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Standardized Tests</p>
                  <p className="text-sm mt-1">MCAT score (average for accepted students: 511-512) Also NEET for Indians</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Experience</p>
                  <p className="text-sm mt-1">Clinical experience / shadowing and research experience (preferred)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Application</p>
                  <p className="text-sm mt-1">AMCAS application, secondary applications, letters of recommendation</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">Pro Tip</p>
                  <p className="text-sm mt-1">Apply early (June-July) and complete secondaries quickly. Consider 15-20 carefully selected schools.</p>
                </div>
              </div>
            </div>
            
            {/* Law School */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                
                <h4 className="text-xl font-medium text-gray-900">Law School (JD)</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Academic</p>
                  <p className="text-sm mt-1">Bachelor's degree (no specific major required), 3.5+ GPA for top schools</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Standardized Tests</p>
                  <p className="text-sm mt-1">LSAT or GRE scores (LSAT preferred and heavily weighted)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Materials</p>
                  <p className="text-sm mt-1">Personal statement, resume, letters of recommendation, Transcripts</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Application</p>
                  <p className="text-sm mt-1">LSAC application with school-specific addenda as needed</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">Pro Tip</p>
                  <p className="text-sm mt-1">Focus heavily on LSAT preparation—it can raise your score 10+ points and is the most important factor.</p>
                </div>
              </div>
            </div>
            
            {/* MBA Programs */}
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                
                <h4 className="text-xl font-medium text-gray-900">MBA Programs (Ivy)</h4>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Academic</p>
                  <p className="text-sm mt-1">Bachelor's degree in any field, GPA important but weighed alongside other factors</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Experience</p>
                  <p className="text-sm mt-1">3-5 years of professional work experience with demonstrated progression</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Standardized Tests</p>
                  <p className="text-sm mt-1">GMAT or GRE scores (aim for 700+ GMAT for top 20 programs)</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-600">Materials</p>
                  <p className="text-sm mt-1">Essays, recommendation letters, resume, and interview (by invitation)</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-l-2 border-purple-400">
                  <p className="font-medium text-gray-900">Pro Tip</p>
                  <p className="text-sm mt-1">Highlight leadership experience and articulate clear post-MBA goals in your essays.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Specialized Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">
            Specialized Programs
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-3 shadow-sm">
            <div className="flex">
              <div className="flex-shrink-0">
              </div>
              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900">Fine Arts & Design Programs</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Portfolio of 10-20 pieces showing range and technical ability</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Artist statement explaining creative approach and goals</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Resume highlighting exhibitions or relevant experience</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Attend National Portfolio Day events for valuable feedback</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                
              </div>
              <div>
                <h4 className="text-xl font-medium mb-4 text-gray-900">Engineering & Computer Science</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Strong foundation in mathematics and physical sciences</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Programming portfolio (GitHub) for CS applicants</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>Research experience or technical projects for graduate programs</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400 mr-2"></div>
                    <p>GRE Subject Test recommended for competitive programs</p>
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