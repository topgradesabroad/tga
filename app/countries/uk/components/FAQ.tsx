import React from 'react';

const UkStudyAbroadFAQ = () => {
  return (
    <section id="faq" className="scroll-mt-36">
      <h2 className="text-3xl font-semibold mb-8 border-l-4 pl-4 border-purple-600">
        UK Study Abroad - Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What are the visa requirements for studying in the UK?
          </h3>
          <p className="text-gray-700">
            To study in the UK, most international students will need a Student
            visa. This visa requires you to have a confirmed place at a
            licensed UK educational institution (a Confirmation of Acceptance
            for Studies - CAS), demonstrate sufficient funds, and meet English
            language requirements. Detailed information can be found on the{' '}
            <a
              href="https://www.gov.uk/student-visa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UK government's website
            </a>
            .
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            How much does it cost to study and live in the UK as an
            international student?
          </h3>
          <p className="text-gray-700">
            Costs vary significantly depending on the university, location, and
            lifestyle. Tuition fees for international students are typically
            higher than for domestic students. Living expenses, including
            accommodation, food, and transportation, also need to be factored
            in. Budgeting is essential.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Which are the best universities in the UK for my field of study?
          </h3>
          <p className="text-gray-700">
            The "best" university depends on your specific field. Reputable
            rankings like the{' '}
            <a
              href="https://www.topuniversities.com/qs-world-university-rankings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              QS World University Rankings
            </a>
            ,{' '}
            <a
              href="https://www.timeshighereducation.com/world-university-rankings"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Times Higher Education World University Rankings
            </a>
            , and{' '}
            <a
              href="https://www.thecompleteuniversityguide.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              The Complete University Guide
            </a>
            can help. Researching university departments and faculty is also
            crucial.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What is the application process for UK universities, and what
            documents are required?
          </h3>
          <p className="text-gray-700">
            Applications for undergraduate degrees are usually made through{' '}
            <a
              href="https://www.ucas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              UCAS (Universities and Colleges Admissions Service)
            </a>
            . Postgraduate applications are often made directly to the
            university. Required documents typically include academic
            transcripts, English language proficiency test scores (e.g., IELTS,
            TOEFL), a personal statement, and letters of recommendation.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Can I work while studying in the UK, and what are the post-study
            work opportunities?
          </h3>
          <p className="text-gray-700">
            Student visa holders are generally allowed to work part-time during
            term time and full-time during holidays. The{' '}
            <a
              href="https://www.gov.uk/graduate-visa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Graduate visa
            </a>{' '}
            allows eligible graduates to stay in the UK for two years (or three
            years for PhD graduates) to work or look for work after completing
            their studies.
          </p>
        </article>
      </div>
    </section>
  );
};

export default UkStudyAbroadFAQ;