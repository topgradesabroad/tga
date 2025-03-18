import Head from 'next/head';

export default function Costs() {
  return (
    <section id="costs" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">Study Cost in Australia</h1>
          <p className="text-xl text-gray-700 mt-4">
            A comprehensive breakdown of total costs including tuition, living expenses, and additional fees for popular programs across different Australian cities.
          </p>
        </header>

        {/* Undergraduate Programs Cost Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Undergraduate Programs</h2>
          
          {/* Business & Economics */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Business & Economics</h3>
            <p className="text-gray-700 mb-4">
              Australian business degrees are highly regarded internationally, offering excellent career prospects in finance, management, and economics.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">AUD $25,000 - $45,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">AUD $1,000 - $2,000</p>
                  <p className="py-1">Technology & Resources:</p>
                  <p className="py-1 text-right">AUD $800 - $1,500</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $40,000 - $55,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $38,000 - $50,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $32,000 - $45,000</p>
                <p className="py-1">Perth:</p>
                <p className="py-1 text-right">AUD $30,000 - $42,000</p>
              </div>
            </div>
          </div>

          {/* Computer Science & Engineering */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & Engineering</h3>
            <p className="text-gray-700 mb-4">
              Australian universities offer world-class STEM programs with innovative research opportunities and strong industry connections.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (4-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">AUD $30,000 - $50,000</p>
                  <p className="py-1">Books & Equipment:</p>
                  <p className="py-1 text-right">AUD $1,200 - $2,500</p>
                  <p className="py-1">Lab Fees & Software:</p>
                  <p className="py-1 text-right">AUD $1,000 - $2,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $45,000 - $60,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $42,000 - $58,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $38,000 - $52,000</p>
                <p className="py-1">Adelaide:</p>
                <p className="py-1 text-right">AUD $35,000 - $50,000</p>
              </div>
            </div>
          </div>

          {/* Arts & Humanities */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Arts & Humanities</h3>
            <p className="text-gray-700 mb-4">
              Australian arts and humanities programs offer diverse cultural perspectives with a focus on Asia-Pacific contexts and global engagement.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">AUD $20,000 - $35,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">AUD $800 - $1,500</p>
                  <p className="py-1">Field Trips & Resources:</p>
                  <p className="py-1 text-right">AUD $600 - $1,200</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $35,000 - $48,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $33,000 - $45,000</p>
                <p className="py-1">Canberra:</p>
                <p className="py-1 text-right">AUD $30,000 - $42,000</p>
                <p className="py-1">Hobart:</p>
                <p className="py-1 text-right">AUD $28,000 - $40,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Postgraduate Programs Cost Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Postgraduate Programs</h2>
          
          {/* MBA */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">MBA Programs</h3>
            <p className="text-gray-700 mb-4">
              Australian MBA programs are known for their practical approach, Asia-Pacific business focus, and excellent career outcomes.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1.5-2 year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">AUD $40,000 - $130,000</p>
                  <p className="py-1">Study Materials & Resources:</p>
                  <p className="py-1 text-right">AUD $2,000 - $4,000</p>
                  <p className="py-1">Networking & Events:</p>
                  <p className="py-1 text-right">AUD $1,500 - $5,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney (Top Schools):</p>
                <p className="py-1 text-right">AUD $100,000 - $160,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $90,000 - $150,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $80,000 - $130,000</p>
                <p className="py-1">Perth:</p>
                <p className="py-1 text-right">AUD $75,000 - $120,000</p>
              </div>
            </div>
          </div>

          {/* Masters in Tech Fields */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & Data Science</h3>
            <p className="text-gray-700 mb-4">
              Australian tech masters programs offer cutting-edge specializations with strong industry partnerships and research opportunities.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1.5-2 year MSc)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">AUD $30,000 - $60,000</p>
                  <p className="py-1">Computing & Research:</p>
                  <p className="py-1 text-right">AUD $1,500 - $3,000</p>
                  <p className="py-1">Conferences & Materials:</p>
                  <p className="py-1 text-right">AUD $1,000 - $3,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $50,000 - $80,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $48,000 - $75,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $45,000 - $70,000</p>
                <p className="py-1">Adelaide:</p>
                <p className="py-1 text-right">AUD $42,000 - $65,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Programs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Professional Programs</h2>
          
          {/* Medical Programs */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Programs (MD)</h3>
            <p className="text-gray-700 mb-4">
              Medical education in Australia offers world-class training with excellent clinical exposure and research opportunities.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (4-5 year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">AUD $250,000 - $400,000</p>
                  <p className="py-1">Medical Equipment:</p>
                  <p className="py-1 text-right">AUD $3,000 - $6,000</p>
                  <p className="py-1">Exam & Clinical Fees:</p>
                  <p className="py-1 text-right">AUD $5,000 - $10,000</p>
                  <p className="py-1">Study Materials (yearly):</p>
                  <p className="py-1 text-right">AUD $1,500 - $3,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $300,000 - $450,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $280,000 - $420,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $260,000 - $400,000</p>
                <p className="py-1">Adelaide:</p>
                <p className="py-1 text-right">AUD $250,000 - $380,000</p>
              </div>
            </div>
          </div>

          {/* Law Programs */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Law Programs (LLB/JD)</h3>
            <p className="text-gray-700 mb-4">
              Australian law degrees are respected globally and provide a foundation for practice in multiple jurisdictions.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">LLB Full Tuition (4 years):</p>
                  <p className="py-1 text-right">AUD $100,000 - $160,000</p>
                  <p className="py-1">JD Full Tuition (3 years):</p>
                  <p className="py-1 text-right">AUD $80,000 - $140,000</p>
                  <p className="py-1">Books & Legal Resources:</p>
                  <p className="py-1 text-right">AUD $3,000 - $6,000</p>
                  <p className="py-1">Practical Legal Training:</p>
                  <p className="py-1 text-right">AUD $8,000 - $12,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (JD Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">Sydney:</p>
                <p className="py-1 text-right">AUD $120,000 - $180,000</p>
                <p className="py-1">Melbourne:</p>
                <p className="py-1 text-right">AUD $110,000 - $170,000</p>
                <p className="py-1">Brisbane:</p>
                <p className="py-1 text-right">AUD $100,000 - $150,000</p>
                <p className="py-1">Canberra:</p>
                <p className="py-1 text-right">AUD $95,000 - $140,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Living Expenses Detail Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Living Expenses</h2>
          <p className="text-gray-700 mb-6">
            Understanding the components of living costs will help you budget accurately for your education in Australia.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Accommodation</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">University residence:</p>
              <p className="py-1 text-right">AUD $150 - $350 per week</p>
              <p className="py-1">Shared apartment:</p>
              <p className="py-1 text-right">AUD $120 - $300 per week</p>
              <p className="py-1">Studio apartment:</p>
              <p className="py-1 text-right">AUD $250 - $500 per week</p>
              <p className="py-1">Utilities:</p>
              <p className="py-1 text-right">AUD $80 - $200 per month</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Food & Personal</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Meal plan:</p>
              <p className="py-1 text-right">AUD $2,500 - $4,500 per year</p>
              <p className="py-1">Groceries:</p>
              <p className="py-1 text-right">AUD $80 - $150 per week</p>
              <p className="py-1">Dining out:</p>
              <p className="py-1 text-right">AUD $50 - $100 per week</p>
              <p className="py-1">Personal expenses:</p>
              <p className="py-1 text-right">AUD $50 - $100 per week</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Other Expenses</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Health Insurance (OSHC):</p>
              <p className="py-1 text-right">AUD $450 - $650 per year</p>
              <p className="py-1">Transportation:</p>
              <p className="py-1 text-right">AUD $30 - $60 per week</p>
              <p className="py-1">Mobile/Internet:</p>
              <p className="py-1 text-right">AUD $50 - $100 per month</p>
              <p className="py-1">Entertainment:</p>
              <p className="py-1 text-right">AUD $50 - $100 per week</p>
            </div>
          </div>
        </section>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Requirements</h3>
        <div className="bg-purple-50 rounded-lg shadow-sm p-5">
          <div className="space-y-4">
            <div className="flex items-start p-3 rounded-md bg-white">
              <div className="flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Student Visa (Subclass 500)</p>
                <p className="text-gray-600">AUD $650 application fee</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 rounded-md bg-white">
              <div className="flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Financial Proof</p>
                <p className="text-gray-600">Tuition + AUD $21,041 for living expenses (12 months)</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 rounded-md bg-white">
              <div className="flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Overseas Student Health Cover (OSHC)</p>
                <p className="text-gray-600">Mandatory health insurance for entire study period</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 rounded-md bg-white">
              <div className="flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">Initial Settlement Costs</p>
                <p className="text-gray-600">AUD $2,000 - $4,000 (rental bond, household items)</p>
              </div>
            </div>
            
            <div className="flex items-start p-3 rounded-md bg-white">
              <div className="flex-shrink-0 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">English Proficiency Test</p>
                <p className="text-gray-600">IELTS/TOEFL/PTE: AUD $300 - $400 (one-time)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}