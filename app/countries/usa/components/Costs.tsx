import Head from 'next/head';

export default function StudyCostPage() {
  return (
    <section id="costs">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <header className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">Study Cost in the USA</h1>
            <p className="text-xl text-gray-700 mt-4">
              A comprehensive breakdown of total costs including tuition, living expenses, and additional fees for popular programs across different US cities.
            </p>
          </header>

          {/* Undergraduate Programs Cost Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Undergraduate Programs</h2>
            <div className="space-y-8">
              {/* Business & Economics */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Business & Economics</h3>
                <p className="text-gray-700 mb-4">
                  Business degrees are among the most popular undergraduate programs in the USA, offering strong career prospects.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Annual Costs (4-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition:</strong> $25,000 - $45,000 per year
                        </li>
                        <li>
                          <strong>Books & Course Materials:</strong> $1,200 - $2,000 per year
                        </li>
                        <li>
                          <strong>Business Software:</strong> $300 - $800 per year
                        </li>
                        <li>
                          <strong>Professional Association Fees:</strong> $100 - $400 per year
                        </li>
                        <li>
                          <strong>Laptop/Technology:</strong> $1,000 - $2,500 (one-time)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Annual Living + Tuition)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>New York:</strong> $50,000 - $80,000 per year
                        </li>
                        <li>
                          <strong>Chicago:</strong> $42,000 - $70,000 per year
                        </li>
                        <li>
                          <strong>Boston:</strong> $47,000 - $75,000 per year
                        </li>
                        <li>
                          <strong>Austin:</strong> $38,000 - $65,000 per year
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Computer Science & IT */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & IT</h3>
                <p className="text-gray-700 mb-4">
                  Tech-focused degrees provide cutting-edge skills for the digital economy with varying costs depending on specialization.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Annual Costs (4-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition:</strong> $20,000 - $50,000 per year
                        </li>
                        <li>
                          <strong>Books & Course Materials:</strong> $800 - $1,500 per year
                        </li>
                        <li>
                          <strong>Software Licenses:</strong> $500 - $1,200 per year
                        </li>
                        <li>
                          <strong>Lab Fees:</strong> $400 - $900 per year
                        </li>
                        <li>
                          <strong>High-Performance Laptop:</strong> $1,500 - $3,000 (one-time)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Annual Living + Tuition)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>San Francisco:</strong> $55,000 - $83,000 per year
                        </li>
                        <li>
                          <strong>Seattle:</strong> $45,000 - $74,000 per year
                        </li>
                        <li>
                          <strong>Austin:</strong> $37,000 - $68,000 per year
                        </li>
                        <li>
                          <strong>Raleigh:</strong> $33,000 - $60,000 per year
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Engineering */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Engineering</h3>
                <p className="text-gray-700 mb-4">
                  Engineering programs offer specializations in mechanical, electrical, civil, and other disciplines with hands-on learning.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Annual Costs (4-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition:</strong> $25,000 - $55,000 per year
                        </li>
                        <li>
                          <strong>Books & Course Materials:</strong> $1,000 - $1,800 per year
                        </li>
                        <li>
                          <strong>Lab & Equipment Fees:</strong> $700 - $2,000 per year
                        </li>
                        <li>
                          <strong>Design Software:</strong> $600 - $1,500 per year
                        </li>
                        <li>
                          <strong>Engineering Tools/Equipment:</strong> $800 - $2,000 (one-time)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Annual Living + Tuition)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Boston:</strong> $48,000 - $85,000 per year
                        </li>
                        <li>
                          <strong>San Jose:</strong> $50,000 - $80,000 per year
                        </li>
                        <li>
                          <strong>Pittsburgh:</strong> $40,000 - $70,000 per year
                        </li>
                        <li>
                          <strong>Houston:</strong> $38,000 - $67,000 per year
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Liberal Arts */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Liberal Arts & Humanities</h3>
                <p className="text-gray-700 mb-4">
                  Liberal arts programs develop critical thinking and communication skills across diverse subjects.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Annual Costs (4-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition:</strong> $15,000 - $40,000 per year
                        </li>
                        <li>
                          <strong>Books & Course Materials:</strong> $800 - $1,600 per year
                        </li>
                        <li>
                          <strong>Activity & Resource Fees:</strong> $400 - $1,000 per year
                        </li>
                        <li>
                          <strong>Research Materials:</strong> $200 - $600 per year
                        </li>
                        <li>
                          <strong>Field Trips:</strong> $300 - $1,200 per year
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Annual Living + Tuition)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Boston:</strong> $37,000 - $70,000 per year
                        </li>
                        <li>
                          <strong>Chicago:</strong> $35,000 - $65,000 per year
                        </li>
                        <li>
                          <strong>Philadelphia:</strong> $33,000 - $60,000 per year
                        </li>
                        <li>
                          <strong>Minneapolis:</strong> $28,000 - $56,000 per year
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Postgraduate Programs Cost Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Postgraduate Programs</h2>
            <div className="space-y-8">
              {/* MBA */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">MBA Programs</h3>
                <p className="text-gray-700 mb-4">
                  MBA programs vary widely in cost, with prestigious schools commanding premium tuition rates.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1-2 year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition (Full Program):</strong> $60,000 - $150,000
                        </li>
                        <li>
                          <strong>Books & Case Studies:</strong> $2,000 - $3,500 per year
                        </li>
                        <li>
                          <strong>Technology Fees:</strong> $1,000 - $2,000 per year
                        </li>
                        <li>
                          <strong>Networking Events:</strong> $500 - $2,000 per year
                        </li>
                        <li>
                          <strong>International Study Trips:</strong> $3,000 - $8,000 (optional)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Total Program)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>New York:</strong> $120,000 - $220,000
                        </li>
                        <li>
                          <strong>Boston:</strong> $115,000 - $210,000
                        </li>
                        <li>
                          <strong>Chicago:</strong> $100,000 - $190,000
                        </li>
                        <li>
                          <strong>Philadelphia:</strong> $90,000 - $170,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Computer Science & Data Science */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Computer Science & Data Science</h3>
                <p className="text-gray-700 mb-4">
                  Advanced degrees in tech fields provide specialized knowledge and research opportunities.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>MS Tuition (Full Program):</strong> $40,000 - $95,000
                        </li>
                        <li>
                          <strong>PhD Tuition (Full Program):</strong> Often funded with stipend
                        </li>
                        <li>
                          <strong>Computing Resources:</strong> $1,000 - $3,000 per year
                        </li>
                        <li>
                          <strong>Conference Fees:</strong> $1,500 - $4,000 per year
                        </li>
                        <li>
                          <strong>Software & Cloud Services:</strong> $800 - $2,500 per year
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (MS Total Program)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>San Francisco:</strong> $85,000 - $140,000
                        </li>
                        <li>
                          <strong>Boston:</strong> $80,000 - $130,000
                        </li>
                        <li>
                          <strong>Seattle:</strong> $75,000 - $125,000
                        </li>
                        <li>
                          <strong>Austin:</strong> $65,000 - $110,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Engineering Masters */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Engineering Masters</h3>
                <p className="text-gray-700 mb-4">
                  Advanced engineering programs offer specialized training with industry connections.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (1-2 year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition (Full Program):</strong> $45,000 - $110,000
                        </li>
                        <li>
                          <strong>Lab Fees:</strong> $1,500 - $4,000 per year
                        </li>
                        <li>
                          <strong>Specialized Equipment:</strong> $1,000 - $3,500 per year
                        </li>
                        <li>
                          <strong>Conference Attendance:</strong> $1,200 - $3,000 per year
                        </li>
                        <li>
                          <strong>Professional Certifications:</strong> $800 - $2,500 (optional)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Total Program)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Boston:</strong> $90,000 - $150,000
                        </li>
                        <li>
                          <strong>San Jose:</strong> $95,000 - $145,000
                        </li>
                        <li>
                          <strong>Pittsburgh:</strong> $70,000 - $125,000
                        </li>
                        <li>
                          <strong>Atlanta:</strong> $65,000 - $115,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Professional Programs Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Professional Programs</h2>
            <div className="space-y-8">
              {/* Medical Programs */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Medical Programs (MD)</h3>
                <p className="text-gray-700 mb-4">
                  Medical degrees represent one of the most significant educational investments in the USA.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (4-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition (Full Program):</strong> $200,000 - $360,000
                        </li>
                        <li>
                          <strong>Medical Equipment:</strong> $3,000 - $6,000 (one-time)
                        </li>
                        <li>
                          <strong>Board Exams:</strong> $1,200 - $5,000 (total)
                        </li>
                        <li>
                          <strong>Books & Educational Materials:</strong> $2,000 - $4,000 per year
                        </li>
                        <li>
                          <strong>Clinical Rotation Expenses:</strong> $1,500 - $5,000 per year
                        </li>
                        <li>
                          <strong>Residency Application:</strong> $5,000 - $15,000 (total)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Total Program)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Boston:</strong> $300,000 - $490,000
                        </li>
                        <li>
                          <strong>New York:</strong> $310,000 - $480,000
                        </li>
                        <li>
                          <strong>Chicago:</strong> $280,000 - $450,000
                        </li>
                        <li>
                          <strong>Nashville:</strong> $260,000 - $420,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>

              {/* Law Programs */}
              <article>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Law Programs (JD)</h3>
                <p className="text-gray-700 mb-4">
                  Law schools offer pathways to legal careers with varying costs based on prestige and location.
                </p>
                <div className="bg-white p-6 rounded-xl shadow">
                  <h4 className="text-lg font-semibold text-purple-700 mb-3">Total Costs (3-year program)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Academic Expenses</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>Tuition (Full Program):</strong> $135,000 - $210,000
                        </li>
                        <li>
                          <strong>Law Books:</strong> $1,200 - $2,500 per year
                        </li>
                        <li>
                          <strong>Bar Preparation Courses:</strong> $2,000 - $5,000 (one-time)
                        </li>
                        <li>
                          <strong>Bar Exam Fees:</strong> $800 - $1,500 (one-time)
                        </li>
                        <li>
                          <strong>Moot Court & Competition Fees:</strong> $500 - $2,000 per year
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 mb-2">Cost by City (Total Program)</h5>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>
                          <strong>New York:</strong> $230,000 - $320,000
                        </li>
                        <li>
                          <strong>Washington DC:</strong> $210,000 - $300,000
                        </li>
                        <li>
                          <strong>Chicago:</strong> $200,000 - $290,000
                        </li>
                        <li>
                          <strong>Austin:</strong> $170,000 - $260,000
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Living Expenses Detail Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Living Expenses Breakdown</h2>
            <p className="text-gray-700 mb-6">
              Understanding the components of living costs can help you budget accurately for your education in the USA.
            </p>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Housing</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>On-campus dormitory:</strong> $800 - $1,500 per month
                    </li>
                    <li>
                      <strong>Off-campus shared apartment:</strong> $600 - $1,800 per month
                    </li>
                    <li>
                      <strong>Studio apartment:</strong> $900 - $2,500 per month
                    </li>
                    <li>
                      <strong>Utilities:</strong> $100 - $300 per month
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Food & Personal</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Meal plan (on-campus):</strong> $3,000 - $5,500 per year
                    </li>
                    <li>
                      <strong>Groceries (off-campus):</strong> $300 - $600 per month
                    </li>
                    <li>
                      <strong>Dining out:</strong> $150 - $400 per month
                    </li>
                    <li>
                      <strong>Personal expenses:</strong> $200 - $500 per month
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Other Expenses</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Health insurance:</strong> $1,500 - $4,000 per year
                    </li>
                    <li>
                      <strong>Transportation:</strong> $100 - $250 per month
                    </li>
                    <li>
                      <strong>Phone/Internet:</strong> $80 - $200 per month
                    </li>
                    <li>
                      <strong>Entertainment:</strong> $100 - $300 per month
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Financial Planning Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-purple-600 pb-2">Financial Aid & Funding Options</h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-purple-600 pl-4">For International Students</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Merit Scholarships:</strong> $5,000 - $30,000 per year
                    </li>
                    <li>
                      <strong>Graduate Assistantships:</strong> Tuition reduction + $15,000 - $30,000 stipend
                    </li>
                    <li>
                      <strong>Fulbright Program:</strong> Full or partial funding
                    </li>
                    <li>
                      <strong>Private Scholarships:</strong> Varies widely
                    </li>
                    <li>
                      <strong>On-Campus Employment:</strong> Up to 20 hours/week during term
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 border-l-4 border-purple-600 pl-4">For US Students</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <strong>Federal Loans:</strong> Various programs available
                    </li>
                    <li>
                      <strong>Federal Work-Study:</strong> Part-time employment
                    </li>
                    <li>
                      <strong>Pell Grants:</strong> Up to $6,895 per year (2023-2024)
                    </li>
                    <li>
                      <strong>State-Specific Aid:</strong> Varies by state
                    </li>
                    <li>
                      <strong>School-Specific Scholarships:</strong> Varies widely
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
    </section>
  );
}

// This page uses getStaticProps for SSG/SEO purposes.
export async function getStaticProps() {
  // If you need to fetch dynamic study cost data from an API or CMS,
  // you can do so here and pass it via props.
  return {
    props: {} // static page for now
  };
}