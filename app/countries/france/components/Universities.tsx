import React from "react";

export default function Universities() {
  // French institution data
  const institutionData = [
    {
      type: "Public Universities",
      keyStats: {
        institutions: "70",
        avgTuitionEUR: "€170 (per year)",
        avgTuitionIntl: "€170-€2,000",
        intlStudents: "200,000+",
        researchFunding: "€5B+",
        employmentRate: "85%",
        avgClassSize: "40 students",
        studentFacultyRatio: "25:1"
      },
      features: [
        "Affordable education",
        "Diverse range of disciplines",
        "Accessible research opportunities",
        "State-funded institutions",
        "Cultural and international exposure",
        "Emphasis on academic excellence"
      ],
      topUniversities: [
        {
          name: "Sorbonne University",
          ranking: "#1 Public University",
          established: "2018 (merger)",
          acceptanceRate: "Open enrollment",
          averageSalary: "€45K",
          notable: "Renowned for humanities and sciences"
        },
        {
          name: "University of Paris-Saclay",
          ranking: "#2 Public University",
          established: "2015",
          acceptanceRate: "Open enrollment",
          averageSalary: "€46K",
          notable: "Excellence in research and innovation"
        },
        {
          name: "University of Lyon",
          ranking: "#3 Public University",
          established: "2007 (merger)",
          acceptanceRate: "Open enrollment",
          averageSalary: "€44K",
          notable: "Leading in health and life sciences"
        }
      ]
    },
    {
      type: "Grandes Écoles",
      keyStats: {
        institutions: "250",
        avgTuitionEUR: "€8,000-€10,000 (per year)",
        avgTuitionIntl: "€10,000-€20,000",
        intlStudents: "50,000+",
        researchFunding: "€3B",
        employmentRate: "95%",
        avgClassSize: "20 students",
        studentFacultyRatio: "15:1"
      },
      features: [
        "Highly selective admissions",
        "Close industry ties",
        "Intensive academic training",
        "Leadership development focus",
        "Small class sizes",
        "Prestigious alumni network"
      ],
      topUniversities: [
        {
          name: "École Polytechnique",
          ranking: "#1 Grande École",
          established: "1794",
          acceptanceRate: "10%",
          averageSalary: "€70K",
          notable: "Excellence in engineering and science"
        },
        {
          name: "HEC Paris",
          ranking: "#2 Grande École",
          established: "1881",
          acceptanceRate: "15%",
          averageSalary: "€65K",
          notable: "Leading business school in Europe"
        },
        {
          name: "École Normale Supérieure",
          ranking: "#3 Grande École",
          established: "1794",
          acceptanceRate: "12%",
          averageSalary: "€68K",
          notable: "Elite institution for humanities and sciences"
        }
      ]
    }
  ];

  // Academic degree programs for France
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "French Licence degrees typically take 3 years, following the Bologna Process, blending theoretical knowledge with practical experience.",
      types: [
        {
          name: "Licence (B.A./B.Sc.)",
          duration: "3 years",
          credits: "180 ECTS",
          focus: "Foundational knowledge",
          structure: [
            "Core courses (70%)",
            "Elective courses (20%)",
            "Final project (10%)"
          ],
          topPrograms: [
            "Engineering",
            "Computer Science",
            "Business Administration",
            "Social Sciences"
          ]
        },
        {
          name: "Professional Degrees",
          duration: "3-4 years",
          credits: "180-240 ECTS",
          focus: "Vocational training",
          structure: [
            "Practical modules (60%)",
            "Internship (30%)",
            "Exams and project (10%)"
          ],
          topPrograms: [
            "Hospitality Management",
            "Tourism",
            "Culinary Arts",
            "Fashion"
          ]
        }
      ]
    },
    {
      level: "Postgraduate Education",
      description: "Advanced degrees aimed at specialization, research, or professional advancement.",
      types: [
        {
          name: "Master's Degrees",
          duration: "1-2 years",
          credits: "60-120 ECTS",
          focus: "Specialization and research",
          structure: [
            "Advanced coursework (60%)",
            "Research project/thesis (40%)"
          ],
          topPrograms: [
            "Master of Science",
            "Master of Arts",
            "Master of Engineering",
            "MBA"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "3-5 years",
          credits: "N/A",
          focus: "In-depth research",
          structure: [
            "Research and dissertation (80%)",
            "Seminars and coursework (20%)"
          ],
          topPrograms: [
            "Doctorat en Sciences",
            "Doctorat en Ingénierie",
            "Doctorat en Lettres",
            "Doctorat en Médecine"
          ]
        }
      ]
    }
  ];

  // Popular courses in French universities
  const undergradCourses = [
    {
      name: "Licence in Engineering",
      specializations: ["Mechanical", "Electrical", "Civil"],
      prerequisites:
        "Baccalauréat with a strong emphasis on Mathematics, French language proficiency",
      description:
        "Robust program integrating theoretical fundamentals with practical engineering applications.",
      outcomes: [
        "Strong foundation in engineering principles",
        "Problem-solving and analytical skills",
        "Hands-on project experience"
      ],
      tuitionFees:
        "Domestic/EU: €170 per year; International: €1,000-€2,000 per year"
    },
    {
      name: "Licence in Business Administration",
      specializations: ["International Business", "Finance", "Marketing"],
      prerequisites:
        "Baccalauréat, proficiency in French/English",
      description:
        "Focused program on business fundamentals with a global perspective.",
      outcomes: [
        "Management and analytical skills",
        "Understanding of global business trends",
        "Strategic decision-making abilities"
      ],
      tuitionFees:
        "Domestic/EU: €170 per year; International: €1,000-€2,500 per year"
    },
    {
      name: "Licence in Computer Science",
      specializations: ["Software Engineering", "Data Science", "Cybersecurity"],
      prerequisites:
        "Baccalauréat with strong mathematics and logical reasoning skills",
      description:
        "Comprehensive curriculum covering algorithms, programming, and system design with practical labs.",
      outcomes: [
        "Proficiency in programming and system design",
        "Analytical and problem-solving skills",
        "Experience with real-world projects"
      ],
      tuitionFees:
        "Domestic/EU: €170 per year; International: €1,000-€2,000 per year"
    }
  ];

  const postgraduateCourses = [
    {
      name: "Master in Engineering",
      specializations: ["Renewable Energy", "Advanced Manufacturing", "Civil Engineering"],
      prerequisites:
        "Licence in Engineering or related field",
      description:
        "Program focusing on advanced engineering concepts and research with industry projects.",
      outcomes: [
        "Specialized technical expertise",
        "Research and project management skills",
        "Innovation and critical thinking"
      ],
      tuitionFees: "Domestic/EU: €170 per year; International: €1,500-€3,000 per year"
    },
    {
      name: "Master in Management",
      specializations: ["Global Business", "Innovation", "Entrepreneurship"],
      prerequisites:
        "Licence degree, proficiency in English/French, sometimes GMAT/GRE",
      description:
        "Internationally oriented program cultivating managerial and leadership skills.",
      outcomes: [
        "Strategic management capabilities",
        "Decision-making under complex environments",
        "Leadership and communication skills"
      ],
      tuitionFees: "Domestic/EU: €170 per year; International: €2,000-€15,000 per year"
    },
    {
      name: "Master in Computer Science",
      specializations: ["Artificial Intelligence", "Cybersecurity", "Data Analytics"],
      prerequisites:
        "Licence in Computer Science or related discipline",
      description:
        "Research-driven program exploring advanced computing topics and practical projects.",
      outcomes: [
        "Expertise in advanced computing",
        "Research methodologies and technical innovation",
        "Collaborative problem-solving skills"
      ],
      tuitionFees: "Domestic/EU: €170 per year; International: €1,500-€3,000 per year"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-8">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
          French Higher Education System
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mt-2">
          Guide to French universities, degree structures, and academic programs for international students
        </p>
      </div>

      {/* University Types Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Types of French Institutions
        </h2>
        
        {institutionData.map((category, index) => (
          <div key={index} className="mb-8 bg-white rounded-lg p-5 border border-gray-200">
            <h3 className="text-xl font-bold text-purple-700 mb-4">{category.type}</h3>
            
            {/* Key Stats in compact card grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
              {Object.entries(category.keyStats).slice(0, 4).map(([key, value], statIndex) => (
                <div key={statIndex} className="bg-purple-50 p-2 rounded">
                  <div className="font-semibold text-purple-900">{value}</div>
                  <div className="text-xs text-gray-600 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Features */}
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Key Features</h4>
                <ul className="text-sm list-disc pl-5 text-gray-700 space-y-1">
                  {category.features.slice(0, 4).map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Top Institutions - Compact horizontal list */}
              <div className="flex-1">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Leading Institutions</h4>
                <div className="text-sm space-y-1">
                  {category.topUniversities.slice(0, 3).map((uni, uIndex) => (
                    <div key={uIndex} className="flex items-center space-x-1">
                      <span className="font-medium">{uni.name}</span>
                      <span className="text-xs text-gray-500">({uni.ranking})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* French Degree Structure Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          French Degree Structure
        </h2>
        
        {degreePrograms.map((level, lIndex) => (
          <div key={lIndex} className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-2">{level.level}</h3>
            <p className="text-sm text-gray-700 mb-4">{level.description}</p>
            
            <div className="space-y-4">
              {level.types.map((program, pIndex) => (
                <div key={pIndex} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{program.name}</h4>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {program.duration}
                    </span>
                  </div>
                  
                  <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Structure</h5>
                      <ul className="list-disc pl-5 text-gray-600 space-y-0.5">
                        {program.structure.map((item, sIndex) => (
                          <li key={sIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Popular Programs</h5>
                      <div className="flex flex-wrap gap-1">
                        {program.topPrograms.map((prog, tpIndex) => (
                          <span key={tpIndex} className="bg-white border border-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded">
                            {prog}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Popular French Courses Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Popular French Courses
        </h2>
        
        {/* Undergraduate Courses */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-purple-700 mb-4">Undergraduate Courses</h3>
          
          <div className="space-y-4">
            {undergradCourses.map((course, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 cursor-pointer text-base font-medium text-gray-900">
                  <div>
                    <span>{course.name}</span>
                    <span className="text-xs text-gray-600 ml-2">
                      [{course.specializations.join(", ")}]
                    </span>
                  </div>
                </summary>
                
                <div className="p-4 text-sm space-y-3 bg-gray-50">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Prerequisites</h4>
                    <p className="text-gray-600">{course.prerequisites}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Description</h4>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Learning Outcomes</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {course.outcomes.map((outcome, oIndex) => (
                        <li key={oIndex}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Tuition Fees (per year)</h4>
                    <p className="text-gray-600">{course.tuitionFees}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
        
        {/* Postgraduate Courses */}
        <div>
          <h3 className="text-xl font-bold text-purple-700 mb-4">Postgraduate Courses</h3>
          
          <div className="space-y-4">
            {postgraduateCourses.map((course, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                <summary className="flex justify-between items-center p-3 bg-gradient-to-r from-indigo-50 to-indigo-100 cursor-pointer text-base font-medium text-gray-900">
                  <div>
                    <span>{course.name}</span>
                    <span className="text-xs text-gray-600 ml-2">
                      [{course.specializations.join(", ")}]
                    </span>
                  </div>
                </summary>
                
                <div className="p-4 text-sm space-y-3 bg-gray-50">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Prerequisites</h4>
                    <p className="text-gray-600">{course.prerequisites}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Description</h4>
                    <p className="text-gray-600">{course.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Learning Outcomes</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      {course.outcomes.map((outcome, oIndex) => (
                        <li key={oIndex}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Tuition Fees (per year)</h4>
                    <p className="text-gray-600">{course.tuitionFees}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
