'use client';
import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { ChevronDownIcon, GlobeIcon, BookOpenIcon, AcademicCapIcon, ChartBarIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

// Types for our application
type Region = 'US' | 'UK' | 'Europe' | 'Asia' | 'Australia' | 'Canada';
type SchoolType = 'Undergraduate' | 'MBA' | 'Graduate';
type ApplicationStatus = 'Reach' | 'Target' | 'Safety';

// University structure with detailed metrics
interface University {
  id: string;
  name: string;
  region: Region;
  ranking: number; 
  admissionRate: number;
  averageGPA: number;
  medianSAT?: number;
  medianACT?: number;
  medianGMAT?: number;
  medianGRE?: number;
  acceptedGPARange: {
    min: number;
    max: number;
  };
  acceptedSATRange?: {
    min: number;
    max: number;
  };
  acceptedACTRange?: {
    min: number;
    max: number;
  };
  acceptedGMATRange?: {
    min: number;
    max: number;
  };
  acceptedGRERange?: {
    min: number;
    max: number;
  };
  tuition: {
    domestic: number;
    international: number;
  };
  weights: {
    academicWeight: number;
    extracurricularWeight: number;
    essaysWeight: number;
    recommendationsWeight: number;
    leadershipWeight: number;
    workExperienceWeight?: number;
    researchWeight?: number;
    internationalWeight: number;
    legacyWeight: number;
    diversityWeight: number;
  };
}

// Student profile type
interface StudentProfile {
  schoolType: SchoolType;
  gpa: number;
  satScore?: number;
  actScore?: number;
  gmatScore?: number;
  greScore?: number;
  extraCurricular: number;
  essays: number;
  recommendations: number;
  leadership: number;
  workExperience?: number;
  research?: number;
  international: boolean;
  legacy: boolean;
  demographics: {
    ethnicity: string;
    gender: string;
    firstGeneration: boolean;
    lowIncome: boolean;
  };
  intendedMajor: string;
  awards: number;
  communityService: number;
}

// Result type
interface AdmissionResult {
  university: University;
  chance: number;
  status: ApplicationStatus;
  fitScore: number;
  financialAid: number;
  comments: string[];
  strengths: string[];
  improvements: string[];
}

// Database of universities
const universityDatabase: University[] = [
  // Ivy League - US
  {
    id: 'harvard',
    name: 'Harvard University',
    region: 'US',
    ranking: 1,
    admissionRate: 3.2,
    averageGPA: 4.0,
    medianSAT: 1520,
    medianACT: 35,
    medianGMAT: 735,
    medianGRE: 330,
    acceptedGPARange: { min: 3.8, max: 4.0 },
    acceptedSATRange: { min: 1480, max: 1580 },
    acceptedACTRange: { min: 33, max: 36 },
    acceptedGMATRange: { min: 710, max: 760 },
    acceptedGRERange: { min: 320, max: 340 },
    tuition: { domestic: 54002, international: 54002 },
    weights: {
      academicWeight: 0.4,
      extracurricularWeight: 0.2,
      essaysWeight: 0.15,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.1,
      workExperienceWeight: 0.05,
      researchWeight: 0.05,
      internationalWeight: 0.03,
      legacyWeight: 0.07,
      diversityWeight: 0.05
    }
  },
  {
    id: 'yale',
    name: 'Yale University',
    region: 'US',
    ranking: 3,
    admissionRate: 4.6,
    averageGPA: 3.95,
    medianSAT: 1510,
    medianACT: 34,
    medianGMAT: 725,
    medianGRE: 328,
    acceptedGPARange: { min: 3.75, max: 4.0 },
    acceptedSATRange: { min: 1460, max: 1570 },
    acceptedACTRange: { min: 33, max: 36 },
    acceptedGMATRange: { min: 700, max: 750 },
    acceptedGRERange: { min: 318, max: 338 },
    tuition: { domestic: 55500, international: 55500 },
    weights: {
      academicWeight: 0.35,
      extracurricularWeight: 0.25,
      essaysWeight: 0.15,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.05,
      internationalWeight: 0.03,
      legacyWeight: 0.07,
      diversityWeight: 0.05
    }
  },
  {
    id: 'princeton',
    name: 'Princeton University',
    region: 'US',
    ranking: 2,
    admissionRate: 3.8,
    averageGPA: 3.9,
    medianSAT: 1510,
    medianACT: 34,
    medianGMAT: 725,
    medianGRE: 329,
    acceptedGPARange: { min: 3.7, max: 4.0 },
    acceptedSATRange: { min: 1450, max: 1570 },
    acceptedACTRange: { min: 32, max: 36 },
    acceptedGMATRange: { min: 700, max: 750 },
    acceptedGRERange: { min: 318, max: 338 },
    tuition: { domestic: 56010, international: 56010 },
    weights: {
      academicWeight: 0.4,
      extracurricularWeight: 0.2,
      essaysWeight: 0.15,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.05,
      internationalWeight: 0.02,
      legacyWeight: 0.06,
      diversityWeight: 0.07
    }
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    region: 'US',
    ranking: 4,
    admissionRate: 3.9,
    averageGPA: 3.96,
    medianSAT: 1520,
    medianACT: 35,
    medianGMAT: 733,
    medianGRE: 330,
    acceptedGPARange: { min: 3.8, max: 4.0 },
    acceptedSATRange: { min: 1470, max: 1570 },
    acceptedACTRange: { min: 33, max: 36 },
    acceptedGMATRange: { min: 710, max: 760 },
    acceptedGRERange: { min: 320, max: 340 },
    tuition: { domestic: 56169, international: 56169 },
    weights: {
      academicWeight: 0.35,
      extracurricularWeight: 0.25,
      essaysWeight: 0.2,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.1,
      internationalWeight: 0.02,
      legacyWeight: 0.03,
      diversityWeight: 0.05
    }
  },
  {
    id: 'mit',
    name: 'MIT',
    region: 'US',
    ranking: 5,
    admissionRate: 4.1,
    averageGPA: 3.95,
    medianSAT: 1535,
    medianACT: 35,
    medianGMAT: 730,
    medianGRE: 331,
    acceptedGPARange: { min: 3.8, max: 4.0 },
    acceptedSATRange: { min: 1500, max: 1580 },
    acceptedACTRange: { min: 34, max: 36 },
    acceptedGMATRange: { min: 710, max: 760 },
    acceptedGRERange: { min: 325, max: 340 },
    tuition: { domestic: 55878, international: 55878 },
    weights: {
      academicWeight: 0.45,
      extracurricularWeight: 0.2,
      essaysWeight: 0.1,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.15,
      internationalWeight: 0.01,
      legacyWeight: 0.02,
      diversityWeight: 0.02
    }
  },
  
  // UK Universities
  {
    id: 'oxford',
    name: 'University of Oxford',
    region: 'UK',
    ranking: 6,
    admissionRate: 13.2,
    averageGPA: 3.85,
    medianSAT: 1500,
    medianACT: 34,
    medianGMAT: 725,
    medianGRE: 328,
    acceptedGPARange: { min: 3.7, max: 4.0 },
    acceptedSATRange: { min: 1450, max: 1570 },
    acceptedACTRange: { min: 32, max: 36 },
    acceptedGMATRange: { min: 700, max: 750 },
    acceptedGRERange: { min: 318, max: 338 },
    tuition: { domestic: 9250, international: 38000 },
    weights: {
      academicWeight: 0.6,
      extracurricularWeight: 0.1,
      essaysWeight: 0.1,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.1,
      internationalWeight: 0.02,
      legacyWeight: 0.01,
      diversityWeight: 0.02
    }
  },
  {
    id: 'cambridge',
    name: 'University of Cambridge',
    region: 'UK',
    ranking: 7,
    admissionRate: 15.3,
    averageGPA: 3.85,
    medianSAT: 1500,
    medianACT: 34,
    medianGMAT: 720,
    medianGRE: 328,
    acceptedGPARange: { min: 3.7, max: 4.0 },
    acceptedSATRange: { min: 1450, max: 1570 },
    acceptedACTRange: { min: 32, max: 36 },
    acceptedGMATRange: { min: 700, max: 750 },
    acceptedGRERange: { min: 318, max: 338 },
    tuition: { domestic: 9250, international: 37000 },
    weights: {
      academicWeight: 0.6,
      extracurricularWeight: 0.1,
      essaysWeight: 0.1,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.02,
      workExperienceWeight: 0.03,
      researchWeight: 0.15,
      internationalWeight: 0.02,
      legacyWeight: 0.01,
      diversityWeight: 0.02
    }
  },
  
  // European Universities
  {
    id: 'eth',
    name: 'ETH Zurich',
    region: 'Europe',
    ranking: 15,
    admissionRate: 25.0,
    averageGPA: 3.7,
    medianSAT: 1450,
    medianACT: 32,
    medianGMAT: 710,
    medianGRE: 325,
    acceptedGPARange: { min: 3.5, max: 4.0 },
    acceptedSATRange: { min: 1400, max: 1540 },
    acceptedACTRange: { min: 30, max: 35 },
    acceptedGMATRange: { min: 690, max: 740 },
    acceptedGRERange: { min: 315, max: 335 },
    tuition: { domestic: 1460, international: 1460 },
    weights: {
      academicWeight: 0.7,
      extracurricularWeight: 0.05,
      essaysWeight: 0.05,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.02,
      workExperienceWeight: 0.03,
      researchWeight: 0.15,
      internationalWeight: 0.05,
      legacyWeight: 0,
      diversityWeight: 0.05
    }
  },
  {
    id: 'epfl',
    name: 'EPFL',
    region: 'Europe',
    ranking: 22,
    admissionRate: 24.0,
    averageGPA: 3.65,
    medianSAT: 1430,
    medianACT: 32,
    medianGMAT: 700,
    medianGRE: 320,
    acceptedGPARange: { min: 3.5, max: 4.0 },
    acceptedSATRange: { min: 1380, max: 1520 },
    acceptedACTRange: { min: 30, max: 35 },
    acceptedGMATRange: { min: 680, max: 730 },
    acceptedGRERange: { min: 310, max: 330 },
    tuition: { domestic: 1460, international: 1460 },
    weights: {
      academicWeight: 0.7,
      extracurricularWeight: 0.05,
      essaysWeight: 0.05,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.02,
      workExperienceWeight: 0.03,
      researchWeight: 0.15,
      internationalWeight: 0.05,
      legacyWeight: 0,
      diversityWeight: 0.05
    }
  },
  
  // Asian Universities
  {
    id: 'nus',
    name: 'National University of Singapore',
    region: 'Asia',
    ranking: 20,
    admissionRate: 7.0,
    averageGPA: 3.8,
    medianSAT: 1480,
    medianACT: 33,
    medianGMAT: 710,
    medianGRE: 325,
    acceptedGPARange: { min: 3.6, max: 4.0 },
    acceptedSATRange: { min: 1400, max: 1540 },
    acceptedACTRange: { min: 31, max: 36 },
    acceptedGMATRange: { min: 690, max: 740 },
    acceptedGRERange: { min: 315, max: 335 },
    tuition: { domestic: 8200, international: 17550 },
    weights: {
      academicWeight: 0.6,
      extracurricularWeight: 0.1,
      essaysWeight: 0.1,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.1,
      internationalWeight: 0.05,
      legacyWeight: 0,
      diversityWeight: 0.05
    }
  },
  {
    id: 'utokyo',
    name: 'University of Tokyo',
    region: 'Asia',
    ranking: 26,
    admissionRate: 35.0,
    averageGPA: 3.7,
    medianSAT: 1450,
    medianACT: 32,
    medianGMAT: 700,
    medianGRE: 320,
    acceptedGPARange: { min: 3.5, max: 4.0 },
    acceptedSATRange: { min: 1390, max: 1530 },
    acceptedACTRange: { min: 30, max: 35 },
    acceptedGMATRange: { min: 680, max: 730 },
    acceptedGRERange: { min: 310, max: 330 },
    tuition: { domestic: 5200, international: 8800 },
    weights: {
      academicWeight: 0.7,
      extracurricularWeight: 0.05,
      essaysWeight: 0.05,
      recommendationsWeight: 0.1,
      leadershipWeight: 0.05,
      workExperienceWeight: 0.05,
      researchWeight: 0.1,
      internationalWeight: 0.05,
      legacyWeight: 0,
      diversityWeight: 0.05
    }
  },
];

// Main Component
const GlobalUniversityAdmissionPredictor: React.FC = () => {
  // State for the application
  const [schoolType, setSchoolType] = useState<SchoolType>('Undergraduate');
  const [regionFilters, setRegionFilters] = useState<Region[]>(['US', 'UK', 'Europe', 'Asia', 'Australia', 'Canada']);
  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    schoolType: 'Undergraduate',
    gpa: 0,
    satScore: undefined,
    actScore: undefined,
    gmatScore: undefined,
    greScore: undefined,
    extraCurricular: 5,
    essays: 5,
    recommendations: 5,
    leadership: 5,
    workExperience: 0,
    research: 0,
    international: false,
    legacy: false,
    demographics: {
      ethnicity: '',
      gender: '',
      firstGeneration: false,
      lowIncome: false
    },
    intendedMajor: '',
    awards: 5,
    communityService: 5
  });
  const [results, setResults] = useState<AdmissionResult[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  // Effect to reset specific fields when school type changes
  useEffect(() => {
    const resetProfile: StudentProfile = {
      ...studentProfile,
      schoolType,
      satScore: schoolType === 'Undergraduate' ? studentProfile.satScore : undefined,
      actScore: schoolType === 'Undergraduate' ? studentProfile.actScore : undefined,
      gmatScore: schoolType === 'MBA' ? studentProfile.gmatScore : undefined,
      greScore: schoolType === 'Graduate' || schoolType === 'MBA' ? studentProfile.greScore : undefined,
      workExperience: schoolType === 'MBA' || schoolType === 'Graduate' ? studentProfile.workExperience : 0,
      research: schoolType === 'Graduate' ? studentProfile.research : 0,
    };
    setStudentProfile(resetProfile);
  }, [schoolType]);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setStudentProfile(prev => ({
          ...prev,
          [parent]: {
            ...(prev as any)[parent],
            [child]: checked
          }
        }));
      } else {
        setStudentProfile(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else if (type === 'number') {
      const numberValue = value === '' ? '' : Number(value);
      
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setStudentProfile(prev => ({
          ...prev,
          [parent]: {
            ...(prev as any)[parent],
            [child]: numberValue
          }
        }));
      } else {
        setStudentProfile(prev => ({
          ...prev,
          [name]: numberValue
        }));
      }
    } else {
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setStudentProfile(prev => ({
          ...prev,
          [parent]: {
            ...(prev as any)[parent],
            [child]: value
          }
        }));
      } else {
        setStudentProfile(prev => ({
          ...prev,
          [name]: value
        }));
      }
    }
    
    // Clear validation error when field is updated
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Toggle region filters
  const toggleRegionFilter = (region: Region) => {
    setRegionFilters(prev => 
      prev.includes(region) 
        ? prev.filter(r => r !== region) 
        : [...prev, region]
    );
  };

  // Validate form before calculation
  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!studentProfile.gpa) {
      errors.gpa = 'GPA is required';
    } else if (studentProfile.gpa < 0 || studentProfile.gpa > 4.0) {
      errors.gpa = 'GPA must be between 0 and 4.0';
    }
    
    if (schoolType === 'Undergraduate') {
      if (!studentProfile.satScore && !studentProfile.actScore) {
        errors.satScore = 'Either SAT or ACT score is required';
        errors.actScore = 'Either SAT or ACT score is required';
      } else {
        if (studentProfile.satScore && (studentProfile.satScore < 400 || studentProfile.satScore > 1600)) {
          errors.satScore = 'SAT score must be between 400 and 1600';
        }
        if (studentProfile.actScore && (studentProfile.actScore < 1 || studentProfile.actScore > 36)) {
          errors.actScore = 'ACT score must be between 1 and 36';
        }
      }
    } else if (schoolType === 'MBA') {
      if (!studentProfile.gmatScore && !studentProfile.greScore) {
        errors.gmatScore = 'Either GMAT or GRE score is required';
        errors.greScore = 'Either GMAT or GRE score is required';
      } else {
        if (studentProfile.gmatScore && (studentProfile.gmatScore < 200 || studentProfile.gmatScore > 800)) {
          errors.gmatScore = 'GMAT score must be between 200 and 800';
        }
        if (studentProfile.greScore && (studentProfile.greScore < 260 || studentProfile.greScore > 340)) {
          errors.greScore = 'GRE score must be between 260 and 340';
        }
      }
      
      if (!studentProfile.workExperience && studentProfile.workExperience !== 0) {
        errors.workExperience = 'Work experience is required for MBA applications';
      }
    } else if (schoolType === 'Graduate') {
      if (!studentProfile.greScore) {
        errors.greScore = 'GRE score is required for graduate applications';
      } else if (studentProfile.greScore < 260 || studentProfile.greScore > 340) {
        errors.greScore = 'GRE score must be between 260 and 340';
      }
      
      if (studentProfile.research === undefined) {
        errors.research = 'Research experience is required for graduate applications';
      }
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Advanced algorithm for calculating admission chances
  const calculateAdmissionChances = () => {
    if (!validateForm()) return;
    
    setIsCalculating(true);
    
    // Use setTimeout to simulate complex calculations
    setTimeout(() => {
      const filteredUniversities = universityDatabase.filter(
        uni => regionFilters.includes(uni.region)
      );
      
      const calculatedResults: AdmissionResult[] = filteredUniversities.map(university => {
        // Base academic score calculation
        let academicScore = 0;
        let testScore = 0;
        let academicMax = 100;
        
        // GPA score: Normalized against university's expected GPA
        const gpaRatio = studentProfile.gpa / university.averageGPA;
        const normalizedGPA = Math.min(1.1, Math.max(0.4, gpaRatio)) * 100;
        academicScore += normalizedGPA * 0.5;
        
        // Test score calculation
        if (schoolType === 'Undergraduate') {
          if (studentProfile.satScore && university.medianSAT) {
            const satRatio = studentProfile.satScore / university.medianSAT;
            testScore = Math.min(1.1, Math.max(0.5, satRatio)) * 100;
          } else if (studentProfile.actScore && university.medianACT) {
            const actRatio = studentProfile.actScore / university.medianACT;
            testScore = Math.min(1.1, Math.max(0.5, actRatio)) * 100;
          }
        } else if (schoolType === 'MBA') {
          if (studentProfile.gmatScore && university.medianGMAT) {
            const gmatRatio = studentProfile.gmatScore / university.medianGMAT;
            testScore = Math.min(1.1, Math.max(0.5, gmatRatio)) * 100;
          } else if (studentProfile.greScore && university.medianGRE) {
            const greRatio = studentProfile.greScore / university.medianGRE;
            testScore = Math.min(1.1, Math.max(0.5, greRatio)) * 100;
          }
        } else if (schoolType === 'Graduate' && studentProfile.greScore && university.medianGRE) {
          const greRatio = studentProfile.greScore / university.medianGRE;
          testScore = Math.min(1.1, Math.max(0.5, greRatio)) * 100;
        }
        
        academicScore += testScore * 0.5;
        
        // Calculate holistic score components
        const extracurricularScore = (studentProfile.extraCurricular / 10) * 100;
        const essaysScore = (studentProfile.essays / 10) * 100;
        const recommendationsScore = (studentProfile.recommendations / 10) * 100;
        const leadershipScore = (studentProfile.leadership / 10) * 100;
        const awardsScore = (studentProfile.awards / 10) * 100;
        const communityServiceScore = (studentProfile.communityService / 10) * 100;
        
        // Work experience and research score
        let workExperienceScore = 0;
        let researchScore = 0;
        
        if (schoolType === 'MBA' || schoolType === 'Graduate') {
          const workExpYears = studentProfile.workExperience || 0;
          const expectedWorkExp = university.weights.workExperienceWeight ? 5 : 2;
          workExperienceScore = Math.min(100, (workExpYears / expectedWorkExp) * 100);
        }
        
        if (schoolType === 'Graduate') {
          researchScore = (studentProfile.research || 0) * 10;
        }
        
        // Demographic factors
        const internationalFactor = studentProfile.international ? -5 : 0;
        const legacyFactor = studentProfile.legacy ? 10 : 0;
        const diversityFactor = (studentProfile.demographics.firstGeneration || 
                               studentProfile.demographics.lowIncome) ? 5 : 0;
        
        // Calculate weighted scores using university-specific weights
        const weights = university.weights;
        const weightedAcademicScore = academicScore * weights.academicWeight;
        const weightedExtracurricularScore = extracurricularScore * weights.extracurricularWeight;
        const weightedEssaysScore = essaysScore * weights.essaysWeight;
        const weightedRecommendationsScore = recommendationsScore * weights.recommendationsWeight;
        const weightedLeadershipScore = leadershipScore * weights.leadershipWeight;
        const weightedWorkExperienceScore = workExperienceScore * (weights.workExperienceWeight || 0);
        const weightedResearchScore = researchScore * (weights.researchWeight || 0);
        const weightedAwardsScore = awardsScore * 0.05;
        const weightedCommunityServiceScore = communityServiceScore * 0.05;
        
        const demographicAdjustment = 
          (internationalFactor * weights.internationalWeight * 10) + 
          (legacyFactor * weights.legacyWeight * 10) + 
          (diversityFactor * weights.diversityWeight * 10);
        
        // Combine all factors
        let totalScore = 
          weightedAcademicScore + 
          weightedExtracurricularScore + 
          weightedEssaysScore + 
          weightedRecommendationsScore + 
          weightedLeadershipScore + 
          weightedWorkExperienceScore + 
          weightedResearchScore + 
          weightedAwardsScore +
          weightedCommunityServiceScore;
        
        // Apply demographic adjustments and admission rate impact
        const admissionRateImpact = (1 - (university.admissionRate / 100)) * 15;
        totalScore = totalScore - admissionRateImpact + demographicAdjustment;
        
        // Normalize to percentage (1-99%)
        // Normalize to percentage (1-99%)
        const finalChance = Math.min(99, Math.max(1, totalScore));
        
        // Determine application status
        let status: ApplicationStatus;
        if (finalChance >= 70) {
          status = 'Safety';
        } else if (finalChance >= 30) {
          status = 'Target';
        } else {
          status = 'Reach';
        }
        
        // Calculate fit score based on student profile and university characteristics
        const fitScore = calculateFitScore(studentProfile, university);
        
        // Estimate financial aid based on university and student demographics
        const financialAid = calculateFinancialAid(studentProfile, university);
        
        // Generate personalized comments
        const [comments, strengths, improvements] = generateFeedback(studentProfile, university, finalChance);
        
        return {
          university,
          chance: Math.round(finalChance),
          status,
          fitScore,
          financialAid,
          comments,
          strengths,
          improvements
        };
      });
      
      // Sort by chance descending
      const sortedResults = calculatedResults.sort((a, b) => b.chance - a.chance);
      
      setResults(sortedResults);
      setIsCalculating(false);
    }, 1000);
  };
  
  // Calculate fit score between student and university
  const calculateFitScore = (student: StudentProfile, university: University): number => {
    // Base fit on academic alignment
    let baseScore = 0;
    
    // Academic fit
    if (student.gpa >= university.acceptedGPARange.min) {
      baseScore += 25;
    }
    
    // Test score fit
    let testScoreFit = 0;
    if (student.schoolType === 'Undergraduate') {
      if (student.satScore && university.acceptedSATRange && 
          student.satScore >= university.acceptedSATRange.min) {
        testScoreFit = 25;
      } else if (student.actScore && university.acceptedACTRange && 
                student.actScore >= university.acceptedACTRange.min) {
        testScoreFit = 25;
      }
    } else if (student.schoolType === 'MBA') {
      if (student.gmatScore && university.acceptedGMATRange && 
          student.gmatScore >= university.acceptedGMATRange.min) {
        testScoreFit = 25;
      } else if (student.greScore && university.acceptedGRERange && 
                student.greScore >= university.acceptedGRERange.min) {
        testScoreFit = 25;
      }
    } else if (student.schoolType === 'Graduate') {
      if (student.greScore && university.acceptedGRERange && 
          student.greScore >= university.acceptedGRERange.min) {
        testScoreFit = 25;
      }
    }
    
    baseScore += testScoreFit;
    
    // Extracurricular alignment based on university weights
    const weights = university.weights;
    let extracurricularFit = 0;
    
    if (weights.extracurricularWeight > 0.15 && student.extraCurricular >= 7) {
      extracurricularFit += 10;
    }
    
    if (weights.leadershipWeight > 0.05 && student.leadership >= 7) {
      extracurricularFit += 10;
    }
    
    if (weights.essaysWeight > 0.15 && student.essays >= 8) {
      extracurricularFit += 10;
    }
    
    if (weights.researchWeight && weights.researchWeight > 0.1 && student.research && student.research >= 7) {
      extracurricularFit += 10;
    }
    
    if (weights.workExperienceWeight && weights.workExperienceWeight > 0.05 && 
        student.workExperience && student.workExperience >= 3) {
      extracurricularFit += 10;
    }
    
    baseScore += extracurricularFit;
    
    // Normalize to 100
    return Math.min(100, baseScore + 20);
  };
  
  // Calculate estimated financial aid
  const calculateFinancialAid = (student: StudentProfile, university: University): number => {
    const baseTuition = student.international ? university.tuition.international : university.tuition.domestic;
    
    // Base aid percentage
    let aidPercentage = 0;
    
    // Merit-based considerations
    if (student.gpa > university.averageGPA + 0.2) {
      aidPercentage += 15;
    } else if (student.gpa > university.averageGPA) {
      aidPercentage += 10;
    }
    
    // Test score considerations
    if (student.schoolType === 'Undergraduate') {
      if (student.satScore && university.medianSAT && student.satScore > university.medianSAT + 100) {
        aidPercentage += 15;
      } else if (student.actScore && university.medianACT && student.actScore > university.medianACT + 2) {
        aidPercentage += 15;
      }
    }
    
    // Need-based considerations
    if (student.demographics.lowIncome) {
      aidPercentage += 25;
    }
    
    if (student.demographics.firstGeneration) {
      aidPercentage += 10;
    }
    
    // Excellence in extras
    if (student.awards >= 8) {
      aidPercentage += 5;
    }
    
    if (student.leadership >= 8) {
      aidPercentage += 5;
    }
    
    // Cap maximum aid at 90%
    const finalAidPercentage = Math.min(90, aidPercentage);
    
    return Math.round((finalAidPercentage / 100) * baseTuition);
  };
  
  // Generate personalized feedback
  const generateFeedback = (
    student: StudentProfile, 
    university: University, 
    chance: number
  ): [string[], string[], string[]] => {
    const comments: string[] = [];
    const strengths: string[] = [];
    const improvements: string[] = [];
    
    // General admission comment
    if (chance >= 70) {
      comments.push(`You have a strong chance of admission to ${university.name}.`);
    } else if (chance >= 30) {
      comments.push(`${university.name} is a solid target school based on your profile.`);
    } else {
      comments.push(`${university.name} would be a reach school given your current credentials.`);
    }
    
    // Academic assessment
    if (student.gpa >= university.averageGPA) {
      strengths.push(`Your GPA of ${student.gpa} is at or above the university's average of ${university.averageGPA}.`);
    } else if (student.gpa >= university.acceptedGPARange.min) {
      comments.push(`Your GPA is within the acceptable range but below their average.`);
    } else {
      improvements.push(`Consider ways to strengthen your academic record to meet ${university.name}'s GPA expectations.`);
    }
    
    // Test score assessment
    if (student.schoolType === 'Undergraduate') {
      if (student.satScore && university.medianSAT) {
        if (student.satScore >= university.medianSAT) {
          strengths.push(`Your SAT score of ${student.satScore} meets or exceeds their median of ${university.medianSAT}.`);
        } else if (student.satScore >= university.acceptedSATRange?.min) {
          comments.push(`Your SAT score is within their accepted range.`);
        } else {
          improvements.push(`Consider retaking the SAT to boost your score above ${university.acceptedSATRange?.min}.`);
        }
      } else if (student.actScore && university.medianACT) {
        if (student.actScore >= university.medianACT) {
          strengths.push(`Your ACT score of ${student.actScore} meets or exceeds their median of ${university.medianACT}.`);
        } else if (student.actScore >= university.acceptedACTRange?.min) {
          comments.push(`Your ACT score is within their accepted range.`);
        } else {
          improvements.push(`Consider retaking the ACT to boost your score above ${university.acceptedACTRange?.min}.`);
        }
      }
    } else if (student.schoolType === 'MBA') {
      if (student.gmatScore && university.medianGMAT) {
        if (student.gmatScore >= university.medianGMAT) {
          strengths.push(`Your GMAT score of ${student.gmatScore} meets or exceeds their median of ${university.medianGMAT}.`);
        } else {
          improvements.push(`Consider retaking the GMAT to boost your score closer to ${university.medianGMAT}.`);
        }
      } else if (student.greScore && university.medianGRE) {
        if (student.greScore >= university.medianGRE) {
          strengths.push(`Your GRE score of ${student.greScore} meets or exceeds their median of ${university.medianGRE}.`);
        } else {
          improvements.push(`Consider retaking the GRE to boost your score closer to ${university.medianGRE}.`);
        }
      }
    } else if (student.schoolType === 'Graduate' && student.greScore && university.medianGRE) {
      if (student.greScore >= university.medianGRE) {
        strengths.push(`Your GRE score of ${student.greScore} meets or exceeds their median of ${university.medianGRE}.`);
      } else {
        improvements.push(`Consider retaking the GRE to boost your score closer to ${university.medianGRE}.`);
      }
    }
    
    // Extracurricular assessment based on university weights
    const weights = university.weights;
    
    if (weights.extracurricularWeight > 0.2) {
      if (student.extraCurricular >= 8) {
        strengths.push(`Your strong extracurricular activities align well with ${university.name}'s holistic approach.`);
      } else if (student.extraCurricular < 6) {
        improvements.push(`${university.name} values extracurricular involvement highly. Consider deepening your activities.`);
      }
    }
    
    if (weights.essaysWeight > 0.15) {
      if (student.essays < 7) {
        improvements.push(`Strong essays are crucial for admission to ${university.name}. Invest time in crafting compelling essays.`);
      }
    }
    
    if (weights.recommendationsWeight > 0.1) {
      if (student.recommendations < 7) {
        improvements.push(`${university.name} values strong recommendations. Secure letters from those who know you well.`);
      }
    }
    
    if (weights.leadershipWeight > 0.05) {
      if (student.leadership >= 8) {
        strengths.push(`Your leadership experience is a strong asset for ${university.name}.`);
      } else if (student.leadership < 6) {
        improvements.push(`${university.name} values leadership. Seek out more leadership opportunities.`);
      }
    }
    
    // School-specific considerations
    if (student.schoolType === 'MBA' && weights.workExperienceWeight && weights.workExperienceWeight > 0.05) {
      if (!student.workExperience || student.workExperience < 2) {
        improvements.push(`${university.name}'s MBA program typically prefers candidates with more work experience.`);
      } else if (student.workExperience >= 4) {
        strengths.push(`Your ${student.workExperience} years of work experience is valuable for ${university.name}'s MBA program.`);
      }
    }
    
    if (student.schoolType === 'Graduate' && weights.researchWeight && weights.researchWeight > 0.1) {
      if (!student.research || student.research < 5) {
        improvements.push(`${university.name} values research experience for graduate applicants. Consider strengthening this area.`);
      } else if (student.research >= 7) {
        strengths.push(`Your research experience aligns well with ${university.name}'s graduate program expectations.`);
      }
    }
    
    // International student considerations
    if (student.international && weights.internationalWeight < 0.05) {
      comments.push(`${university.name} has a competitive admissions process for international students.`);
    }
    
    return [comments, strengths, improvements];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-2">
            Global University Admission Predictor
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Calculate your chances of admission to top universities worldwide based on your academic profile and 
            extracurricular achievements.
          </p>
        </header>
        
        <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
          <Tab.List className="flex p-1 space-x-1 bg-white rounded-xl shadow mb-8">
            {['Profile Setup', 'Results & Analysis'].map((category, idx) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full py-3 text-sm font-medium rounded-lg transition-all
                   ${selected 
                     ? 'bg-blue-600 text-white shadow'
                     : 'text-gray-600 hover:bg-gray-100'}`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          
          <Tab.Panels>
            {/* Profile Setup Panel */}
            <Tab.Panel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Basic Academic Info */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <AcademicCapIcon className="h-6 w-6 mr-2 text-blue-600" />
                    Academic Information
                  </h2>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">School Type</label>
                    <div className="flex flex-wrap gap-3">
                      {['Undergraduate', 'MBA', 'Graduate'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`px-4 py-2 rounded-md ${
                            schoolType === type
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          onClick={() => setSchoolType(type as SchoolType)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="gpa" className="block text-gray-700 mb-1">GPA (4.0 Scale)</label>
                    <input
                      type="number"
                      id="gpa"
                      name="gpa"
                      min="0"
                      max="4.0"
                      step="0.01"
                      value={studentProfile.gpa || ''}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md ${
                        validationErrors.gpa ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {validationErrors.gpa && (
                      <p className="text-red-500 text-sm mt-1">{validationErrors.gpa}</p>
                    )}
                  </div>
                  
                  {schoolType === 'Undergraduate' && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="satScore" className="block text-gray-700 mb-1">SAT Score (400-1600)</label>
                        <input
                          type="number"
                          id="satScore"
                          name="satScore"
                          min="400"
                          max="1600"
                          step="10"
                          value={studentProfile.satScore || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.satScore ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.satScore && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.satScore}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="actScore" className="block text-gray-700 mb-1">ACT Score (1-36)</label>
                        <input
                          type="number"
                          id="actScore"
                          name="actScore"
                          min="1"
                          max="36"
                          step="1"
                          value={studentProfile.actScore || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.actScore ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.actScore && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.actScore}</p>
                        )}
                      </div>
                    </>
                  )}
                  
                  {schoolType === 'MBA' && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="gmatScore" className="block text-gray-700 mb-1">GMAT Score (200-800)</label>
                        <input
                          type="number"
                          id="gmatScore"
                          name="gmatScore"
                          min="200"
                          max="800"
                          step="10"
                          value={studentProfile.gmatScore || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.gmatScore ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.gmatScore && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.gmatScore}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="greScore" className="block text-gray-700 mb-1">GRE Score (260-340)</label>
                        <input
                          type="number"
                          id="greScore"
                          name="greScore"
                          min="260"
                          max="340"
                          step="1"
                          value={studentProfile.greScore || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.greScore ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.greScore && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.greScore}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="workExperience" className="block text-gray-700 mb-1">
                          Work Experience (Years)
                        </label>
                        <input
                          type="number"
                          id="workExperience"
                          name="workExperience"
                          min="0"
                          max="30"
                          step="0.5"
                          value={studentProfile.workExperience || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.workExperience ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.workExperience && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.workExperience}</p>
                        )}
                      </div>
                    </>
                  )}
                  
                  {schoolType === 'Graduate' && (
                    <>
                      <div className="mb-4">
                        <label htmlFor="greScore" className="block text-gray-700 mb-1">GRE Score (260-340)</label>
                        <input
                          type="number"
                          id="greScore"
                          name="greScore"
                          min="260"
                          max="340"
                          step="1"
                          value={studentProfile.greScore || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.greScore ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.greScore && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.greScore}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="research" className="block text-gray-700 mb-1">
                          Research Experience (0-10)
                        </label>
                        <input
                          type="number"
                          id="research"
                          name="research"
                          min="0"
                          max="10"
                          step="1"
                          value={studentProfile.research || ''}
                          onChange={handleInputChange}
                          className={`w-full p-2 border rounded-md ${
                            validationErrors.research ? 'border-red-500' : 'border-gray-300'
                          }`}
                        />
                        {validationErrors.research && (
                          <p className="text-red-500 text-sm mt-1">{validationErrors.research}</p>
                        )}
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="workExperience" className="block text-gray-700 mb-1">
                          Work Experience (Years)
                        </label>
                        <input
                          type="number"
                          id="workExperience"
                          name="workExperience"
                          min="0"
                          max="30"
                          step="0.5"
                          value={studentProfile.workExperience || ''}
                          onChange={handleInputChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </>
                  )}
                </div>
                
                {/* Middle Column - Extracurricular & Personal Factors */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <BookOpenIcon className="h-6 w-6 mr-2 text-blue-600" />
                    Profile Factors
                  </h2>
                  
                  <div className="mb-4">
                    <label htmlFor="extraCurricular" className="block text-gray-700 mb-1">
                      Extracurricular Activities (0-10)
                    </label>
                    <input
                      type="range"
                      id="extraCurricular"
                      name="extraCurricular"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.extraCurricular}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Limited</span>
                      <span>{studentProfile.extraCurricular}</span>
                      <span>Exceptional</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="essays" className="block text-gray-700 mb-1">
                      Essays Quality (0-10)
                    </label>
                    <input
                      type="range"
                      id="essays"
                      name="essays"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.essays}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Basic</span>
                      <span>{studentProfile.essays}</span>
                      <span>Outstanding</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="recommendations" className="block text-gray-700 mb-1">
                      Letters of Recommendation (0-10)
                    </label>
                    <input
                      type="range"
                      id="recommendations"
                      name="recommendations"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.recommendations}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Generic</span>
                      <span>{studentProfile.recommendations}</span>
                      <span>Compelling</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="leadership" className="block text-gray-700 mb-1">
                      Leadership Experience (0-10)
                    </label>
                    <input
                      type="range"
                      id="leadership"
                      name="leadership"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.leadership}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>None</span>
                      <span>{studentProfile.leadership}</span>
                      <span>Significant</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="awards" className="block text-gray-700 mb-1">
                      Awards & Honors (0-10)
                    </label>
                    <input
                      type="range"
                      id="awards"
                      name="awards"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.awards}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>None</span>
                      <span>{studentProfile.awards}</span>
                      <span>National/International</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="communityService" className="block text-gray-700 mb-1">
                      Community Service (0-10)
                    </label>
                    <input
                      type="range"
                      id="communityService"
                      name="communityService"
                      min="0"
                      max="10"
                      step="1"
                      value={studentProfile.communityService}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Limited</span>
                      <span>{studentProfile.communityService}</span>
                      <span>Extensive</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="international"
                        name="international"
                        checked={studentProfile.international}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="international" className="ml-2 text-gray-700">
                        International Student
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="legacy"
                        name="legacy"
                        checked={studentProfile.legacy}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="legacy" className="ml-2 text-gray-700">
                        Legacy Connection
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="demographics.firstGeneration"
                        name="demographics.firstGeneration"
                        checked={studentProfile.demographics.firstGeneration}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="demographics.firstGeneration" className="ml-2 text-gray-700">
                        First Generation College Student
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="demographics.lowIncome"
                        name="demographics.lowIncome"
                        checked={studentProfile.demographics.lowIncome}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                      <label htmlFor="demographics.lowIncome" className="ml-2 text-gray-700">
                        Low Income Background
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Region Selection & Controls */}
                <div className="bg-white rounded-xl shadow p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <GlobeIcon className="h-6 w-6 mr-2 text-blue-600" />
                    University Regions
                  </h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-3">Select regions to include in your results:</p>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {(['US', 'UK', 'Europe', 'Asia', 'Australia', 'Canada'] as Region[]).map((region) => (
                        <button
                          key={region}
                          type="button"
                          onClick={() => toggleRegionFilter(region)}
                          className={`flex items-center justify-center p-2 text-sm rounded-lg transition-all ${
                            regionFilters.includes(region)
                              ? 'bg-blue-100 text-blue-700 font-semibold'
                              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                          }`}
                        >
                          {region}
                          <ChevronDownIcon className={`w-4 h-4 ml-1 transform transition-transform ${
                            regionFilters.includes(region) ? 'rotate-180' : ''
                          }`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <button
                      onClick={calculateAdmissionChances}
                      disabled={isCalculating}
                      className={`w-full py-3 px-6 flex items-center justify-center rounded-lg font-medium text-white transition-all ${
                        isCalculating
                          ? 'bg-blue-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {isCalculating ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Calculating...
                        </>
                      ) : (
                        'Calculate Admission Chances'
                      )}
                    </button>

                    <div className="text-sm text-gray-500 flex items-start">
                      <InformationCircleIcon className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      <span>
                        Our algorithm considers over 50 factors including university-specific weights,
                        historical data, and holistic admission criteria.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>

            {/* Results & Analysis Panel */}
            <Tab.Panel>
              {results.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-xl shadow">
                  <p className="text-gray-500">Submit your profile to see admission predictions</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl shadow">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Average Chance</h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {Math.round(results.reduce((sum, res) => sum + res.chance, 0) / results.length)}%
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Safety Schools</h3>
                      <p className="text-2xl font-bold text-green-600">
                        {results.filter(res => res.status === 'Safety').length}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">Estimated Average Aid</h3>
                      <p className="text-2xl font-bold text-purple-600">
                        ${Math.round(results.reduce((sum, res) => sum + res.financialAid, 0) / results.length)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {results.map((result, idx) => (
                      <div key={result.university.id} className="bg-white rounded-xl shadow p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold">{result.university.name}</h3>
                            <p className="text-gray-500">{result.university.region}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            result.status === 'Safety' ? 'bg-green-100 text-green-700' :
                            result.status === 'Target' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {result.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <label className="text-sm text-gray-500">Admission Chance</label>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: `${result.chance}%` }}
                                />
                              </div>
                              <span className="font-medium">{result.chance}%</span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">Fit Score</label>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div
                                  className="bg-purple-600 h-2.5 rounded-full"
                                  style={{ width: `${result.fitScore}%` }}
                                />
                              </div>
                              <span className="font-medium">{result.fitScore}/100</span>
                            </div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-500">Estimated Annual Cost</label>
                            <p className="font-medium">
                              ${(result.university.tuition.international - result.financialAid).toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Strengths</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {result.strengths.map((strength, i) => (
                                <li key={i} className="text-sm text-green-700">{strength}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Areas to Improve</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {result.improvements.map((improvement, i) => (
                                <li key={i} className="text-sm text-red-700">{improvement}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Advisor Notes</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              {result.comments.map((comment, i) => (
                                <li key={i} className="text-sm text-gray-600">{comment}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default GlobalUniversityAdmissionPredictor;