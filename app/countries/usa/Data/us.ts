export interface HeroSection {
    headline: string;
    subtext: string;
    cta: string;
    backgroundImage: string;
  }
  
  export interface WhyStudySection {
    title: string;
    content: string;
    icon?: string; // optional icon URL or className
  }
  
  export interface University {
    name: string;
    description: string;
    internationalStudents: string; // e.g. "30%"
    qsRanking: number;
    averageFees: string; // e.g. "$53,790 per year"
    averageSalary: string; // e.g. "$90,000"
    campusImage?: string; // optional image URL for the university
  }
  
  export interface Courses {
    STEM: string;
    businessManagement: string;
    healthcareMedicine: string;
    socialSciencesHumanities: string;
    additionalInfo?: string; // extra info if needed
  }
  
  export interface ScholarshipsSection {
    universityBased: string;
    governmentPrograms: string;
    privateOrganizations: string;
    applicationTips: string;
  }
  
  export interface StudentLifeSection {
    campusLife: string;
    culturalDiversity: string;
    extracurricularActivities: string;
    supportServices: string;
    communityEngagement?: string; // optional extra field
  }
  
  export interface VisaSection {
    f1Visa: string;
    j1Visa: string;
    otherVisaOptions: string;
    applicationTips: string;
  }
  
  export interface ApplicationProcessSection {
    stepByStep: string;
    tips?: string; // additional suggestions
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface ConsultationSection {
    description: string;
    cta: string;
    extraInfo?: string;
  }
  
  export interface CountryPageData {
    hero: HeroSection;
    whyStudy: WhyStudySection[];
    topUniversities: University[];
    popularCourses: Courses;
    scholarships: ScholarshipsSection;
    studentLife: StudentLifeSection;
    visaAndImmigration: VisaSection;
    applicationProcess: ApplicationProcessSection;
    faqs: FAQ[];
    consultation: ConsultationSection;
  }
  
  export const usaCountryPageData: CountryPageData = {
    hero: {
      headline: "Unlock Your Potential: Study in the USA",
      subtext:
        "Embark on a transformative educational journey in the United States—a land renowned for its world-class institutions, innovative research, and vibrant cultural diversity. Discover how the American education system can empower you to achieve global success.",
      cta: "Schedule Your Free Consultation Today",
      backgroundImage: "/images/usa-hero.jpg",
    },
    whyStudy: [
      {
        title: "Academic Excellence and Global Recognition",
        content:
          "American universities consistently rank among the world’s best. Institutions like MIT, Harvard, and Stanford are known for their rigorous academic standards and commitment to innovation. Their degrees are respected globally, providing an edge in the competitive job market.",
        icon: "graduation-cap",
      },
      {
        title: "Innovative Research and Cutting-Edge Technology",
        content:
          "The USA is at the forefront of research and development. Universities invest in advanced laboratories and research centers, offering students opportunities to participate in groundbreaking projects that shape the future of technology and science.",
        icon: "flask",
      },
      {
        title: "Diverse Cultural Experience and Networking",
        content:
          "Studying in the USA exposes you to a multicultural environment where students from over 150 countries converge. This rich tapestry of cultures helps build global networks and enhances personal growth.",
        icon: "users",
      },
      {
        title: "Flexible Academic Pathways",
        content:
          "The American education system offers flexibility in course selection, allowing you to tailor your academic journey. You can explore interdisciplinary studies and customize your curriculum to suit your interests and career goals.",
        icon: "exchange-alt",
      },
      {
        title: "Career Opportunities and Post-Study Work Options",
        content:
          "Robust career services, internships, and on-campus recruitment opportunities pave the way for successful transitions into the global workforce. Programs like Optional Practical Training (OPT) enable you to gain valuable work experience after graduation.",
        icon: "briefcase",
      },
    ],
    topUniversities: [
      {
        name: "Massachusetts Institute of Technology (MIT)",
        description:
          "Renowned for its excellence in engineering, computer science, and technology, MIT fosters a culture of innovation and entrepreneurship. The institute’s close industry ties provide students with hands-on research opportunities and startup mentorship.",
        internationalStudents: "30%",
        qsRanking: 1,
        averageFees: "$53,790 per year",
        averageSalary: "$90,000",
        campusImage: "/images/mit-campus.jpg",
      },
      {
        name: "Stanford University",
        description:
          "Located in the heart of Silicon Valley, Stanford combines academic rigor with entrepreneurial spirit. Its interdisciplinary approach and extensive research facilities prepare students for global leadership and innovation.",
        internationalStudents: "24%",
        qsRanking: 2,
        averageFees: "$55,473 per year",
        averageSalary: "$95,000",
        campusImage: "/images/stanford-campus.jpg",
      },
      {
        name: "Harvard University",
        description:
          "One of the oldest and most prestigious institutions in the world, Harvard offers a diverse range of programs. Its vast resources, expert faculty, and influential alumni network empower students to excel in various fields.",
        internationalStudents: "22%",
        qsRanking: 3,
        averageFees: "$51,904 per year",
        averageSalary: "$92,000",
        campusImage: "/images/harvard-campus.jpg",
      },
      {
        name: "California Institute of Technology (Caltech)",
        description:
          "Caltech is renowned for its rigorous programs in natural sciences and engineering. With small class sizes and a focus on research, students receive personalized attention and hands-on experience in cutting-edge projects.",
        internationalStudents: "27%",
        qsRanking: 5,
        averageFees: "$54,600 per year",
        averageSalary: "$88,000",
        campusImage: "/images/caltech-campus.jpg",
      },
      {
        name: "University of Chicago",
        description:
          "Known for its intellectual rigor, the University of Chicago challenges conventional thinking and encourages interdisciplinary research. Its programs in economics, sociology, and political science are among the best globally.",
        internationalStudents: "25%",
        qsRanking: 10,
        averageFees: "$57,642 per year",
        averageSalary: "$85,000",
        campusImage: "/images/chicago-campus.jpg",
      },
    ],
    popularCourses: {
      STEM:
        "American universities offer state-of-the-art programs in STEM fields. Courses in Computer Science, Artificial Intelligence, Engineering, and Natural Sciences emphasize practical applications, hands-on research, and innovative problem-solving techniques.",
      businessManagement:
        "Business programs in the USA are designed to prepare students for leadership roles in the global market. MBA programs, along with specialized courses in Finance, Marketing, and Entrepreneurship, incorporate real-world case studies and internships.",
      healthcareMedicine:
        "With top-tier hospitals and research facilities, the USA provides unmatched opportunities in healthcare. Programs in Medicine, Nursing, Public Health, and Biomedical Research integrate theoretical learning with clinical practice and research projects.",
      socialSciencesHumanities:
        "Courses in Social Sciences and Humanities, including Psychology, Political Science, International Relations, and Arts & Literature, provide critical insights into human behavior, societal trends, and cultural dynamics, fostering a well-rounded education.",
      additionalInfo:
        "Students also benefit from access to libraries, research grants, and global exchange programs that further enhance academic and professional growth.",
    },
    scholarships: {
      universityBased:
        "Leading institutions offer comprehensive merit-based and need-based scholarships. These packages may cover tuition, living expenses, and additional fees, making a world-class education accessible regardless of your financial background.",
      governmentPrograms:
        "Prestigious programs such as the Fulbright Foreign Student Program and Hubert H. Humphrey Fellowship provide scholarships that support graduate studies and research, fostering cross-cultural exchange and academic excellence.",
      privateOrganizations:
        "Foundations like the Rotary Foundation and AAUW International Fellowships offer awards based on academic excellence, leadership potential, and community involvement, enabling students to pursue their educational dreams.",
      applicationTips:
        "Start your scholarship search early, prepare a compelling personal statement, secure strong recommendation letters, and maintain an excellent academic record. Our consultancy services are available to help you identify the best opportunities.",
    },
    studentLife: {
      campusLife:
        "Experience a vibrant campus life with diverse clubs, student organizations, and recreational activities. Universities provide well-equipped dormitories and social spaces that foster networking, collaboration, and personal growth.",
      culturalDiversity:
        "Campuses are true melting pots where students from over 150 countries converge. Regular cultural festivals, international food fairs, and language exchange programs help celebrate diversity and promote cross-cultural understanding.",
      extracurricularActivities:
        "From varsity sports and intramural leagues to theater productions and music concerts, extracurricular activities play a vital role in building leadership skills, teamwork, and a balanced lifestyle.",
      supportServices:
        "Dedicated international student offices, counseling services, academic advising, and career support centers are available to ensure you thrive academically and personally.",
      communityEngagement:
        "Many institutions partner with local organizations to offer community service programs and volunteer opportunities, enriching your learning experience while giving back to society.",
    },
    visaAndImmigration: {
      f1Visa:
        "The F-1 visa is the most common visa for international students. Requirements include admission to an SEVP-certified institution, proof of sufficient funds, and standardized test scores. The process involves filling out the DS-160 form, paying the SEVIS fee, and attending a visa interview.",
      j1Visa:
        "The J-1 visa is tailored for students participating in approved exchange programs. It emphasizes cultural exchange and academic enrichment, requiring a DS-2019 form from the program sponsor along with similar documentation as the F-1.",
      otherVisaOptions:
        "Other visa categories include the M-1 visa for vocational training and various work permits like Optional Practical Training (OPT) and Curricular Practical Training (CPT) for hands-on professional experience.",
      applicationTips:
        "Gather all required documents, practice common interview questions, and clearly articulate your academic and career goals. Our consultants can help streamline your visa application process.",
    },
    applicationProcess: {
      stepByStep:
        "Step 1: Research and shortlist universities based on your field, academic interests, and career aspirations. Step 2: Prepare for standardized tests (SAT, ACT, GRE, GMAT, TOEFL/IELTS). Step 3: Gather academic transcripts, recommendation letters, and personal essays. Step 4: Submit online applications and prepare for interviews. Step 5: Once accepted, confirm enrollment, start the visa application process, and attend pre-departure briefings.",
      tips:
        "Stay organized with deadlines, seek feedback on your personal statement, and leverage our consultancy services for guidance at every step of the application process.",
    },
    faqs: [
      {
        question: "What are the benefits of studying in the USA compared to other countries?",
        answer:
          "The USA provides world-class education, access to innovative research, diverse cultural experiences, and flexible academic programs. Coupled with robust career opportunities and post-study work options, it offers a comprehensive package that is hard to match elsewhere.",
      },
      {
        question: "How do I finance my education in the USA?",
        answer:
          "Financing your education is possible through a combination of university scholarships, government programs like Fulbright, and private foundation awards. Early preparation and maintaining strong academics are key to securing funding.",
      },
      {
        question: "What is the process for obtaining a student visa?",
        answer:
          "Most international students apply for the F-1 visa, which requires admission to an SEVP-certified institution, completing the DS-160 form, paying the SEVIS fee, and attending an interview at a U.S. consulate. Thorough documentation is essential.",
      },
      {
        question: "Can I work while studying in the USA?",
        answer:
          "Yes, F-1 visa holders can work on-campus for up to 20 hours per week during the academic term. Additionally, post-graduation opportunities like Optional Practical Training (OPT) allow students to gain work experience in their field of study.",
      },
      {
        question: "How do I choose the right university and course for my career goals?",
        answer:
          "Our expert consultants can help you evaluate your academic profile, career ambitions, and financial considerations. They will guide you in selecting the university and program that best align with your future aspirations.",
      },
    ],
    consultation: {
      description:
        "Are you ready to embark on your educational journey in the USA? Our team of experienced education consultants is here to help you navigate the complexities of admissions, scholarship applications, and visa processing. Let us guide you every step of the way.",
      cta: "Book a Free Consultation",
      extraInfo:
        "Receive personalized advice, application support, and up-to-date insights on American higher education trends.",
    },
  };
  