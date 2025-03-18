import React from "react";

export default function Universities() {
  // Canadian institution data with real information
  const institutionData = [
    {
      type: "U15 Research Universities",
      keyStats: {
        institutions: "15",
        avgTuitionCDN: "$7,500",
        avgTuitionIntl: "$30,000-$45,000",
        intlStudents: "180,000+",
        researchFunding: "$5.5B+",
        employmentRate: "91%",
        avgClassSize: "22 students",
        studentFacultyRatio: "16:1"
      },
      features: [
        "Research-intensive institutions",
        "Global academic reputation",
        "Strong industry partnerships",
        "Extensive international networks",
        "State-of-the-art research facilities",
        "Comprehensive program offerings"
      ],
      topUniversities: [
        {
          name: "University of Toronto",
          ranking: "#1 Canadian University",
          established: "1827",
          acceptanceRate: "43%",
          averageSalary: "CAD $68K",
          notable: "Largest research university in Canada"
        },
        {
          name: "University of British Columbia",
          ranking: "#2 Canadian University",
          established: "1908",
          acceptanceRate: "52%",
          averageSalary: "CAD $65K",
          notable: "Global leader in sustainability research"
        },
        {
          name: "McGill University",
          ranking: "#3 Canadian University",
          established: "1821",
          acceptanceRate: "46%",
          averageSalary: "CAD $67K",
          notable: "Canada's oldest medical school"
        }
      ]
    },
    {
      type: "Comprehensive Universities",
      keyStats: {
        institutions: "30+",
        avgTuitionCDN: "$6,000",
        avgTuitionIntl: "$22,000-$35,000",
        intlStudents: "120,000+",
        researchFunding: "$1.2B",
        employmentRate: "89%",
        avgClassSize: "26 students",
        studentFacultyRatio: "20:1"
      },
      features: [
        "Balance of teaching and research",
        "Practical skills development",
        "Cooperative education options",
        "Diverse program offerings",
        "Modern campus facilities",
        "Strong community connections"
      ],
      topUniversities: [
        {
          name: "Simon Fraser University",
          ranking: "#1 Comprehensive University",
          established: "1965",
          acceptanceRate: "59%",
          averageSalary: "CAD $60K",
          notable: "Leader in cooperative education programs"
        },
        {
          name: "University of Victoria",
          ranking: "#2 Comprehensive University",
          established: "1963",
          acceptanceRate: "63%",
          averageSalary: "CAD $58K",
          notable: "Known for environmental and ocean sciences"
        },
        {
          name: "Carleton University",
          ranking: "#3 Comprehensive University",
          established: "1942",
          acceptanceRate: "67%",
          averageSalary: "CAD $57K",
          notable: "Excellence in journalism and public affairs"
        }
      ]
    }
  ];

  // Academic degree programs for Canada
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "Canadian undergraduate degrees typically take 3-4 years, with a mix of required courses and electives",
      types: [
        {
          name: "Bachelor's Degrees (BA/BSc)",
          duration: "3-4 years",
          credits: "120 credits",
          focus: "Broad foundation with specialization",
          structure: [
            "Major requirements (40%)",
            "Electives (40%)",
            "General education (20%)"
          ],
          topPrograms: [
            "Business Administration",
            "Computer Science",
            "Engineering",
            "Psychology"
          ]
        },
        {
          name: "Honours Degrees",
          duration: "4 years",
          credits: "120-132 credits",
          focus: "Advanced study with research component",
          structure: [
            "Major courses (60%)",
            "Research project/thesis (20%)",
            "Electives (20%)"
          ],
          topPrograms: [
            "Honours BSc",
            "Honours BA",
            "Honours Commerce",
            "Honours Psychology"
          ]
        }
      ]
    },
    {
      level: "Postgraduate Education",
      description: "Specialized advanced programs focusing on research or professional development",
      types: [
        {
          name: "Master's Degrees",
          duration: "1-2 years",
          credits: "30-60 credits",
          focus: "Advanced specialization",
          structure: [
            "Coursework (60%)",
            "Research/thesis (40%)"
          ],
          topPrograms: [
            "MBA",
            "MSc Computer Science",
            "MA International Affairs",
            "MEng Engineering"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "4-6 years",
          credits: "N/A",
          focus: "Original research contribution",
          structure: [
            "Independent research (80%)",
            "Coursework & comprehensive exams (20%)"
          ],
          topPrograms: [
            "PhD in Sciences",
            "PhD in Engineering",
            "PhD in Business",
            "PhD in Education"
          ]
        }
      ]
    }
  ];

  // Popular courses in Canadian universities
  const undergradCourses = [
    {
      name: "BSc Computer Science",
      specializations: ["Data Science", "Cybersecurity", "Software Engineering"],
      prerequisites:
        "High school diploma with strong math and science courses",
      description:
        "Comprehensive program covering programming fundamentals, algorithms, data structures, and applied computing with co-op opportunities.",
      outcomes: [
        "Proficiency in multiple programming languages",
        "Software development and system design skills",
        "Problem-solving and analytical thinking"
      ],
      tuitionFees:
        "Canadian: $7,500-$14,000; International: $25,000-$45,000"
    },
    {
      name: "BComm Business",
      specializations: ["Finance", "Marketing", "International Business"],
      prerequisites:
        "High school diploma with strong math and English courses",
      description:
        "Develops comprehensive business knowledge with focus on management, marketing, finance, and entrepreneurship with practical case studies.",
      outcomes: [
        "Business analysis and strategy development",
        "Financial planning and management skills",
        "Marketing and communications expertise"
      ],
      tuitionFees:
        "Canadian: $8,000-$15,000; International: $28,000-$45,000"
    },
    {
      name: "BEng Engineering",
      specializations: ["Mechanical", "Electrical", "Civil"],
      prerequisites:
        "High school diploma with advanced math, physics, and chemistry",
      description:
        "Accredited engineering program combining theory and practice with design projects and optional co-op placements.",
      outcomes: [
        "Engineering design and problem-solving skills",
        "Technical analysis and system optimization",
        "Project management and professional practice"
      ],
      tuitionFees:
        "Canadian: $8,500-$14,500; International: $30,000-$50,000"
    }
  ];

  const postgraduateCourses = [
    {
      name: "MSc Data Science",
      specializations: ["Machine Learning", "Big Data Analytics", "AI"],
      prerequisites:
        "Bachelor's degree in Computer Science, Statistics, or related field",
      description:
        "Advanced program combining statistical analysis, machine learning algorithms, and big data technologies with industry projects.",
      outcomes: [
        "Advanced data analysis and visualization",
        "Machine learning model development",
        "Big data processing and management"
      ],
      tuitionFees: "Canadian: $12,000-$18,000; International: $25,000-$40,000"
    },
    {
      name: "MBA",
      specializations: ["Finance", "Technology Management", "Global Business"],
      prerequisites:
        "Bachelor's degree, 2+ years work experience, GMAT/GRE",
      description:
        "Comprehensive business program developing leadership, strategic thinking, and management skills through case studies and team projects.",
      outcomes: [
        "Strategic business leadership",
        "Organizational management expertise",
        "Financial analysis and decision-making"
      ],
      tuitionFees: "Canadian: $30,000-$120,000; International: $40,000-$130,000"
    },
    {
      name: "MEng Engineering",
      specializations: ["Sustainable Systems", "Robotics", "Biomedical"],
      prerequisites:
        "Bachelor's degree in Engineering or related technical field",
      description:
        "Professional master's program with advanced engineering courses, design projects, and industry collaboration.",
      outcomes: [
        "Advanced technical expertise",
        "Engineering leadership skills",
        "Innovation and problem-solving abilities"
      ],
      tuitionFees: "Canadian: $12,000-$20,000; International: $25,000-$45,000"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-8">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
          Canadian Higher Education System
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mt-2">
          Guide to Canadian universities, degree structures, and academic programs for international students
        </p>
      </div>

      {/* University Types Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Types of Canadian Universities
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
              
              {/* Top Universities - Compact horizontal list */}
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

      {/* Canadian Degree Structure Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Canadian Degree Structure
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

      {/* Popular Canadian Courses Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Popular Canadian Courses
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