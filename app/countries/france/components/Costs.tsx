import Head from 'next/head';

export default function Costs() {
  return (
    <section id="costs" className="scroll-mt-16 py-8 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">Study Cost in France</h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-3">
            A comprehensive breakdown of total costs including tuition, living expenses, and additional fees for popular programs in France.
          </p>
        </header>

        {/* Key Cities Section - Mobile First */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-600 pb-2">Cost of Living by City</h2>
          <p className="text-gray-700 mb-4">
            Living costs vary significantly across French cities. Here's what to expect in the most popular student destinations.
          </p>
          
          {/* Paris */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Paris</h3>
            <p className="text-gray-700 mb-3">
              France’s capital is known for its vibrant culture but comes with a higher cost of living.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€500 - €800</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€900 - €1,400</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€350 - €500</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€850 - €1,900</p>
            </div>
          </div>
          
          {/* Lyon */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Lyon</h3>
            <p className="text-gray-700 mb-3">
              A major city with excellent educational opportunities and a balanced cost of living.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€400 - €650</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€700 - €1,100</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€320 - €450</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€720 - €1,750</p>
            </div>
          </div>
          
          {/* Marseille */}
          <div className="mb-6 bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-2">Marseille</h3>
            <p className="text-gray-700 mb-3">
              Known for its coastal charm, Marseille offers a more affordable urban living experience.
            </p>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Monthly rent (shared):</p>
              <p className="py-1 text-right">€350 - €550</p>
              <p className="py-1">Monthly rent (studio):</p>
              <p className="py-1 text-right">€600 - €900</p>
              <p className="py-1">Monthly expenses:</p>
              <p className="py-1 text-right">€300 - €400</p>
              <p className="py-1">Total monthly:</p>
              <p className="py-1 text-right font-medium">€650 - €1,850</p>
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
              French business degrees are gaining global recognition, with many programs offered in English.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €300</p>
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
              French engineering programs are renowned for their academic rigor and strong industry ties.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-4 year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €300</p>
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
                  <p className="py-1 text-right">€0 - €300</p>
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
              French universities offer rich programs in humanities, blending tradition with modern perspectives.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">€0 - €300</p>
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
              French MBA programs merge academic excellence with strong industry connections and international insights.
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

          {/* Computer Science & Data Science */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Computer Science & Data Science</h3>
            <p className="text-gray-700 mb-3">
              French tech masters programs offer state-of-the-art research facilities and strong industry collaborations.
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
              French medical education is highly regarded, emphasizing both theory and hands-on practice.
            </p>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow">
              <h4 className="text-base font-semibold text-purple-700 mb-3">Total Costs (6-year program)</h4>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Public Universities</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">€0 - €5,000</p>
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
              French law degrees provide a robust understanding of both national and international legal systems.
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
            Understanding the components of living costs will help you budget accurately for your studies in France.
          </p>
          
          <div className="bg-purple-50 p-4 sm:p-6 rounded-xl shadow mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Accommodation</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Student residence:</p>
              <p className="py-1 text-right">€250 - €400 per month</p>
              <p className="py-1">Shared apartment:</p>
              <p className="py-1 text-right">€350 - €500 per month</p>
              <p className="py-1">Studio apartment:</p>
              <p className="py-1 text-right">€600 - €1,000 per month</p>
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
              <p className="py-1 text-right">€30 - €60 per month</p>
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
                  <p className="text-gray-600">€99 application fee</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 rounded-md bg-white">
                <div className="flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Proof of Funds</p>
                  <p className="text-gray-600">€7,380 for one year (€615 per month)</p>
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
                  <p className="text-gray-600">Mandatory for all students, €30-€60 per month</p>
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
                  <p className="text-gray-600">TCF/TEF: €150 - €200, IELTS/TOEFL: €200 - €255</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
