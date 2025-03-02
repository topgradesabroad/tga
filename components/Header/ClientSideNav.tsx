'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { EnquiryForm } from './EnquiryForm';

// Define types for the component props
interface Country {
  name: string;
  href: string;
  flag: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

interface ClientSideNavProps {
  navItems: NavItem[];
  countries: Country[];
}

export function ClientSideNav({ navItems, countries }: ClientSideNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const pathname = usePathname();
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.hasDropdown ? (
              <>
                <button
                  className={`inline-flex items-center px-1 pt-1 text-md font-medium ${
                    pathname?.startsWith(item.href)
                      ? 'text-black border-b-2'
                      : 'text-black hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-300'
                  }`}
                  onMouseEnter={() => setShowCountryDropdown(true)}
                  onMouseLeave={() => setTimeout(() => setShowCountryDropdown(false), 300)}
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  aria-expanded={showCountryDropdown}
                >
                  {item.name}
                  <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Country Dropdown */}
                {showCountryDropdown && (
                  <div
                    className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseEnter={() => setShowCountryDropdown(true)}
                    onMouseLeave={() => setTimeout(() => setShowCountryDropdown(false), 300)}
                  >
                    {countries.map((country) => (
                      <Link key={country.name} href={country.href}>
                        <div className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 cursor-pointer">
                          <div className="w-6 h-4 mr-3 relative flex-shrink-0">
                            <Image
                              src={country.flag}
                              alt={`${country.name} flag`}
                              fill
                              sizes="26px"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <span>{country.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} className={`inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium ${
                pathname?.startsWith(item.href)
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-black hover:text-indigo-600 hover:border-indigo-300'
              }`}>
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
      
      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Journey Button (Desktop only) */}
      <div className="hidden md:block">
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 text-base border border-transparent font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start Your Journey
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-40" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${
                        pathname?.startsWith(item.href)
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                      }`}
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                    >
                      {item.name}
                      <svg className={`ml-2 h-5 w-5 transition-transform duration-200 ${showCountryDropdown ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {showCountryDropdown && (
                      <div className="mt-2 space-y-1 pl-4">
                        {countries.map((country) => (
                          <Link key={country.name} href={country.href}>
                            <div className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 rounded-md cursor-pointer">
                              <div className="w-6 h-4 mr-3 relative flex-shrink-0">
                                <Image
                                  src={country.flag}
                                  alt={`${country.name} flag`}
                                  fill
                                  sizes="24px"
                                  style={{ objectFit: 'cover' }}
                                />
                              </div>
                              <span>{country.name}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href}>
                    <div
                      className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                        pathname?.startsWith(item.href)
                          ? 'bg-indigo-50 text-indigo-700'
                          : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-700'
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Journey Button inside mobile menu */}
            <div className="pt-2 px-3">
              <button
                onClick={() => setShowForm(true)}
                className="w-full flex justify-center items-center px-4 py-3 border border-transparent font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Enquiry Form Popup */}
      {showForm && <EnquiryForm onClose={() => setShowForm(false)} />}
    </>
  );
}

// Make sure EnquiryForm component is exported in its file
// components/layout/EnquiryForm.tsx
/*
export function EnquiryForm({ onClose }: { onClose: () => void }) {
  // Your form implementation
  return (
    // Form content
  );
}
*/