'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  blogUrl?: string;
}

export interface FAQData {
  generalQuestions: FAQItem[];
  ivyQuestions: FAQItem[];
}

const FAQClient: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'general' | 'ivy'>('general');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleTabChange = (tab: 'general' | 'ivy') => {
    setActiveTab(tab);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // FAQ Data - Contains all questions and answers
  const faqData: FAQData = {
    generalQuestions: [
      {
        question: "How early should I start planning for studying abroad?",
        answer: "We recommend starting your planning at least 12-18 months before your intended departure date. This gives you ample time to research programs, prepare applications, secure funding, and handle logistics like visas and accommodation."
      },
      {
        question: "What standardized tests are required for international students?",
        answer: "Common standardized tests include TOEFL or IELTS for English proficiency, GRE for graduate programs, GMAT for business schools, and SAT or ACT for undergraduate admissions. Requirements vary by institution and program.",
        blogUrl: "/blog/standardized-tests-for-international-students"
      },
      {
        question: "How can I finance my study abroad education?",
        answer: "Financing options include scholarships, grants, federal or private loans, work-study programs, and personal savings. Many countries and institutions offer specific scholarships for international students. We recommend researching multiple funding sources and applying early.",
        blogUrl: "/blog/financing-your-study-abroad"
      },
      {
        question: "Do I need health insurance while studying abroad?",
        answer: "Yes, most countries and universities require international students to have health insurance coverage. Some institutions offer their own insurance plans, while others accept external providers that meet specific requirements."
      },
      {
        question: "Can I work while studying abroad?",
        answer: "Work regulations for international students vary by country. Many destinations allow part-time work (typically 20 hours per week during term time and full-time during breaks). Always check the specific visa regulations for your destination country.",
        blogUrl: "/blog/working-while-studying-abroad"
      },
      {
        question: "How do I apply for a student visa?",
        answer: "The visa application process varies by country but typically requires an acceptance letter from your institution, proof of financial means, health insurance, and sometimes an interview. Start the process as soon as you receive your acceptance letter, as visa processing can take weeks or months."
      },
      {
        question: "What kind of housing options are available for international students?",
        answer: "Common options include on-campus dormitories, university-affiliated apartments, private rentals, and homestays. Each option has different costs, benefits, and application procedures. Many universities offer housing assistance for international students."
      },
      {
        question: "How can I prepare for cultural adjustment when studying abroad?",
        answer: "Research your host country's customs, learn basic phrases in the local language, connect with international student groups before arrival, and keep an open mind. Remember that culture shock is normal, and most universities offer support services to help international students adjust to their new environment.",
        blogUrl: "/blog/cultural-adjustment-study-abroad"
      }
    ],
    ivyQuestions: [
      {
        question: "What are the acceptance rates for Ivy League universities?",
        answer: "Ivy League acceptance rates generally range from 4-8%, making them some of the most selective institutions globally. Harvard, Princeton, and Columbia often have rates below 5%, while Cornell might have slightly higher acceptance rates around 8-10%."
      },
      {
        question: "What GPA do I need for Ivy League admission?",
        answer: "Most successful Ivy League applicants have GPAs above 3.9 on a 4.0 scale. However, admissions committees review applications holistically, considering factors beyond GPA including course rigor, extracurricular activities, essays, and recommendations.",
        blogUrl: "/blog/beyond-gpa-ivy-league-holistic-admissions"
      },
      {
        question: "How can I predict my chances of Ivy League admission?",
        answer: "While the final decision rests with the university, you can get an estimate of your chances using data-driven tools. Our Ivy League Predictor analyzes your academic profile, extracurricular activities, and other factors to provide personalized insights about your application strength. <a href='/tools/ivy-predictor' class='text-purple-600 underline hover:text-purple-800'>Try our Ivy League Predictor</a>"
      },
      {
        question: "Do international students have lower acceptance rates at Ivy League schools?",
        answer: "International acceptance rates at Ivy League institutions are typically lower than domestic rates, often around 2-4%. This is partly due to limited financial aid for international students and the large volume of qualified international applicants."
      },
      {
        question: "What extracurricular activities do Ivy League schools value most?",
        answer: "Ivy League schools value depth over breadth in extracurricular involvement. They look for sustained commitment, leadership positions, and meaningful impact rather than participation in numerous activities. Unique pursuits that showcase your passions and distinctive abilities are particularly valuable.",
        blogUrl: "/blog/extracurricular-excellence-ivy-league"
      },
      {
        question: "How important are recommendation letters for Ivy League applications?",
        answer: "Recommendation letters are crucial components of Ivy League applications. Strong letters from teachers or mentors who know you well and can speak specifically to your intellectual curiosity, character, and contributions are highly valuable. Generic recommendations, even from prestigious individuals, carry less weight."
      },
      {
        question: "Should I apply Early Decision to increase my chances?",
        answer: "Early Decision (ED) can potentially increase admission chances at Ivy League schools, with acceptance rates sometimes 2-3 times higher than Regular Decision. However, ED is binding and should only be used if you're certain about your top choice and don't need to compare financial aid packages.",
        blogUrl: "/blog/early-decision-strategy-ivy-league"
      },
      {
        question: "How important are essays in Ivy League applications?",
        answer: "Essays are extremely important in Ivy League admissions as they provide the opportunity to showcase your unique voice, perspectives, and experiences. Successful essays are authentic, reflective, and reveal aspects of your character and thinking that aren't apparent elsewhere in your application. They should demonstrate intellectual vitality and personal growth.",
        blogUrl: "/blog/crafting-compelling-ivy-league-essays"
      }
    ]
  };

  const currentQuestions = activeTab === 'general' ? faqData.generalQuestions : faqData.ivyQuestions;
  
  // Split the questions into two columns
  const leftColumnQuestions = currentQuestions.slice(0, 4);
  const rightColumnQuestions = currentQuestions.slice(4);

  // Function to render FAQ items
  const renderFAQItems = (questions: FAQItem[], startIndex: number) => {
    return questions.map((item, index) => {
      const actualIndex = startIndex + index;
      return (
        <div 
          key={actualIndex} 
          className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
            openQuestion === actualIndex 
              ? 'shadow-lg border-purple-200' 
              : 'shadow-sm border-gray-100 hover:border-purple-100'
          }`}
        >
          <button
            onClick={() => toggleQuestion(actualIndex)}
            className={`flex justify-between items-center w-full p-6 text-left transition-colors duration-300 ${
              openQuestion === actualIndex 
                ? 'bg-gradient-to-r from-purple-50 to-rose-50' 
                : 'bg-white hover:bg-gray-50'
            }`}
          >
            <h3 className={`text-lg font-medium min-h-14 flex items-center ${openQuestion === actualIndex ? 'text-purple-800' : 'text-gray-800'}`}>
              {item.question}
            </h3>
            <div className={`flex-shrink-0 ml-4 ${openQuestion === actualIndex ? 'text-purple-600' : 'text-rose-400'}`}>
              {openQuestion === actualIndex ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
          </button>
          
          {openQuestion === actualIndex && (
            <div className="px-6 pb-6 pt-2 bg-white">
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.answer }} />
                {item.blogUrl && (
                  <div className="mt-6">
                    <a 
                      href={item.blogUrl} 
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800 transition-colors duration-300"
                    >
                      <span className="mr-2">Learn more about this topic</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Curious Minds, Clear Paths
        </h2>
        <p className="text-lg text-purple-600 max-w-3xl mx-auto leading-relaxed">
          Your international education journey begins with the right questions. Explore our expert insights to illuminate your path forward.
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-12">
        <button 
          onClick={() => handleTabChange('general')}
          className={`px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
            activeTab === 'general' 
              ? 'bg-gradient-to-r from-purple-600 to-rose-500 text-white shadow-lg shadow-purple-200' 
              : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
          }`}
        >
          General Questions
        </button>
        <button 
          onClick={() => handleTabChange('ivy')}
          className={`px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 ${
            activeTab === 'ivy' 
              ? 'bg-gradient-to-r from-purple-600 to-rose-500 text-white shadow-lg shadow-purple-200' 
              : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
          }`}
        >
          Ivy League Questions
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-5">
          {renderFAQItems(leftColumnQuestions, 0)}
        </div>
        
        {/* Right Column */}
        <div className="space-y-5">
          {renderFAQItems(rightColumnQuestions, 4)}
        </div>
      </div>
    </div>
  );
};

export default FAQClient;