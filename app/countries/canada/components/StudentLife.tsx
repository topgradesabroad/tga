import React from 'react';

export default function StudentLifeCanada() {
  return (
    <section id="student-life" className="scroll-mt-32 py-16 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-12 sm:mb-10">
          <h1 className="text-3xl sm:text-3xl border-l-4 border-purple-600 pl-4 font-bold text-gray-900 mb-3 sm:mb-4">
            Student Life in Canada
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience a rich and diverse academic environment while studying in Canada. From accommodation options to extracurricular activities, here's what to expect.
          </p>
        </header>

        {/* Accommodation */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Accommodation Options
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">University Residence Halls</h3>
              <p className="text-gray-700 mb-3">Most Canadian universities offer on-campus accommodation, particularly popular with first-year students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Meal plan options or self-catered accommodations with shared kitchens</li>
                <li>Single or double rooms with shared or private bathrooms</li>
                <li>Support from Residence Assistants (RAs) and Dons</li>
                <li>Convenient location on or near campus</li>
                <li>All utilities usually included (electricity, water, internet)</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $5,000-$15,000 per academic year, depending on the city and meal plan options.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Student Housing</h3>
              <p className="text-gray-700 mb-3">Purpose-built student accommodations managed by private companies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Modern facilities with studios or shared apartments</li>
                <li>All-inclusive billing and professional management</li>
                <li>Amenities like fitness centers, study spaces, and social areas</li>
                <li>24/7 security and maintenance services</li>
                <li>Often located near universities or in central areas</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $8,000-$18,000 per academic year, varying by location and amenities.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Rentals</h3>
              <p className="text-gray-700 mb-3">Many upper-year students choose to rent apartments or houses:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Shared accommodations in student neighborhoods</li>
                <li>Typically requiring 12-month lease agreements</li>
                <li>Additional costs for utilities, internet, and sometimes property tax</li>
                <li>More independence but more responsibility</li>
                <li>Average rent: $500-$900 per month for a room in shared housing outside major cities, $800-$1,500 in Toronto, Vancouver, or Montreal</li>
              </ul>
              <p className="text-gray-700 mt-3">Budget for: security deposit (usually one month's rent), tenant insurance, and utility setup fees.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodation Tips for International Students</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Apply for university housing as early as possible</li>
                <li>Check if your university guarantees housing for international students</li>
                <li>Be aware of the academic terms and lease periods</li>
                <li>Join university housing Facebook groups to find roommates</li>
                <li>Understand your provincial tenant rights (varies by province)</li>
                <li>For off-campus housing, use university-recommended rental resources</li>
                <li>Consider homestay options for cultural immersion</li>
                <li>Be prepared for climate considerations in your housing choices</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Campus Life & Activities */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Campus Life & Activities
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Unions</h3>
              <p className="text-gray-700 mb-3">The central hub of student life at Canadian universities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Run by elected student representatives</li>
                <li>Organizes orientation week and campus events</li>
                <li>Oversees student-run clubs and associations</li>
                <li>Provides advocacy and support services</li>
                <li>Often manages campus restaurants, shops, and services</li>
                <li>Automatic membership for all enrolled students</li>
              </ul>
              <p className="text-gray-700 mt-3">Getting involved with your Student Union is an excellent way to make connections and develop leadership skills.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clubs & Associations</h3>
              <p className="text-gray-700 mb-3">Canadian universities offer diverse student-led organizations:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic and faculty-specific associations</li>
                <li>Cultural and international student groups</li>
                <li>Sports and athletic clubs</li>
                <li>Interest-based groups (arts, politics, gaming, etc.)</li>
                <li>Student media (newspaper, radio, TV stations)</li>
                <li>Volunteer and community service organizations</li>
                <li>Religious and spiritual groups</li>
              </ul>
              <p className="text-gray-700 mt-3">Most clubs have nominal membership fees ($5-$25 per year) and host regular social events alongside their activities.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports & Recreation</h3>
              <p className="text-gray-700 mb-3">Stay active with various athletic opportunities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University athletic facilities and fitness centers</li>
                <li>U SPORTS competitive leagues (Canadian university sports governing body)</li>
                <li>Intramural and recreational sports programs</li>
                <li>Outdoor recreation clubs (especially popular for skiing, hiking, etc.)</li>
                <li>Student-rate gym memberships</li>
                <li>Annual rivalry games and championship events</li>
              </ul>
              <p className="text-gray-700 mt-3">Average recreation center membership: $80-$200 per term, often included in student fees.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Canadian Campus Traditions</h3>
              <p className="text-gray-700 mb-3">Experience unique aspects of Canadian university culture:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Frosh/Orientation Week (welcome activities for new students)</li>
                <li>Homecoming celebrations and alumni events</li>
                <li>Winter carnivals and seasonal festivals</li>
                <li>Charity fundraisers and awareness campaigns</li>
                <li>End-of-year formal events and graduation celebrations</li>
                <li>University-specific traditions that vary across institutions</li>
                <li>Hockey games and sports rivalries</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Academic Support & Resources */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Academic Support & Resources
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Canadian Education System</h3>
              <p className="text-gray-700 mb-3">Understanding how Canadian higher education works:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Four-year bachelor's degrees (three years in Quebec after CEGEP)</li>
                <li>Balance of lectures, tutorials, and laboratories</li>
                <li>Credit-based system with major and minor specializations</li>
                <li>Academic advisors assigned to help with course selection</li>
                <li>Focus on critical thinking and research skills</li>
                <li>Mixture of continuous assessment and final examinations</li>
                <li>Co-operative education options at many institutions</li>
              </ul>
              <p className="text-gray-700 mt-3">Canadian grading typically uses a letter system (A+, A, A-, B+, etc.) or GPA scale (4.0, 3.7, 3.3, etc.), with specific systems varying by institution.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Library & Study Resources</h3>
              <p className="text-gray-700 mb-3">Canadian universities offer extensive academic resources:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Modern university libraries with comprehensive collections</li>
                <li>Electronic resources and research databases</li>
                <li>Specialized research libraries and archives</li>
                <li>24-hour study spaces during exam periods</li>
                <li>Technology lending programs (laptops, tablets, cameras)</li>
                <li>Research support services and workshops</li>
                <li>Digital learning platforms and tools</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Support Services</h3>
              <p className="text-gray-700 mb-3">Help available to support your studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Writing centers and communication support</li>
                <li>Math and science help centers</li>
                <li>Academic skill development workshops</li>
                <li>Peer tutoring and study groups</li>
                <li>Accessibility services for students with disabilities</li>
                <li>Learning strategists and academic coaches</li>
                <li>Technology support and digital literacy programs</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Student Support</h3>
              <p className="text-gray-700 mb-3">Specialized assistance for international students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International student offices with dedicated advisors</li>
                <li>Immigration consultants for study permit questions</li>
                <li>Orientation programs tailored to international students</li>
                <li>Cultural transition support and integration activities</li>
                <li>English/French language programs and conversation partners</li>
                <li>Guidance on banking, housing, and healthcare</li>
                <li>International student associations and country-specific clubs</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Health & Wellbeing */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Health & Wellbeing
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare in Canada</h3>
              <p className="text-gray-700 mb-3">Accessing medical care as a student:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Provincial healthcare systems provide basic medical coverage</li>
                <li>International students must enroll in provincial health insurance or university health plans</li>
                <li>Mandatory health insurance fees for international students ($600-$1,000 per year)</li>
                <li>On-campus health clinics at most universities</li>
                <li>Walk-in clinics for non-emergency care</li>
                <li>Emergency services available at hospital emergency departments</li>
                <li>Extended health benefits often covered by student union plans (dental, vision, etc.)</li>
              </ul>
              <p className="text-gray-700 mt-3">Healthcare coverage varies by province - check your specific provincial requirements and waiting periods.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Support</h3>
              <p className="text-gray-700 mb-3">Resources available for your mental wellbeing:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University counseling and psychological services</li>
                <li>Wellness centers and mental health outreach</li>
                <li>Peer support programs and student-led initiatives</li>
                <li>Online therapy and wellness platforms</li>
                <li>Crisis intervention services</li>
                <li>Stress management and mindfulness programs</li>
                <li>Mental health accommodations through accessibility services</li>
              </ul>
              <p className="text-gray-700 mt-3">Canada's mental health helpline (1-866-585-0445) provides free 24/7 support, and many universities offer their own crisis lines.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety & Security</h3>
              <p className="text-gray-700 mb-3">Staying safe on and off campus:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Campus security services operating 24/7</li>
                <li>Safety apps and emergency notification systems</li>
                <li>Safe walk programs for nighttime travel</li>
                <li>Emergency phones and well-lit pathways</li>
                <li>Winter safety programs and resources</li>
                <li>Campus police or security partnerships</li>
                <li>Emergency preparedness training</li>
              </ul>
              <p className="text-gray-700 mt-3">Emergency number in Canada is 911 for police, fire, or ambulance services.</p>
            </div>
          </div>
        </article>

        {/* Working While Studying */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8">
          <h2 className="text-2xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Working While Studying
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Work Rights for International Students</h3>
              <p className="text-gray-700 mb-3">Current regulations for working during studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Study permit holders can work up to 20 hours per week off-campus during academic terms</li>
                <li>Full-time work permitted during scheduled breaks (summer, winter holidays)</li>
                <li>On-campus work has no hour restrictions</li>
                <li>Co-op work permits for required work placements</li>
                <li>Social Insurance Number (SIN) required for all employment</li>
                <li>Post-Graduation Work Permit available after completing eligible programs</li>
              </ul>
              <p className="text-gray-700 mt-3">Always verify current immigration policies as regulations may change.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Finding Student Jobs</h3>
              <p className="text-gray-700 mb-3">Common employment opportunities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>On-campus positions (libraries, administrative offices, research labs)</li>
                <li>Work-study programs for eligible students</li>
                <li>Campus food services and retail outlets</li>
                <li>Teaching Assistantships and Research Assistantships</li>
                <li>Off-campus retail, hospitality, and customer service roles</li>
                <li>University career fairs and job boards</li>
                <li>Online job platforms specialized for students</li>
              </ul>
              <p className="text-gray-700 mt-3">Average pay: Provincial minimum wage ($14-$16/hour) to $20/hour for specialized roles, with variations by province and city.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Practical Information</h3>
              <p className="text-gray-700 mb-3">Essential knowledge for working in Canada:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Social Insurance Number application process</li>
                <li>Canadian banking system and account options</li>
                <li>Income tax considerations and filing requirements</li>
                <li>Provincial employment standards and rights</li>
                <li>Canadian resume and cover letter formats</li>
                <li>Workplace culture and expectations</li>
                <li>Winter commuting and appropriate work attire</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Development</h3>
              <p className="text-gray-700 mb-3">Building your future career:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University career centers with personalized guidance</li>
                <li>Resume building and interview preparation resources</li>
                <li>Networking events and industry connections</li>
                <li>Co-op programs and internship opportunities</li>
                <li>Professional development workshops</li>
                <li>Mentor matching programs</li>
                <li>Immigration pathways to permanent residency</li>
              </ul>
              <p className="text-gray-700 mt-3">Many Canadian universities have strong career development programs with industry partnerships and alumni networks.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}