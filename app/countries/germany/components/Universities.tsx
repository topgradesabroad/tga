import React from "react";

export default function Universities() {
  // German institution data
  const institutionData = [
    {
      type: "Traditional Universities",
      keyStats: {
        institutions: "106",
        avgTuitionEUR: "€300 (semester fee)",
        avgTuitionIntl: "€300-€1,500",
        intlStudents: "320,000+",
        researchFunding: "€7.5B+",
        employmentRate: "90%",
        avgClassSize: "30 students",
        studentFacultyRatio: "24:1"
      },
      features: [
        "Strong theoretical foundation",
        "Research-oriented education",
        "Academic freedom (Freiheit)",
        "Wide range of subjects",
        "Globally recognized degrees",
        "State-funded education"
      ],
      topUniversities: [
        {
          name: "Technical University of Munich",
          ranking: "#1 German University",
          established: "1868",
          acceptanceRate: "60%",
          averageSalary: "€52K",
          notable: "Leading technical university in Germany"
        },
        {
          name: "Ludwig Maximilian University Munich",
          ranking: "#2 German University",
          established: "1472",
          acceptanceRate: "65%",
          averageSalary: "€50K",
          notable: "One of Europe's oldest universities"
        },
        {
          name: "Heidelberg University",
          ranking: "#3 German University",
          established: "1386",
          acceptanceRate: "40%",
          averageSalary: "€51K",
          notable: "Germany's oldest university"
        }
      ]
    },
    {
      type: "Universities of Applied Sciences",
      keyStats: {
        institutions: "210",
        avgTuitionEUR: "€300 (semester fee)",
        avgTuitionIntl: "€300-€1,500",
        intlStudents: "150,000+",
        researchFunding: "€1.8B",
        employmentRate: "93%",
        avgClassSize: "25 students",
        studentFacultyRatio: "20:1"
      },
      features: [
        "Practical, industry-focused education",
        "Mandatory internship semesters",
        "Smaller class sizes",
        "Industry partnerships",
        "Applied research focus",
        "Professors with industry experience"
      ],
      topUniversities: [
        {
          name: "Munich University of Applied Sciences",
          ranking: "#1 Applied Sciences University",
          established: "1971",
          acceptanceRate: "70%",
          averageSalary: "€48K",
          notable: "Largest UAS in Bavaria"
        },
        {
          name: "Hamburg University of Applied Sciences",
          ranking: "#2 Applied Sciences University",
          established: "1970",
          acceptanceRate: "75%",
          averageSalary: "€47K",
          notable: "Strong focus on sustainability"
        },
        {
          name: "Cologne University of Applied Sciences",
          ranking: "#3 Applied Sciences University",
          established: "1971",
          acceptanceRate: "78%",
          averageSalary: "€46K",
          notable: "Excellent industry connections"
        }
      ]
    }
  ];

  // Academic degree programs for Germany
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "German bachelor's degrees typically take 3-4 years, follow the Bologna Process, and focus on providing fundamental knowledge",
      types: [
        {
          name: "Bachelor's Degrees (B.A./B.Sc.)",
          duration: "3-4 years",
          credits: "180-240 ECTS",
          focus: "Foundational knowledge",
          structure: [
            "Core modules (70%)",
            "Elective modules (20%)",
            "Thesis/project (10%)"
          ],
          topPrograms: [
            "Engineering",
            "Computer Science",
            "Business Administration",
            "Natural Sciences"
          ]
        },
        {
          name: "State Examinations",
          duration: "4-6 years",
          credits: "240-360 ECTS",
          focus: "Regulated professions",
          structure: [
            "Theoretical coursework (60%)",
            "Practical training (30%)",
            "State examinations (10%)"
          ],
          topPrograms: [
            "Medicine",
            "Law",
            "Pharmacy",
            "Teaching"
          ]
        }
      ]
    },
    {
      level: "Postgraduate Education",
      description: "Advanced degrees focusing on specialization, research, or professional development",
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
            "Master of Business Administration"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "3-5 years",
          credits: "N/A",
          focus: "Independent research",
          structure: [
            "Original research (80%)",
            "Coursework/seminars (20%)"
          ],
          topPrograms: [
            "Dr. rer. nat. (Natural Sciences)",
            "Dr.-Ing. (Engineering)",
            "Dr. phil. (Humanities)",
            "Dr. med. (Medicine)"
          ]
        }
      ]
    }
  ];

  // Popular courses in German universities
  const undergradCourses = [
    {
      name: "Bachelor of Engineering",
      specializations: ["Mechanical", "Electrical", "Automotive"],
      prerequisites:
        "Abitur or equivalent, German language proficiency (B2/C1)",
      description:
        "Comprehensive program combining theoretical knowledge with practical applications through lab work and industry projects.",
      outcomes: [
        "Engineering principles and methodologies",
        "Technical problem-solving skills",
        "Project management experience"
      ],
      tuitionFees:
        "Domestic/EU: €300-€500 per semester; International: €800-€1,500 per semester"
    },
    {
      name: "Bachelor of Business Administration",
      specializations: ["International Business", "Finance", "Marketing"],
      prerequisites:
        "Abitur or equivalent, German/English language proficiency",
      description:
        "Focused on business fundamentals with emphasis on international context, management theories, and practical applications.",
      outcomes: [
        "Management and leadership skills",
        "Strategic business thinking",
        "Intercultural communication competence"
      ],
      tuitionFees:
        "Domestic/EU: €300-€600 per semester; International: €800-€2,000 per semester"
    },
    {
      name: "Bachelor of Computer Science",
      specializations: ["Software Engineering", "AI", "Data Science"],
      prerequisites:
        "Abitur or equivalent with strong mathematics background",
      description:
        "Rigorous program covering algorithms, programming, data structures, and computer systems with practical projects.",
      outcomes: [
        "Software development expertise",
        "Algorithmic thinking and problem-solving",
        "Systems design and architecture"
      ],
      tuitionFees:
        "Domestic/EU: €300-€500 per semester; International: €800-€1,500 per semester"
    }
  ];

  const postgraduateCourses = [
    {
      name: "Master of Engineering",
      specializations: ["Renewable Energy", "Industry 4.0", "Mechatronics"],
      prerequisites:
        "Bachelor's degree in engineering or related field",
      description:
        "Advanced program focusing on specialized engineering disciplines with research projects and industry collaboration.",
      outcomes: [
        "Advanced technical expertise",
        "Research and development skills",
        "Innovation and problem-solving abilities"
      ],
      tuitionFees: "Domestic/EU: €300-€500 per semester; International: €1,000-€3,000 per semester"
    },
    {
      name: "Master in Management",
      specializations: ["Global Business", "Innovation", "Sustainability"],
      prerequisites:
        "Bachelor's degree, English proficiency, sometimes GMAT/GRE",
      description:
        "Internationally focused program developing managerial capabilities through case studies, simulations, and practical projects.",
      outcomes: [
        "Strategic management competencies",
        "Decision-making in complex environments",
        "Leadership and team management"
      ],
      tuitionFees: "Domestic/EU: €300-€10,000 per semester; International: €5,000-€15,000 per semester"
    },
    {
      name: "Master of Computer Science",
      specializations: ["AI & Machine Learning", "Cybersecurity", "Visual Computing"],
      prerequisites:
        "Bachelor's degree in Computer Science or related field",
      description:
        "Research-oriented program exploring advanced computing topics with laboratory work and collaborative projects.",
      outcomes: [
        "Specialized technical knowledge",
        "Research methodology in computer science",
        "Advanced system design capabilities"
      ],
      tuitionFees: "Domestic/EU: €300-€500 per semester; International: €1,000-€3,000 per semester"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-8">
      {/* Main Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 border-l-4 border-purple-600 pl-4">
          German Higher Education System
        </h1>
        <p className="text-base text-gray-600 max-w-3xl mt-2">
          Guide to German universities, degree structures, and academic programs for international students
        </p>
      </div>

      {/* University Types Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Types of German Universities
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

      {/* German Degree Structure Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          German Degree Structure
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

      {/* Popular German Courses Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-300 pb-2 mb-6">
          Popular German Courses
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
                    <h4 className="font-medium text-gray-800 mb-1">Tuition Fees (per semester)</h4>
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
                    <h4 className="font-medium text-gray-800 mb-1">Tuition Fees (per semester)</h4>
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