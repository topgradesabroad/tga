'use client'

import { useState, useEffect } from 'react'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'universities', label: 'Universities' },
  { id: 'costs', label: 'Study Costs' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'process', label: 'Process' },
  { id: 'student-life', label: 'Student Life' },
  { id: 'faq', label: 'FAQ' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('overview')
  const headerOffset = 150 // adjust this value to match your fixed header height

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Check if the element's top is within a threshold of the header offset
          if (rect.top <= headerOffset && rect.bottom >= headerOffset) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll with offset
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="sticky top-20 z-30 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 overflow-x-auto py-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
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
