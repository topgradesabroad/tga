export default function Overview() {
  return (
    <section id="overview" className="py-20 scroll-mt-32">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Introductory Header */}
        <header>
          <h1 className="text-4xl font-bold border-l-4 border-purple-600 pl-4 text-gray-900">
            France Study Abroad 2025
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            France offers a unique blend of world-class education and rich cultural heritage. Discover the latest insights into student demographics, scholarship opportunities, visa regulations, and everything you need to pursue your academic journey in France.
          </p>
        </header>

        {/* International Student Landscape */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            International Student Landscape
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              As of 2024, France hosts over <strong>350,000</strong> international students, representing a <strong>10%</strong> increase since 2021. Students benefit from nominal tuition fees at public universities, globally recognized qualifications, and excellent post-graduation work opportunities.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">International Student Distribution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-sm text-gray-500 mb-2">TOP SOURCE COUNTRIES</h4>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Morocco</span>
                      <span className="font-semibold">40,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>China</span>
                      <span className="font-semibold">35,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Algeria</span>
                      <span className="font-semibold">28,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tunisia</span>
                      <span className="font-semibold">18,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Senegal</span>
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

        {/* French Higher Education & Leading Universities */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            French Higher Education
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The French higher education system comprises over 80 universities and a renowned network of Grandes Écoles. Public universities charge nominal fees, with students typically paying a small administrative fee of around €200 per year.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Leading French Universities</h3>
          <div className="space-y-4">
            {[
              { university: "University of Paris-Saclay", rank: "8", intl: "35%", ugTuition: "Nominal fees*", pgTuition: "€0-€5,000", acceptance: "65%" },
              { university: "Sorbonne University", rank: "12", intl: "30%", ugTuition: "Nominal fees*", pgTuition: "€0-€4,000", acceptance: "60%" },
              { university: "École Polytechnique", rank: "18", intl: "25%", ugTuition: "Nominal fees*", pgTuition: "€0-€6,000", acceptance: "55%" },
              { university: "Sciences Po", rank: "22", intl: "28%", ugTuition: "Nominal fees*", pgTuition: "€0-€3,500", acceptance: "70%" },
              { university: "Université Grenoble Alpes", rank: "30", intl: "20%", ugTuition: "Nominal fees*", pgTuition: "€0-€4,000", acceptance: "65%" }
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
            <p className="text-sm text-gray-600 italic">*Nominal fees for EU students; non-EU fees may apply</p>
            <p className="text-sm text-gray-600 italic">*World rankings based on QS World University Rankings 2024</p>
          </div>
        </section>

        {/* Research & Innovation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-5 pb-2 border-b-2 border-purple-600">
            Research & Innovation
          </h2>
          <p className="text-gray-700 mb-5">
            France is a global research leader, investing over <strong>€60 billion</strong> annually in R&D (2.5% of GDP). With strong collaboration between industry and academia, France is especially renowned for advancements in aerospace, renewable energy, and medical research.
          </p>
          
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Excellence by Field</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-medium text-blue-800">Engineering & Aerospace</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    France excels in aerospace engineering and advanced manufacturing. Institutions like Airbus and CNES drive innovation with over €2.5 billion in annual research funding dedicated to industrial advancements.
                  </p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="font-medium text-purple-800">Renewable Energy</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Pioneering research in solar, wind, and hydroelectric technologies. Organizations such as EDF and ADEME lead over 1,200 specialized projects with €1.0 billion in dedicated funding.
                  </p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-medium text-green-800">Medical Research</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    World-class research in pharmaceuticals, biotechnology, and medical devices. Institutes like INSERM and Institut Curie are at the forefront of vaccine development and personalized medicine.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "National Centre for Scientific Research (CNRS)", amount: "€3.2B", focus: "Comprehensive research across all disciplines" },
                  { agency: "Agence Nationale de la Recherche (ANR)", amount: "€1.8B", focus: "Strategic research initiatives" },
                  { agency: "INSERM", amount: "€2.0B", focus: "Medical and biomedical research" },
                  { agency: "CEA", amount: "€2.5B", focus: "Applied research and industrial innovation" }
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
            France offers various prestigious scholarships and financial support options for international students, complementing the already affordable tuition system at public institutions.
          </p>
          
          <div className="space-y-4">
            {[
              { 
                name: "Eiffel Excellence Scholarship", 
                value: "€1,000-€1,500 monthly", 
                deadline: "January/July",
                description: "The Eiffel Excellence Scholarship supports outstanding international students pursuing graduate studies in France. Funding covers living expenses, health insurance, and sometimes travel costs."
              },
              { 
                name: "Campus France Scholarships", 
                value: "€900-€1,200 monthly", 
                deadline: "Varies by institution",
                description: "Offered through the Campus France program, these scholarships assist with living expenses and support academic mobility for international students in France."
              },
              { 
                name: "Emile Boutmy Scholarship", 
                value: "€400 monthly", 
                deadline: "Semester-based",
                description: "A merit-based scholarship available at several French institutions, awarded to high-achieving students regardless of nationality, often in collaboration with partner organizations."
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
                International students in France can work up to 964 hours per year (about 20 hours per week) without a special work permit, allowing you to earn approximately €450-€850 per month through part-time work. Many universities also offer research assistant positions that provide valuable work experience.
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
            France offers excellent post-graduation work and immigration pathways through its Job Search Permit and Talent Passport programs. International graduates from French institutions have clear paths to permanent residency, with 80% of students citing career opportunities as a key factor in choosing France.
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
                  <h4 className="font-medium text-gray-900">Post-Graduation Job Search Permit</h4>
                  <p className="text-sm text-gray-700 mt-1">
                    Allows international graduates to stay in France for up to 12 months to find employment related to their degree. During this period, you can work in any job while searching for a role in your field.
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
                    Residence permit for highly qualified non-EU nationals with a university degree. Requires a job offer with a minimum salary of €4,500 (or €3,500 for shortage occupations). Leads to permanent residency in just 18 months if you have B1 French language skills.
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
                    After working for 24 months (or 18 months with the Talent Passport), graduates can apply for permanent residence. Requirements include French language proficiency (B1 level), secure employment, and integration into French society.
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
                { sector: "Aerospace", growth: "+20.0%" },
                { sector: "IT & Software", growth: "+25.0%" },
                { sector: "Healthcare", growth: "+15.0%" },
                { sector: "Renewable Energy", growth: "+18.0%" },
                { sector: "Luxury & Fashion", growth: "+10.0%" },
                { sector: "Artificial Intelligence", growth: "+28.0%" }
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
            France consistently ranks among Europe’s top destinations for quality of life and safety. International students experience a diverse society with excellent public transportation, rich cultural heritage, and vibrant urban centers, from Paris’s art and fashion to Lyon’s gastronomic delights.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cost of Living in Major Student Cities</h3>
          <div className="space-y-4 mb-6">
            {[
              { city: "Paris", rent: "€800-€1,200", food: "€250-€350", transport: "€80", extras: "€150-€250", total: "€1,280-€1,880", highlight: "Global cultural hub, vibrant arts scene, and dynamic urban lifestyle" },
              { city: "Lyon", rent: "€600-€900", food: "€200-€300", transport: "€70", extras: "€150-€200", total: "€1,020-€1,470", highlight: "Gastronomic center with rich history and modern amenities" },
              { city: "Marseille", rent: "€500-€750", food: "€180-€250", transport: "€60", extras: "€120-€180", total: "€860-€1,240", highlight: "Mediterranean charm with a blend of cultural diversity and affordable living" }
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
                  Health insurance is mandatory for all students in France. The student social security scheme costs approximately €200 per year, covering basic healthcare services including doctor visits, hospital care, and dental treatment. EU students can use their European Health Insurance Card (EHIC), while non-EU students must enroll in the French system.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Transportation</h4>
                <p className="text-sm text-gray-700 mt-1">
                  Many French universities offer discounted public transportation passes. In larger cities, student discounts are available for metro, bus, and regional train services, making commuting and exploring easy.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Language</h4>
                <p className="text-sm text-gray-700 mt-1">
                  While many programs are available in English, learning French significantly enhances your study experience and career prospects. Universities offer French language courses, and achieving a basic A1/A2 level is recommended for daily life, while B1/B2 proficiency is often required for academic programs and employment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  )
}
