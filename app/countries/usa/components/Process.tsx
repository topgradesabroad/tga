import React from 'react';

export default function Process() {
  return (
    <section id="process" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-16">
          <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4 mb-4">
            Application & Visa Process
          </h1>
          <p className="text-xl text-gray-700 mx-auto">
            A comprehensive guide to university applications and student visa procedures for international students seeking to study in the United States.
          </p>
        </header>

        {/* Main Content - Vertical Layout */}
        <div className="space-y-16">
          {/* University Application Process */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-600">
              University Application Process
            </h2>

            {/* Undergraduate */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Undergraduate Studies
              </h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Research & Preparation (10-12 months before)</h4>
                  <p className="text-gray-700">Research universities based on academic programs, location, rankings, and financial considerations. Create a balanced list of reach, match, and safety schools.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Entrance Exams (8-12 months before)</h4>
                  <p className="text-gray-700">Register for and take the SAT/ACT (many schools now offer test-optional admissions) and English proficiency tests like TOEFL/IELTS/Duolingo English Test.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Documentation (3-6 months before)</h4>
                  <p className="text-gray-700">Prepare academic transcripts, 2-3 letters of recommendation, personal essays, activity resume, and financial documentation. Check specific requirements for each university.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Application Submission</h4>
                  <p className="text-gray-700">Submit applications through Common App, Coalition App, or university-specific portals. Pay attention to Early Decision, Early Action, and Regular Decision deadlines.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Financial Aid & Scholarships</h4>
                  <p className="text-gray-700">Complete the CSS Profile and institutional aid applications. Research and apply for external scholarships to supplement university funding.</p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r">
                  <h4 className="font-semibold mb-2">Decision & Enrollment</h4>
                  <p className="text-gray-700">Compare admission offers and financial packages. Submit enrollment deposit by May 1 (National College Decision Day) and complete housing applications.</p>
                </div>
              </div>
            </div>

            {/* Postgraduate */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Graduate Studies
              </h3>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                  <h4 className="font-semibold mb-2">Program Research (12-18 months before)</h4>
                  <p className="text-gray-700">Research departments, faculty members, and research opportunities aligned with your interests. Contact potential advisors for research-based programs.</p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                  <h4 className="font-semibold mb-2">Exams & Prerequisites (8-12 months before)</h4>
                  <p className="text-gray-700">Take GRE/GMAT exams (if required), language proficiency tests, and complete any prerequisite coursework. Note that many programs now offer GRE waivers.</p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                  <h4 className="font-semibold mb-2">Application Materials (3-6 months before)</h4>
                  <p className="text-gray-700">Prepare a tailored statement of purpose, detailed CV/resume, research proposal (if applicable), and secure 3 strong academic/professional recommendations.</p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                  <h4 className="font-semibold mb-2">Funding & Assistantships</h4>
                  <p className="text-gray-700">Apply for teaching/research assistantships, fellowships, and grants. Explore external funding sources like Fulbright or other national scholarships.</p>
                </div>

                <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r">
                  <h4 className="font-semibold mb-2">Interviews & Admission</h4>
                  <p className="text-gray-700">Prepare for interviews (increasingly conducted virtually). Once admitted, evaluate offers based on program reputation, funding, and career opportunities.</p>
                </div>
              </div>
            </div>
          </article>

          {/* Visa Process */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-600">
              U.S. Student Visa Process
            </h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Acceptance & I-20/DS-2019 (3-5 months before)</h4>
                <p className="text-gray-700">After accepting admission, receive Form I-20 (F-1 visa) or DS-2019 (J-1 visa) from your university. Verify all information is correct.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">SEVIS Fee Payment</h4>
                <p className="text-gray-700">Pay the mandatory SEVIS I-901 fee ($350 for F-1 visa, $220 for J-1 visa) online at FMJfee.com. Keep your payment receipt for your visa interview.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">DS-160 Form & Interview Scheduling</h4>
                <p className="text-gray-700">Complete the DS-160 online application form ($160 fee), upload a digital photo, and schedule your visa interview at your local U.S. embassy or consulate.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Financial Documentation</h4>
                <p className="text-gray-700">Prepare evidence of sufficient funds covering at least your first year of studies (bank statements, scholarship letters, sponsor documentation).</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Visa Interview Preparation</h4>
                <p className="text-gray-700">Gather required documents: passport, I-20/DS-2019, DS-160 confirmation, SEVIS fee receipt, financial documents, academic transcripts, and acceptance letter.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Visa Interview</h4>
                <p className="text-gray-700">Demonstrate strong ties to your home country and clear study intentions. Be concise and honest about your academic plans and career goals after graduation.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Pre-Arrival Preparations</h4>
                <p className="text-gray-700">Once approved, check visa details for accuracy. Register for orientation, arrange housing, and book flights (you can enter the U.S. up to 30 days before your program start date).</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Port of Entry Procedures</h4>
                <p className="text-gray-700">At the U.S. port of entry, have your passport, I-20/DS-2019, and financial documents ready. You'll receive an I-94 record electronically.</p>
              </div>

              <div className="p-4 border-l-4 border-purple-500 bg-purple-50 rounded-r">
                <h4 className="font-semibold mb-2">Post-Arrival Requirements</h4>
                <p className="text-gray-700">Report to your university's international student office within 30 days of arrival to complete SEVIS registration and attend mandatory orientation sessions.</p>
              </div>
            </div>
          </article>

          {/* Additional Information */}
          <article className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">Important Considerations</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Timeline & Deadlines</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Early Decision/Action:</strong> November-December of the year before enrollment</li>
                  <li><strong>Regular Decision:</strong> January-March deadline for fall admission</li>
                  <li><strong>Graduate Applications:</strong> December-January for fall admission (varies by program)</li>
                  <li><strong>Visa Application:</strong> Apply at least 3 months before your program start date</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Policies (2025)</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Many universities now offer test-optional admissions for undergraduate applicants</li>
                  <li>F-1 students can maintain status while taking some online courses (check current regulations)</li>
                  <li>Optional Practical Training (OPT) allows 12 months of work experience after graduation</li>
                  <li>STEM degree graduates may qualify for a 24-month OPT extension</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}