export default function Overview() {
  return (
    <section id="overview" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introductory Header */}
        <header>
          <h1 className="text-4xl font-bold border-l-4 border-purple-600 pl-4 text-gray-900">
            Germany Study Abroad 2025
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Germany offers high-quality education with over 400 institutions recognized globally for academic excellence. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in Germany.
          </p>
        </header>

        {/* International Student Landscape */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            International Student Landscape
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As of 2024, Germany hosts over <strong>450,000</strong> international students, representing a <strong>12.5%</strong> increase since 2021. Students benefit from tuition-free or low-cost education, globally recognized qualifications, and excellent post-graduation work opportunities with pathways to permanent residency.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>China</span>
                      <span className="font-semibold">43,940</span>
                    </li>
                    <li className="flex justify-between">
                      <span>India</span>
                      <span className="font-semibold">34,620</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Turkey</span>
                      <span className="font-semibold">28,570</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Syria</span>
                      <span className="font-semibold">17,930</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Russia</span>
                      <span className="font-semibold">15,210</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">STUDENT LEVEL</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Bachelor's</span>
                      <span className="font-semibold">42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Master's Programs</span>
                      <span className="font-semibold">35%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doctoral Programs</span>
                      <span className="font-semibold">16%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Other Programs</span>
                      <span className="font-semibold">7%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Popular Degree Programs</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2">
                {[
                  { name: "Engineering", percent: "23%" },
                  { name: "Business", percent: "19%" },
                  { name: "Computer Science", percent: "15%" },
                  { name: "Mathematics", percent: "10%" },
                  { name: "Social Sciences", percent: "8%" },
                  { name: "Medicine", percent: "7%" },
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

        {/* German Higher Education & Leading Universities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            German Higher Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The German higher education system comprises over 400 institutions, including universities, universities of applied sciences (Fachhochschulen), and colleges of art and music. Most public institutions offer tuition-free education, with students paying only a semester fee (€100-€350) covering administration costs and public transport.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading German Universities</h3>
          <div className="space-y-4">
            {[
              { university: "Technical University of Munich", rank: "37", intl: "30%", ugTuition: "Tuition-free*", pgTuition: "€0-€15,000", acceptance: "60%" },
              { university: "Ludwig Maximilian University Munich", rank: "63", intl: "25%", ugTuition: "Tuition-free*", pgTuition: "€0-€10,000", acceptance: "55%" },
              { university: "Heidelberg University", rank: "65", intl: "20%", ugTuition: "Tuition-free*", pgTuition: "€0-€10,000", acceptance: "65%" },
              { university: "Humboldt University of Berlin", rank: "82", intl: "22%", ugTuition: "Tuition-free*", pgTuition: "€0-€10,000", acceptance: "70%" },
              { university: "RWTH Aachen University", rank: "87", intl: "28%", ugTuition: "Tuition-free*", pgTuition: "€0-€5,000", acceptance: "65%" }
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
            <p className="text-sm text-gray-600 italic">*Tuition-free with semester fee of €100-€350 per semester</p>
            <p className="text-sm text-gray-600 italic">*World rankings based on QS World University Rankings 2024</p>
          </div>
        </section>

        {/* Research & Innovation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            Research & Innovation
          </h2>
          <p className="text-gray-700 mb-5">
            Germany is a global research powerhouse, investing over <strong>€110 billion</strong> annually in R&D (3.1% of GDP). With strong industry-academia collaboration, Germany is especially renowned for contributions to engineering, renewable energy, medicine, and automotive research.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800">Engineering & Industry 4.0</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Germany leads in mechanical engineering, automation, and Industry 4.0 research. Institutions like the Fraunhofer Society collaborate with industry partners on cutting-edge applications, with over €2.8 billion in annual research funding dedicated to industrial innovation.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800">Renewable Energy</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Pioneering research in solar, wind, and hydrogen technologies as part of the Energiewende (energy transition). The German Aerospace Center (DLR) and Helmholtz Association lead over 1,500 specialized research projects with €1.2 billion in dedicated funding.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800">Medical Research</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    World-class research in pharmaceuticals, biotechnology, and medical devices. The Max Planck Society and Charité University Hospital are leaders in medical innovation, with notable achievements in vaccine development and personalized medicine.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "German Research Foundation (DFG)", amount: "€3.5B", focus: "Basic and applied research across all disciplines" },
                  { agency: "Federal Ministry of Education and Research", amount: "€20.2B", focus: "Strategic research initiatives" },
                  { agency: "Max Planck Society", amount: "€2.8B", focus: "Fundamental research in natural sciences" },
                  { agency: "Fraunhofer Society", amount: "€2.9B", focus: "Applied research for industrial innovation" }
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
            Germany offers various prestigious scholarships and financial support options for international students, complementing the already affordable tuition-free education at public universities.
          </p>
          
          <div className="space-y-4">
            {[
              { 
                name: "DAAD Scholarships", 
                value: "€850-€1,200 monthly", 
                deadline: "October/April",
                description: "The German Academic Exchange Service (DAAD) offers various scholarships for undergraduate, graduate, and doctoral students. Funding covers living expenses, health insurance, and sometimes travel costs."
              },
              { 
                name: "Erasmus+ Program", 
                value: "€850-€950 monthly", 
                deadline: "Varies by institution",
                description: "EU-funded program for international exchange within Europe. Covers living expenses and provides mobility support for semester or year-long study periods in Germany."
              },
              { 
                name: "Deutschland Stipendium", 
                value: "€300 monthly", 
                deadline: "Semester-based",
                description: "Merit-based scholarship available at most German universities. Awarded to high-achieving students regardless of nationality, with funding split between the federal government and private sponsors."
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
                International students in Germany can work up to 120 full days or 240 half days per year without a special work permit. This allows you to earn approximately €450-€850 per month through part-time work while studying. Many universities also offer research assistant positions (HiWi jobs) that provide relevant work experience.
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
            Germany offers excellent post-graduation work and immigration pathways through its Job Seeker Visa and EU Blue Card programs. International graduates from German institutions have clear paths to permanent residency, with 83% of international students reporting that career opportunities influenced their decision to study in Germany.
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
                  <h4 className="font-medium text-gray-900">Post-Graduation Job Seeker Visa</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Allows international graduates to stay in Germany for up to 18 months to find employment related to their degree. During this period, you can work in any job without restrictions while searching for a position in your field.
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
                  <h4 className="font-medium text-gray-900">EU Blue Card</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Residence permit for highly qualified non-EU nationals with a university degree. Requires a job offer with a minimum salary of €43,992 (or €34,202 for shortage occupations). Leads to permanent residency in just 21 months if you have B1 German language skills.
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
                    After working for 24 months (or 21 months with Blue Card), graduates can apply for permanent residence. Requirements include German language proficiency (B1 level), secure employment, and integration into German society.
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
                { sector: "Engineering", growth: "+15.3%" },
                { sector: "IT & Software", growth: "+27.6%" },
                { sector: "Healthcare", growth: "+18.5%" },
                { sector: "Renewable Energy", growth: "+22.4%" },
                { sector: "Manufacturing", growth: "+7.8%" },
                { sector: "Artificial Intelligence", growth: "+30.2%" }
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
            Germany consistently ranks among Europe's top countries for quality of life and safety. International students experience a diverse society with excellent public transportation, rich cultural heritage, and vibrant urban centers, from Berlin's creative scene to Munich's traditional Bavarian culture.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
          <div className="space-y-4 mb-6">
            {[
              { city: "Berlin", rent: "€500-€800", food: "€200-€300", transport: "€86", extras: "€150-€200", total: "€936-€1,386", highlight: "Vibrant cultural scene, startup hub, affordable living compared to other European capitals" },
              { city: "Munich", rent: "€700-€1,000", food: "€250-€350", transport: "€56", extras: "€200-€250", total: "€1,206-€1,656", highlight: "Economic powerhouse, high quality of life, beautiful architecture and proximity to the Alps" },
              { city: "Leipzig", rent: "€350-€550", food: "€180-€250", transport: "€60", extras: "€100-€150", total: "€690-€1,010", highlight: "Affordable student city with rich cultural scene, growing creative industries" }
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
                  Health insurance is mandatory for all students in Germany. Public health insurance costs approximately €110 per month for students under 30, covering doctor visits, hospital treatment, and basic dental care. EU students can use their European Health Insurance Card (EHIC), while non-EU students must obtain German health insurance.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Transportation</h4>
                <p className="text-sm text-gray-700 mt-1">
                  The semester fee at German universities includes a semester ticket for public transportation, allowing unlimited travel on buses, trams, and trains within the city and sometimes the surrounding region. Germany has an excellent train network connecting major cities, with student discounts available through the BahnCard.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Language</h4>
                <p className="text-sm text-gray-700 mt-1">
                  While many programs are taught in English, learning German improves your study experience and job prospects. Universities offer free or low-cost language courses for international students. A basic A1/A2 level helps with daily life, while B1/B2 proficiency is often required for German-taught programs and employment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}