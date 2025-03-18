import Head from 'next/head';

export default function Costs() {
  return (
    <section id="costs" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">Study Cost in the UK</h1>
          <p className="text-xl text-gray-700 mt-4">
            A comprehensive breakdown of total costs including tuition, living expenses, and additional fees for popular programs across different UK cities.
          </p>
        </header>

        {/* Undergraduate Programs Cost Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Undergraduate Programs</h2>
          
          {/* Business & Economics */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Business & Economics</h3>
            <p className="text-gray-700 mb-4">
              UK business degrees are highly regarded globally, offering excellent career opportunities in finance, management, and economics.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">£14,000 - £25,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">£300 - £600</p>
                  <p className="py-1">Business Software:</p>
                  <p className="py-1 text-right">£100 - £300</p>
                  <p className="py-1">Professional Fees:</p>
                  <p className="py-1 text-right">£50 - £200</p>
                  <p className="py-1">Technology (one-time):</p>
                  <p className="py-1 text-right">£800 - £1,500</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£25,000 - £35,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£20,000 - £27,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£22,000 - £30,000</p>
                <p className="py-1">Birmingham:</p>
                <p className="py-1 text-right">£19,000 - £26,000</p>
              </div>
            </div>
          </div>

          {/* Computer Science & IT */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & IT</h3>
            <p className="text-gray-700 mb-4">
              UK universities offer cutting-edge computer science programs with strong industry connections and research opportunities.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">£16,000 - £28,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">£250 - £500</p>
                  <p className="py-1">Software Licenses:</p>
                  <p className="py-1 text-right">£150 - £400</p>
                  <p className="py-1">Lab Fees:</p>
                  <p className="py-1 text-right">£200 - £500</p>
                  <p className="py-1">Laptop (one-time):</p>
                  <p className="py-1 text-right">£1,000 - £2,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£27,000 - £38,000</p>
                <p className="py-1">Cambridge:</p>
                <p className="py-1 text-right">£25,000 - £35,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£21,000 - £29,000</p>
                <p className="py-1">Glasgow:</p>
                <p className="py-1 text-right">£20,000 - £27,000</p>
              </div>
            </div>
          </div>

          {/* Engineering */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Engineering</h3>
            <p className="text-gray-700 mb-4">
              UK engineering degrees are renowned for their quality and practical approach with excellent facilities.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-4 year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">£18,000 - £30,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">£300 - £700</p>
                  <p className="py-1">Lab & Equipment:</p>
                  <p className="py-1 text-right">£400 - £900</p>
                  <p className="py-1">Design Software:</p>
                  <p className="py-1 text-right">£200 - £500</p>
                  <p className="py-1">Tools (one-time):</p>
                  <p className="py-1 text-right">£300 - £800</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-200 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£28,000 - £40,000</p>
                <p className="py-1">Birmingham:</p>
                <p className="py-1 text-right">£23,000 - £32,000</p>
                <p className="py-1">Sheffield:</p>
                <p className="py-1 text-right">£21,000 - £30,000</p>
                <p className="py-1">Southampton:</p>
                <p className="py-1 text-right">£22,000 - £31,000</p>
              </div>
            </div>
          </div>

          {/* Arts & Humanities */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Arts & Humanities</h3>
            <p className="text-gray-700 mb-4">
              UK arts and humanities programs offer rich cultural perspectives with access to world-class museums and institutions.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Annual Costs (3-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Tuition:</p>
                  <p className="py-1 text-right">£12,000 - £22,000</p>
                  <p className="py-1">Books & Materials:</p>
                  <p className="py-1 text-right">£250 - £550</p>
                  <p className="py-1">Activity & Resource:</p>
                  <p className="py-1 text-right">£150 - £350</p>
                  <p className="py-1">Research Materials:</p>
                  <p className="py-1 text-right">£100 - £300</p>
                  <p className="py-1">Field Trips:</p>
                  <p className="py-1 text-right">£200 - £600</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Annual)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£23,000 - £32,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£21,000 - £29,000</p>
                <p className="py-1">Bristol:</p>
                <p className="py-1 text-right">£19,000 - £26,000</p>
                <p className="py-1">York:</p>
                <p className="py-1 text-right">£18,000 - £25,000</p>
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
              UK MBAs offer global business perspectives with shorter program lengths than many international counterparts.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">£25,000 - £85,000</p>
                  <p className="py-1">Books & Case Studies:</p>
                  <p className="py-1 text-right">£500 - £1,200</p>
                  <p className="py-1">Technology Fees:</p>
                  <p className="py-1 text-right">£300 - £700</p>
                  <p className="py-1">Networking Events:</p>
                  <p className="py-1 text-right">£400 - £1,200</p>
                  <p className="py-1">Study Trips (optional):</p>
                  <p className="py-1 text-right">£1,500 - £4,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London (Top Schools):</p>
                <p className="py-1 text-right">£75,000 - £110,000</p>
                <p className="py-1">Oxford/Cambridge:</p>
                <p className="py-1 text-right">£70,000 - £105,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£55,000 - £85,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£50,000 - £80,000</p>
              </div>
            </div>
          </div>

          {/* MSc Computer Science & Data Science */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & Data Science</h3>
            <p className="text-gray-700 mb-4">
              UK MSc programs in technology fields offer specialized skills with strong industry connections.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1-year MSc)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">£20,000 - £35,000</p>
                  <p className="py-1">Computing Resources:</p>
                  <p className="py-1 text-right">£300 - £800</p>
                  <p className="py-1">Conference Fees:</p>
                  <p className="py-1 text-right">£400 - £1,000</p>
                  <p className="py-1">Software & Cloud:</p>
                  <p className="py-1 text-right">£200 - £600</p>
                  <p className="py-1">Research Materials:</p>
                  <p className="py-1 text-right">£200 - £500</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£35,000 - £55,000</p>
                <p className="py-1">Cambridge:</p>
                <p className="py-1 text-right">£32,000 - £50,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£30,000 - £45,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£28,000 - £42,000</p>
              </div>
            </div>
          </div>

          {/* Engineering Masters */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Engineering Masters</h3>
            <p className="text-gray-700 mb-4">
              UK engineering MSc programs offer specialized knowledge with shorter completion times than many global alternatives.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1-year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">£21,000 - £36,000</p>
                  <p className="py-1">Lab Fees:</p>
                  <p className="py-1 text-right">£400 - £1,200</p>
                  <p className="py-1">Specialized Equipment:</p>
                  <p className="py-1 text-right">£300 - £900</p>
                  <p className="py-1">Conference Attendance:</p>
                  <p className="py-1 text-right">£400 - £900</p>
                  <p className="py-1">Professional Certifications:</p>
                  <p className="py-1 text-right">£300 - £800</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£36,000 - £56,000</p>
                <p className="py-1">Birmingham:</p>
                <p className="py-1 text-right">£31,000 - £47,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£30,000 - £45,000</p>
                <p className="py-1">Leeds:</p>
                <p className="py-1 text-right">£28,000 - £43,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Programs Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Professional Programs</h2>
          
          {/* Medical Programs */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Programs (MBBS)</h3>
            <p className="text-gray-700 mb-4">
              UK medical programs are highly competitive for international students with substantial costs.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (5-6 year program)</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">Full Tuition:</p>
                  <p className="py-1 text-right">£150,000 - £250,000</p>
                  <p className="py-1">Medical Equipment:</p>
                  <p className="py-1 text-right">£500 - £1,500</p>
                  <p className="py-1">Exam Fees:</p>
                  <p className="py-1 text-right">£500 - £2,500</p>
                  <p className="py-1">Books & Materials (yearly):</p>
                  <p className="py-1 text-right">£500 - £1,200</p>
                  <p className="py-1">Clinical Placements (yearly):</p>
                  <p className="py-1 text-right">£500 - £1,500</p>
                  <p className="py-1">GMC Registration:</p>
                  <p className="py-1 text-right">£400</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£220,000 - £320,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£200,000 - £290,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£190,000 - £280,000</p>
                <p className="py-1">Cardiff:</p>
                <p className="py-1 text-right">£180,000 - £270,000</p>
              </div>
            </div>
          </div>

          {/* Law Programs */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Law Programs (LLB/LLM)</h3>
            <p className="text-gray-700 mb-4">
              UK law degrees are highly regarded globally with pathways to qualify in multiple jurisdictions.
            </p>
            <div className="bg-purple-50 p-6 rounded-xl shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs</h4>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Academic Expenses</h5>
                <div className="grid grid-cols-2 gap-2 text-gray-700">
                  <p className="py-1">LLB Full Tuition (3 years):</p>
                  <p className="py-1 text-right">£45,000 - £75,000</p>
                  <p className="py-1">LLM Full Tuition (1 year):</p>
                  <p className="py-1 text-right">£18,000 - £38,000</p>
                  <p className="py-1">Law Books (yearly):</p>
                  <p className="py-1 text-right">£400 - £800</p>
                  <p className="py-1">Legal Databases (yearly):</p>
                  <p className="py-1 text-right">£100 - £300</p>
                  <p className="py-1">Mooting (yearly):</p>
                  <p className="py-1 text-right">£200 - £500</p>
                  <p className="py-1">Qualification Exams:</p>
                  <p className="py-1 text-right">£3,000 - £12,000</p>
                </div>
              </div>
              
              <h5 className="font-medium text-gray-800 mb-2 border-b border-purple-300 pb-1">Total Cost by City (LLB Full Program)</h5>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <p className="py-1">London:</p>
                <p className="py-1 text-right">£80,000 - £120,000</p>
                <p className="py-1">Oxford/Cambridge:</p>
                <p className="py-1 text-right">£75,000 - £115,000</p>
                <p className="py-1">Edinburgh:</p>
                <p className="py-1 text-right">£65,000 - £100,000</p>
                <p className="py-1">Manchester:</p>
                <p className="py-1 text-right">£60,000 - £95,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Living Expenses Detail Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Living Expenses</h2>
          <p className="text-gray-700 mb-6">
            Understanding the components of living costs will help you budget accurately for your education in the UK.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Accommodation</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">University halls:</p>
              <p className="py-1 text-right">£500 - £950 per month</p>
              <p className="py-1">Shared private flat:</p>
              <p className="py-1 text-right">£400 - £800 per month</p>
              <p className="py-1">Studio flat:</p>
              <p className="py-1 text-right">£700 - £1,500 per month</p>
              <p className="py-1">Utilities:</p>
              <p className="py-1 text-right">£80 - £180 per month</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow mb-8">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Food & Personal</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Catered accommodation:</p>
              <p className="py-1 text-right">£2,500 - £4,500 per year</p>
              <p className="py-1">Self-catering groceries:</p>
              <p className="py-1 text-right">£150 - £250 per month</p>
              <p className="py-1">Eating out:</p>
              <p className="py-1 text-right">£120 - £300 per month</p>
              <p className="py-1">Personal expenses:</p>
              <p className="py-1 text-right">£100 - £250 per month</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-700 mb-4">Other Expenses</h3>
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <p className="py-1">Immigration Health Surcharge:</p>
              <p className="py-1 text-right">£624 per year</p>
              <p className="py-1">Transportation:</p>
              <p className="py-1 text-right">£60 - £150 per month</p>
              <p className="py-1">Mobile/Internet:</p>
              <p className="py-1 text-right">£30 - £80 per month</p>
              <p className="py-1">Entertainment:</p>
              <p className="py-1 text-right">£50 - £150 per month</p>
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
        <p className="font-medium text-gray-800">Student Visa</p>
        <p className="text-gray-600">£363 (outside UK) or £490 (inside UK)</p>
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
        <p className="text-gray-600">Typically tuition + £1,334/month for living costs in London (£1,023/month outside London)</p>
      </div>
    </div>
    
    <div className="flex items-start p-3 rounded-md bg-white">
      <div className="flex-shrink-0 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <p className="font-medium text-gray-800">Travel Insurance</p>
        <p className="text-gray-600">£200 - £500 per year</p>
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
        <p className="text-gray-600">£1,500 - £3,000 (deposit, essentials)</p>
      </div>
    </div>
    
    <div className="flex items-start p-3 rounded-md bg-white">
      <div className="flex-shrink-0 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div>
        <p className="font-medium text-gray-800">IELTS/English Test Fees</p>
        <p className="text-gray-600">£150 - £200 (one-time)</p>
      </div>
    </div>
  </div>
</div>
        </div>
        </section>
        );
    }