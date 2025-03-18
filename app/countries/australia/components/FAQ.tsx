import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="scroll-mt-36">
      <h2 className="text-3xl font-semibold mb-8 border-l-4 pl-4 border-purple-600">
        Australia Study Abroad - Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            How do I apply for an Australian student visa?
          </h3>
          <p className="text-gray-700">
            To study in Australia, you'll need a Student visa (subclass 500) if your course is registered with CRICOS (Commonwealth Register of Institutions and Courses for Overseas Students). You must first receive an acceptance letter from an Australian educational institution, then apply online through the Department of Home Affairs. You'll need to provide proof of acceptance, evidence of sufficient funds, health insurance (OSHC), English proficiency test results, and possibly a health examination. Applications should be submitted well in advance as processing times vary by country. Visit the{' '}
            <a
              href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Department of Home Affairs website
            </a>{' '}
            for detailed information.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What is the Post-Study Work visa in Australia?
          </h3>
          <p className="text-gray-700">
            The Temporary Graduate visa (subclass 485) allows international students who have completed eligible programs at Australian institutions to work in Australia after graduation. The Post-Study Work stream permits graduates to work between 2-4 years depending on their qualification level and location of study. This valuable pathway gives graduates Australian work experience, which can help with permanent residency applications. To be eligible, you must have completed a CRICOS-registered course with a duration of at least two academic years, meet English language requirements, and apply within 6 months of completing your course.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            How much does it cost to study in Australia for international students?
          </h3>
          <p className="text-gray-700">
            Tuition fees for international students in Australia range from AUD 20,000 to AUD 45,000 per year for undergraduate programs, depending on the program and institution. Graduate programs typically cost between AUD 22,000 and AUD 50,000 annually. Living expenses vary by location but generally range from AUD 20,000 to AUD 27,000 per year, covering accommodation, food, transportation, and other essentials. Additional costs include Overseas Student Health Cover (OSHC) (approximately AUD 500-700 per year), textbooks, and the student visa application fee (AUD 650).
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Which are the top universities in Australia for international students?
          </h3>
          <p className="text-gray-700">
            Australia is home to many world-renowned institutions. Some of the highest-ranked universities include the University of Melbourne, Australian National University, University of Sydney, University of Queensland, Monash University, and University of New South Wales. Other excellent options include the University of Western Australia, University of Adelaide, Queensland University of Technology, and Macquarie University. The best choice depends on your specific field of study, as different universities excel in different disciplines. Research program-specific rankings and consider factors such as location, campus culture, and available support services for international students.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Can international students work while studying in Australia?
          </h3>
          <p className="text-gray-700">
            Yes, international students with a valid student visa can work up to 48 hours per fortnight (two weeks) during academic sessions and unlimited hours during scheduled breaks. This work authorization is automatically included with your student visa and does not require a separate work permit. Your spouse or partner may also be able to work, depending on your course of study. Working while studying helps offset costs and provides valuable Australian work experience, which can be beneficial for future employment and immigration applications.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What are the English language requirements for studying in Australia?
          </h3>
          <p className="text-gray-700">
            Most Australian institutions require proof of English proficiency for non-native speakers. Commonly accepted tests include IELTS Academic (typically requiring scores between 6.0-7.0), TOEFL iBT (scores of 60-100), PTE Academic (50-65), and Cambridge English Advanced (CAE, scores of 169-185). Requirements vary by institution and program level, with graduate programs often requiring higher scores. Some universities offer conditional admission with English language pathway programs if you don't meet the minimum requirements. Additionally, some student visa applications require a minimum English language proficiency level.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What scholarships and financial aid options are available for international students in Australia?
          </h3>
          <p className="text-gray-700">
            International students can access various funding opportunities in Australia. These include institutional scholarships offered directly by universities (merit-based, need-based, or specific to certain programs or nationalities), government scholarships like the Australia Awards and Endeavour Scholarships, and external scholarships from organizations and foundations. Some country-specific options include the Australia-ASEAN Scholarships and the Destination Australia Program. Research grants may be available for graduate students. Most scholarships are competitive and have specific eligibility requirements, so applying early and researching thoroughly is essential.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FAQ;