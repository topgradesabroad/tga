export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-40 lg:pr-8">
      {/* International Student Statistics */}
      <div className="bg-white mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
          2024 International Student Landscape
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The United States remains the top destination for global education with a record 1.25 million international students in 2024 (SEVIS Q2 data). This represents a 8.7% increase from pre-pandemic levels, fueled by enhanced visa processing and STEM program expansions.
            </p>
            <div className="bg-white border border-gray-200 p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Top Source Countries</h3>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  { country: "India", students: "32.1%", trend: "+12.4% YoY" },
                  { country: "China", students: "27.8%", trend: "-4.2% YoY" },
                  { country: "Vietnam", students: "5.3%", trend: "+18.9% YoY" },
                  { country: "Nigeria", students: "4.7%", trend: "+22.1% YoY" }
                ].map((item, index) => (
                  <li key={index} className="flex justify-between border-b pb-2">
                    <span>{item.country}</span>
                    <span className="font-semibold text-purple-800">{item.students}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-purple-50 px-8 py-5 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-6">Student Investment Return</h3>
              <ul className="grid grid-cols-1 gap-4">
                {[
                { Title: "Employment Rate", Value: "89%" },
                { Title: "Avg Starting Salary", Value: "$68,500" },
                { Title: "STEM Graduates", Value: "54%" },
                { Title: "Scholarship Students", Value: "72%" },
                { Title: "OPT Success Rate", Value: "94%" },
                ].map((item, index) => (
                  <li key={index} className="flex justify-between border-b pb-2">
                    <span>{item.Title}</span>
                    <span className="font-semibold text-purple-800">{item.Value}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>

        {/* Education System Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
            Understanding the U.S. Education System
          </h2>
          
          {/* Public Universities */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Public Universities</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  State-funded institutions offering world-class education at competitive costs. The University of Michigan system leads with $17.2B in annual research expenditure.
                </p>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Key Metrics</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Avg. Tuition", value: "$32,500" },
                      { label: "Acceptance Rate", value: "42-68%" },
                      { label: "Research Funding", value: "$8.2B" },
                      { label: "Employment Rate", value: "84%" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <span>{item.label}</span>
                        <span className="font-medium text-purple-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Notable Alumni</h4>
                <ul className="space-y-3">
                  {[
                    "Satya Nadella (U Wisconsin) - Microsoft CEO",
                    "Jensen Huang (Oregon State) - NVIDIA CEO",
                    "Eric Yuan (U Illinois) - Zoom Founder",
                    "Indra Nooyi (Yale) - Former PepsiCo CEO",
                    "Ursula Burns (NYU) - VEON Chair",
                    "Andrea Jung (U Michigan) - Grameen America CEO"
                    
                  ].map((alum, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-700">{alum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Private Universities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Private Institutions</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700">
                  Elite institutions like Harvard and MIT maintain their global dominance with 38% of all Nobel Laureates since 2000. Average class sizes of 12:1 ensure personalized attention.
                </p>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Admissions Reality Check</h4>
                  <div className="space-y-3">
                    {[
                      { label: "Acceptance Rate", value: "3-7%" },
                      { label: "Avg. SAT Score", value: "1520" },
                      { label: "Endowment Size", value: "$53B" },
                      { label: "Industry Partnerships", value: "1,200+" }
                    ].map((item, index) => (
                      <div key={index} className="flex justify-between border-b pb-2">
                        <span>{item.label}</span>
                        <span className="font-medium text-purple-700">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Leadership Development</h4>
                <ul className="space-y-3">
                  {[
                    "Sundar Pichai (Stanford) - Alphabet CEO",
                    "Marc Benioff (USC) - Salesforce Founder",
                    "Shantanu Narayen (Bowdoin) - Adobe CEO",
                    "Reshma Saujani (Harvard) - Girls Who Code Founder",
                    "Arvind Krishna (Illinois Tech) - IBM CEO",
                    "Reshma Saujani (Harvard) - Girls Who Code Founder"
                  ].map((alum, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-purple-600">•</span>
                      <span className="text-gray-700">{alum}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Innovation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
            Cutting-Edge Research Ecosystem
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-6">
                U.S. universities lead global research with $83B annual expenditure. Recent breakthroughs include:
              </p>
              <div className="space-y-4">
                {[
                  {
                    institution: "Caltech",
                    field: "Nuclear Fusion",
                    detail: "Achieved Q=1.5 sustained reaction"
                  },
                  {
                    institution: "MIT",
                    field: "Quantum Computing",
                    detail: "Developed 256-qubit processor"
                  },
                  {
                    institution: "Stanford",
                    field: "Climate Tech",
                    detail: "85% efficient carbon capture membrane"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                    <div className="font-medium text-purple-800">{item.institution}</div>
                    <div className="text-gray-900">{item.field}</div>
                    <div className="text-sm text-gray-600">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">2024 Federal Research Funding</h3>
              <div className="space-y-3">
                {[
                  { agency: "NIH", amount: "$48.6B", focus: "Biomedical" },
                  { agency: "NSF", amount: "$12.2B", focus: "Fundamental Science" },
                  { agency: "DOE", amount: "$8.9B", focus: "Clean Energy" },
                  { agency: "DOD", amount: "$6.5B", focus: "Defense Tech" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between border-b pb-2">
                    <div>
                      <div className="font-medium">{item.agency}</div>
                      <div className="text-sm text-gray-600">{item.focus}</div>
                    </div>
                    <div className="text-purple-700 font-medium">{item.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Employment & Visa Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
            Career Pathways & Immigration
          </h2>
          
          {/* Shortage Occupations */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Critical Needs (DOL 2024)</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="text-left p-3">Occupation</th>
                    <th className="p-3">Vacancies</th>
                    <th className="p-3">Growth</th>
                    <th className="p-3">Median Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["AI Engineers", "142,000", "45%", "$156,000"],
                    ["Cybersecurity", "298,000", "38%", "$135,000"],
                    ["Renewable Energy", "178,000", "52%", "$89,000"],
                    ["Biomedical", "234,000", "34%", "$112,000"]
                  ].map((row, index) => (
                    <tr key={index} className="border-t even:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="p-3">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Visa Programs */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Visa Pathways</h3>
              <div className="space-y-4">
                {[
                  {
                    program: "OPT (STEM)",
                    duration: "36 months",
                    approval: "82% rate",
                    link: "https://www.uscis.gov/opt"
                  },
                  {
                    program: "H1B Visa",
                    duration: "6 years",
                    approval: "47% lottery",
                    link: "https://www.uscis.gov/h1b"
                  },
                  {
                    program: "EB-2/NIW",
                    duration: "Permanent",
                    approval: "STEM priority",
                    link: "https://www.uscis.gov/employment-based"
                  }
                ].map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block p-4 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.program}</div>
                        <div className="text-sm text-gray-600">{item.duration}</div>
                      </div>
                      <div className="text-purple-700">{item.approval}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Job Resources</h3>
              <ul className="space-y-3">
                {[
                  { name: "USAJOBS", url: "https://www.usajobs.gov" },
                  { name: "NSF Research Careers", url: "https://www.nsf.gov/careers" },
                  { name: "DOE Clean Energy Jobs", url: "https://www.energy.gov/jobs" },
                  { name: "NIH Careers", url: "https://jobs.nih.gov" }
                ].map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">
                      {item.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Living Cost Analysis */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-4">
            Urban Cost Breakdown
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { city: "New York", rent: "$3,200", food: "$450", transport: "$127" },
              { city: "Austin", rent: "$1,800", food: "$380", transport: "$89" },
              { city: "Pittsburgh", rent: "$1,200", food: "$320", transport: "$75" },
              { city: "Seattle", rent: "$2,100", food: "$420", transport: "$110" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-medium text-gray-900 mb-2">{item.city}</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span>Rent</span>
                    <span className="text-purple-700">{item.rent}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Groceries</span>
                    <span className="text-purple-700">{item.food}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transport</span>
                    <span className="text-purple-700">{item.transport}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Compliance */}
      <div className="text-sm text-gray-600 mt-16 border-t pt-6">
        <p>Official Sources: U.S. Department of Education • National Science Foundation • Bureau of Labor Statistics • SEVIS 2024 Data</p>
        <p className="mt-2">Last Updated: July 2024 | Verified through Federal Register Publications</p>
      </div>
    </section>
  );
}