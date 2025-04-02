// app/usa-faq/page.tsx

import React from "react";

const faqs = [
  {
    question:
      "What are the best USA universities for international students looking to study in the USA?",
    answer:
      "Leading institutions such as Harvard, MIT, Stanford, Columbia, and UC Berkeley offer world-class education and research opportunities for international students."
  },
  {
    question:
      "What are the admission requirements for international students to study in the USA?",
    answer:
      "Typically, you need a valid passport, academic transcripts, standardized test scores (SAT, GRE, or GMAT), English proficiency tests (TOEFL or IELTS), and proof of financial support."
  },
  {
    question:
      "How much does it cost to study in the USA, including tuition and living expenses?",
    answer:
      "Tuition fees range from $20,000 to $60,000 per year, and living expenses can vary between $10,000 and $18,000 annually depending on the city and lifestyle."
  },
  {
    question:
      "What USA scholarships and financial aid options are available for students planning to study in the USA?",
    answer:
      "International students can explore scholarships like Fulbright, AAUW, and institution-specific awards, along with various grants and financial aid programs."
  },
  {
    question:
      "Can international students work while studying in the USA on a student visa?",
    answer:
      "Yes, most students can work on-campus up to 20 hours per week during the academic term and full-time during breaks. Off-campus work requires CPT or OPT authorization."
  },
  {
    question:
      "How long does the USA student visa process take for international students?",
    answer:
      "The F-1 visa process generally takes 2-3 months. It involves obtaining an I-20 from your university, completing the DS-160 form, and attending an interview at a US embassy or consulate."
  },
  {
    question:
      "What is the difference between CPT and OPT for students studying in the USA?",
    answer:
      "CPT (Curricular Practical Training) permits internships during studies, whereas OPT (Optional Practical Training) allows work in your field after graduation, with STEM graduates eligible for extended OPT."
  },
  {
    question:
      "What post-graduation work opportunities exist for international students who study in the USA?",
    answer:
      "After graduation, students can apply for OPT and may secure an H-1B work visa or pursue pathways to permanent residency through employer sponsorship."
  },
  {
    question:
      "Which standardized tests and entrance exams do international students need to study in the USA?",
    answer:
      "Undergraduate programs often require the SAT or ACT, while graduate programs may need GRE or GMAT scores. Additionally, TOEFL or IELTS is required for non-native English speakers."
  },
  {
    question:
      "What are the best cities in the USA for international students to study and live?",
    answer:
      "Cities like New York, Boston, San Francisco, Los Angeles, and Chicago are popular for their top universities, vibrant student communities, and diverse career opportunities."
  }
];

const USAFaqPage = () => {
  return (
      <section id="faq">
        <h2 className="text-3xl font-bold text-center mb-6">
          USA Study Abroad FAQs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default USAFaqPage;
