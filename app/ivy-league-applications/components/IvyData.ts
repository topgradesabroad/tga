// IvyData.ts

export type ProgramType = 'undergraduate' | 'mba';
export type StrengthLevel = 1 | 2 | 3 | 4 | 5;

export interface University {
  id: number;
  name: string;
  address: string;
  website: string;
  courseDuration: string;
  averageSalary: number;
  studentFacultyRatio: string;
  acceptanceRate: number;
  earlyDecisionDeadline?: string;
  QSRanking: number;
  // Each university now has its own admission criteria
  criteria: AdmissionCriteria;
}

export interface AdmissionCriteria {
  // Ideal values for an applicant (undergraduate scale)
  idealGPA: number;
  idealTest: number; // ideal SAT score
  // Ideal value for MBA test (GMAT) defined independently
  idealTestMBA?: number;
  idealEssay: number;
  idealRecommendation: number;
  idealExtracurriculars: number; // count of activities
  idealLeadership: number; // count of leadership roles
  idealWorkExp?: number; // only for MBA

  // Weight factors for each component (the higher, the more emphasis)
  weightGPA: number;
  weightTest: number;
  weightEssay: number;
  weightRecommendation: number;
  weightExtra: number;
  weightLeadership: number;
  weightWorkExp?: number; // only for MBA

  // Known maximums for reference
  maxGPA: number;
  maxTest: number;
  maxEssay: number;
  maxRecommendation: number;
}

// Constants for maximum values (to avoid false negatives)
const MAX_GPA = 4.0;
const MAX_UNDERGRADUATE_TEST = 1600; // SAT
const MAX_MBA_TEST = 800; // GMAT
const MAX_ESSAY_STRENGTH = 5;
const MAX_RECOMMENDATION_STRENGTH = 5;

// Gaussian function (normal distribution probability density)
export function gaussian(x: number, mu: number, sigma: number): number {
  const coeff = 1 / (sigma * Math.sqrt(2 * Math.PI));
  const exponent = -((x - mu) ** 2) / (2 * sigma ** 2);
  return coeff * Math.exp(exponent);
}

// Enhanced Gaussian integration - accounts for scores at or above maximum possible values
export function integrateGaussian(
  applicantValue: number,
  ideal: number,
  sigma: number,
  max: number,
  delta = 0.1
): number {
  if (applicantValue >= max) {
    return gaussian(max, ideal, sigma) * delta * 1.5;
  }
  if (applicantValue > ideal) {
    return gaussian(ideal, ideal, sigma) * delta * 1.2;
  }
  return gaussian(applicantValue, ideal, sigma) * delta;
}

// Format percentage to one decimal place
function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Sigmoid function to nonlinearly map the raw score to a final chance boost
function sigmoid(x: number, k: number, T: number): number {
  return 1 / (1 + Math.exp(-k * (x - T)));
}

// Our synthetic dataset: extensive data for each elite institution.
export const universities: University[] = [
  {
    id: 1,
    name: "Harvard University",
    address: "Cambridge, MA, USA",
    website: "https://www.harvard.edu",
    courseDuration: "4 years",
    averageSalary: 85000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 5,
    earlyDecisionDeadline: "November 1",
    QSRanking: 3,
    criteria: {
      idealGPA: 4.0,
      idealTest: 1550,
      idealTestMBA: 730,
      idealEssay: 4.5,
      idealRecommendation: 4.5,
      idealExtracurriculars: 3,
      idealLeadership: 2,
      idealWorkExp: 5,
      weightGPA: 0.35,
      weightTest: 0.30,
      weightEssay: 0.10,
      weightRecommendation: 0.10,
      weightExtra: 0.05,
      weightLeadership: 0.05,
      weightWorkExp: 0.05,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 2,
    name: "Stanford University",
    address: "Stanford, CA, USA",
    website: "https://www.stanford.edu",
    courseDuration: "4 years",
    averageSalary: 82000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 4,
    earlyDecisionDeadline: "November 15",
    QSRanking: 2,
    criteria: {
      idealGPA: 3.95,
      idealTest: 1520,
      idealTestMBA: 720,
      idealEssay: 4.7,
      idealRecommendation: 4.3,
      idealExtracurriculars: 4,
      idealLeadership: 3,
      idealWorkExp: 6,
      weightGPA: 0.30,
      weightTest: 0.35,
      weightEssay: 0.10,
      weightRecommendation: 0.10,
      weightExtra: 0.05,
      weightLeadership: 0.05,
      weightWorkExp: 0.05,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 3,
    name: "Princeton University",
    address: "Princeton, NJ, USA",
    website: "https://www.princeton.edu",
    courseDuration: "4 years",
    averageSalary: 80000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 6,
    earlyDecisionDeadline: "November 1",
    QSRanking: 4,
    criteria: {
      idealGPA: 3.9,
      idealTest: 1500,
      idealTestMBA: 710,
      idealEssay: 4.0,
      idealRecommendation: 4.0,
      idealExtracurriculars: 3,
      idealLeadership: 2,
      idealWorkExp: 4,
      weightGPA: 0.40,
      weightTest: 0.30,
      weightEssay: 0.10,
      weightRecommendation: 0.10,
      weightExtra: 0.05,
      weightLeadership: 0.05,
      weightWorkExp: 0.0,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 4,
    name: "Columbia University",
    address: "New York, NY, USA",
    website: "https://www.columbia.edu",
    courseDuration: "4 years",
    averageSalary: 81000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 7,
    earlyDecisionDeadline: "November 15",
    QSRanking: 5,
    criteria: {
      idealGPA: 3.92,
      idealTest: 1480,
      idealTestMBA: 700,
      idealEssay: 4.2,
      idealRecommendation: 4.2,
      idealExtracurriculars: 3,
      idealLeadership: 2,
      idealWorkExp: 4,
      weightGPA: 0.35,
      weightTest: 0.30,
      weightEssay: 0.10,
      weightRecommendation: 0.10,
      weightExtra: 0.075,
      weightLeadership: 0.075,
      weightWorkExp: 0.0,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 5,
    name: "University of Pennsylvania",
    address: "Philadelphia, PA, USA",
    website: "https://www.upenn.edu",
    courseDuration: "4 years",
    averageSalary: 78000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 9,
    earlyDecisionDeadline: "December 1",
    QSRanking: 6,
    criteria: {
      idealGPA: 3.88,
      idealTest: 1470,
      idealTestMBA: 695,
      idealEssay: 4.0,
      idealRecommendation: 4.0,
      idealExtracurriculars: 4,
      idealLeadership: 3,
      idealWorkExp: 5,
      weightGPA: 0.30,
      weightTest: 0.30,
      weightEssay: 0.15,
      weightRecommendation: 0.10,
      weightExtra: 0.075,
      weightLeadership: 0.075,
      weightWorkExp: 0.05,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 6,
    name: "MIT",
    address: "Cambridge, MA, USA",
    website: "https://www.mit.edu",
    courseDuration: "4 years",
    averageSalary: 90000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 7,
    earlyDecisionDeadline: "November 1",
    QSRanking: 1,
    criteria: {
      idealGPA: 4.0,
      idealTest: 1580,
      idealTestMBA: 750,
      idealEssay: 4.3,
      idealRecommendation: 4.3,
      idealExtracurriculars: 3,
      idealLeadership: 2,
      idealWorkExp: 5,
      weightGPA: 0.30,
      weightTest: 0.40,
      weightEssay: 0.10,
      weightRecommendation: 0.05,
      weightExtra: 0.075,
      weightLeadership: 0.075,
      weightWorkExp: 0.0,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 7,
    name: "Yale University",
    address: "New Haven, CT, USA",
    website: "https://www.yale.edu",
    courseDuration: "4 years",
    averageSalary: 80000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 7,
    earlyDecisionDeadline: "November 1",
    QSRanking: 7,
    criteria: {
      idealGPA: 3.9,
      idealTest: 1500,
      idealTestMBA: 720,
      idealEssay: 4.5,
      idealRecommendation: 4.5,
      idealExtracurriculars: 4,
      idealLeadership: 3,
      idealWorkExp: 5,
      weightGPA: 0.30,
      weightTest: 0.30,
      weightEssay: 0.15,
      weightRecommendation: 0.15,
      weightExtra: 0.05,
      weightLeadership: 0.05,
      weightWorkExp: 0.0,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  },
  {
    id: 8,
    name: "Dartmouth College",
    address: "Hanover, NH, USA",
    website: "https://home.dartmouth.edu",
    courseDuration: "4 years",
    averageSalary: 77000,
    studentFacultyRatio: "6:1",
    acceptanceRate: 9,
    QSRanking: 8,
    criteria: {
      idealGPA: 3.85,
      idealTest: 1450,
      idealTestMBA: 690,
      idealEssay: 4.0,
      idealRecommendation: 4.0,
      idealExtracurriculars: 3,
      idealLeadership: 2,
      idealWorkExp: 4,
      weightGPA: 0.35,
      weightTest: 0.25,
      weightEssay: 0.15,
      weightRecommendation: 0.15,
      weightExtra: 0.05,
      weightLeadership: 0.05,
      weightWorkExp: 0.0,
      maxGPA: MAX_GPA,
      maxTest: MAX_UNDERGRADUATE_TEST,
      maxEssay: MAX_ESSAY_STRENGTH,
      maxRecommendation: MAX_RECOMMENDATION_STRENGTH
    }
  }
];

// University-specific counselor insights
const universityInsights: { [key: string]: { focus: string; unique: string; typical: string; distinguishing: string } } = {
  "Harvard University": {
    focus: "holistic excellence and leadership potential",
    unique: "strong emphasis on community impact",
    typical: "demonstrated excellence across academics and extracurriculars",
    distinguishing: "meaningful personal growth and intellectual curiosity"
  },
  "Stanford University": {
    focus: "innovation and intellectual vitality",
    unique: "entrepreneurial mindset highly valued",
    typical: "demonstrated passion in specific areas of interest",
    distinguishing: "risk-taking and creative problem-solving abilities"
  },
  "Princeton University": {
    focus: "academic rigor and intellectual independence",
    unique: "strong emphasis on undergraduate research",
    typical: "record of consistent academic excellence",
    distinguishing: "demonstrated intellectual curiosity and scholarly potential"
  },
  "Columbia University": {
    focus: "global perspective and urban engagement",
    unique: "commitment to diversity of thought",
    typical: "excellent writing skills and engagement with ideas",
    distinguishing: "interdisciplinary thinking and cultural awareness"
  },
  "University of Pennsylvania": {
    focus: "practical application of knowledge",
    unique: "interdisciplinary approach to education",
    typical: "clear career goals and practical orientation",
    distinguishing: "balance of academic and professional interests"
  },
  "MIT": {
    focus: "technical excellence and innovative thinking",
    unique: "problem-solving mindset and collaborative approach",
    typical: "exceptional STEM credentials and quantitative skills",
    distinguishing: "hands-on building and making experience"
  },
  "Yale University": {
    focus: "well-rounded liberal arts excellence",
    unique: "commitment to community and public service",
    typical: "balanced strengths across multiple disciplines",
    distinguishing: "ability to connect diverse fields of knowledge"
  },
  "Dartmouth College": {
    focus: "undergraduate teaching and community engagement",
    unique: "outdoors spirit and close-knit community",
    typical: "personal character and collaborative nature",
    distinguishing: "demonstrated interest in Dartmouth's unique culture"
  }
};

// Interface for component analysis
interface ComponentAnalysis {
  name: string;
  rawValue: number;
  maxValue: number;
  idealValue: number;
  weight: number;
  weightedScore: number;
  percentOfIdeal: number;
  isStrength: boolean;
  isMaxed: boolean;
  improvementPotential: number;
}

// Our advanced admission prediction function using calculus‐inspired computation.
export function predictAdmission(input: {
  programType: ProgramType;
  GPA: number;
  testScore: number;
  extracurriculars: string[];
  workExperience?: number;
  essaysStrength: StrengthLevel;
  recommendationStrength: StrengthLevel;
  leadershipRoles: number;
  researchExperience: boolean;
  awards: string[];
}): PredictionResult[] {
  // Determine max test score based on program type
  const maxTestScore = input.programType === 'undergraduate' ? MAX_UNDERGRADUATE_TEST : MAX_MBA_TEST;

  // For each university, compute a dynamic score.
  const results = universities.map(univ => {
    const crit = univ.criteria;
    // Sigma values for variability
    const sigmaGPA = 0.1;
    const sigmaTest = input.programType === 'undergraduate' ? 50 : 30;
    const sigmaEssay = 0.5;
    const sigmaRec = 0.5;
    const sigmaExtra = 1;
    const sigmaLeadership = 1;
    const sigmaWork = 1; // for work experience

    // Select the appropriate test ideal:
    const effectiveIdealTest =
      input.programType === 'mba' && crit.idealTestMBA !== undefined
        ? crit.idealTestMBA
        : crit.idealTest;

    // Calculate integration values (area under the curve approximation)
    const scoreGPA = integrateGaussian(input.GPA, crit.idealGPA, sigmaGPA, MAX_GPA);
    const scoreTest = integrateGaussian(input.testScore, effectiveIdealTest, sigmaTest, maxTestScore);
    const scoreEssay = integrateGaussian(input.essaysStrength, crit.idealEssay, sigmaEssay, MAX_ESSAY_STRENGTH);
    const scoreRec = integrateGaussian(input.recommendationStrength, crit.idealRecommendation, sigmaRec, MAX_RECOMMENDATION_STRENGTH);
    const scoreExtra = integrateGaussian(input.extracurriculars.length, crit.idealExtracurriculars, sigmaExtra, 10);
    const scoreLeadership = integrateGaussian(input.leadershipRoles, crit.idealLeadership, sigmaLeadership, 5);
    let scoreWork = 0;
    if (input.programType === 'mba' && crit.idealWorkExp !== undefined && input.workExperience !== undefined) {
      scoreWork = integrateGaussian(input.workExperience, crit.idealWorkExp, sigmaWork, 15);
    }

    // Weighted sum of component scores
    const weightedGPA = crit.weightGPA * scoreGPA;
    const weightedTest = crit.weightTest * scoreTest;
    const weightedEssay = crit.weightEssay * scoreEssay;
    const weightedRec = crit.weightRecommendation * scoreRec;
    const weightedExtra = crit.weightExtra * scoreExtra;
    const weightedLeadership = crit.weightLeadership * scoreLeadership;
    const weightedWork = input.programType === 'mba' && crit.weightWorkExp ? crit.weightWorkExp * scoreWork : 0;

    // Component analysis for strengths/weaknesses
    const components: ComponentAnalysis[] = [
      { 
        name: "GPA", 
        rawValue: input.GPA, 
        maxValue: MAX_GPA,
        idealValue: crit.idealGPA,
        weight: crit.weightGPA,
        weightedScore: weightedGPA,
        percentOfIdeal: (input.GPA / crit.idealGPA) * 100,
        isStrength: input.GPA >= crit.idealGPA * 0.95,
        isMaxed: input.GPA >= MAX_GPA,
        improvementPotential: crit.weightGPA * (1 - (input.GPA / MAX_GPA))
      },
      { 
        name: "Test Score", 
        rawValue: input.testScore, 
        maxValue: maxTestScore,
        idealValue: effectiveIdealTest,
        weight: crit.weightTest,
        weightedScore: weightedTest,
        percentOfIdeal: (input.testScore / effectiveIdealTest) * 100,
        isStrength: input.testScore >= effectiveIdealTest * 0.95,
        isMaxed: input.testScore >= maxTestScore * 0.98,
        improvementPotential: crit.weightTest * (1 - (input.testScore / maxTestScore))
      },
      { 
        name: "Essays", 
        rawValue: input.essaysStrength, 
        maxValue: MAX_ESSAY_STRENGTH,
        idealValue: crit.idealEssay,
        weight: crit.weightEssay,
        weightedScore: weightedEssay,
        percentOfIdeal: (input.essaysStrength / crit.idealEssay) * 100,
        isStrength: input.essaysStrength >= crit.idealEssay * 0.9,
        isMaxed: input.essaysStrength >= MAX_ESSAY_STRENGTH,
        improvementPotential: crit.weightEssay * (1 - (input.essaysStrength / MAX_ESSAY_STRENGTH))
      },
      { 
        name: "Recommendations", 
        rawValue: input.recommendationStrength, 
        maxValue: MAX_RECOMMENDATION_STRENGTH,
        idealValue: crit.idealRecommendation,
        weight: crit.weightRecommendation,
        weightedScore: weightedRec,
        percentOfIdeal: (input.recommendationStrength / crit.idealRecommendation) * 100,
        isStrength: input.recommendationStrength >= crit.idealRecommendation * 0.9,
        isMaxed: input.recommendationStrength >= MAX_RECOMMENDATION_STRENGTH,
        improvementPotential: crit.weightRecommendation * (1 - (input.recommendationStrength / MAX_RECOMMENDATION_STRENGTH))
      },
      { 
        name: "Extracurriculars", 
        rawValue: input.extracurriculars.length, 
        maxValue: 10,
        idealValue: crit.idealExtracurriculars,
        weight: crit.weightExtra,
        weightedScore: weightedExtra,
        percentOfIdeal: (input.extracurriculars.length / crit.idealExtracurriculars) * 100,
        isStrength: input.extracurriculars.length >= crit.idealExtracurriculars,
        isMaxed: input.extracurriculars.length >= 8,
        improvementPotential: crit.weightExtra * (1 - (Math.min(input.extracurriculars.length, 10) / 10))
      },
      { 
        name: "Leadership", 
        rawValue: input.leadershipRoles, 
        maxValue: 5,
        idealValue: crit.idealLeadership,
        weight: crit.weightLeadership,
        weightedScore: weightedLeadership,
        percentOfIdeal: (input.leadershipRoles / crit.idealLeadership) * 100,
        isStrength: input.leadershipRoles >= crit.idealLeadership,
        isMaxed: input.leadershipRoles >= 4,
        improvementPotential: crit.weightLeadership * (1 - (Math.min(input.leadershipRoles, 5) / 5))
      }
    ];
    
    if (input.programType === 'mba' && crit.idealWorkExp !== undefined && input.workExperience !== undefined) {
      components.push({ 
        name: "Work Experience", 
        rawValue: input.workExperience, 
        maxValue: 15,
        idealValue: crit.idealWorkExp,
        weight: crit.weightWorkExp || 0,
        weightedScore: weightedWork,
        percentOfIdeal: (input.workExperience / (crit.idealWorkExp || 1)) * 100,
        isStrength: input.workExperience >= (crit.idealWorkExp || 0),
        isMaxed: input.workExperience >= 10,
        improvementPotential: (crit.weightWorkExp || 0) * (1 - (Math.min(input.workExperience, 15) / 15))
      });
    }

    // Add bonus for awards and research experience
    const extraBonus = (input.awards.length * 0.05 + (input.researchExperience ? 0.1 : 0)) || 0;

    // Determine strengths and weaknesses
    components.sort((a, b) => a.weightedScore - b.weightedScore);
    const weakestComponents = components.filter(c => c.percentOfIdeal < 90).slice(0, 2);
    components.sort((a, b) => b.weightedScore - a.weightedScore);
    const strongestComponents = components.filter(c => c.isStrength).slice(0, 2);
    components.sort((a, b) => b.improvementPotential - a.improvementPotential);
    const highestPotentialComponents = components.filter(c => !c.isMaxed).slice(0, 2);

    // Calculate raw total score (scaled into 0-100 range)
    let totalScore = weightedGPA + weightedTest + weightedEssay + weightedRec +
                     weightedExtra + weightedLeadership + weightedWork + extraBonus;
    totalScore = Math.min(100, totalScore * 1000);

    // --- New Nonlinear Mapping ---
    // Use a sigmoid to map the raw totalScore to a final chance.
    // k controls the steepness; T is the threshold raw score for exceptional performance.
    const k = 0.1;
    const T = 80;
    const finalChance = univ.acceptanceRate + (100 - univ.acceptanceRate) * sigmoid(totalScore, k, T);
    // finalChance is our admission probability
    // ----------------------------------

    // Determine competitiveness (for display purposes)
    const competitiveness = totalScore / (100 - univ.acceptanceRate);
    const competitivenessRating = competitiveness >= 1.2 ? "Highly Competitive" :
                                  competitiveness >= 1.0 ? "Competitive" :
                                  competitiveness >= 0.8 ? "Somewhat Competitive" : "Less Competitive";
    
    // Get university-specific insights
    const insights = universityInsights[univ.name] || {
      focus: "academic excellence",
      unique: "well-rounded applicants",
      typical: "strong academic credentials",
      distinguishing: "unique personal qualities"
    };

    // Build positive points based on strengths
    const positivePoints = [];
    if (input.GPA >= crit.idealGPA) {
      positivePoints.push(`Your GPA of ${input.GPA} meets or exceeds ${univ.name}'s target.`);
    } else if (input.GPA >= crit.idealGPA * 0.95) {
      positivePoints.push(`Your GPA of ${input.GPA} is very competitive for ${univ.name}.`);
    }
    if (input.testScore >= effectiveIdealTest) {
      positivePoints.push(`Your test score of ${input.testScore} meets or exceeds ${univ.name}'s target.`);
    } else if (input.testScore >= effectiveIdealTest * 0.95) {
      positivePoints.push(`Your test score of ${input.testScore} is very competitive for ${univ.name}.`);
    }
    if (input.researchExperience) {
      positivePoints.push(`Your research experience aligns well with ${univ.name}'s ${insights.focus}.`);
    }
    if (input.awards.length > 0) {
      positivePoints.push(`Your ${input.awards.length} award(s) demonstrate achievement valued by ${univ.name}.`);
    }
    for (const strength of strongestComponents) {
      if (!positivePoints.some(p => p.includes(strength.name))) {
        positivePoints.push(`Your ${strength.name.toLowerCase()} is a notable strength for ${univ.name}, which values ${insights.typical}.`);
      }
    }
    if (positivePoints.length < 2) {
      if (input.extracurriculars.length >= crit.idealExtracurriculars) {
        positivePoints.push(`Your involvement in ${input.extracurriculars.length} extracurricular activities shows the well-roundedness valued by ${univ.name}.`);
      }
      if (input.leadershipRoles >= crit.idealLeadership) {
        positivePoints.push(`Your ${input.leadershipRoles} leadership role(s) demonstrate the initiative ${univ.name} seeks.`);
      }
    }
    
    // Build improvement areas
    const areasToImprove = [];
    for (const component of highestPotentialComponents) {
      if (!component.isMaxed) {
        const compName = component.name.toLowerCase();
        if (component.percentOfIdeal < 75) {
          areasToImprove.push(`Significantly strengthen your ${compName} to be more competitive at ${univ.name}, which places ${component.weight >= 0.3 ? "heavy" : "meaningful"} emphasis on this area.`);
        } else if (component.percentOfIdeal < 90) {
          areasToImprove.push(`Consider improving your ${compName} to better align with ${univ.name}'s expectations.`);
        } else if (!component.isStrength && component.weight > 0.1) {
          areasToImprove.push(`A modest improvement in your ${compName} could enhance your overall competitiveness.`);
        }
      }
    }
    if (areasToImprove.length === 0) {
      if (!input.researchExperience && (univ.name === "Princeton University" || univ.name === "MIT")) {
        areasToImprove.push(`Consider gaining research experience, which is highly valued by ${univ.name}.`);
      } else {
        areasToImprove.push(`While your profile is strong, focusing on ${insights.distinguishing} could further strengthen your application.`);
      }
    }

    // Counselor note generation
    let counselorNote = "";
    if (totalScore >= 85) {
      if (weakestComponents.length === 0) {
        counselorNote = `Your profile is exceptional for ${univ.name}. Your academic and personal achievements align perfectly with their emphasis on ${insights.focus}. Remember that admission to elite universities always involves some unpredictability, so continue to maintain your excellence across all areas.`;
      } else {
        const weakness = weakestComponents[0];
        counselorNote = `Excellent match for ${univ.name}. Your profile strongly aligns with their focus on ${insights.focus}. Consider a small enhancement to your ${weakness.name.toLowerCase()} to maximize your chances, though you're already highly competitive.`;
      }
    } else if (totalScore >= 70) {
      const weakness = weakestComponents[0];
      const strength = strongestComponents[0];
      counselorNote = `Strong profile for ${univ.name}, particularly your ${strength.name.toLowerCase()}. To become more competitive, focus on improving your ${weakness.name.toLowerCase()}. ${univ.name} values ${insights.unique}, and strengthening this component would significantly boost your application.`;
    } else if (totalScore >= 55) {
      counselorNote = `You have potential for ${univ.name}, but will need to strengthen your profile. Focus particularly on ${highestPotentialComponents[0].name.toLowerCase()} and ${highestPotentialComponents[1].name.toLowerCase()}, as these align with ${univ.name}'s emphasis on ${insights.focus}. With dedicated effort, you can become more competitive.`;
    } else {
      counselorNote = `${univ.name} would be a reach school for you currently. Their acceptance rate of ${univ.acceptanceRate}% means competition is fierce, and they emphasize ${insights.focus}. Consider applying to some match and safety schools, while working to strengthen your ${highestPotentialComponents[0].name.toLowerCase()} if ${univ.name} remains a top choice.`;
    }

    // Build final prediction result using the finalChance computed via the sigmoid mapping
    const result: PredictionResult = {
      university: univ,
      components: components,
      admissionProbability: finalChance, // final chance as computed by the nonlinear mapping
      chanceOfAdmission: formatPercentage(finalChance),
      competitiveness: competitivenessRating,
      strengthsAnalysis: {
        key_score: totalScore,
        positive_points: positivePoints.slice(0, 3),
        improvement_areas: areasToImprove.slice(0, 2)
      },
      counselorNote: counselorNote
    };

    return result;
  });

  // Sort results by admission probability (highest first)
  return results.sort((a, b) => b.admissionProbability - a.admissionProbability);
}

// Define the result interface
export interface PredictionResult {
  university: University;
  components: ComponentAnalysis[];
  admissionProbability: number;
  chanceOfAdmission: string;
  competitiveness: string;
  strengthsAnalysis: {
    key_score: number;
    positive_points: string[];
    improvement_areas: string[];
  };
  counselorNote: string;
}

// Export any other functions or variables as needed
export default {
  universities,
  predictAdmission,
  formatPercentage
};

/* Sample usage:
const sampleInput = {
  programType: 'mba' as ProgramType,
  GPA: 4.0,
  testScore: 800, // GMAT score
  extracurriculars: ['Debate Club', 'Student Government', 'Volunteer Work'],
  workExperience: 6,
  essaysStrength: 5 as StrengthLevel,
  recommendationStrength: 5 as StrengthLevel,
  leadershipRoles: 3,
  researchExperience: true,
  awards: ['National Merit Finalist', 'Regional Science Fair Winner']
};

const results = predictAdmission(sampleInput);
console.log("Top matches:");
results.slice(0, 3).forEach((result, index) => {
  console.log(`${index + 1}. ${result.university.name}: ${result.chanceOfAdmission} chance of admission`);
  console.log(`   Key strengths: ${result.strengthsAnalysis.positive_points.join(' ')}`);
  console.log(`   Consider improving: ${result.strengthsAnalysis.improvement_areas.join(' ')}`);
  console.log(`   Counselor note: ${result.counselorNote}`);
});
*/
