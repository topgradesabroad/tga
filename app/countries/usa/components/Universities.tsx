import React from "react";

export default function Universities() {
  // Updated institution data with six institutes per type and real data
  const institutionData = [
    {
      type: "Public Universities",
      keyStats: {
        institutions: "1,600+",
        avgTuitionInState: "$10,560",
        avgTuitionOutState: "$27,020",
        intlStudents: "520,000+",
        researchFunding: "$83B",
        employmentRate: "84%",
        avgClassSize: "32 students",
        studentFacultyRatio: "16:1"
      },
      features: [
        "State-funded operations with taxpayer support",
        "Large-scale research infrastructure",
        "Diverse student demographics",
        "Strong ties to local industries",
        "Extensive athletic programs",
        "Varied campus housing options"
      ],
      topUniversities: [
        {
          name: "University of Michigan",
          ranking: "#1 Public University",
          established: "1817",
          acceptanceRate: "23%",
          averageSalary: "$64K",
          notable: "1,000+ research centers"
        },
        {
          name: "UC Berkeley",
          ranking: "#2 Public University",
          established: "1868",
          acceptanceRate: "17%",
          averageSalary: "$70K",
          notable: "10 Nobel Laureates"
        },
        {
          name: "UCLA",
          ranking: "#3 Public University",
          established: "1919",
          acceptanceRate: "14%",
          averageSalary: "$68K",
          notable: "Diverse academic programs"
        },
        {
          name: "University of Texas at Austin",
          ranking: "#4 Public University",
          established: "1883",
          acceptanceRate: "32%",
          averageSalary: "$62K",
          notable: "Strong engineering programs and vibrant campus life"
        },
        {
          name: "University of Florida",
          ranking: "#5 Public University",
          established: "1853",
          acceptanceRate: "37%",
          averageSalary: "$60K",
          notable: "Top research programs and a vibrant campus community"
        },
        {
          name: "University of North Carolina at Chapel Hill",
          ranking: "#6 Public University",
          established: "1789",
          acceptanceRate: "24%",
          averageSalary: "$61K",
          notable: "Renowned for liberal arts and research excellence"
        }
      ]
    },
    {
      type: "Private Universities",
      keyStats: {
        institutions: "2,500+",
        avgTuition: "$52,000",
        intlStudents: "380,000+",
        researchFunding: "$45B",
        employmentRate: "91%",
        avgClassSize: "18 students",
        studentFacultyRatio: "9:1"
      },
      features: [
        "Endowment-funded operations",
        "Specialized academic programs",
        "Global alumni networks",
        "Need-blind admissions policies",
        "Undergraduate-focused teaching",
        "Extensive merit aid opportunities"
      ],
      topUniversities: [
        {
          name: "Harvard University",
          ranking: "#1 National University",
          established: "1636",
          acceptanceRate: "5%",
          averageSalary: "$75K",
          notable: "Oldest US higher ed institution"
        },
        {
          name: "Stanford University",
          ranking: "#3 National University",
          established: "1885",
          acceptanceRate: "4%",
          averageSalary: "$78K",
          notable: "Silicon Valley proximity"
        },
        {
          name: "Yale University",
          ranking: "#2 National University",
          established: "1701",
          acceptanceRate: "6%",
          averageSalary: "$70K",
          notable: "Ivy League tradition"
        },
        {
          name: "Princeton University",
          ranking: "#4 National University",
          established: "1746",
          acceptanceRate: "5.5%",
          averageSalary: "$72K",
          notable: "Ivy League excellence"
        },
        {
          name: "Columbia University",
          ranking: "#5 National University",
          established: "1754",
          acceptanceRate: "5%",
          averageSalary: "$73K",
          notable: "Renowned research institution in NYC"
        },
        {
          name: "University of Pennsylvania",
          ranking: "#6 National University",
          established: "1740",
          acceptanceRate: "9%",
          averageSalary: "$74K",
          notable: "Home to the Wharton School of Business"
        }
      ]
    }
  ];

  // Academic degree programs remain unchanged
  const degreePrograms = [
    {
      level: "Undergraduate Education",
      description:
        "Four-year programs leading to bachelor's degrees with comprehensive foundational education",
      types: [
        {
          name: "Bachelor of Arts (BA)",
          duration: "4 years",
          credits: "120-128",
          focus: "Liberal Arts, Humanities, Social Sciences",
          structure: [
            "General Education (40%)",
            "Major Requirements (40%)",
            "Electives/Minor (20%)"
          ],
          topPrograms: [
            "Psychology",
            "Economics",
            "Political Science",
            "International Relations"
          ]
        },
        {
          name: "Bachelor of Science (BS)",
          duration: "4-5 years",
          credits: "130-140",
          focus: "STEM & Professional Fields",
          structure: [
            "Core Science Requirements (50%)",
            "Advanced Specialization (30%)",
            "Lab/Field Work (20%)"
          ],
          topPrograms: [
            "Computer Science",
            "Mechanical Engineering",
            "Biochemistry",
            "Data Science"
          ]
        }
      ]
    },
    {
      level: "Graduate Education",
      description: "Advanced programs for specialized study and research",
      types: [
        {
          name: "Master's Degrees",
          duration: "1-3 years",
          credits: "30-60",
          focus: "Specialized Professional Training",
          structure: [
            "Core Coursework (60%)",
            "Electives (20%)",
            "Thesis/Capstone (20%)"
          ],
          topPrograms: [
            "MBA",
            "Computer Engineering",
            "Public Health",
            "Artificial Intelligence"
          ]
        },
        {
          name: "Doctoral Degrees",
          duration: "4-7 years",
          credits: "90+",
          focus: "Original Research Contribution",
          structure: [
            "Coursework (30%)",
            "Qualifying Exams (20%)",
            "Dissertation Research (50%)"
          ],
          topPrograms: [
            "PhD in Neuroscience",
            "EdD in Leadership",
            "DSc in Data Science",
            "PhD in Quantum Physics"
          ]
        }
      ]
    }
  ];

  // Popular courses split into Undergraduate and Graduate.
  // Tuition fees are added and faculty field is removed.
  const undergradCourses = [
    {
      name: "BSc in Computer Science",
      specializations: ["Data Science", "Web Development", "Machine Learning"],
      prerequisites:
        "High School Diploma, strong foundation in Mathematics and introductory programming",
      description:
        "A rigorous program focusing on both theoretical and practical aspects of computing, including algorithms, software engineering, and emerging technologies.",
      outcomes: [
        "Master programming languages and algorithms",
        "Develop innovative software solutions",
        "Apply theoretical knowledge to practical problems"
      ],
      tuitionFees:
        "Public: $10,560 (in‑state) / $27,020 (out‑of‑state); Private: $52,000"
    },
    {
      name: "BSc in Economics",
      specializations: ["Macroeconomics", "Microeconomics", "Econometrics"],
      prerequisites: "High School Diploma with strong mathematical skills",
      description:
        "Focuses on economic theories, quantitative analysis, and the application of economic principles to real‑world challenges.",
      outcomes: [
        "Analyze economic trends and data",
        "Develop robust econometric models",
        "Apply economic theories to policy and business strategies"
      ],
      tuitionFees:
        "Public: $12,500 (in‑state) / $25,000 (out‑of‑state); Private: $42,000"
    },
    
    {
      name: "BA in Film Production",
      specializations: ["Directing", "Cinematography", "Screenwriting"],
      prerequisites:
        "High School Diploma, with a portfolio or demonstrated interest in creative arts",
      description:
        "Focuses on the art and technique of filmmaking, including directing, production, and post‑production.",
      outcomes: [
        "Develop storytelling and creative vision",
        "Gain hands‑on experience in film production",
        "Master technical and artistic aspects of filmmaking"
      ],
      tuitionFees:
        "Public: $15,000 (in‑state) / $30,000 (out‑of‑state); Private: $60,000"
    },
    
    {
      name: "BBA in Marketing",
      specializations: ["Digital Marketing", "Consumer Behavior", "Brand Management"],
      prerequisites:
        "High School Diploma with a background in business or communication",
      description:
        "Focuses on developing strategies for market research, digital campaigns, and consumer engagement in a dynamic marketplace.",
      outcomes: [
        "Master digital and traditional marketing strategies",
        "Analyze consumer behavior effectively",
        "Develop and manage compelling brands"
      ],
      tuitionFees:
        "Public: $13,000 (in‑state) / $24,000 (out‑of‑state); Private: $50,000"
    },
    
    
    {
      name: "BA in Fashion Design",
      specializations: ["Textile Design", "Fashion Merchandising", "Sustainable Fashion"],
      prerequisites:
        "High School Diploma with a strong portfolio in art or design",
      description:
        "Combines creative design with technical skills to prepare students for a dynamic career in the fashion industry.",
      outcomes: [
        "Develop innovative design concepts",
        "Master technical and production skills",
        "Analyze and respond to fashion trends"
      ],
      tuitionFees:
        "Public: $18,000 (in‑state) / $28,000 (out‑of‑state); Private: $40,000"
    }
  ];

  const graduateCourses = [
    {
      name: "MBA",
      specializations: ["Finance", "Marketing", "Entrepreneurship", "Operations"],
      prerequisites:
        "Undergraduate degree, GMAT/GRE scores, and relevant work experience",
      description:
        "A comprehensive program designed to develop leadership, strategic thinking, and managerial skills in a global business environment.",
      outcomes: [
        "Develop advanced business strategies",
        "Enhance leadership and decision-making skills",
        "Gain in‑depth knowledge of global markets"
      ],
      tuitionFees: "Public: $27,020 (out‑of‑state); Private: $52,000"
    },
    {
      name: "MSc in Data Science",
      specializations: ["Big Data Analytics", "Machine Learning", "Statistical Modeling"],
      prerequisites:
        "Undergraduate degree in a quantitative field, programming experience",
      description:
        "A program focused on data analysis, statistical modeling, and machine learning to drive data‑driven decision making.",
      outcomes: [
        "Master data analytics tools",
        "Build predictive models",
        "Analyze large datasets"
      ],
      tuitionFees: "Public: $27,020 (out‑of‑state); Private: $52,000"
    },
    {
      name: "Master of Public Health (MPH)",
      specializations: ["Epidemiology", "Biostatistics", "Health Policy"],
      prerequisites:
        "Undergraduate degree (preferably in health or social sciences)",
      description:
        "Trains students to address public health challenges through research, policy, and community engagement.",
      outcomes: [
        "Understand public health principles",
        "Conduct epidemiological research",
        "Develop effective health interventions"
      ],
      tuitionFees: "Public: $27,020 (out‑of‑state); Private: $52,000"
    },
    {
      name: "Master of Computer Engineering",
      specializations: ["Embedded Systems", "VLSI Design", "Digital Signal Processing"],
      prerequisites:
        "Undergraduate degree in computer engineering or related field",
      description:
        "Combines hardware and software principles to design and develop advanced computing systems.",
      outcomes: [
        "Design and develop embedded systems",
        "Apply advanced computer engineering principles",
        "Integrate hardware and software solutions"
      ],
      tuitionFees: "Public: $27,020 (out‑of‑state); Private: $52,000"
    }
  ];

  return (
    <section id="universities" className="scroll-mt-32 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 font-semibold border-l-4 border-purple-600 pl-4">
            US University System Analysis
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive guide to American higher education institutions, programs, and academic structures
          </p>
        </div>

        {/* Institution Type Analysis - Simplified layout */}
        <div className="space-y-16">
          {institutionData.map((category, index) => (
            <div key={index} className="space-y-8">
              {/* Category Header */}
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-6">
                {category.type}
              </h2>

              {/* Key Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.entries(category.keyStats).map(([key, value], statIndex) => (
                  <div key={statIndex} className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-xl font-bold text-purple-900">{value}</div>
                    <div className="text-sm text-gray-700 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {category.features.map((feature, fIndex) => (
                    <div key={fIndex} className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-gray-800">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leading Institutions - Simplified card layout */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leading Institutions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.topUniversities.map((uni, uIndex) => (
                    <div key={uIndex} className="border border-purple-100 rounded-lg overflow-hidden">
                      <div className="bg-purple-50 p-3">
                        <h4 className="text-lg font-semibold text-gray-900">{uni.name}</h4>
                        <div className="text-sm text-purple-800">{uni.ranking}</div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Est.</span>
                          <span className="font-medium">{uni.established}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Acceptance</span>
                          <span className="font-medium">{uni.acceptanceRate}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Salary</span>
                          <span className="font-medium">{uni.averageSalary}</span>
                        </div>
                        <div className="text-sm text-gray-700 pt-2 border-t">
                          {uni.notable}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Programs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-8">
            Academic Programs
          </h2>
          <div className="space-y-12">
            {degreePrograms.map((level, lIndex) => (
              <div key={lIndex} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-gray-900">{level.level}</h3>
                  <p className="text-gray-700 max-w-2xl">{level.description}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {level.types.map((program, pIndex) => (
                    <div key={pIndex} className="bg-purple-50 p-6 rounded-xl">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-xl font-semibold text-purple-900">{program.name}</h4>
                          <div className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                            {program.duration}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-900">Program Structure</div>
                          <ul className="list-disc pl-6 text-gray-700">
                            {program.structure.map((item, sIndex) => (
                              <li key={sIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-gray-900">Popular Programs</div>
                          <div className="flex flex-wrap gap-2">
                            {program.topPrograms.map((prog, tpIndex) => (
                              <span key={tpIndex} className="bg-white border border-purple-200 text-purple-900 px-3 py-1 rounded-full text-sm">
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
        </div>

        {/* Popular Programs Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 pb-2 mb-8">
            Popular Programs
          </h2>
          
          {/* Undergraduate Programs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Undergraduate Programs
            </h3>
            <div className="space-y-6">
              {undergradCourses.map((course, index) => (
                <details key={index} className="group rounded-xl overflow-hidden bg-gray-50">
                  <summary className="flex justify-between items-center p-3 bg-gradient-to-r from-teal-100 to-amber-200 cursor-pointer text-base text-gray-900">
                    <div>
                      <div className="font-semibold">{course.name}</div>
                      <div className="text-sm mt-1">
                        Specializations: {course.specializations.join(", ")}
                      </div>
                    </div>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-3 bg-rose-50 space-y-3 text-base text-gray-800">
                    <div>
                      <h4 className="font-semibold text-purple-800">Prerequisites</h4>
                      <p>{course.prerequisites}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Program Description</h4>
                      <p>{course.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Learning Outcomes</h4>
                      <ul className="list-disc pl-4 space-y-1">
                        {course.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Tuition Fees per Year</h4>
                      <p>{course.tuitionFees}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
          
          {/* Graduate Programs */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Graduate Programs
            </h3>
            <div className="space-y-6">
              {graduateCourses.map((course, index) => (
                <details key={index} className="group rounded-xl overflow-hidden bg-gray-100">
                  <summary className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-200 to-rose-200 cursor-pointer text-base text-gray-900">
                    <div>
                      <div className="font-semibold">{course.name}</div>
                      <div className="text-sm mt-1">
                        Specializations: {course.specializations.join(", ")}
                      </div>
                    </div>
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-3 bg-blue-50 space-y-3 text-base text-gray-800">
                    <div>
                      <h4 className="font-semibold text-purple-800">Prerequisites</h4>
                      <p>{course.prerequisites}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Program Description</h4>
                      <p>{course.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Learning Outcomes</h4>
                      <ul className="list-disc pl-4 space-y-1">
                        {course.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-800">Tuition Fees per Year</h4>
                      <p>{course.tuitionFees}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}