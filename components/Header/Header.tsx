// components/layout/Header.tsx (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import { ClientSideNav } from './ClientSideNav';

// Country data with flags
const countries = [
  { name: 'USA', flag: '/flags/usa.svg', href: '/countries/usa' },
  { name: 'UK', flag: '/flags/uk.svg', href: '/countries/uk' },
  { name: 'Canada', flag: '/flags/canada.svg', href: '/countries/canada' },
  { name: 'Australia', flag: '/flags/australia.svg', href: '/countries/australia' },
  { name: 'New Zealand', flag: '/flags/new-zealand.svg', href: '/countries/new-zealand' },
  { name: 'Germany', flag: '/flags/germany.svg', href: '/countries/germany' },
];

// Main navigation items
const navItems = [
  { name: 'Countries', href: '/countries', hasDropdown: true },
  { name: 'Courses', href: '/courses', hasDropdown: false },
  { name: 'Blog', href: '/blog', hasDropdown: false },
  { name: 'Resources', href: '/resources', hasDropdown: false },
];

export default async function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white font-['DM_Sans'] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home" title="Study Abroad Consultancy">
              <Image 
                src="/Logo/logo.svg" 
                alt="Study Abroad Consultancy Logo" 
                width={130} 
                height={30} 
                priority
              />
            </Link>
          </div>
          
          
          {/* Desktop and Mobile Navigation - Client Component */}
          <ClientSideNav navItems={navItems} countries={countries} />
          
          
        </div>
      </div>
    </header>
  );
}