// pages/ivy-league-applications.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import AdmissionsPredictor from './components/AdmissionsPredictor';
import { Briefcase, Calendar, CheckCircle, ChevronRight, FileText, GraduationCap, Users } from 'lucide-react';

const IvyLeagueApplicationsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ivy League Applications | Your Study Abroad Consultancy</title>
        <meta name="description" content="Get expert guidance on Ivy League applications and use our predictor tool to assess your chances at Harvard, Yale, Princeton and other top institutions." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Path to Ivy League Admission</h1>
            <p className="text-xl mb-8">Unlock the doors to world's most prestigious universities with personalized guidance and strategic insights</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#admissions-predictor" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Try Our Admissions Predictor
              </a>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Ivy League Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Ivy League Advantage</h2>
            <p className="text-gray-600 text-lg">The Ivy League consists of eight prestigious universities known for their academic excellence, selective admissions, and significant history.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Harvard University", founded: 1636, location: "Cambridge, MA", acceptance: "3.19%", color: "crimson" },
              { name: "Yale University", founded: 1701, location: "New Haven, CT", acceptance: "4.46%", color: "blue" },
              { name: "Princeton University", founded: 1746, location: "Princeton, NJ", acceptance: "3.98%", color: "orange" },
              { name: "Columbia University", founded: 1754, location: "New York, NY", acceptance: "3.73%", color: "blue" },
              { name: "Brown University", founded: 1764, location: "Providence, RI", acceptance: "5.50%", color: "brown" },
              { name: "University of Pennsylvania", founded: 1740, location: "Philadelphia, PA", acceptance: "5.68%", color: "red" },
              { name: "Dartmouth College", founded: 1769, location: "Hanover, NH", acceptance: "6.17%", color: "green" },
              { name: "Cornell University", founded: 1865, location: "Ithaca, NY", acceptance: "8.70%", color: "red" }
            ].map((school, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full mb-4" style={{ backgroundColor: school.color }}></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                <p className="text-gray-600 mb-1">Founded: {school.founded}</p>
                <p className="text-gray-600 mb-1">Location: {school.location}</p>
                <p className="text-gray-600 font-semibold">Acceptance Rate: {school.acceptance}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">What Makes the Ivy League Special?</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>World-renowned faculty and research opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Extensive alumni networks across all industries</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Substantial financial aid available to qualified students</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>Exceptional career placement and graduate school acceptance rates</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Admissions Predictor Section */}
      <section id="admissions-predictor" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          
          <AdmissionsPredictor />
          
        </div>
      </section>

      {/* Application Requirements Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Requirements</h2>
            <p className="text-gray-600 text-lg">Ivy League universities have specific requirements and deadlines. Here's what you need to prepare:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FileText className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Common Application</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal information and demographic details</li>
                <li>• Academic history and transcripts</li>
                <li>• List of extracurricular activities</li>
                <li>• Personal essay (650 words maximum)</li>
                <li>• School-specific supplemental essays</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Academic Requirements</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• High school transcript with rigorous coursework</li>
                <li>• GPA typically in the 3.9+ range (unweighted)</li>
                <li>• Test scores (optional at most Ivies for 2024-2025)</li>
                <li>• AP/IB/Honors courses strongly recommended</li>
                <li>• Class rank (if provided by your school)</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Letters of Recommendation</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• 2-3 teacher recommendations required</li>
                <li>• One counselor recommendation</li>
                <li>• Optional: Additional recommendation from mentor, coach, or employer</li>
                <li>• Letters should highlight character, intellectual curiosity, and classroom contributions</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">Extracurricular Profile</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Demonstrated leadership roles</li>
                <li>• Sustained commitment (3-4 years) to key activities</li>
                <li>• Impact in your school or community</li>
                <li>• Personal projects or initiatives</li>
                <li>• Competitions, awards, or recognition</li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <Link href="/services/application-guidance" className="text-blue-600 font-semibold inline-flex items-center">
              View our comprehensive application guide
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-300 text-lg">Our consultants have helped students gain admission to every Ivy League institution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Aisha P.",
                from: "International School, Dubai",
                to: "Harvard University",
                quote: "The admissions predictor was spot on. My consultant helped me strengthen my essays which made all the difference.",
                image: "/api/placeholder/64/64"
              },
              {
                name: "Michael T.",
                from: "Public High School, Ohio",
                to: "Yale University",
                quote: "I didn't think I had a chance at Yale, but the strategic guidance on how to present my research project opened doors.",
                image: "/api/placeholder/64/64"
              },
              {
                name: "Sofia R.",
                from: "Private Academy, California",
                to: "Princeton University",
                quote: "The timeline and personalized strategy kept me on track. My application highlighted aspects I would have never considered.",
                image: "/api/placeholder/64/64"
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.from} → {testimonial.to}</p>
                  </div>
                </div>
                <p className="text-gray-300">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-gray-800 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-400">94%</h3>
                <p className="text-gray-300">Acceptance rate to at least one Ivy for our students</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">$42M+</h3>
                <p className="text-gray-300">In scholarships secured by our students in 2023-2024</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-400">8/8</h3>
                <p className="text-gray-300">All Ivy League schools where our students have been accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Timeline</h2>
            <p className="text-gray-600 text-lg">Planning ahead is crucial for a successful Ivy League application. Follow this timeline for best results:</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                time: "Junior Year (Fall)",
                items: [
                  "Begin standardized test preparation",
                  "Research Ivy League schools and programs",
                  "Take challenging courses and maintain strong grades",
                  "Deepen involvement in key extracurricular activities"
                ]
              },
              {
                time: "Junior Year (Spring)",
                items: [
                  "Take SAT/ACT examinations",
                  "Begin college visits if possible",
                  "Identify potential recommendation writers",
                  "Start drafting personal statement ideas"
                ]
              },
              {
                time: "Summer Before Senior Year",
                items: [
                  "Engage in meaningful summer activities",
                  "Refine college list with safety, target, and reach schools",
                  "Work on Common Application essays",
                  "Prepare for any remaining standardized tests"
                ]
              },
              {
                time: "Senior Year (Fall)",
                items: [
                  "Complete Early Decision/Early Action applications (November 1)",
                  "Request recommendation letters (September)",
                  "Finalize personal statement and supplemental essays",
                  "Prepare for alumni interviews"
                ]
              },
              {
                time: "Senior Year (Winter/Spring)",
                items: [
                  "Submit Regular Decision applications (January 1)",
                  "Complete financial aid applications (FAFSA, CSS Profile)",
                  "Attend admitted student events",
                  "Make final college decision (May 1)"
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="mb-8 flex">
                <div className="mr-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  {i < 4 && (
                    <div className="w-0.5 h-24 bg-blue-200 mx-auto mt-2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm mr-3">
                      <Calendar size={14} className="inline-block mr-1" />
                      {phase.time}
                    </span>
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Download Detailed Timeline PDF
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Ivy League Services</h2>
            <p className="text-gray-600 text-lg">Specialized services designed to maximize your chances of admission to Ivy League universities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Comprehensive Consulting",
                price: "$3,500",
                features: [
                  "Complete application strategy",
                  "School selection guidance",
                  "Essay brainstorming and editing",
                  "Activity list optimization",
                  "Interview preparation",
                  "12 hours of one-on-one consulting"
                ],
                highlight: true
              },
              {
                title: "Essay Package",
                price: "$1,800",
                features: [
                  "Personal statement development",
                  "Supplemental essay guidance",
                  "Two rounds of detailed feedback",
                  "Final polish and review",
                  "Unique positioning strategy",
                  "6 hours of one-on-one consulting"
                ],
                highlight: false
              },
              {
                title: "Application Review",
                price: "$900",
                features: [
                  "Comprehensive application audit",
                  "Strengths and weaknesses analysis",
                  "Strategic recommendations",
                  "Essay feedback",
                  "Activity list enhancement",
                  "3 hours of one-on-one consulting"
                ],
                highlight: false
              }
            ].map((service, i) => (
              <div key={i} className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${service.highlight ? 'border-2 border-blue-500' : 'border border-gray-200'}`}>
                {service.highlight && (
                  <div className="bg-blue-500 text-white py-1 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="bg-white p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-3xl font-bold text-gray-900 mb-6">{service.price}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${service.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need a custom solution?</h3>
            <p className="text-gray-700 mb-4">We offer tailored consulting packages based on your specific needs and timeline</p>
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Common questions about Ivy League admissions and our services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do I need perfect grades and test scores to get into an Ivy League school?",
                answer: "While strong academics are important, Ivy League schools practice holistic admissions. They evaluate your entire application, including extracurricular activities, essays, recommendations, and personal qualities. Many successful applicants don't have perfect scores but show exceptional strengths in other areas."
              },
              {
                question: "How accurate is your Ivy League admissions predictor?",
                answer: "Our predictor uses historical admissions data and sophisticated algorithms to provide guidance, but no tool can guarantee admission results with 100% accuracy. Ivy League admissions involve qualitative factors that can't be fully captured in a prediction model. We recommend using it as one part of your overall application strategy."
              },
              {
                question: "Is it better to apply Early Decision or Regular Decision?",
                answer: "Early Decision typically offers higher acceptance rates but is binding. It's best for students who have a clear top choice and strong applications ready early. Regular Decision allows you to compare financial aid offers and is better if you need more time to strengthen your application or aren't certain about your top choice."
              },
              {
                question: "How important are essays in Ivy League applications?",
                answer: "Essays are extremely important, as they're your opportunity to speak directly to the admissions committee. They help admissions officers understand your personality, values, and how you'll contribute to their campus. Strong essays can differentiate you from other applicants with similar academic credentials."
              },
              {
                question: "What makes your consultancy different from others?",
                answer: "Our consultants include former Ivy League admissions officers and graduates who understand what these institutions are looking for. We take a personalized approach to each student, focusing on authentic representation rather than formulaic strategies. Our success rates exceed industry averages, and we offer specialized expertise in various academic disciplines and extracurricular areas."
              }
            ].map((faq, i) => (
              <div key={i} className="mb-6 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-8 text-center">
            <Link href="/faq" className="text-blue-600 font-semibold inline-flex items-center">
              View all FAQs
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Ivy League Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">Take the first step toward your dream education with personalized guidance from our expert consultants</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Schedule a Free Consultation
              </button>
              <a href="#admissions-predictor" className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Try Our Admissions Predictor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IvyLeagueApplicationsPage;