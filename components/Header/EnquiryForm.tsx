// components/layout/EnquiryForm.tsx
'use client'

import { useState, ChangeEvent, FormEvent } from 'react';

// Define types for the component props
interface EnquiryFormProps {
  onClose: () => void;
}

// Define type for the country object
interface Country {
  name: string;
  flag: string;
  href: string;
}

// Sample country data (should match the data used in ClientSideNav)
const countries: Country[] = [
  { name: 'USA', flag: '/flags/usa.svg', href: '/countries/usa' },
  { name: 'UK', flag: '/flags/uk.svg', href: '/countries/uk' },
  { name: 'Canada', flag: '/flags/canada.svg', href: '/countries/canada' },
  { name: 'Australia', flag: '/flags/australia.svg', href: '/countries/australia' },
  { name: 'New Zealand', flag: '/flags/new-zealand.svg', href: '/countries/new-zealand' },
  { name: 'Germany', flag: '/flags/germany.svg', href: '/countries/germany' },
];

// Define form data type
interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
}

export function EnquiryForm({ onClose }: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Close the form after submission
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-transparent backdrop-brightness-30  z-50 flex items-center justify-center p-4">
      <div className="bg-gray-100 rounded-lg shadow-xl w-full max-w-md p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-indigo-600"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Start Your Journey</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Interested Country</label>
            <select 
              id="country" 
              name="country"
              value={formData.country}
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.name} value={country.name}>{country.name}</option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
}