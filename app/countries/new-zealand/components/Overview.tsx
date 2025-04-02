export default function Overview() {
  return (
    <section id="overview" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introductory Header */}
        <header>
          <h1 className="text-4xl font-bold border-l-4 border-purple-600 pl-4 text-gray-900">
            New Zealand Study Abroad 2025
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            New Zealand offers a unique blend of world-class education and breathtaking natural landscapes. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in New Zealand.
          </p>
        </header>

        {/* International Student Landscape */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            International Student Landscape
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As of 2024, New Zealand hosts over <strong>200,000</strong> international students, representing an <strong>8%</strong> increase since 2021. Students benefit from world-class education, innovative research opportunities, and robust post-graduation work pathways.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>China</span>
                      <span className="font-semibold">60,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>India</span>
                      <span className="font-semibold">50,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>South Korea</span>
                      <span className="font-semibold">30,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Japan</span>
                      <span className="font-semibold">20,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>United States</span>
                      <span className="font-semibold">15,000</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">STUDENT LEVEL</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Bachelor's</span>
                      <span className="font-semibold">40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Master's Programs</span>
                      <span className="font-semibold">40%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doctoral Programs</span>
                      <span className="font-semibold">15%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Other Programs</span>
                      <span className="font-semibold">5%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Degree Programs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
                {[
                  { name: "Business", percent: "21%" },
                  { name: "Engineering", percent: "20%" },
                  { name: "Computer Science", percent: "15%" },
                  { name: "Law", percent: "12%" },
                  { name: "Economics", percent: "10%" },
                  { name: "Arts & Humanities", percent: "8%" },
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

        {/* New Zealand Higher Education & Leading Universities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            New Zealand Higher Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            New Zealand's higher education system comprises 8 world-class universities and a range of polytechnics and private training establishments. International students typically pay tuition fees ranging from NZ$22,000 to NZ$32,000 per year, with numerous scholarships available.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading New Zealand Universities</h3>
          <div className="space-y-4">
            {[
              { university: "University of Auckland", rank: "5", intl: "40%", ugTuition: "NZ$22,000 - NZ$25,000", pgTuition: "NZ$25,000 - NZ$30,000", acceptance: "65%" },
              { university: "University of Otago", rank: "8", intl: "35%", ugTuition: "NZ$20,000 - NZ$24,000", pgTuition: "NZ$23,000 - NZ$28,000", acceptance: "60%" },
              { university: "Victoria University of Wellington", rank: "10", intl: "30%", ugTuition: "NZ$21,000 - NZ$26,000", pgTuition: "NZ$24,000 - NZ$29,000", acceptance: "55%" },
              { university: "University of Canterbury", rank: "12", intl: "32%", ugTuition: "NZ$20,000 - NZ$25,000", pgTuition: "NZ$22,000 - NZ$27,000", acceptance: "70%" },
              { university: "Massey University", rank: "15", intl: "28%", ugTuition: "NZ$19,000 - NZ$23,000", pgTuition: "NZ$21,000 - NZ$26,000", acceptance: "65%" }
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
            <p className="text-sm text-gray-600 italic">*Tuition fees for international students; domestic fees may differ</p>
            <p className="text-sm text-gray-600 italic">*World rankings based on QS World University Rankings 2024</p>
          </div>
        </section>

        {/* Research & Innovation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            Research & Innovation
          </h2>
          <p className="text-gray-700 mb-5">
            New Zealand is a leader in innovative research, investing over <strong>NZ$3.5 billion</strong> annually in R&D (around 1.8% of GDP). With robust collaboration between industry and academia, New Zealand excels in sustainable agriculture, renewable energy, and marine science.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800">Agriculture & Environmental Science</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    New Zealand excels in sustainable agriculture and environmental science, with institutions like AgResearch driving innovative solutions for food security and eco-friendly farming practices.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800">Renewable Energy</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Pioneering research in geothermal, wind, and solar energy technologies. Organizations such as MBIE support numerous projects advancing renewable energy solutions.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800">Marine Science</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Leveraging its extensive coastline, New Zealand leads in marine research with institutes like NIWA conducting groundbreaking studies in oceanography and marine ecosystems.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "Ministry of Business, Innovation and Employment (MBIE)", amount: "NZ$1.2B", focus: "Comprehensive support across research sectors" },
                  { agency: "Callaghan Innovation", amount: "NZ$500M", focus: "Technology and innovation initiatives" },
                  { agency: "Royal Society of New Zealand", amount: "NZ$300M", focus: "Supporting scientific research and scholarships" },
                  { agency: "Ministry of Education", amount: "NZ$400M", focus: "Research and academic development" }
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
            New Zealand offers a range of prestigious scholarships and financial support options for international students, helping to offset tuition fees and living costs while fostering academic excellence.
          </p>
          
          <div className="space-y-4">
            {[
              { 
                name: "New Zealand International Scholarship", 
                value: "NZ$1,200 monthly", 
                deadline: "May/November",
                description: "This scholarship supports outstanding international students pursuing undergraduate and postgraduate studies in New Zealand. It covers living expenses, tuition subsidies, and travel costs."
              },
              { 
                name: "University Excellence Scholarship", 
                value: "NZ$1,000 monthly", 
                deadline: "Varies by institution",
                description: "Offered by several leading universities, these scholarships assist with tuition fees and living costs while promoting academic excellence."
              },
              { 
                name: "New Zealand Merit Scholarship", 
                value: "NZ$800 monthly", 
                deadline: "Semester-based",
                description: "A merit-based scholarship awarded to high-achieving students across various disciplines, in collaboration with government and partner organizations."
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
                International students in New Zealand can work up to 20 hours per week during the academic term and full-time during breaks, providing opportunities to earn extra income and gain valuable work experience.
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
            New Zealand offers excellent post-graduation work and immigration pathways through its Post-Study Work Visa and Skilled Migrant Category. International graduates from New Zealand institutions benefit from clear routes to permanent residency, with many citing career opportunities as a key factor in their choice of study destination.
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
                  <h4 className="font-medium text-gray-900">Post-Study Work Visa</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Allows international graduates to stay in New Zealand for up to 3 years to find employment related to their field. During this period, you can work in any job while searching for a role in your field.
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
                  <h4 className="font-medium text-gray-900">Skilled Migrant Category</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    A pathway for highly qualified graduates to secure a work visa leading to permanent residency. Requires a job offer with a competitive salary and recognized qualifications.
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
                  <h4 className="font-medium text-gray-900">Permanent Residence</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    After gaining sufficient work experience, graduates can apply for permanent residence. Requirements include English proficiency, secure employment, and integration into New Zealand society.
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
                { sector: "Agriculture & Horticulture", growth: "+15.0%" },
                { sector: "IT & Software", growth: "+20.0%" },
                { sector: "Healthcare", growth: "+18.0%" },
                { sector: "Renewable Energy", growth: "+16.0%" },
                { sector: "Tourism & Hospitality", growth: "+22.0%" },
                { sector: "Film & Media", growth: "+25.0%" }
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
            New Zealand consistently ranks among the top destinations for quality of life and safety. International students enjoy a balanced lifestyle enriched by breathtaking natural landscapes, vibrant multicultural cities, and friendly communities.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
          <div className="space-y-4 mb-6">
            {[
              { city: "Auckland", rent: "NZ$1,200- NZ$1,800", food: "NZ$300- NZ$400", transport: "NZ$100", extras: "NZ$200- NZ$300", total: "NZ$1,800- NZ$2,500", highlight: "Vibrant urban center with stunning harbors and cosmopolitan culture" },
              { city: "Wellington", rent: "NZ$1,000- NZ$1,500", food: "NZ$280- NZ$350", transport: "NZ$90", extras: "NZ$150- NZ$250", total: "NZ$1,520- NZ$2,090", highlight: "Cozy capital city known for its arts and culture scene" },
              { city: "Christchurch", rent: "NZ$800- NZ$1,200", food: "NZ$250- NZ$330", transport: "NZ$80", extras: "NZ$120- NZ$180", total: "NZ$1,250- NZ$1,790", highlight: "Historic city blending urban living with outdoor adventures" }
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
                  Health insurance is mandatory for all international students in New Zealand. The international student health cover typically costs approximately NZ$600 per year and provides comprehensive coverage including doctor visits, hospital care, and emergency services.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Transportation</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Many New Zealand universities offer discounted public transportation passes. In major cities, student discounts are available for buses, trains, and ferries, making commuting and exploring easy.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Language</h4>
                <p className="text-sm text-gray-700 mt-1">
                  English is the primary language of instruction in New Zealand. While most programs are taught in English, some institutions offer courses in Te Reo Māori to enrich your cultural experience. Proficiency in English is essential for academic success and integration into local society.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  )
}
