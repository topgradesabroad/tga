export default function Overview() {
    return (
      <section id="overview" className="py-20 scroll-mt-32">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Introductory Header */}
          <header>
            <h1 className="text-4xl font-bold  border-l-4 border-purple-600 pl-4 text-gray-900">
              UK Study Abroad 2025
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              The United Kingdom offers world-class education with over 150 institutions ranked among global top universities. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in the UK.
            </p>
          </header>
  
          {/* International Student Landscape */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              International Student Landscape
            </h2>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                As of 2024, the UK hosts over <strong>679,970</strong> international students, representing a <strong>8.6%</strong> increase since 2021. Students benefit from internationally recognized qualifications, culturally diverse campuses, and extensive professional networking opportunities.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>China</span>
                        <span className="font-semibold">139,340</span>
                      </li>
                      <li className="flex justify-between">
                        <span>India</span>
                        <span className="font-semibold">126,535</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Nigeria</span>
                        <span className="font-semibold">44,195</span>
                      </li>
                      <li className="flex justify-between">
                        <span>United States</span>
                        <span className="font-semibold">23,205</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pakistan</span>
                        <span className="font-semibold">17,895</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-sm text-gray-500 mb-2">STUDENT LEVEL</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Undergraduate</span>
                        <span className="font-semibold">42%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Postgrad Taught</span>
                        <span className="font-semibold">46%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Postgrad Research</span>
                        <span className="font-semibold">9%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Other Courses</span>
                        <span className="font-semibold">3%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Degree Programs</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
                  {[
                    { name: "Business", percent: "28%" },
                    { name: "Engineering", percent: "15%" },
                    { name: "Computer Science", percent: "12%" },
                    { name: "Medicine", percent: "9%" },
                    { name: "Arts & Humanities", percent: "8%" },
                    { name: "Law", percent: "7%" },
                  ].map((item, index) => (
                    <div key={index} className="bg-purple-50 p-3 rounded-lg text-center">
                      <div className="font-medium text-purple-700">{item.percent}</div>
                      <div className="text-sm text-gray-600">{item.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* UK Higher Education & Leading Universities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              UK Higher Education
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The UK higher education system comprises 164 universities and higher education institutions, with a framework that guarantees high standards through rigorous quality assurance. The Russell Group of 24 research-intensive universities attracts 80% of research funding.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading UK Universities</h3>
            <div className="space-y-4">
              {[
                { university: "University of Oxford", rank: "1", intl: "45%", ugTuition: "£29,700-£44,240", pgTuition: "£30,340-£48,670", acceptance: "17.5%" },
                { university: "University of Cambridge", rank: "3", intl: "42%", ugTuition: "£24,507-£63,990", pgTuition: "£29,340-£58,038", acceptance: "18.6%" },
                { university: "Imperial College London", rank: "6", intl: "61%", ugTuition: "£35,100-£46,650", pgTuition: "£37,800-£54,100", acceptance: "14.3%" },
                { university: "University College London", rank: "8", intl: "59%", ugTuition: "£23,300-£45,000", pgTuition: "£25,800-£52,100", acceptance: "21.3%" },
                { university: "University of Edinburgh", rank: "15", intl: "47%", ugTuition: "£26,500-£35,100", pgTuition: "£24,900-£36,400", acceptance: "22%" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      #{item.rank}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.university}</h4>
                      <div className="text-sm text-gray-600">
                        {item.intl} international students • {item.acceptance} acceptance rate
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Undergraduate (Int'l)</div>
                      <div className="font-medium">{item.ugTuition}</div>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <div className="text-xs text-gray-500">Postgraduate (Int'l)</div>
                      <div className="font-medium">{item.pgTuition}</div>
                    </div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-gray-600 italic">*World rankings based on QS World University Rankings 2024</p>
            </div>
          </section>
  
          {/* Research & Innovation */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              Research & Innovation
            </h2>
            <p className="text-gray-700 mb-5">
              The UK is a global research powerhouse, investing over <strong>£39.8 billion</strong> annually in R&D. UK universities produced 14% of the world's most highly-cited research papers despite representing just 1% of global researchers.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="font-medium text-blue-800">Life Sciences & Medicine</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Leading COVID-19 vaccine development, genomics, and precision medicine at Oxford, Cambridge, and Imperial. UK research leads to approximately 3,400 life science patents annually.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-medium text-purple-800">Artificial Intelligence & Technology</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Pioneering work in machine learning, natural language processing, and AI ethics at UCL, Edinburgh, and Cambridge. The UK AI sector is valued at £15.6 billion.
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="font-medium text-green-800">Climate Science & Sustainability</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Breakthrough research in renewable energy, carbon capture, and climate modeling at Imperial, Edinburgh, and Manchester, contributing to the UK's commitment to net-zero emissions by 2050.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
                <div className="space-y-3">
                  {[
                    { agency: "UK Research & Innovation (UKRI)", amount: "£7.9B", focus: "Cross-disciplinary research" },
                    { agency: "Wellcome Trust", amount: "£1.2B", focus: "Biomedical research & innovation" },
                    { agency: "National Institute for Health Research", amount: "£1.3B", focus: "Health & care research" },
                    { agency: "Innovate UK", amount: "£1.1B", focus: "Business innovation" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                      <div className="flex-grow">{item.agency}</div>
                      <div className="text-right font-medium text-blue-600">{item.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
  
          {/* Scholarships & Financial Support */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              Scholarships & Financial Support
            </h2>
            <p className="text-gray-700 mb-5">
              The UK offers various prestigious scholarships specifically for international students, making quality education more accessible. Over £350 million is provided annually through scholarships, grants, and bursaries.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  name: "Chevening Scholarships", 
                  value: "Full tuition + £1,000/month stipend", 
                  deadline: "November",
                  description: "The UK government's flagship scholarship program for outstanding emerging leaders worldwide. Covers full tuition fees, living expenses, return flights, and other allowances."
                },
                { 
                  name: "Commonwealth Scholarships", 
                  value: "Full tuition + £1,236/month stipend", 
                  deadline: "December",
                  description: "For students from Commonwealth countries pursuing Master's and PhDs. Aimed at those who could not otherwise afford to study in the UK and who have the potential to enhance development."
                },
                { 
                  name: "GREAT Scholarships", 
                  value: "£10,000 towards tuition", 
                  deadline: "Varies by university",
                  description: "£10,000 scholarships for students from 18 countries across various disciplines. A partnership between the British Council and UK universities to attract the best and brightest students."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center mt-2 mb-3">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {item.value}
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Deadline: {item.deadline}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
              
              <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-yellow-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  Pro Tip
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                  Many universities offer their own scholarships specifically for international students. Always check the university's scholarship page as early as possible, as many have application deadlines several months before the course start date.
                </p>
              </div>
            </div>
          </section>
  
          {/* Career & Immigration Opportunities */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              Career & Immigration Opportunities
            </h2>
            <p className="text-gray-700 mb-5">
              The UK offers excellent post-study work opportunities through its Graduate Route visa and other immigration pathways. UK degrees are highly valued by global employers, with graduates earning on average 20% more than their peers.
            </p>
            
            <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Visa Pathways for Graduates</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Graduate Route Visa</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      2 years for Bachelor's and Master's graduates; 3 years for PhD graduates. No employer sponsorship required, allowing graduates to work, seek employment, or start a business.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Skilled Worker Visa</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      For graduates with job offers meeting minimum salary threshold (£26,200 for most roles). Allows you to stay for up to 5 years and can lead to settlement after continuous residence.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">High Potential Individual Visa</h4>
                    <p className="text-sm text-gray-700 mt-1">
                      2-year work visa for graduates from top global universities. Allows you to work, seek employment, or start a business without employer sponsorship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                High-Demand Career Sectors
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { sector: "Technology", growth: "+15.4%" },
                  { sector: "Healthcare", growth: "+9.2%" },
                  { sector: "Finance", growth: "+7.8%" },
                  { sector: "Clean Energy", growth: "+11.3%" },
                  { sector: "Creative Industries", growth: "+6.1%" },
                  { sector: "Education", growth: "+5.7%" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded shadow-sm text-center">
                    <div className="font-medium text-gray-900">{item.sector}</div>
                    <div className="text-sm text-green-600 font-medium">{item.growth}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
  
          {/* Living & Cultural Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              Living & Cultural Experience
            </h2>
            <p className="text-gray-700 mb-5">
              The UK offers diverse living experiences across its regions, with each city having its unique cultural identity. From London's cosmopolitan energy to Edinburgh's historic charm and Manchester's vibrant arts scene, students enjoy an enriching experience beyond academics.
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
            <div className="space-y-4 mb-6">
              {[
                { city: "London", rent: "£800-£1,500", food: "£250-£350", transport: "£160", extras: "£200-£300", total: "£1,410-£2,310", highlight: "Cosmopolitan capital with world-class museums and cultural attractions" },
                { city: "Manchester", rent: "£500-£800", food: "£200-£300", transport: "£80", extras: "£150-£250", total: "£930-£1,430", highlight: "Vibrant music scene, cultural diversity, and sporting heritage" },
                { city: "Edinburgh", rent: "£550-£850", food: "£200-£300", transport: "£60", extras: "£150-£250", total: "£960-£1,460", highlight: "Historic architecture, festivals, and breathtaking landscapes" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2">
                    <h4 className="font-medium text-white">{item.city}</h4>
                  </div>
                  <div className="p-4">
                    <div className="text-sm text-gray-700 italic mb-3">{item.highlight}</div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                      <div className="text-gray-600">Monthly Rent:</div>
                      <div className="font-medium">{item.rent}</div>
                      <div className="text-gray-600">Food & Groceries:</div>
                      <div className="font-medium">{item.food}</div>
                      <div className="text-gray-600">Transportation:</div>
                      <div className="font-medium">{item.transport}</div>
                      <div className="text-gray-600">Entertainment & Misc:</div>
                      <div className="font-medium">{item.extras}</div>
                      <div className="text-gray-600 font-medium">Monthly Total:</div>
                      <div className="font-medium text-blue-600">{item.total}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Student Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Healthcare</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    International students on courses longer than 6 months have access to NHS healthcare after paying the Immigration Health Surcharge (£624/year) as part of your visa application.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Transportation</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Extensive public transport networks with student discounts. The 16-25 Railcard saves 1/3 on rail travel (£30/year). Most cities have good bus services and cycle hire schemes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Banking</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Most major banks offer student accounts with benefits such as interest-free overdrafts. You'll need your student ID, proof of address, and visa to open an account.
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Application Process Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
              Application Timeline
            </h2>
            
            <div className="relative border-l-2 border-blue-200 pl-6 pb-2 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {[
                {
                  time: "12-18 months before",
                  title: "Research & Selection",
                  content: "Research universities and programs, check entry requirements and deadlines, prepare for English tests (IELTS/TOEFL), begin scholarship research."
                },
                {
                  time: "10-12 months before",
                  title: "Application Preparation",
                  content: "Write personal statement, secure academic references, prepare portfolio (if applicable), take required standardized tests."
                },
                {
                  time: "8-10 months before",
                  title: "Submit Applications",
                  content: "Submit UCAS application (undergraduate) by January deadline, or apply directly to universities (postgraduate). Priority deadline for Oxford, Cambridge, Medicine: October 15."
                },
                {
                  time: "6-8 months before",
                  title: "Scholarship Applications",
                  content: "Apply for scholarships - Chevening (November), Commonwealth (December), and university-specific scholarships (various deadlines)."
                },
                {
                  time: "3-6 months before",
                  title: "Pre-Departure Preparations",
                  content: "Apply for student visa (typically 3 months before), arrange accommodation, purchase health insurance, book flights and plan arrival."
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-7 w-3 h-3 rounded-full bg-blue-500"></div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mb-2">
                      {item.time}
                    </div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-700 mt-1">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Key Undergraduate Deadlines (UCAS)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-800 mr-2">•</span>
                  <span><strong>15 October</strong> - Oxford, Cambridge, Medicine, Dentistry, Veterinary Science</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-800 mr-2">•</span>
                  <span><strong>25 January</strong> - Main deadline for most undergraduate courses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-800 mr-2">•</span>
                  <span><strong>30 June</strong> - Last date for applications before Clearing</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    );
  }