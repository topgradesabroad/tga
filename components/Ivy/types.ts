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

export interface IvyEmailPayload {
  name: string;
  email: string;
  mobileNumber: string;
  universityPreferences: string;
  currentEducation: string;
  courseInterest: string;
}

const handleSubmit = async (e: React.FormEvent, formData: IvyFlowData, setFormData: React.Dispatch<React.SetStateAction<IvyFlowData>>) => {
  e.preventDefault();
  
  try {
    // Use the existing type structure for the email submission
    const emailPayload: IvyEmailPayload = {
      name: formData.personalDetails.name,
      email: formData.personalDetails.email,
      mobileNumber: formData.personalDetails.phone,
      universityPreferences: formData.selectedIvy.join(', '), // Convert array to string
      currentEducation: formData.personalDetails.admissionType,
      courseInterest: formData.personalDetails.course
    };

    const emailResponse = await fetch('/api/ivyform', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload)
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }

    // Show success message
    alert('Form submitted successfully! We will contact you soon.');
    
    // Reset form using the IvyFlowData type structure
    setFormData({
      preference: "",
      selectedIvy: [],
      selectedAPlus: [],
      personalDetails: {
        name: "",
        email: "",
        phone: "",
        admissionType: "",
        course: ""
      },
      otherDetails: {
        name: "",
        email: "",
        phone: "",
        countryPreference: ""
      },
      appointment: {
        date: "",
        time: ""
      }
    });

  } catch (error) {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  }
};
