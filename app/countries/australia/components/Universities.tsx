import React from "react";

export default function Universities() {
  // Australian institution data with real information
  const institutionData = [
    {
      type: "Group of Eight Universities",
      keyStats: {
        institutions: "8",
        avgTuitionAUD: "$9,000",
        avgTuitionIntl: "$35,000-$50,000",
        intlStudents: "120,000+",
        researchFunding: "$4.8B+",
        employmentRate: "92%",
        avgClassSize: "25 students",
        studentFacultyRatio: "18:1"
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
          name: "University of Melbourne",
          ranking: "#1 Australian University",
          established: "1853",
          acceptanceRate: "70%",
          averageSalary: "AUD $72K",
          notable: "Australia's oldest university in Victoria"
        },
        {
          name: "Australian National University",
          ranking: "#2 Australian University",
          established: "1946",
          acceptanceRate: "35%",
          averageSalary: "AUD $70K",
          notable: "Australia's only national university"
        },
        {
          name: "University of Sydney",
          ranking: "#3 Australian University",
          established: "1850",
          acceptanceRate: "30%",
          averageSalary: "AUD $68K",
          notable: "Australia's first university"
        }
      ]
    },
    {
      type: "Australian Technology Network",
      keyStats: {
        institutions: "5",
        avgTuitionAUD: "$7,500",
        avgTuitionIntl: "$25,000-$38,000",
        intlStudents: "90,000+",
        researchFunding: "$1.5B",
        employmentRate: "91%",
        avgClassSize: "28 students",
        studentFacultyRatio: "22:1"
      },
      features: [
        "Industry-focused education",
        "Practical skills development",
        "Strong industry partnerships",
        "Modern campus facilities",
        "Work-integrated learning",
        "Emphasis on innovation"
      ],
      topUniversities: [
        {
          name: "RMIT University",
          ranking: "#1 Technology University",
          established: "1887",
          acceptanceRate: "82%",
          averageSalary: "AUD $64K",
          notable: "Leader in design and technology education"
        },
        {
          name: "University of Technology Sydney",
          ranking: "#2 Technology University",
          established: "1988",
          acceptanceRate: "80%",
          averageSalary: "AUD $62K",
          notable: "Known for innovative campus and industry connections"
        },
        {
          name: "Queensland University of Technology",
          ranking: "#3 Technology University",
          established: "1989",
          acceptanceRate: "85%",
          averageSalary: "AUD $61K",
          notable: "Excellence in practical and industry-relevant teaching"
        }
      ]
    }
  ];

  // Academic degree programs for Australia
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "Australian undergraduate degrees typically take 3-4 years, with specialized courses in chosen disciplines",
      types: [
        {
          name: "Bachelor's Degrees (BA/BSc)",
          duration: "3 years",
          credits: "240 credit points",
          focus: "Discipline-specific education",
          structure: [
            "Core subjects (60%)",
            "Electives (25%)",
            "Breadth subjects (15%)"
          ],
          topPrograms: [
            "Business",
            "Computer Science",
            "Engineering",
            "Health Sciences"
          ]
        },
        {
          name: "Honours Degrees",
          duration: "+1 year",
          credits: "48 credit points",
          focus: "Research-focused final year",
          structure: [
            "Research thesis (75%)",
            "Advanced coursework (25%)"
          ],
          topPrograms: [
            "Science Honours",
            "Arts Honours",
            "Commerce Honours",
            "Engineering Honours"
          ]
        }
      ]
    },
    {
      level: "Postgraduate Education",
      description: "Specialized advanced programs focusing on professional skills or research",
      types: [
        {
          name: "Master's Degrees",
          duration: "1.5-2 years",
          credits: "150-200 credit points",
          focus: "Advanced professional skills",
          structure: [
            "Specialized coursework (70%)",
            "Applied projects (30%)"
          ],
          topPrograms: [
            "MBA",
            "Master of Data Science",
            "Master of Engineering",
            "Master of Public Health"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "3-4 years",
          credits: "N/A",
          focus: "Original research contribution",
          structure: [
            "Independent research (90%)",
            "Professional development (10%)"
          ],
          topPrograms: [
            "PhD in Sciences",
            "PhD in Business",
            "PhD in Engineering",
            "Doctor of Education"
          ]
        }
      ]
    }
  ];

  // Popular courses in Australian universities
  const undergradCourses = [
    {
      name: "Bachelor of Computer Science",
      specializations: ["Data Science", "Cybersecurity", "AI"],
      prerequisites:
        "Year 12 completion with strong mathematics",
      description:
        "Comprehensive program covering programming fundamentals, algorithms, data structures, and software development with industry placements.",
      outcomes: [
        "Programming expertise in multiple languages",
        "Software design and systems development",
        "Problem-solving and analytical thinking"
      ],
      tuitionFees:
        "Domestic: $9,000-$14,000; International: $30,000-$45,000"
    },
    {
      name: "Bachelor of Business",
      specializations: ["Finance", "Marketing", "International Business"],
      prerequisites:
        "Year 12 completion with English proficiency",
      description:
        "Develops business fundamentals with focus on management, marketing, accounting, and entrepreneurship with industry projects.",
      outcomes: [
        "Business management and strategic planning",
        "Financial analysis and decision-making",
        "Marketing and business communication skills"
      ],
      tuitionFees:
        "Domestic: $10,000-$15,000; International: $32,000-$42,000"
    },
    {
      name: "Bachelor of Engineering",
      specializations: ["Civil", "Mechanical", "Electrical"],
      prerequisites:
        "Year 12 completion with advanced mathematics and physics",
      description:
        "Engineers Australia accredited program combining technical theory and practical design with industry placements.",
      outcomes: [
        "Engineering design and analysis skills",
        "Technical problem-solving abilities",
        "Professional engineering practice"
      ],
      tuitionFees:
        "Domestic: $9,500-$15,500; International: $35,000-$48,000"
    }
  ];

  const postgraduateCourses = [
    {
      name: "Master of Data Science",
      specializations: ["Machine Learning", "Big Data", "Business Analytics"],
      prerequisites:
        "Bachelor's degree in IT, Computer Science, Mathematics or related field",
      description:
        "Advanced program combining statistical analysis, machine learning, programming, and big data technologies with capstone projects.",
      outcomes: [
        "Advanced data analysis and visualization",
        "Machine learning implementation",
        "Big data processing techniques"
      ],
      tuitionFees: "Domestic: $18,000-$30,000; International: $35,000-$48,000"
    },
    {
      name: "Master of Business Administration",
      specializations: ["Finance", "Marketing", "Leadership"],
      prerequisites:
        "Bachelor's degree, 2+ years work experience, GMAT/GRE",
      description:
        "Internationally recognized business program developing leadership, management, and strategic thinking through case studies and team projects.",
      outcomes: [
        "Strategic leadership capabilities",
        "Advanced management expertise",
        "Business decision-making skills"
      ],
      tuitionFees: "Domestic: $40,000-$85,000; International: $50,000-$95,000"
    },
    {
      name: "Master of Engineering",
      specializations: ["Sustainable Systems", "Biomedical", "Construction"],
      prerequisites:
        "Bachelor of Engineering or equivalent technical degree",
      description:
        "Advanced engineering program with specialized technical courses, research projects, and industry collaboration.",
      outcomes: [
        "Specialized technical expertise",
        "Engineering project management",
        "Research and innovation skills"
      ],
      tuitionFees: "Domestic: $20,000-$35,000; International: $38,000-$50,000"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-8">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
          Australian Higher Education System
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mt-2">
          Guide to Australian universities, degree structures, and academic programs for international students
        </p>
      </div>

      {/* University Types Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Types of Australian Universities
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

      {/* Australian Degree Structure Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Australian Degree Structure
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

      {/* Popular Australian Courses Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Popular Australian Courses
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