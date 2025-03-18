import React from 'react';

export default function StudentLifeUK() {
  return (
    <section id="student-life" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Life in the UK
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience a rich and diverse academic environment while studying in the United Kingdom. From accommodation options to extracurricular activities, here's what to expect.
          </p>
        </header>

        {/* Accommodation */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Accommodation Options
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">University Halls of Residence</h3>
              <p className="text-gray-700 mb-3">Most UK universities offer on-campus accommodation, particularly popular with first-year students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Catered halls with meal plans or self-catered options with shared kitchens</li>
                <li>Single rooms with shared bathrooms or en-suite facilities</li>
                <li>Support from Residential Assistants (RAs) or Wardens</li>
                <li>Convenient location on or near campus</li>
                <li>All bills usually included (utilities, internet, basic insurance)</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: £4,000-£9,000 per academic year, with London and other major cities at the higher end.</p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Student Accommodation</h3>
              <p className="text-gray-700 mb-3">Purpose-built student housing managed by private companies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Modern facilities with studios or shared flats</li>
                <li>All-inclusive billing and professional management</li>
                <li>Common areas, study spaces, and social facilities</li>
                <li>Security and maintenance services</li>
                <li>Often located near universities or in city centers</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: £5,000-£15,000 per academic year, depending on location and facilities.</p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Rentals</h3>
              <p className="text-gray-700 mb-3">Many second and third-year students share houses or flats:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>House or flat shares in university neighborhoods</li>
                <li>Typically requiring 12-month tenancy agreements</li>
                <li>Additional costs for bills and council tax (students are exempt, but must apply)</li>
                <li>More independence but more responsibility</li>
                <li>Average rent: £80-£150 per week outside London, £150-£250 in London</li>
              </ul>
              <p className="text-gray-700 mt-3">Budget for: security deposit (usually 5 weeks' rent), tenant fees, bills, and contents insurance.</p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodation Tips for International Students</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Apply for university accommodation as early as possible</li>
                <li>Check if your university guarantees housing for international students</li>
                <li>Be aware of the academic calendar and contract periods</li>
                <li>Join university accommodation Facebook groups to find housemates</li>
                <li>Understand your rights as a tenant (UK Tenant Rights Act 2019)</li>
                <li>For private rentals, use university-approved letting agencies</li>
                <li>Check if a rental property requires a UK-based guarantor</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Campus Life & Activities */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Campus Life & Activities
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Students' Union</h3>
              <p className="text-gray-700 mb-3">The heart of student life at UK universities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Run by elected student officers to represent student interests</li>
                <li>Organizes social events, including Freshers' Week activities</li>
                <li>Houses student-run clubs and societies</li>
                <li>Provides support services and advocacy</li>
                <li>Often manages on-campus venues, shops, and cafes</li>
                <li>Automatic membership for all enrolled students</li>
              </ul>
              <p className="text-gray-700 mt-3">Getting involved with your Students' Union is a great way to enhance your university experience and develop leadership skills.</p>
            </div>

            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clubs & Societies</h3>
              <p className="text-gray-700 mb-3">UK universities offer a wide range of student-led organizations:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic and course-related societies</li>
                <li>Cultural and international student associations</li>
                <li>Sports clubs (both competitive and recreational)</li>
                <li>Special interest groups (music, politics, gaming, etc.)</li>
                <li>Media organizations (student newspaper, radio, TV)</li>
                <li>Volunteering and community service groups</li>
                <li>Faith and religious societies</li>
              </ul>
              <p className="text-gray-700 mt-3">Most clubs have a small membership fee (£5-£20 per year) and organize regular socials alongside their main activities.</p>
            </div>

            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports & Recreation</h3>
              <p className="text-gray-700 mb-3">Stay active with a variety of sporting options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University sports facilities and fitness centers</li>
                <li>BUCS (British Universities & Colleges Sport) competitive leagues</li>
                <li>Intramural and casual sports programs</li>
                <li>Club sports for all skill levels</li>
                <li>Gym membership often available at discounted student rates</li>
                <li>Annual Varsity matches against rival universities</li>
              </ul>
              <p className="text-gray-700 mt-3">Average sports centre membership: £100-£200 per academic year, often with various membership tiers.</p>
            </div>

            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UK Traditions & Social Life</h3>
              <p className="text-gray-700 mb-3">Experience unique aspects of UK university culture:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Freshers' Week (orientation week with events and activities)</li>
                <li>Formal Halls and college dinners at traditional universities</li>
                <li>RAG (Raise and Give) charity fundraising events</li>
                <li>May Balls and Summer Balls (formal end-of-year celebrations)</li>
                <li>Pub culture and student nights at local venues</li>
                <li>Traditional events specific to each university</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Academic Support & Resources */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Academic Support & Resources
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">UK Education System</h3>
              <p className="text-gray-700 mb-3">Understanding how UK higher education works:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Three-year bachelor's degrees (four years in Scotland)</li>
                <li>Focus on independent study with fewer contact hours than some countries</li>
                <li>Tutorials or seminars alongside lectures</li>
                <li>Personal Tutor or Academic Advisor assigned to each student</li>
                <li>Emphasis on critical thinking and original research</li>
                <li>Module-based structure with continuous assessment and final exams</li>
              </ul>
              <p className="text-gray-700 mt-3">The UK uses a unique grading system: First Class (70%+), Upper Second/2:1 (60-69%), Lower Second/2:2 (50-59%), Third (40-49%).</p>
            </div>

            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Library & Study Resources</h3>
              <p className="text-gray-700 mb-3">UK universities offer extensive academic resources:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Comprehensive university libraries with extended opening hours</li>
                <li>Digital collections and online academic databases</li>
                <li>Subject-specific libraries and reading rooms</li>
                <li>Dedicated study spaces and computer labs</li>
                <li>Inter-library loan services for specialized resources</li>
                <li>Academic skills workshops and research support</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Support Services</h3>
              <p className="text-gray-700 mb-3">Help available to support your studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic writing and English language support</li>
                <li>Math and statistics help centers</li>
                <li>Study skills and time management workshops</li>
                <li>Peer mentoring programs</li>
                <li>Disability support services and reasonable adjustments</li>
                <li>Technology support and digital skills training</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Student Support</h3>
              <p className="text-gray-700 mb-3">Specialized assistance for international students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International Student Advisors for visa and immigration guidance</li>
                <li>Welcome programs and orientation activities</li>
                <li>Cultural adjustment support and buddy schemes</li>
                <li>English language support (in-term courses and pre-sessional programs)</li>
                <li>Guidance on opening UK bank accounts and registering with healthcare</li>
                <li>Country-specific student societies</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Health & Wellbeing */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Health & Wellbeing
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare in the UK</h3>
              <p className="text-gray-700 mb-3">Accessing medical care as a student:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>National Health Service (NHS) provides free or subsidized healthcare</li>
                <li>Students on courses longer than 6 months can access NHS services</li>
                <li>International students pay the Immigration Health Surcharge (IHS) with visa applications (currently £470 per year)</li>
                <li>Register with a local GP (General Practitioner) when you arrive</li>
                <li>University health centers on many campuses</li>
                <li>NHS 111 service for non-emergency medical advice</li>
                <li>Emergency care available at Accident & Emergency (A&E) departments</li>
              </ul>
              <p className="text-gray-700 mt-3">Prescriptions cost £9.90 per item in England (free in Scotland, Wales, and Northern Ireland).</p>
            </div>

            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Support</h3>
              <p className="text-gray-700 mb-3">Resources available for your mental wellbeing:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University counseling services offering free confidential support</li>
                <li>Mental health advisors and wellbeing teams</li>
                <li>Online support platforms (like Togetherall or SilverCloud)</li>
                <li>Peer support networks and student-led initiatives</li>
                <li>Disability services for long-term mental health conditions</li>
                <li>NHS mental health services through GP referrals</li>
              </ul>
              <p className="text-gray-700 mt-3">Support organizations like Nightline (student-run overnight listening services) and Student Minds operate across UK campuses.</p>
            </div>

            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Security</h3>
              <p className="text-gray-700 mb-3">Staying safe on and off campus:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University security services operating 24/7</li>
                <li>Campus safety measures (CCTV, emergency phones, security patrols)</li>
                <li>Safety apps and alert systems</li>
                <li>Safe transport schemes for evening/night travel</li>
                <li>Police liaison officers at many universities</li>
                <li>Fire safety training and regular drills in accommodation</li>
              </ul>
              <p className="text-gray-700 mt-3">Emergency number in the UK is 999 (or 112), for police, fire, or ambulance services.</p>
            </div>
          </div>
        </article>

        {/* Working While Studying */}
        <article className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Working While Studying
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Work Rights for International Students</h3>
              <p className="text-gray-700 mb-3">Current regulations for working during studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Student visa holders can typically work up to 20 hours per week during term time</li>
                <li>Full-time work permitted during official holiday periods</li>
                <li>Restrictions vary based on your specific visa and level of study</li>
                <li>Some courses may have placement or work experience components</li>
                <li>Prohibited from working as a professional sportsperson or entertainer</li>
                <li>Self-employment is not permitted on a student visa</li>
              </ul>
              <p className="text-gray-700 mt-3">Always check your visa conditions and BRP (Biometric Residence Permit) for specific work restrictions.</p>
            </div>

            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Finding Student Jobs</h3>
              <p className="text-gray-700 mb-3">Common employment opportunities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>On-campus roles (library assistants, student ambassadors, admin support)</li>
                <li>Students' Union positions (bar staff, shop assistants, event staff)</li>
                <li>Retail and hospitality jobs in university areas</li>
                <li>Campus recruitment events and job fairs</li>
                <li>University job portals and employment services</li>
                <li>Part-time internships related to your field of study</li>
              </ul>
              <p className="text-gray-700 mt-3">Average pay: National Minimum Wage (£11.44/hour for 21+ years) to Living Wage (£12.60/hour), with London rates typically higher.</p>
            </div>

            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Information</h3>
              <p className="text-gray-700 mb-3">Essential knowledge for working in the UK:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>National Insurance Number required for employment (apply after arrival)</li>
                <li>UK bank account needed for receiving wages</li>
                <li>Income tax considerations (Personal Allowance of £12,570 before tax)</li>
                <li>Understanding payslips and emergency tax codes</li>
                <li>Right to Work checks required by employers</li>
                <li>CV (resume) format differs from other countries</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Development</h3>
              <p className="text-gray-700 mb-3">Building your future career:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University careers services offering guidance and support</li>
                <li>CV workshops and interview practice</li>
                <li>Employer presentations and career fairs</li>
                <li>Internship and placement opportunities</li>
                <li>Graduate Scheme information and application support</li>
                <li>Post-study work options (Graduate Route visa allowing 2-3 years of work after graduation)</li>
              </ul>
              <p className="text-gray-700 mt-3">Many universities offer embedded employability modules and career development programs within degree courses.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}