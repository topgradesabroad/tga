'use client';
import React, { useState, useEffect } from 'react';
import {
  predictAdmission,
  ProgramType,
  StrengthLevel,
  PredictionResult,
} from './IvyData';
import { 
  GraduationCap, 
  Briefcase, 
  ChevronRight, 
  Medal, 
  Award, 
  LucideIcon, 
  BookOpen, 
  Users, 
  DollarSign, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  X, 
  Star, 
  BarChart, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

type Tab = 'profile' | 'results';

const AdmissionsPredictor: React.FC = () => {
  // Multi-step form state
  const [step, setStep] = useState<number>(1);
  const [programType, setProgramType] = useState<ProgramType>('undergraduate');

  // Step 1 fields
  const [gpa, setGpa] = useState<number>(3.8);
  const [testScore, setTestScore] = useState<number>(1450);
  const [essaysStrength, setEssaysStrength] = useState<StrengthLevel>(4);
  const [recommendationStrength, setRecommendationStrength] = useState<StrengthLevel>(4);

  // Step 2 fields
  const [leadershipRoles, setLeadershipRoles] = useState<number>(1);
  const [researchExperience, setResearchExperience] = useState<boolean>(false);
  const [extracurriculars, setExtracurriculars] = useState<string[]>(['Debate Club', 'Volunteer Work']);
  const [newExtracurricular, setNewExtracurricular] = useState<string>('');
  const [workExperience, setWorkExperience] = useState<number>(3);
  const [awards, setAwards] = useState<string[]>(['Honor Roll']);
  const [newAward, setNewAward] = useState<string>('');

  // Results and UI state
  const [results, setResults] = useState<PredictionResult[]>([]);
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [expandedUniversity, setExpandedUniversity] = useState<number | null>(null);
  const [selectedUniversity, setSelectedUniversity] = useState<PredictionResult | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handlers
  const handleProgramChange = (type: ProgramType) => {
    setProgramType(type);
  };

  const handleAddExtracurricular = () => {
    if (newExtracurricular.trim() && extracurriculars.length < 10) {
      setExtracurriculars([...extracurriculars, newExtracurricular.trim()]);
      setNewExtracurricular('');
    }
  };

  const handleRemoveExtracurricular = (index: number) => {
    const updated = [...extracurriculars];
    updated.splice(index, 1);
    setExtracurriculars(updated);
  };

  const handleAddAward = () => {
    if (newAward.trim() && awards.length < 5) {
      setAwards([...awards, newAward.trim()]);
      setNewAward('');
    }
  };

  const handleRemoveAward = (index: number) => {
    const updated = [...awards];
    updated.splice(index, 1);
    setAwards(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = {
      programType,
      GPA: gpa,
      testScore,
      extracurriculars,
      workExperience,
      essaysStrength,
      recommendationStrength,
      leadershipRoles,
      researchExperience,
      awards
    };
    const predictionResults = predictAdmission(input);
    setResults(predictionResults);
    setActiveTab('results');
  };

  const handleReset = () => {
    setStep(1);
    setProgramType('undergraduate');
    setGpa(3.8);
    setTestScore(1450);
    setEssaysStrength(4);
    setRecommendationStrength(4);
    setLeadershipRoles(1);
    setResearchExperience(false);
    setExtracurriculars(['Debate Club', 'Volunteer Work']);
    setWorkExperience(3);
    setAwards(['Honor Roll']);
    setActiveTab('profile');
    setExpandedUniversity(null);
    setSelectedUniversity(null);
  };

  // Helper rendering functions
  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-2">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          step === 1 ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
        }`}>
          1
        </div>
        <div className={`w-16 h-1 ${step === 1 ? 'bg-gray-300' : 'bg-purple-600'}`}></div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
          step === 2 ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600'
        }`}>
          2
        </div>
      </div>
    </div>
  );

  const getAdmissionChanceColor = (probability: number) => {
    if (probability >= 75) return { bg: 'bg-emerald-100', text: 'text-emerald-800', icon: <CheckCircle size={16} className="text-emerald-500" /> };
    if (probability >= 50) return { bg: 'bg-amber-100', text: 'text-amber-800', icon: <AlertTriangle size={16} className="text-amber-500" /> };
    return { bg: 'bg-rose-100', text: 'text-rose-800', icon: <AlertTriangle size={16} className="text-rose-500" /> };
  };

  const UniversityDetails = ({ result }: { result: PredictionResult }) => (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-3 bg-purple-50 rounded-lg flex items-center">
          <Users size={18} className="text-purple-600 mr-2" />
          <div>
            <p className="text-gray-600 text-xs">Acceptance Rate</p>
            <p className="font-semibold text-purple-700">{result.university.acceptanceRate}%</p>
          </div>
        </div>
        <div className="p-3 bg-rose-50 rounded-lg flex items-center">
          <TrendingUp size={18} className="text-rose-600 mr-2" />
          <div>
            <p className="text-gray-600 text-xs">QS Ranking</p>
            <p className="font-semibold text-rose-700">#{result.university.QSRanking}</p>
          </div>
        </div>
        <div className="p-3 bg-purple-50 rounded-lg flex items-center">
          <DollarSign size={18} className="text-purple-600 mr-2" />
          <div>
            <p className="text-gray-600 text-xs">Avg. Salary</p>
            <p className="font-semibold text-purple-700">${result.university.averageSalary.toLocaleString()}</p>
          </div>
        </div>
        <div className="p-3 bg-rose-50 rounded-lg flex items-center">
          <Users size={18} className="text-rose-600 mr-2" />
          <div>
            <p className="text-gray-600 text-xs">Student-Faculty</p>
            <p className="font-semibold text-rose-700">{result.university.studentFacultyRatio}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center">
          <Star size={16} className="text-purple-600 mr-2" />
          <h4 className="font-semibold text-purple-800">Strengths</h4>
        </div>
        <ul className="space-y-2">
          {result.strengthsAnalysis.positive_points.map((point, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <CheckCircle size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex items-center">
          <BarChart size={16} className="text-rose-600 mr-2" />
          <h4 className="font-semibold text-rose-800">Improvement Areas</h4>
        </div>
        <ul className="space-y-2">
          {result.strengthsAnalysis.improvement_areas.map((area, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <AlertTriangle size={16} className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-r from-purple-50/80 to-rose-50/80 p-4 rounded-xl border border-purple-100">
        <div className="flex items-center mb-2">
          <BookOpen size={16} className="text-purple-600 mr-2" />
          <h4 className="font-semibold text-gray-800">Counselor's Note</h4>
        </div>
        <p className="text-gray-600 italic">{result.counselorNote}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">Component</th>
              <th className="p-2 text-center">Your Value</th>
              <th className="p-2 text-center">Ideal</th>
              <th className="p-2 text-center">Weight</th>
            </tr>
          </thead>
          <tbody>
            {result.components.map((comp, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="p-2 font-medium">{comp.name}</td>
                <td className="p-2 text-center">{comp.rawValue}</td>
                <td className="p-2 text-center">{comp.idealValue}</td>
                <td className="p-2 text-center">{(comp.weight * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => handleProgramChange('undergraduate')}
          className={`flex items-center px-5 py-2.5 rounded-lg transition-all ${
            programType === 'undergraduate'
              ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold shadow-md'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-purple-300'
          }`}
        >
          <GraduationCap size={18} className={programType === 'undergraduate' ? 'text-white mr-2' : 'text-purple-600 mr-2'} />
          Undergraduate
        </button>
        <button
          onClick={() => handleProgramChange('mba')}
          className={`flex items-center px-5 py-2.5 rounded-lg transition-all ${
            programType === 'mba'
              ? 'bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-md font-bold'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-rose-300'
          }`}
        >
          <Briefcase size={18} className={programType === 'mba' ? 'text-white mr-2' : 'text-rose-600 mr-2'} />
          MBA
        </button>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-4 text-center font-semibold transition-colors ${
              activeTab === 'profile'
                ? 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 border-b-2 border-purple-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Application Profile
          </button>
          <button
            onClick={() => setActiveTab('results')}
            className={`flex-1 py-4 text-center font-semibold transition-colors ${
              activeTab === 'results'
                ? 'bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 border-b-2 border-rose-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Results
          </button>
        </div>

        <div className="p-4 md:p-6">
          {activeTab === 'profile' && (
            <>
              {renderStepIndicator()}
              
              {step === 1 && (
                <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-6 max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">GPA</label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            max="4.0"
                            step="0.1"
                            value={gpa}
                            onChange={(e) => setGpa(parseFloat(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 pl-10"
                          />
                          <GraduationCap size={18} className="absolute left-3 top-3.5 text-purple-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {programType === 'undergraduate' ? 'SAT Score' : 'GMAT Score'}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min={programType === 'undergraduate' ? 400 : 200}
                            max={programType === 'undergraduate' ? 1600 : 800}
                            value={testScore}
                            onChange={(e) => setTestScore(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 pl-10"
                          />
                          <BookOpen size={18} className="absolute left-3 top-3.5 text-purple-500" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Essay Strength</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <button
                              key={level}
                              type="button"
                              onClick={() => setEssaysStrength(level as StrengthLevel)}
                              className={`flex-1 py-2 rounded-md transition-colors ${
                                essaysStrength === level
                                  ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Recommendation Strength</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <button
                              key={level}
                              type="button"
                              onClick={() => setRecommendationStrength(level as StrengthLevel)}
                              className={`flex-1 py-2 rounded-md transition-colors ${
                                recommendationStrength === level
                                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center"
                    >
                      Continue <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Leadership Roles</label>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          value={leadershipRoles}
                          onChange={(e) => setLeadershipRoles(Number(e.target.value))}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 pl-10"
                        />
                        <Users size={18} className="absolute left-3 top-3.5 text-purple-500" />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={researchExperience}
                          onChange={(e) => setResearchExperience(e.target.checked)}
                          className="h-5 w-5 text-rose-600 rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">Research Experience</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <BookOpen size={16} className="mr-2 text-purple-600" />
                      Extracurricular Activities
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newExtracurricular}
                        onChange={(e) => setNewExtracurricular(e.target.value)}
                        placeholder="Add activity"
                        className="flex-1 p-3 border border-gray-300 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAddExtracurricular}
                        disabled={extracurriculars.length >= 10}
                        className="px-4 py-3 bg-purple-600 text-white rounded-lg disabled:bg-gray-400 hover:bg-purple-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {extracurriculars.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-purple-50 rounded-lg border border-purple-100">
                          <span className="text-sm text-gray-700">{activity}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveExtracurricular(index)}
                            className="text-rose-600 hover:text-rose-700 p-1 hover:bg-rose-100 rounded-full transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                      <Award size={16} className="mr-2 text-rose-600" />
                      Awards & Honors
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={newAward}
                        onChange={(e) => setNewAward(e.target.value)}
                        placeholder="Add award"
                        className="flex-1 p-3 border border-gray-300 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAddAward}
                        disabled={awards.length >= 5}
                        className="px-4 py-3 bg-rose-600 text-white rounded-lg disabled:bg-gray-400 hover:bg-rose-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {awards.map((award, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-rose-50 rounded-lg border border-rose-100">
                          <span className="text-sm text-gray-700">{award}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveAward(index)}
                            className="text-rose-600 hover:text-rose-700 p-1 hover:bg-rose-100 rounded-full transition-colors"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
                    >
                      <ChevronRight size={16} className="mr-1 transform rotate-180" /> Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center"
                    >
                      Get Predictions <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

          {activeTab === 'results' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-600 to-rose-600 text-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-2 flex items-center">
                  <Medal size={20} className="mr-2" /> Admission Predictions
                </h2>
                <p className="opacity-90">Based on analysis of 50,000+ historical applications</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((result) => {
                  const chanceStyle = getAdmissionChanceColor(result.admissionProbability);
                  return (
                    <div 
                      key={result.university.id} 
                      className="bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900">{result.university.name}</h3>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full flex items-center ${chanceStyle.bg} ${chanceStyle.text}`}>
                                {chanceStyle.icon}
                                <span className="ml-1">
                                  {result.admissionProbability >= 75 ? 'High Chance' : 
                                  result.admissionProbability >= 50 ? 'Moderate' : 'Reach'}
                                </span>
                              </span>
                            </div>
                          </div>
                          <div 
                            className={`text-xl font-bold ${
                              result.admissionProbability >= 80 ? 'text-emerald-600' : 
                              result.admissionProbability >= 50 ? 'text-amber-500' : 'text-rose-600'
                            }`}
                          >
                            {result.chanceOfAdmission}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-3">
                          <div className="flex items-center text-xs text-gray-600">
                            <Users size={14} className="mr-1" />
                            <span>{result.university.acceptanceRate}% accept</span>
                          </div>
                          <div className="flex items-center text-xs text-gray-600">
                            <TrendingUp size={14} className="mr-1" />
                            <span>#{result.university.QSRanking}</span>
                          </div>
                        </div>
                        
                        <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                          <button
                            onClick={() => isMobile 
                              ? setExpandedUniversity(prev => 
                                  prev === result.university.id ? null : result.university.id)
                              : setSelectedUniversity(result)}
                            className={`text-sm flex items-center ${
                              result.admissionProbability >= 80 ? 'text-emerald-600 hover:text-emerald-700' : 
                              result.admissionProbability >= 50 ? 'text-amber-600 hover:text-amber-700' : 
                              'text-purple-600 hover:text-purple-700'
                            }`}
                          >
                            {isMobile 
                              ? expandedUniversity === result.university.id 
                                ? <>Hide Details <ChevronUp size={14} className="ml-1" /></>
                                : <>View Details <ChevronDown size={14} className="ml-1" /></>
                              : <>View Analysis <ChevronRight size={14} className="ml-1" /></>
                            }
                          </button>
                          
                          <div className="text-xs text-gray-500 flex items-center">
                            <DollarSign size={14} className="mr-1" />
                            {(result.university.averageSalary / 1000).toFixed(0)}K
                          </div>
                        </div>
                      </div>

                      {isMobile && expandedUniversity === result.university.id && (
                        <div className="px-4 pb-4 border-t border-gray-100 pt-4 bg-gray-50">
                          <UniversityDetails result={result} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!isMobile && selectedUniversity && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity">
                  <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
                    <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
                      <div>
                        <h3 className="text-xl font-bold">{selectedUniversity.university.name}</h3>
                        <div className={`text-sm ${
                          selectedUniversity.admissionProbability >= 75 ? 'text-emerald-600' : 
                          selectedUniversity.admissionProbability >= 50 ? 'text-amber-600' : 'text-rose-600'
                        }`}>
                          {selectedUniversity.chanceOfAdmission} chance of admission
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedUniversity(null)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X size={20} className="text-gray-600" />
                      </button>
                    </div>
                    <div className="p-6">
                      <UniversityDetails result={selectedUniversity} />
                    </div>
                    <div className="bg-gray-50 p-4 border-t flex justify-end">
                      <button
                        onClick={() => setSelectedUniversity(null)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors text-gray-800"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                >
                  Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPredictor;