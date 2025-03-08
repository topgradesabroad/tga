'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'universities', label: 'Universities' },
  { id: 'costs', label: 'Study Costs' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Process' },
  { id: 'student-life', label: 'Student Life' },
  { id: 'career', label: 'Career' },
  { id: 'faq', label: 'FAQ' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="sticky top-20 z-30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 overflow-x-auto py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`
                whitespace-nowrap py-3 px-6 rounded-lg font-medium text-base
                transition-all duration-200 ease-in-out
                ${activeSection === item.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}