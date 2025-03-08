// /components/Data/usa/data.ts

export const usStats = [
    {
      icon: "🏛️", // Replace with your custom SVG icon components if desired.
      value: 4000,
      suffix: "+",
      label: "Accredited Institutions",
      desc: "Over 4,000 institutions providing diverse programs."
    },
    {
      icon: "🎓",
      value: 1200000,
      suffix: "+",
      label: "International Students",
      desc: "Students from around the globe."
    },
    {
      icon: "💰",
      value: 83,
      suffix: "B",
      label: "Research Spending",
      desc: "Annual investment in groundbreaking research."
    },
    {
      icon: "📈",
      value: 90,
      suffix: "K+",
      label: "Avg. Starting Salary ($)",
      desc: "Competitive compensation across industries."
    }
  ];
  
  export const usEducationSystem = {
    description: `The US higher education system is celebrated for its academic excellence, innovative research, and comprehensive course offerings.
  Students enjoy a blend of liberal arts and specialized programs at both public and private institutions, ensuring well-rounded development.`,
    
    categories: [
      {
        type: "Public Universities",
        total: 1600,
        avgAnnualFees: "$25,000 - $40,000",
        avgStartingSalary: "$70,000 - $90,000",
        notableAlumni: [
          { name: "Sundar Pichai", title: "CEO, Google", university: "Stanford University" },
          { name: "Satya Nadella", title: "CEO, Microsoft", university: "University of Wisconsin-Milwaukee" }
        ],
        universities: [
          { name: "UC Berkeley", acceptanceRate: "14.8%", intStudents: "8,000+", researchFunding: "$1.1B" },
          { name: "University of Michigan", acceptanceRate: "20%", intStudents: "7,000+", researchFunding: "$1.5B" }
        ]
      },
      {
        type: "Private Universities",
        total: 2500,
        avgAnnualFees: "$45,000 - $65,000",
        avgStartingSalary: "$85,000 - $110,000",
        notableAlumni: [
          { name: "Ratan Tata", title: "Chairman Emeritus, Tata Group", university: "Cornell University" },
          { name: "Indra Nooyi", title: "Former CEO, PepsiCo", university: "Yale University" }
        ],
        universities: [
          { name: "Harvard University", acceptanceRate: "4.6%", intStudents: "9,000+", researchFunding: "$1.2B" },
          { name: "MIT", acceptanceRate: "6.7%", intStudents: "4,500+", researchFunding: "$1.6B" }
        ]
      }
    ],
  
    degrees: [
      { type: "Associate Degrees", duration: "2 years", details: "Foundational training and career entry." },
      { type: "Bachelor’s Degrees", duration: "4 years", details: "Comprehensive education with specialization options." },
      { type: "Master’s Programs", duration: "1-2 years", details: "Advanced study and research opportunities." },
      { type: "Doctoral Degrees", duration: "3-7 years", details: "Highest academic achievement with original research." }
    ]
  };
  
  export const usResearchInnovation = {
    description: `US universities lead global research and innovation with over $83 billion invested annually.
  This funding drives breakthroughs in multiple sectors, transforming industries and enhancing quality of life.`,
    
    sectors: [
      { 
        field: "AI & Machine Learning", 
        investment: "$10B+", 
        institutions: ["MIT", "Stanford", "Carnegie Mellon"],
        description: "Pioneering advanced algorithms and neural networks."
      },
      { 
        field: "Biotechnology", 
        investment: "$8B+", 
        institutions: ["Harvard", "Johns Hopkins", "UC San Diego"],
        description: "Revolutionizing healthcare through genetic and regenerative research."
      },
      { 
        field: "Fintech", 
        investment: "$5B+", 
        institutions: ["Wharton", "Columbia", "NYU"],
        description: "Innovating digital finance and blockchain solutions."
      },
      { 
        field: "Social Sciences", 
        investment: "$4B+", 
        institutions: ["Harvard", "Yale", "Princeton"],
        description: "Exploring societal challenges through interdisciplinary studies."
      },
      { 
        field: "Renewable Energy", 
        investment: "$3B+", 
        institutions: ["Stanford", "UC Berkeley", "Georgia Tech"],
        description: "Advancing sustainable energy and smart grid technologies."
      },
      { 
        field: "Space & Aeronautics", 
        investment: "$2B+", 
        institutions: ["MIT", "Caltech", "Stanford"],
        description: "Exploring next-generation space and satellite innovations."
      }
    ],
    
    latestResearch: [
      { 
        title: "AI in Healthcare", 
        institution: "Stanford University", 
        summary: "Developing predictive models for early disease detection and personalized treatment."
      },
      { 
        title: "Quantum Computing", 
        institution: "MIT", 
        summary: "Pioneering computational paradigms beyond classical limits."
      },
      { 
        title: "CRISPR Gene Editing", 
        institution: "Harvard University", 
        summary: "Advancing precise genetic therapies for rare and complex diseases."
      },
      { 
        title: "Sustainable Urban Development", 
        institution: "UC Berkeley", 
        summary: "Innovating eco-friendly urban planning for smart, resilient cities."
      }
    ]
  };
  
  export const usCareerProspects = {
    description: `The US education system’s strong industry ties ensure graduates are prepared for dynamic careers.
  Opportunities span STEM, healthcare, engineering, education, and skilled trades – with several sectors facing critical shortages.`,
    
    jobTrends: [
      { field: "AI & Data Science", avgSalary: "$120,000", demand: "High" },
      { field: "Cybersecurity", avgSalary: "$110,000", demand: "Very High" },
      { field: "Healthcare (Registered Nurses)", avgSalary: "$75,000", demand: "Critical" },
      { field: "Engineering (Mechanical, Electrical)", avgSalary: "$95,000", demand: "High" },
      { field: "Skilled Trades (Electricians, Plumbers)", avgSalary: "$60,000", demand: "Growing" },
      { field: "Education (STEM Teachers)", avgSalary: "$65,000", demand: "Shortage" },
      { field: "Renewable Energy Technicians", avgSalary: "$70,000", demand: "Increasing" },
      { field: "Healthcare (Physician Assistants)", avgSalary: "$105,000", demand: "Critical" },
      { field: "Logistics & Supply Chain", avgSalary: "$68,000", demand: "Growing" }
    ],
  
    currentJobListings: [
      { 
        role: "Data Scientist", 
        company: "Google", 
        location: "California", 
        link: "https://www.linkedin.com/jobs/view/1234567890" 
      },
      { 
        role: "Cybersecurity Analyst", 
        company: "IBM", 
        location: "New York", 
        link: "https://www.indeed.com/viewjob?jk=9876543210" 
      },
      { 
        role: "Registered Nurse", 
        company: "Mayo Clinic", 
        location: "Minnesota", 
        link: "https://www.linkedin.com/jobs/view/1122334455" 
      },
      { 
        role: "Mechanical Engineer", 
        company: "General Electric", 
        location: "Pennsylvania", 
        link: "https://www.indeed.com/viewjob?jk=5566778899" 
      },
      { 
        role: "STEM Teacher", 
        company: "Los Angeles Unified", 
        location: "California", 
        link: "https://www.schools.com/jobs/view/2233445566" 
      },
      { 
        role: "Physician Assistant", 
        company: "Cleveland Clinic", 
        location: "Ohio", 
        link: "https://www.linkedin.com/jobs/view/3344556677" 
      }
    ]
  };
  
  export const usLivingExpenses = {
    description: `Living costs in the US vary significantly by location. Major metropolitan areas tend to have higher expenses,
  while suburban and smaller urban areas offer more affordable living. Below is a detailed breakdown for key cities.`,
    
    costs: [
      { 
        city: "New York", 
        rent: "$2,500", 
        food: "$600", 
        transport: "$150",
        details: "Premium housing with world-class amenities and vibrant cultural experiences." 
      },
      { 
        city: "Chicago", 
        rent: "$1,800", 
        food: "$500", 
        transport: "$120",
        details: "Dynamic city with diverse neighborhoods and a rich arts scene." 
      },
      { 
        city: "Houston", 
        rent: "$1,200", 
        food: "$400", 
        transport: "$100",
        details: "Affordable living with a robust job market in energy and healthcare." 
      },
      { 
        city: "San Francisco", 
        rent: "$3,000", 
        food: "$700", 
        transport: "$200",
        details: "High costs driven by tech demand, yet offering a cutting-edge, innovative culture." 
      }
    ]
  };
  