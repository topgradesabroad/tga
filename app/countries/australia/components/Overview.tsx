export default function Overview() {
  return (
    <section id="overview" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introductory Header */}
        <header>
          <h1 className="text-4xl font-bold  border-l-4 border-purple-600 pl-4 text-gray-900">
            Australia Study Abroad 2025
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Australia offers high-quality education with over 43 institutions recognized globally for academic excellence. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in Australia.
          </p>
        </header>

        {/* International Student Landscape */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            International Student Landscape
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As of 2024, Australia hosts over <strong>720,300</strong> international students, representing a <strong>15.8%</strong> increase since 2021. Students benefit from globally recognized qualifications, culturally diverse campuses, and post-graduation work opportunities with pathways to permanent residency.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>China</span>
                      <span className="font-semibold">165,720</span>
                    </li>
                    <li className="flex justify-between">
                      <span>India</span>
                      <span className="font-semibold">128,150</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nepal</span>
                      <span className="font-semibold">65,860</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Vietnam</span>
                      <span className="font-semibold">30,520</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Indonesia</span>
                      <span className="font-semibold">22,830</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">STUDENT LEVEL</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Vocational (VET)</span>
                      <span className="font-semibold">29%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Undergraduate</span>
                      <span className="font-semibold">37%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Master's Programs</span>
                      <span className="font-semibold">26%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doctoral & Others</span>
                      <span className="font-semibold">8%</span>
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
                  { name: "Information Technology", percent: "13%" },
                  { name: "Health Sciences", percent: "12%" },
                  { name: "Social Sciences", percent: "6%" },
                  { name: "Hospitality", percent: "8%" },
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

        {/* Australia Higher Education & Leading Universities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            Australian Higher Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Australian higher education system comprises 43 universities and over 125 vocational education and training (VET) providers. Education is regulated nationally through the Australian Qualifications Framework (AQF). The Group of Eight (Go8) represents Australia's leading research-intensive universities, attracting 70% of competitive research funding.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading Australian Universities</h3>
          <div className="space-y-4">
            {[
              { university: "University of Melbourne", rank: "14", intl: "39%", ugTuition: "AUD$42,000-$56,500", pgTuition: "AUD$38,400-$62,800", acceptance: "70%" },
              { university: "University of Sydney", rank: "19", intl: "40%", ugTuition: "AUD$40,900-$58,700", pgTuition: "AUD$41,500-$60,200", acceptance: "30%" },
              { university: "Australian National University", rank: "34", intl: "36%", ugTuition: "AUD$39,500-$54,800", pgTuition: "AUD$42,700-$55,900", acceptance: "35%" },
              { university: "University of Queensland", rank: "43", intl: "38%", ugTuition: "AUD$36,800-$49,600", pgTuition: "AUD$38,900-$53,400", acceptance: "40%" },
              { university: "Monash University", rank: "57", intl: "41%", ugTuition: "AUD$35,200-$49,000", pgTuition: "AUD$37,300-$51,800", acceptance: "45%" }
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
            Australia is a global research leader, investing over <strong>AUD$35 billion</strong> annually in R&D. Australian universities are especially renowned for their contributions to biomedical sciences, environmental studies, astronomy, and quantum computing research.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800">Medical Research</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Australia leads global research in immunology, cancer treatment, and vaccine development. Home to Nobel Prize winners in medicine and pioneers in fields such as penicillin development and cochlear implants, with institutions like the Walter and Eliza Hall Institute receiving over AUD$780 million in funding.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800">Environmental Sciences</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    World-class research in marine biology, climate science, and conservation at institutions like James Cook University and ANU. Australia's proximity to the Great Barrier Reef and unique ecosystems makes it a leader in environmental research with over 2,300 specialized research projects nationally.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800">Quantum Technology</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Pioneering research in quantum computing and nanotechnology at UNSW, University of Sydney, and ANU. Australia ranks 3rd globally in quantum research with AUD$625 million in dedicated funding through the National Quantum Strategy and commercial partnerships.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "Australian Research Council (ARC)", amount: "AUD$0.8B", focus: "Pure and applied research across all disciplines" },
                  { agency: "National Health and Medical Research Council", amount: "AUD$0.9B", focus: "Health & medical research" },
                  { agency: "Cooperative Research Centres", amount: "AUD$0.7B", focus: "Industry-led collaborative research" },
                  { agency: "Australian Renewable Energy Agency", amount: "AUD$1.6B", focus: "Renewable energy technology" }
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
            Australia offers various prestigious scholarships for international students, making quality education more accessible. Over AUD$300 million is provided annually through scholarships, grants, and bursaries for international students.
          </p>
          
          <div className="space-y-4">
            {[
              { 
                name: "Australia Awards", 
                value: "Full tuition + living stipend", 
                deadline: "April/October",
                description: "Prestigious government scholarships for outstanding students from developing countries across the Indo-Pacific region. Covers full tuition fees, living expenses, airfare, and health insurance."
              },
              { 
                name: "Destination Australia", 
                value: "AUD$15,000 per year", 
                deadline: "Varies by institution",
                description: "Government-funded program to support international students studying at regional Australian institutions, promoting educational opportunities outside major metropolitan areas."
              },
              { 
                name: "Research Training Program (RTP)", 
                value: "AUD$28,600 per year + tuition", 
                deadline: "August/March",
                description: "For high-achieving international students pursuing research masters or doctoral degrees at Australian universities. Provides stipend and covers tuition fees for up to 4 years."
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
                Most Australian universities offer international merit scholarships that can reduce tuition by 10-50%. Application deadlines for these scholarships are typically 2-3 months before course commencement. Check university-specific international student pages, as many require separate applications for these awards.
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
            Australia offers exceptional post-graduation work and immigration pathways through the Post-Study Work Visa and Skilled Migration Program. International graduates from Australian institutions have clear paths to permanent residency with 91% of international students reporting that immigration possibilities influenced their decision to study in Australia.
          </p>
          
          <div className="bg-white p-5 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Immigration Pathways for Graduates</h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Post-Study Work Visa (Subclass 485)</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Temporary visa allowing graduates to work in Australia for 2-4 years depending on qualification level. Bachelor's degree graduates receive 2 years, Master's 3 years, and PhD 4 years. Enables unrestricted work rights, providing valuable Australian work experience for permanent residency applications.
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
                  <h4 className="font-medium text-gray-900">Skilled Migration Program</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Points-based system with Australian qualifications and work experience earning significant additional points. Graduates in high-demand occupations on the Skilled Occupation List can apply for permanent residency after gaining relevant work experience.
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
                  <h4 className="font-medium text-gray-900">Regional Visas</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Special visa categories for graduates who study and work in regional Australia. Offers priority processing, additional points for permanent residency, and extended post-study work rights (up to 5 years). Designed to address skills shortages in regional areas while providing enhanced immigration pathways.
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
                { sector: "Healthcare", growth: "+23.1%" },
                { sector: "Information Technology", growth: "+25.6%" },
                { sector: "Renewable Energy", growth: "+19.3%" },
                { sector: "Engineering", growth: "+9.2%" },
                { sector: "Education", growth: "+8.6%" },
                { sector: "Agriculture", growth: "+7.5%" }
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
            Australia consistently ranks among the world's top countries for quality of life and safety. International students experience a diverse, inclusive society with vibrant cultural scenes and breathtaking natural landscapes, from Sydney's iconic harbor to Melbourne's cultural sophistication and the natural wonders of the Great Barrier Reef and Outback.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
          <div className="space-y-4 mb-6">
            {[
              { city: "Sydney", rent: "AUD$1,500-$2,500", food: "AUD$500-$700", transport: "AUD$175", extras: "AUD$300-$400", total: "AUD$2,475-$3,775", highlight: "Australia's largest city with stunning harbor, beaches, and global business opportunities" },
              { city: "Melbourne", rent: "AUD$1,300-$2,200", food: "AUD$450-$650", transport: "AUD$155", extras: "AUD$250-$350", total: "AUD$2,155-$3,355", highlight: "Cultural capital with thriving arts scene, excellent food, and European-style laneways" },
              { city: "Brisbane", rent: "AUD$900-$1,600", food: "AUD$400-$550", transport: "AUD$140", extras: "AUD$200-$300", total: "AUD$1,640-$2,590", highlight: "Subtropical climate with relaxed lifestyle, affordable living, and proximity to Gold Coast" }
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
                  International students must have Overseas Student Health Cover (OSHC) as a visa requirement. OSHC costs approximately AUD$500-$700 per year depending on the provider. Coverage includes doctor visits, hospital treatment, and limited prescription medications. Some universities have partnerships with preferred providers offering discounted rates.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Transportation</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Major cities have extensive public transport systems with student concessions. Weekly passes range from AUD$30 in Brisbane to AUD$45 in Sydney. Most universities provide shuttle services between campuses. Cycling is popular with bike-sharing schemes available in all major cities, and international students can drive with their home country license for up to three months.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Banking</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Major banks (Commonwealth, ANZ, Westpac, NAB) offer specialized student accounts with reduced or waived fees. You'll need your student visa, passport, and university acceptance letter to open an account. Most banks allow international students to open accounts before arriving in Australia, making it easier to transfer funds for initial expenses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}