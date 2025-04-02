import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="scroll-mt-36">
      <h2 className="text-3xl font-semibold mb-8 border-l-4 pl-4 border-purple-600">
        Germany Study Abroad - Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            How do I apply for a German student visa?
          </h3>
          <p className="text-gray-700">
            To study in Germany, non-EU/EEA students generally need a National Visa for study purposes. First, secure admission to a recognized German university, then apply for a student visa at the German embassy or consulate in your country. You'll need proof of university admission, financial proof (blocked account with around €11,208 per year), health insurance, academic transcripts, and language proficiency (German or English, depending on your program). Processing times vary, so apply at least 3 months before your planned departure.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What is the Post-Study Work visa in Germany?
          </h3>
          <p className="text-gray-700">
            After completing your degree, you can extend your residence permit for up to 18 months to search for a job related to your field of study. During this period, you can work without any restrictions. Once you secure a relevant job, you can apply for a long-term work permit or an EU Blue Card. Gaining sufficient work experience can also lead to permanent residency (Niederlassungserlaubnis) in Germany.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            How much does it cost to study in Germany for international students?
          </h3>
          <p className="text-gray-700">
            Public universities in Germany generally have no tuition fees for undergraduate and many master's programs, except for a nominal semester contribution (around €150-€350). However, non-EU students may need to pay tuition in some federal states. Private universities charge tuition fees ranging from €10,000 to €30,000 per year. Living expenses typically range from €10,000 to €12,000 per year, including accommodation, food, health insurance, and transportation.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Which are the top universities in Germany for international students?
          </h3>
          <p className="text-gray-700">
            Germany is home to several prestigious institutions known for their research and academic excellence. Top universities include the Technical University of Munich (TUM), Ludwig Maximilian University of Munich (LMU), University of Heidelberg, University of Freiburg, RWTH Aachen University, and Humboldt University of Berlin. These institutions offer various programs in English and German, catering to a diverse international student body.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            Can international students work while studying in Germany?
          </h3>
          <p className="text-gray-700">
            Yes, international students can work up to 120 full days or 240 half days per year without a special work permit. If you wish to work more than this limit, you need approval from the Federal Employment Agency. Working part-time helps cover living expenses and gain experience, but balancing work and studies is essential.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What are the language requirements for studying in Germany?
          </h3>
          <p className="text-gray-700">
            Programs in German typically require proof of proficiency through tests like TestDaF or DSH. For English-taught programs, IELTS (6.0-7.0) or TOEFL iBT (80-100) scores are accepted. Some institutions may also accept Cambridge English qualifications. If you don't meet the language requirements, universities often provide preparatory language courses.
          </p>
        </article>

        <article className="bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            What scholarships are available for international students in Germany?
          </h3>
          <p className="text-gray-700">
            Scholarships are available from DAAD (German Academic Exchange Service), government programs, and individual universities. Popular options include DAAD Scholarships, Deutschlandstipendium, Erasmus+, and scholarships from political foundations like the Heinrich Böll Foundation. Most scholarships are competitive and require early application.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FAQ;
