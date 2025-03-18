import React from "react";

export default function Universities() {
  // UK institution data with real information
  const institutionData = [
    {
      type: "Russell Group Universities",
      keyStats: {
        institutions: "24",
        avgTuitionUK: "£9,250",
        avgTuitionIntl: "£22,000-£38,000",
        intlStudents: "140,000+",
        researchFunding: "£8B+",
        employmentRate: "89%",
        avgClassSize: "20 students",
        studentFacultyRatio: "14:1"
      },
      features: [
        "Research-intensive institutions",
        "World-class academic reputation",
        "Strong industry connections",
        "Well-established international networks",
        "Extensive research facilities",
        "Competitive admission standards"
      ],
      topUniversities: [
        {
          name: "University of Oxford",
          ranking: "#1 UK University",
          established: "1096",
          acceptanceRate: "17%",
          averageSalary: "£35K",
          notable: "Oldest university in English-speaking world"
        },
        {
          name: "University of Cambridge",
          ranking: "#2 UK University",
          established: "1209",
          acceptanceRate: "21%",
          averageSalary: "£34K",
          notable: "College-based system with 31 colleges"
        },
        {
          name: "Imperial College London",
          ranking: "#3 UK University",
          established: "1907",
          acceptanceRate: "14%",
          averageSalary: "£37K",
          notable: "Leading STEM research institution"
        },
        {
          name: "University College London",
          ranking: "#4 UK University",
          established: "1826",
          acceptanceRate: "16%",
          averageSalary: "£32K",
          notable: "First UK university to admit students regardless of religion"
        }
      ]
    },
    {
      type: "Modern Universities",
      keyStats: {
        institutions: "67+",
        avgTuitionUK: "£9,250",
        avgTuitionIntl: "£14,000-£25,000",
        intlStudents: "100,000+",
        researchFunding: "£1.5B",
        employmentRate: "92%",
        avgClassSize: "25 students",
        studentFacultyRatio: "18:1"
      },
      features: [
        "Career-focused education",
        "Strong industry partnerships",
        "Flexible study options",
        "Focus on practical skills",
        "Modern facilities and technology",
        "Inclusive admission policies"
      ],
      topUniversities: [
        {
          name: "Coventry University",
          ranking: "#1 Modern University",
          established: "1992",
          acceptanceRate: "38%",
          averageSalary: "£26K",
          notable: "Excellence in teaching quality and student experience"
        },
        {
          name: "Nottingham Trent University",
          ranking: "#2 Modern University",
          established: "1992",
          acceptanceRate: "45%",
          averageSalary: "£25K",
          notable: "Strong employability focus with industry placements"
        },
        {
          name: "Manchester Metropolitan",
          ranking: "#3 Modern University",
          established: "1992",
          acceptanceRate: "56%",
          averageSalary: "£24K",
          notable: "One of the largest universities in the UK"
        },
        {
          name: "University of Portsmouth",
          ranking: "#4 Modern University",
          established: "1992",
          acceptanceRate: "72%",
          averageSalary: "£24K",
          notable: "Known for practical, career-oriented programs"
        }
      ]
    }
  ];

  // Academic degree programs for UK
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "UK undergraduate degrees typically take 3-4 years (4 in Scotland), with focused, specialized study from the first year",
      types: [
        {
          name: "Bachelor's Degrees (BA/BSc)",
          duration: "3 years (4 in Scotland)",
          credits: "360 credits",
          focus: "Specialized study in chosen field",
          structure: [
            "Core modules (60%)",
            "Optional modules (30%)",
            "Dissertation/Project (10%)"
          ],
          topPrograms: [
            "Business & Management",
            "Computer Science",
            "Law",
            "Psychology"
          ]
        },
        {
          name: "Integrated Master's",
          duration: "4 years",
          credits: "480 credits",
          focus: "Extended study with master's component",
          structure: [
            "Undergraduate content (75%)",
            "Master's level content (25%)",
            "Research project"
          ],
          topPrograms: [
            "MEng (Engineering)",
            "MSci (Sciences)",
            "MMath (Mathematics)",
            "MPharm (Pharmacy)"
          ]
        }
      ]
    },
    {
      level: "Postgraduate Education",
      description: "Advanced specialized programs for career development or academic research",
      types: [
        {
          name: "Master's Degrees",
          duration: "1 year (full-time)",
          credits: "180 credits",
          focus: "Advanced specialized knowledge",
          structure: [
            "Taught modules (67%)",
            "Dissertation (33%)"
          ],
          topPrograms: [
            "MBA",
            "MSc Computer Science",
            "MA International Relations",
            "MSc Finance"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "3-4 years",
          credits: "N/A",
          focus: "Original research contribution",
          structure: [
            "Independent research (80%)",
            "Training & development (20%)"
          ],
          topPrograms: [
            "PhD in Engineering",
            "PhD in Life Sciences",
            "PhD in Economics",
            "PhD in Education"
          ]
        }
      ]
    }
  ];

  // Popular courses in UK universities
  const undergradCourses = [
    {
      name: "BSc Computer Science",
      specializations: ["Artificial Intelligence", "Cybersecurity", "Software Engineering"],
      prerequisites:
        "A-levels or equivalent with strong Mathematics background",
      description:
        "Comprehensive program covering theoretical and practical aspects of computing, with emphasis on programming, algorithms and modern applications.",
      outcomes: [
        "Proficiency in multiple programming languages",
        "Problem-solving through computational thinking",
        "Software design and development skills"
      ],
      tuitionFees:
        "UK: £9,250; International: £24,500-£35,000"
    },
    {
      name: "BA Business Management",
      specializations: ["Marketing", "Finance", "International Business"],
      prerequisites:
        "A-levels or equivalent, GCSE Mathematics and English at grade C/4 or above",
      description:
        "Develops comprehensive business knowledge with focus on management principles, organizational behavior, and strategic planning.",
      outcomes: [
        "Strategic management and leadership skills",
        "Business analysis and problem-solving abilities",
        "Project management and team coordination"
      ],
      tuitionFees:
        "UK: £9,250; International: £19,000-£28,000"
    },
    {
      name: "LLB Law",
      specializations: ["Commercial Law", "Criminal Law", "International Law"],
      prerequisites:
        "A-levels or equivalent with strong essay-based subjects",
      description:
        "Qualifying law degree covering core legal principles, case analysis, and legal research within the UK legal system.",
      outcomes: [
        "Legal reasoning and critical analysis",
        "Case preparation and advocacy skills",
        "Understanding of UK and international legal frameworks"
      ],
      tuitionFees:
        "UK: £9,250; International: £20,000-£29,000"
    }
  ];

  const postgraduateCourses = [
    {
      name: "MSc Data Science",
      specializations: ["Machine Learning", "Big Data Analytics", "AI Applications"],
      prerequisites:
        "Bachelor's degree in a quantitative subject (Mathematics, Computer Science, Engineering, etc.)",
      description:
        "Advanced program combining statistics, programming and machine learning to analyze complex data and derive actionable insights.",
      outcomes: [
        "Advanced data analysis and visualization skills",
        "Machine learning model development and implementation",
        "Big data technologies expertise"
      ],
      tuitionFees: "UK: £12,000-£16,000; International: £25,000-£35,000"
    },
    {
      name: "MBA",
      specializations: ["Finance", "Entrepreneurship", "International Business"],
      prerequisites:
        "Bachelor's degree, 3+ years work experience, GMAT/GRE (for top programs)",
      description:
        "Prestigious business qualification developing advanced management skills, strategic thinking, and leadership abilities.",
      outcomes: [
        "Strategic business leadership capabilities",
        "Advanced problem-solving and decision-making",
        "Global business perspective and network"
      ],
      tuitionFees: "UK: £20,000-£50,000; International: £25,000-£57,000"
    },
    {
      name: "MA International Relations",
      specializations: ["Diplomacy", "Security Studies", "Global Governance"],
      prerequisites:
        "Bachelor's degree in related field (Politics, History, Economics, etc.)",
      description:
        "Examines global political systems, international organizations, and diplomatic relations in contemporary international affairs.",
      outcomes: [
        "Critical analysis of global issues and conflicts",
        "Policy formation and implementation understanding",
        "Research and analytical skills in international politics"
      ],
      tuitionFees: "UK: £10,000-£15,000; International: £19,000-£28,000"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-8">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
          UK Higher Education System
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mt-2">
          Guide to British universities, degree structures, and academic programs for international students
        </p>
      </div>

      {/* University Types Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Types of UK Universities
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

      {/* UK Degree Structure Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          UK Degree Structure
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

      {/* Popular UK Courses Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Popular UK Courses
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