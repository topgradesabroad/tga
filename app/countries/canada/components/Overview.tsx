export default function Overview() {
  return (
    <section id="overview" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introductory Header */}
        <header>
          <h1 className="text-4xl font-bold  border-l-4 border-purple-600 pl-4 text-gray-900">
            Canada Study Abroad 2025
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Canada offers high-quality education with over 100 institutions recognized globally for academic excellence. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in Canada.
          </p>
        </header>

        {/* International Student Landscape */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            International Student Landscape
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As of 2024, Canada hosts over <strong>807,750</strong> international students, representing a <strong>12.6%</strong> increase since 2021. Students benefit from globally recognized qualifications, culturally diverse campuses, and post-graduation work opportunities with pathways to permanent residency.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>India</span>
                      <span className="font-semibold">319,130</span>
                    </li>
                    <li className="flex justify-between">
                      <span>China</span>
                      <span className="font-semibold">107,425</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Philippines</span>
                      <span className="font-semibold">32,455</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nigeria</span>
                      <span className="font-semibold">22,765</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Iran</span>
                      <span className="font-semibold">19,675</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">STUDENT LEVEL</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>College Diploma</span>
                      <span className="font-semibold">41%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Undergraduate</span>
                      <span className="font-semibold">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Master's Programs</span>
                      <span className="font-semibold">18%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doctoral & Others</span>
                      <span className="font-semibold">6%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Degree Programs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
                {[
                  { name: "Business", percent: "26%" },
                  { name: "Engineering", percent: "17%" },
                  { name: "Computer Science", percent: "14%" },
                  { name: "Health Sciences", percent: "11%" },
                  { name: "Social Sciences", percent: "7%" },
                  { name: "Hospitality", percent: "6%" },
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

        {/* Canada Higher Education & Leading Universities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            Canadian Higher Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Canadian higher education system comprises 96 public and private universities and over 150 colleges and institutes. Each province manages its own education system with federal quality assurance standards. The U15 Group of Canadian Research Universities attracts 80% of competitive research funding.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading Canadian Universities</h3>
          <div className="space-y-4">
            {[
              { university: "University of Toronto", rank: "21", intl: "26%", ugTuition: "CAD$45,900-$65,280", pgTuition: "CAD$28,570-$70,060", acceptance: "43%" },
              { university: "McGill University", rank: "30", intl: "30%", ugTuition: "CAD$23,508-$58,352", pgTuition: "CAD$19,500-$52,230", acceptance: "46%" },
              { university: "University of British Columbia", rank: "34", intl: "33%", ugTuition: "CAD$43,772-$57,928", pgTuition: "CAD$10,700-$56,528", acceptance: "52%" },
              { university: "University of Montreal", rank: "116", intl: "25%", ugTuition: "CAD$24,650-$31,250", pgTuition: "CAD$17,550-$27,990", acceptance: "55%" },
              { university: "University of Alberta", rank: "110", intl: "22%", ugTuition: "CAD$30,030-$54,957", pgTuition: "CAD$9,737-$39,500", acceptance: "58%" }
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
            Canada is a global research leader, investing over <strong>CAD$40 billion</strong> annually in R&D. Canadian universities are especially renowned for their contributions to AI, biotechnology, renewable energy, and quantum computing research.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800">Artificial Intelligence</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Home to AI pioneers like Geoffrey Hinton and Yoshua Bengio, Canada leads in deep learning research through institutes like MILA in Montreal, Vector Institute in Toronto, and Amii in Alberta, with over CAD$1.2 billion in dedicated AI funding.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800">Life Sciences & Biotechnology</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    World-class medical research at Toronto, McGill, and UBC. Canada contributed significantly to COVID-19 vaccine development and is a leader in stem cell research, genomics, and precision medicine with over 1,800 biotechnology companies nationwide.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800">Clean Technology & Energy</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Pioneering research in renewable energy, carbon capture, and sustainable technologies at Waterloo, UBC, and Alberta. Canada ranks 4th globally in clean technology innovation with CAD$28.8 billion invested in the sector annually.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "Natural Sciences and Engineering Research Council", amount: "CAD$1.3B", focus: "Natural sciences & engineering" },
                  { agency: "Canadian Institutes of Health Research", amount: "CAD$1.2B", focus: "Health & biomedical research" },
                  { agency: "Social Sciences and Humanities Research Council", amount: "CAD$0.9B", focus: "Social sciences & humanities" },
                  { agency: "Canada Foundation for Innovation", amount: "CAD$7.6B", focus: "Research infrastructure" }
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
            Canada offers various prestigious scholarships for international students, making quality education more accessible. Over CAD$180 million is provided annually through scholarships, grants, and bursaries for international students.
          </p>
          
          <div className="space-y-4">
            {[
              { 
                name: "Vanier Canada Graduate Scholarships", 
                value: "CAD$50,000/year for 3 years", 
                deadline: "November",
                description: "Prestigious doctoral scholarships for top-tier international students demonstrating academic excellence, research potential, and leadership qualities across all disciplines."
              },
              { 
                name: "Canada Graduate Scholarships - Master's", 
                value: "CAD$17,500 for 12 months", 
                deadline: "December",
                description: "For high-caliber students pursuing master's degrees at Canadian institutions. Available to Canadian citizens and permanent residents, with some universities offering similar funding to international students."
              },
              { 
                name: "EduCanada Scholarships", 
                value: "CAD$8,200-$10,000", 
                deadline: "Varies by program",
                description: "Government-sponsored scholarships across undergraduate, graduate, and post-doctoral levels. Includes the Study in Canada Scholarships and Canada-ASEAN Scholarships, focusing on key partner countries."
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
                Most Canadian universities offer entrance scholarships specifically for international students based on academic merit. Application deadlines can be as early as December for September intake. Check institution-specific financial aid pages, as many don't require separate applications for entrance awards.
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
            Canada offers exceptional post-graduation work and immigration pathways through the Post-Graduation Work Permit (PGWP) and Express Entry system. International graduates from Canadian institutions have a clear path to permanent residency with 89% of international students reporting that immigration possibilities influenced their decision to study in Canada.
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
                  <h4 className="font-medium text-gray-900">Post-Graduation Work Permit (PGWP)</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Open work permit valid for the same duration as your program, up to 3 years. Allows graduates to work for any employer in Canada without requiring sponsorship, providing valuable Canadian work experience for permanent residency applications.
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
                  <h4 className="font-medium text-gray-900">Express Entry</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Points-based immigration system with Canadian education and work experience earning significant additional points. Canadian graduates with one year of work experience often meet the threshold for permanent residency invitation within 6-12 months.
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
                  <h4 className="font-medium text-gray-900">Provincial Nominee Programs (PNPs)</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Province-specific immigration streams, many targeting international graduates from local institutions. Programs like BC PNP International Graduate, Ontario Immigrant Nominee Program, and Atlantic Immigration Program offer faster pathways to permanent residency.
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
                { sector: "Information Technology", growth: "+27.5%" },
                { sector: "Healthcare", growth: "+18.2%" },
                { sector: "Clean Energy", growth: "+16.4%" },
                { sector: "Advanced Manufacturing", growth: "+8.7%" },
                { sector: "Financial Services", growth: "+7.3%" },
                { sector: "Agri-Food", growth: "+5.9%" }
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
            Canada consistently ranks among the world's top countries for quality of life and safety. International students experience a diverse, inclusive society with vibrant cultural scenes and breathtaking natural landscapes, from Toronto's metropolitan energy to Vancouver's Pacific coastline and Montreal's European charm.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
          <div className="space-y-4 mb-6">
            {[
              { city: "Toronto", rent: "CAD$1,200-$2,000", food: "CAD$400-$600", transport: "CAD$156", extras: "CAD$250-$350", total: "CAD$2,006-$3,106", highlight: "Canada's largest city with diverse neighborhoods, cultural attractions, and business opportunities" },
              { city: "Vancouver", rent: "CAD$1,100-$1,800", food: "CAD$400-$550", transport: "CAD$100", extras: "CAD$250-$350", total: "CAD$1,850-$2,800", highlight: "Pacific coast city with mild climate, stunning nature, and vibrant arts scene" },
              { city: "Montreal", rent: "CAD$700-$1,200", food: "CAD$350-$500", transport: "CAD$91", extras: "CAD$200-$300", total: "CAD$1,341-$2,091", highlight: "Bilingual city with European flair, affordable living, and rich cultural heritage" }
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
                  Most provinces provide health insurance coverage for international students. In Ontario, UHIP costs CAD$756/year; in BC, MSP costs CAD$75/month; in Quebec, RAMQ costs CAD$750/year. Coverage varies by province, so check requirements before arrival.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Transportation</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Major cities have comprehensive public transit systems with student discounts. Monthly passes range from CAD$91 in Montreal to CAD$156 in Toronto. Many campuses have dedicated shuttle services and cities are increasingly bike-friendly with extensive rental programs.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Banking</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Major banks offer student accounts with reduced or waived monthly fees. You'll need your study permit, campus ID, and proof of address to open an account. The "Big Five" banks (RBC, TD, Scotiabank, BMO, CIBC) have extensive ATM networks and international money transfer services.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

        