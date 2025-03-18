import React from 'react';

export default function StudentLifeAustralia() {
  return (
    <section id="student-life" className="scroll-mt-32 py-16 px-4 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-12 sm:mb-10">
          <h1 className="text-3xl sm:text-3xl border-l-4 border-purple-600 pl-4 font-bold text-gray-900 mb-3 sm:mb-4">
            Student Life in Australia
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience a rich and diverse academic environment while studying in Australia. From accommodation options to extracurricular activities, here's what to expect.
          </p>
        </header>

        {/* Accommodation */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Accommodation Options
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">University Residences</h3>
              <p className="text-gray-700 mb-3">Most Australian universities offer on-campus accommodation options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Catered halls with meal plans or self-catered accommodations</li>
                <li>Single or shared rooms with various bathroom arrangements</li>
                <li>Residential support staff and Residential Advisors (RAs)</li>
                <li>Close proximity to campus facilities and lecture halls</li>
                <li>Utilities typically included (electricity, water, internet)</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $250-$700 per week, depending on the city, type of accommodation, and meal plan options.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Purpose-Built Student Accommodation</h3>
              <p className="text-gray-700 mb-3">Privately managed student housing options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Modern apartments with studio or shared configurations</li>
                <li>All-inclusive payments with professional management</li>
                <li>Facilities like gyms, study rooms, and communal spaces</li>
                <li>24/7 security and maintenance support</li>
                <li>Often located in city centers or near university campuses</li>
              </ul>
              <p className="text-gray-700 mt-3">Average cost: $250-$650 per week, varying by location and amenities.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Private Rentals</h3>
              <p className="text-gray-700 mb-3">Many students choose to rent apartments or houses:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Shared houses or apartments in student-friendly suburbs</li>
                <li>Typically requiring 6 or 12-month lease agreements</li>
                <li>Additional costs for utilities, internet, and household goods</li>
                <li>Greater independence with more responsibilities</li>
                <li>Average rent: $150-$350 per week for a room in shared housing outside major cities, $200-$500 in Sydney, Melbourne, or Brisbane</li>
              </ul>
              <p className="text-gray-700 mt-3">Budget for: bond payment (usually 4-6 weeks' rent), connection fees, and contents insurance.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodation Tips for International Students</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Apply early for university accommodation as places fill quickly</li>
                <li>Consider temporary accommodation when first arriving</li>
                <li>Research suburb safety, transport options, and amenities</li>
                <li>Join university housing groups on social media</li>
                <li>Understand your rights as a tenant under Australian law</li>
                <li>Use university accommodation services for guidance</li>
                <li>Consider homestay options for cultural immersion</li>
                <li>Be aware of seasonal variations in accommodation availability</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Campus Life & Activities */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Campus Life & Activities
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Associations</h3>
              <p className="text-gray-700 mb-3">The hub of student life at Australian universities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Student unions or guilds with elected representatives</li>
                <li>Orientation Week (O-Week) activities and events</li>
                <li>Management of clubs, societies, and student media</li>
                <li>Student advocacy and support services</li>
                <li>Campus facilities, food outlets, and retail spaces</li>
                <li>Student membership is usually automatic upon enrollment</li>
              </ul>
              <p className="text-gray-700 mt-3">Participating in student associations helps build networks and develop leadership skills.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Clubs & Societies</h3>
              <p className="text-gray-700 mb-3">Australian universities offer a wide range of organizations:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Faculty and course-specific societies</li>
                <li>Cultural and international student groups</li>
                <li>Sporting clubs and fitness groups</li>
                <li>Special interest clubs (arts, politics, environment, etc.)</li>
                <li>Student publications and media outlets</li>
                <li>Volunteering and community service organizations</li>
                <li>Religious and spiritual groups</li>
              </ul>
              <p className="text-gray-700 mt-3">Club membership fees range from $5-$30 per year, with regular social events and activities.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sports & Recreation</h3>
              <p className="text-gray-700 mb-3">Stay active with various sporting opportunities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University sports facilities and fitness centers</li>
                <li>UniSport Australia competitive university sports</li>
                <li>Intramural and social sport competitions</li>
                <li>Outdoor recreation clubs (surfing, hiking, etc.)</li>
                <li>Student gym memberships at discounted rates</li>
                <li>Intervarsity sports competitions and events</li>
              </ul>
              <p className="text-gray-700 mt-3">Average sports center membership: $20-$60 per month, sometimes included in student fees.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Australian Campus Traditions</h3>
              <p className="text-gray-700 mb-3">Experience unique aspects of Australian university culture:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>O-Week (Orientation Week) festivities</li>
                <li>University balls and formal events</li>
                <li>Cultural festivals and international celebrations</li>
                <li>Market days and club showcases</li>
                <li>End-of-semester parties and celebrations</li>
                <li>Institution-specific traditions and events</li>
                <li>Inter-university competitions and challenges</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Academic Support & Resources */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Academic Support & Resources
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Australian Education System</h3>
              <p className="text-gray-700 mb-3">Understanding how Australian higher education works:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Three-year bachelor's degrees (standard) or four-year honours degrees</li>
                <li>Combination of lectures, tutorials, and practical sessions</li>
                <li>Credit point system with major and minor study areas</li>
                <li>Course advisors to help with study planning</li>
                <li>Emphasis on independent learning and critical thinking</li>
                <li>Continuous assessment alongside final examinations</li>
                <li>Work-integrated learning opportunities at many institutions</li>
              </ul>
              <p className="text-gray-700 mt-3">Australian grading typically uses HD (High Distinction), D (Distinction), C (Credit), P (Pass), and F (Fail), with specific systems varying by institution.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Library & Learning Resources</h3>
              <p className="text-gray-700 mb-3">Australian universities offer comprehensive academic resources:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Well-equipped university libraries with extensive collections</li>
                <li>Digital resources and online databases</li>
                <li>Special collections and research archives</li>
                <li>Extended-hours study spaces during exam periods</li>
                <li>Equipment loans (laptops, cameras, recording devices)</li>
                <li>Research support and information literacy programs</li>
                <li>Learning management systems and online tools</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Support Services</h3>
              <p className="text-gray-700 mb-3">Help available to support your studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Academic skills advisors and writing centers</li>
                <li>Mathematics and statistics support</li>
                <li>Study skills workshops and resources</li>
                <li>Peer mentoring and study groups</li>
                <li>Disability support services</li>
                <li>Learning advisors and academic coaches</li>
                <li>IT support and digital literacy assistance</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Student Support</h3>
              <p className="text-gray-700 mb-3">Specialized services for international students:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International student offices with dedicated support staff</li>
                <li>Visa and immigration assistance</li>
                <li>Orientation programs for international students</li>
                <li>Cultural adjustment support and social activities</li>
                <li>English language support programs</li>
                <li>Advice on accommodation, banking, and healthcare</li>
                <li>International student clubs and cultural associations</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Health & Wellbeing */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Health & Wellbeing
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Healthcare in Australia</h3>
              <p className="text-gray-700 mb-3">Accessing medical care as a student:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Overseas Student Health Cover (OSHC) mandatory for international students</li>
                <li>OSHC costs approximately $500-$700 per year</li>
                <li>On-campus health services at most universities</li>
                <li>Medicare for Australian citizens and eligible residents</li>
                <li>General Practitioners (GPs) for primary healthcare</li>
                <li>Public hospitals for emergency care</li>
                <li>Additional coverage through student association health plans</li>
              </ul>
              <p className="text-gray-700 mt-3">Check what your OSHC covers as benefits vary between providers.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mental Health Support</h3>
              <p className="text-gray-700 mb-3">Resources available for your mental wellbeing:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University counseling services with free or subsidized sessions</li>
                <li>Mental health and wellbeing programs</li>
                <li>Peer support networks and student-led initiatives</li>
                <li>Online mental health resources and telehealth options</li>
                <li>Crisis support and after-hours helplines</li>
                <li>Mental health first aid training opportunities</li>
                <li>Stress management and resilience workshops</li>
              </ul>
              <p className="text-gray-700 mt-3">Many services are free or heavily subsidized for students with valid ID.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wellness Programs</h3>
              <p className="text-gray-700 mb-3">Holistic wellbeing initiatives on campus:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Mindfulness and meditation sessions</li>
                <li>Yoga and fitness classes for students</li>
                <li>Nutrition and healthy eating workshops</li>
                <li>Sleep hygiene and stress management programs</li>
                <li>Outdoor recreation and nature connection activities</li>
                <li>Student wellness centers and relaxation spaces</li>
                <li>Wellbeing apps and digital resources</li>
              </ul>
              <p className="text-gray-700 mt-3">Many universities offer wellness programs free or at reduced rates for enrolled students.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Safety on Campus</h3>
              <p className="text-gray-700 mb-3">Staying safe while studying in Australia:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>24/7 campus security services at most universities</li>
                <li>Safety escort services for after-hours study</li>
                <li>Emergency phones and help points across campuses</li>
                <li>Safety apps with GPS tracking and emergency contact features</li>
                <li>Reporting mechanisms for incidents and concerns</li>
                <li>Safety workshops and awareness programs</li>
                <li>Student support for respect and consent education</li>
              </ul>
              <p className="text-gray-700 mt-3">Save your campus security number in your phone for quick access if needed.</p>
            </div>
          </div>
        </article>

        {/* Work & Career */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Work & Career Opportunities
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Working While Studying</h3>
              <p className="text-gray-700 mb-3">Employment options for students in Australia:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International students can work up to 48 hours per fortnight during semester</li>
                <li>Unlimited work hours during scheduled course breaks</li>
                <li>Minimum wage of approximately $21.38 per hour (as of 2023)</li>
                <li>Common student jobs: retail, hospitality, customer service</li>
                <li>On-campus employment opportunities (libraries, admin, etc.)</li>
                <li>Casual work flexibility around study commitments</li>
                <li>Tax File Number (TFN) required for employment</li>
              </ul>
              <p className="text-gray-700 mt-3">Remember to balance work hours with study commitments to maintain academic success.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Career Development</h3>
              <p className="text-gray-700 mb-3">Resources to help build your future career:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University careers services and job boards</li>
                <li>Career counseling and guidance appointments</li>
                <li>Resume and cover letter workshops</li>
                <li>Interview preparation and mock interviews</li>
                <li>Networking events and industry connections</li>
                <li>Career fairs and recruitment days</li>
                <li>LinkedIn profile optimization support</li>
              </ul>
              <p className="text-gray-700 mt-3">Most career services remain available to alumni after graduation.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Internships & Work Experience</h3>
              <p className="text-gray-700 mb-3">Practical experience opportunities during your studies:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Industry placements and internship programs</li>
                <li>Work-integrated learning components in degrees</li>
                <li>Volunteer opportunities related to your field</li>
                <li>Graduate programs with major employers</li>
                <li>Research assistant positions for academic experience</li>
                <li>Industry mentoring programs</li>
                <li>Professional Year Programs for eligible graduates</li>
              </ul>
              <p className="text-gray-700 mt-3">Many Australian degrees include practical components to enhance employability.</p>
            </div>
          </div>
        </article>

        {/* Transportation & Getting Around */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Transportation & Getting Around
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Public Transport</h3>
              <p className="text-gray-700 mb-3">Getting around Australian cities:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Comprehensive public transport networks in major cities</li>
                <li>Student concession cards for discounted fares</li>
                <li>Trains, buses, trams, and ferries (depending on city)</li>
                <li>Transport apps for real-time updates and planning</li>
                <li>Smart cards for ticketing (Opal, myki, go card, etc.)</li>
                <li>Night buses and services for late-night travel</li>
                <li>Airport links and shuttle services</li>
              </ul>
              <p className="text-gray-700 mt-3">Student concessions can save 30-50% on regular fares.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cycling & Walking</h3>
              <p className="text-gray-700 mb-3">Active transport options:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Bike-friendly campuses with secure storage</li>
                <li>Bike share schemes in major cities</li>
                <li>Dedicated cycling paths and infrastructure</li>
                <li>Walking paths and pedestrian-friendly areas</li>
                <li>University cycling clubs and groups</li>
                <li>Bike maintenance workshops on many campuses</li>
                <li>Helmet laws applicable nationwide</li>
              </ul>
              <p className="text-gray-700 mt-3">Second-hand bikes are available from around $100-$300.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Driving & Car Sharing</h3>
              <p className="text-gray-700 mb-3">Options for motorized transport:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>International driving permits valid for 3-12 months</li>
                <li>Car-sharing services like GoGet and Car Next Door</li>
                <li>Rideshare apps including Uber and Ola</li>
                <li>Student parking permits on campus (limited availability)</li>
                <li>Carpooling platforms and university ride-sharing groups</li>
                <li>Driver's license requirements vary by state</li>
                <li>Strict road rules and enforcement</li>
              </ul>
              <p className="text-gray-700 mt-3">Consider costs like insurance, registration, and fuel before purchasing a car.</p>
            </div>
          </div>
        </article>

        {/* Cultural Adjustment & Social Life */}
        <article className="bg-white rounded-lg shadow-sm p-5 sm:p-8 mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4 sm:mb-6 pb-3 border-b border-gray-200">
            Cultural Adjustment & Social Life
          </h2>
          <div className="space-y-5 sm:space-y-6">
            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Australian Culture</h3>
              <p className="text-gray-700 mb-3">Understanding Australian social norms:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Casual and informal communication style</li>
                <li>Emphasis on equality and "fair go" principles</li>
                <li>Punctuality expected for appointments and classes</li>
                <li>Tipping not customary or expected</li>
                <li>Outdoor lifestyle and appreciation of nature</li>
                <li>Strong sporting culture and community events</li>
                <li>Diverse multicultural society and cuisines</li>
              </ul>
              <p className="text-gray-700 mt-3">Cultural orientation programs are available at most universities.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Making Friends</h3>
              <p className="text-gray-700 mb-3">Building your social network in Australia:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Orientation events and welcome activities</li>
                <li>Joining clubs and societies aligned with interests</li>
                <li>Participating in faculty and course social events</li>
                <li>Volunteering opportunities on and off campus</li>
                <li>Student buddy and mentoring programs</li>
                <li>Study groups and collaborative projects</li>
                <li>Social media groups and university forums</li>
              </ul>
              <p className="text-gray-700 mt-3">Social connections are crucial for wellbeing and academic success.</p>
            </div>

            <div className="p-4 bg-purple-50 rounded">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exploring Australia</h3>
              <p className="text-gray-700 mb-3">Making the most of your time in Australia:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>University-organized trips and tours</li>
                <li>Student travel discounts and concessions</li>
                <li>National parks and natural attractions</li>
                <li>Cultural festivals and community events</li>
                <li>Weekend getaways to nearby destinations</li>
                <li>Semester break travel opportunities</li>
                <li>Adventure tourism and outdoor activities</li>
              </ul>
              <p className="text-gray-700 mt-3">Australia's diverse landscapes offer something for every interest.</p>
            </div>
          </div>
        </article>
</div>
</section>
  )
}
      