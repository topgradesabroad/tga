import Head from 'next/head';

export default function Costs() {
  return (
    <section id="costs" className="scroll-mt-16 py-8 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">Study Cost in Germany</h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-3">
            A comprehensive breakdown of total costs including tuition, living expenses, and additional fees for popular programs in Germany.
          </p>
        </header>

        {/* Key Cities Section - Mobile First */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Cost of Living by City</h2>
          <p className="text-gray-700 mb-4">
            Living costs vary significantly across German cities. Here's what to expect in the most popular student destinations.
          </p>
          
          {/* Berlin */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Berlin</h3>
            <p className="text-gray-700 mb-3">
              Germany's vibrant capital offers a relatively affordable cost of living with diverse cultural experiences.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€350 - €550</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€650 - €950</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€300 - €400</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€650 - €1,350</p>
            </div>
          </div>
          
          {/* Munich */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Munich</h3>
            <p className="text-gray-700 mb-3">
              Bavaria's capital has the highest living costs in Germany but offers excellent quality of life and career opportunities.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€500 - €700</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€800 - €1,200</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€350 - €450</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€850 - €1,650</p>
            </div>
          </div>
          
          {/* Hamburg */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Hamburg</h3>
            <p className="text-gray-700 mb-3">
              This port city offers a good balance of urban amenities and quality education with moderate living costs.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€400 - €600</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€700 - €1,000</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€320 - €420</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€720 - €1,420</p>
            </div>
          </div>
        </section>

        {/* Undergraduate Programs Cost Section */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Undergraduate Programs</h2>
          
          {/* Business & Economics */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Business & Economics</h3>
            <p className="text-gray-700 mb-3">
              German business degrees are highly respected internationally, with many programs offered in English.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €1,500</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">€300 - €500</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Private Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€5,000 - €20,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">€400 - €600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Engineering</h3>
            <p className="text-gray-700 mb-3">
              German engineering programs are world-renowned for their quality and industry connections.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-4 year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €1,500</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350</p>
                  <p className="py-1">Lab fees:</p>
                  <p className="py-1 text-right">€100 - €300</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">€400 - €700</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Technical Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €1,500</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350</p>
                  <p className="py-1">Equipment & Software:</p>
                  <p className="py-1 text-right">€500 - €800</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arts & Humanities */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Arts & Humanities</h3>
            <p className="text-gray-700 mb-3">
              German universities offer excellent humanities programs with rich cultural and historical context.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €1,500</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">€250 - €450</p>
                  <p className="py-1">Field Trips:</p>
                  <p className="py-1 text-right">€100 - €300</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Postgraduate Programs Cost Section */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Postgraduate Programs</h2>
          
          {/* MBA */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">MBA Programs</h3>
            <p className="text-gray-700 mb-3">
              German MBA programs combine academic rigor with practical industry experience and international perspectives.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Total Costs (1-2 year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€5,000 - €20,000</p>
                  <p className="py-1">Study Materials:</p>
                  <p className="py-1 text-right">€500 - €1,000</p>
                  <p className="py-1">Networking Events:</p>
                  <p className="py-1 text-right">€300 - €800</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Private Business Schools</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€15,000 - €40,000</p>
                  <p className="py-1">Study Materials:</p>
                  <p className="py-1 text-right">€600 - €1,200</p>
                  <p className="py-1">Networking Events:</p>
                  <p className="py-1 text-right">€500 - €1,500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Masters in Tech Fields */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Computer Science & Data Science</h3>
            <p className="text-gray-700 mb-3">
              German tech masters programs offer cutting-edge research opportunities and strong industry connections.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Total Costs (1.5-2 year MSc)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€0 - €3,000</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350 per semester</p>
                  <p className="py-1">Computing Resources:</p>
                  <p className="py-1 text-right">€300 - €600</p>
                  <p className="py-1">Materials & Software:</p>
                  <p className="py-1 text-right">€400 - €800</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Private Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€10,000 - €25,000</p>
                  <p className="py-1">Computing Resources:</p>
                  <p className="py-1 text-right">€300 - €600</p>
                  <p className="py-1">Materials & Software:</p>
                  <p className="py-1 text-right">€400 - €800</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Programs Section */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Professional Programs</h2>
          
          {/* Medical Programs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Medical Programs</h3>
            <p className="text-gray-700 mb-3">
              German medical education is highly respected worldwide with strong practical training.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Total Costs (6-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€0 - €9,000</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350 per semester</p>
                  <p className="py-1">Medical Equipment:</p>
                  <p className="py-1 text-right">€1,000 - €2,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">€3,000 - €5,000 (total)</p>
                  <p className="py-1">Exam Fees:</p>
                  <p className="py-1 text-right">€500 - €1,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Law Programs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Law Programs</h3>
            <p className="text-gray-700 mb-3">
              German law programs provide excellent training in European and international legal frameworks.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Total Costs (4-5 year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€0 - €7,500</p>
                  <p className="py-1">Semester fee:</p>
                  <p className="py-1 text-right">€150 - €350 per semester</p>
                  <p className="py-1">Books & Legal Resources:</p>
                  <p className="py-1 text-right">€2,000 - €4,000 (total)</p>
                  <p className="py-1">Exam Fees:</p>
                  <p className="py-1 text-right">€800 - €1,500</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Living Expenses Detail Section */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Living Expenses</h2>
          <p className="text-gray-700 mb-4">
            Understanding the components of living costs will help you budget accurately for your education in Germany.
          </p>
          
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Accommodation</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Student residence:</p>
              <p className="py-1 text-right">€200 - €350 per month</p>
              <p className="py-1">Shared apartment:</p>
              <p className="py-1 text-right">€280 - €450 per month</p>
              <p className="py-1">Studio apartment:</p>
              <p className="py-1 text-right">€450 - €800 per month</p>
              <p className="py-1">Utilities:</p>
              <p className="py-1 text-right">€80 - €150 per month</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Food & Personal</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">University cafeteria:</p>
              <p className="py-1 text-right">€70 - €150 per month</p>
              <p className="py-1">Groceries:</p>
              <p className="py-1 text-right">€150 - €250 per month</p>
              <p className="py-1">Dining out:</p>
              <p className="py-1 text-right">€100 - €200 per month</p>
              <p className="py-1">Personal expenses:</p>
              <p className="py-1 text-right">€80 - €150 per month</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Other Expenses</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Health Insurance:</p>
              <p className="py-1 text-right">€80 - €170 per month</p>
              <p className="py-1">Transportation:</p>
              <p className="py-1 text-right">€0 - €85 per month</p>
              <p className="py-1">Mobile/Internet:</p>
              <p className="py-1 text-right">€25 - €50 per month</p>
              <p className="py-1">Entertainment:</p>
              <p className="py-1 text-right">€50 - €100 per month</p>
            </div>
          </div>
        </section>
        
        {/* Additional Requirements Section */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Additional Requirements</h2>
          <div className="bg-purple-50 rounded-lg shadow p-4 sm:p-5">
            <div className="space-y-3">
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Student Visa</p>
                  <p className="text-gray-600">€75 application fee</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Blocked Account</p>
                  <p className="text-gray-600">€11,208 for one year (€934 per month)</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Health Insurance</p>
                  <p className="text-gray-600">Mandatory for all students, €80-€170 per month</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Initial Settlement Costs</p>
                  <p className="text-gray-600">€1,000 - €2,000 (rental deposit, household items)</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Language Requirements</p>
                  <p className="text-gray-600">TestDaF/DSH: €175 - €195, IELTS/TOEFL: €200 - €255</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}