import React from 'react';

export default function StudentLife() {
  return (
    <section id="student-life" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Student Life in the U.S.
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience a vibrant and diverse campus culture while studying in the United States. From housing options to extracurricular activities, here's what to expect.
          </p>
        </header>

        {/* Housing & Accommodation */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Housing & Accommodation
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Campus Housing</h3>
              <p className="text-gray-700 mb-3">Most universities offer on-campus residence halls or dormitories, particularly for first-year students. These typically include:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Single, double, or suite-style rooms with shared bathrooms</li>
                <li>Meal plans with access to dining halls</li>
                <li>Built-in community with resident advisors (RAs) for support</li>
                <li>Easy access to campus facilities and events</li>
                <li>All utilities, internet, and basic furniture included</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $10,000-$18,000 per academic year, depending on location and room type.</p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Off-Campus Housing</h3>
              <p className="text-gray-700 mb-3">Many upper-level students choose to live off campus in apartments or shared houses. Consider:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Apartments in university-adjacent neighborhoods</li>
                <li>House shares with other students</li>
                <li>University-affiliated off-campus housing options</li>
                <li>Private student housing complexes</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $800-$2,500 per month, depending on location, plus utilities and groceries.</p>
            </div>

            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Housing Tips for International Students</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Apply early for on-campus housing as spaces fill quickly</li>
                <li>Research neighborhoods carefully for off-campus options</li>
                <li>Consider temporary housing for your first few weeks if needed</li>
                <li>Join university housing groups on social media to find roommates</li>
                <li>Understand lease terms and tenant rights before signing contracts</li>
                <li>Budget for security deposits and furniture if needed</li>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Organizations</h3>
              <p className="text-gray-700 mb-3">U.S. universities offer hundreds of student-run organizations:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic and professional clubs related to your field of study</li>
                <li>Cultural and international student associations</li>
                <li>Special interest groups (technology, arts, environmental, etc.)</li>
                <li>Student government and campus publications</li>
                <li>Greek life (fraternities and sororities)</li>
                <li>Religious and spiritual organizations</li>
              </ul>
              <p className="text-gray-700 mt-3">Getting involved helps build your network, develop leadership skills, and create a sense of community.</p>
            </div>

            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recreation & Fitness</h3>
              <p className="text-gray-700 mb-3">Stay active and healthy with campus recreation options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>State-of-the-art fitness centers and gymnasiums</li>
                <li>Intramural and club sports teams</li>
                <li>Group fitness classes and personal training</li>
                <li>Swimming pools, tennis courts, and other athletic facilities</li>
                <li>Outdoor adventure programs and equipment rentals</li>
              </ul>
              <p className="text-gray-700 mt-3">Most campus recreation facilities are free or heavily discounted for enrolled students.</p>
            </div>

            <div className="p-4 border-l-4 border-indigo-500 bg-indigo-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Arts & Culture</h3>
              <p className="text-gray-700 mb-3">Expand your cultural horizons with:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Student concerts, theatrical productions, and dance performances</li>
                <li>Art galleries and museums on campus</li>
                <li>Film screenings and festivals</li>
                <li>Literary readings and speaker series</li>
                <li>Cultural celebrations and international festivals</li>
              </ul>
              <p className="text-gray-700 mt-3">Many events offer student discounts or free admission with your student ID.</p>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Support Services</h3>
              <p className="text-gray-700 mb-3">Take advantage of these resources to excel academically:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic advisors to help with course selection and degree planning</li>
                <li>Writing centers for assistance with papers and assignments</li>
                <li>Tutoring services for challenging subjects</li>
                <li>Math and science resource centers</li>
                <li>Study skills workshops and time management coaching</li>
                <li>Library research assistance and resources</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Technology Resources</h3>
              <p className="text-gray-700 mb-3">Universities provide numerous tech resources:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Campus-wide Wi-Fi and computer labs</li>
                <li>Free or discounted software licenses</li>
                <li>Equipment checkout (laptops, cameras, recording devices)</li>
                <li>Tech help desks and IT support services</li>
                <li>Specialized software and hardware for your field of study</li>
                <li>Digital library access and research databases</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-emerald-500 bg-emerald-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Student Support</h3>
              <p className="text-gray-700 mb-3">Services specifically for international students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International student offices with dedicated advisors</li>
                <li>Visa and immigration support</li>
                <li>Cultural adjustment programs and workshops</li>
                <li>Language support and conversation partners</li>
                <li>International student orientations</li>
                <li>Tax assistance for international students</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Health & Wellness */}
        <article className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
            Health & Wellness
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Insurance & Medical Care</h3>
              <p className="text-gray-700 mb-3">Understanding healthcare in the U.S.:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Health insurance is mandatory for international students</li>
                <li>Most universities offer student health insurance plans</li>
                <li>On-campus health centers provide primary care services</li>
                <li>Average health insurance cost: $1,500-$2,500 per year</li>
                <li>Coverage typically includes doctor visits, emergency care, and prescriptions</li>
                <li>Familiarize yourself with how to access emergency services</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Resources</h3>
              <p className="text-gray-700 mb-3">Support for your emotional wellbeing:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University counseling centers with licensed therapists</li>
                <li>Free or low-cost individual and group counseling</li>
                <li>Crisis intervention services</li>
                <li>Stress management and mindfulness programs</li>
                <li>Peer support groups and mentoring programs</li>
                <li>Self-help resources and workshops</li>
              </ul>
              <p className="text-gray-700 mt-3">Many universities now offer telehealth options for increased accessibility.</p>
            </div>

            <div className="p-4 border-l-4 border-rose-500 bg-rose-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Security</h3>
              <p className="text-gray-700 mb-3">Campus safety measures include:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Campus police or security departments</li>
                <li>Emergency notification systems</li>
                <li>Blue light emergency phones across campus</li>
                <li>Safety escort services for evening/night transportation</li>
                <li>Self-defense classes and safety workshops</li>
                <li>Resources for reporting concerns or incidents</li>
              </ul>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">On-Campus Employment</h3>
              <p className="text-gray-700 mb-3">F-1 visa students can work on campus without additional authorization:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Up to 20 hours per week during academic terms</li>
                <li>Full-time during official school breaks</li>
                <li>Common jobs include library assistants, research assistants, dining services, and administrative roles</li>
                <li>Pay rates typically range from $12-20 per hour depending on position and location</li>
                <li>Apply early as competition for on-campus jobs is high</li>
              </ul>
            </div>

            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Off-Campus Work Authorization</h3>
              <p className="text-gray-700 mb-3">Options for off-campus employment:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>Curricular Practical Training (CPT):</strong> Work experience directly related to your major</li>
                <li><strong>Optional Practical Training (OPT):</strong> 12 months of work authorization after completion of your degree</li>
                <li><strong>STEM OPT Extension:</strong> Additional 24 months for eligible STEM degree graduates</li>
                <li><strong>Economic Hardship:</strong> Available in cases of unforeseen financial difficulty</li>
                <li><strong>International Organizations:</strong> Work for recognized international organizations</li>
              </ul>
              <p className="text-gray-700 mt-3">Always consult with your international student advisor before accepting any off-campus employment.</p>
            </div>

            <div className="p-4 border-l-4 border-sky-500 bg-sky-50 rounded-r">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Development Services</h3>
              <p className="text-gray-700 mb-3">Universities offer extensive career resources:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Career counseling and advising</li>
                <li>Resume and cover letter reviews</li>
                <li>Interview preparation and mock interviews</li>
                <li>Job and internship search assistance</li>
                <li>Career fairs and networking events</li>
                <li>Workshops on job search strategies for international students</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}