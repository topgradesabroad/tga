// components/ivy/types.ts
export type IvyFlowData = {
    // User's choice of flow: "ivy" for Ivy League, "aplus" for A+ Universities, or "other"
    preference: "ivy" | "aplus" | "other" | "";
    // For Ivy League flow: stores the selected Ivy League universities
    selectedIvy: string[];
    // For A+ flow: stores the selected A+ universities
    selectedAPlus: string[];
    // For both Ivy and A+ flows: collects personal details of the user
    personalDetails: {
      name: string;
      email: string;
      phone: string;
      admissionType: string;
      course: string;
    };
    // For Other flow: collects personal details and the user's country preference
    otherDetails: {
      name: string;
      email: string;
      phone: string;
      countryPreference: string;
    };
    // Appointment details for scheduling consultation
    appointment: {
      date: string;
      time: string;
    };
  };
  