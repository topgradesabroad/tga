// components/layout/Header.tsx (Server Component)
import Link from 'next/link';
import Image from 'next/image';
import { ClientSideNav } from './ClientSideNav';

// Country data with flags
const countries = [
  { name: 'USA', flag: '/Flags/us.png', href: '/countries/usa' },
  { name: 'UK', flag: '/Flags/uk.png', href: '/countries/uk' },
  { name: 'Canada', flag: '/Flags/ca.png', href: '/countries/canada' },
  { name: 'Australia', flag: '/Flags/au.png', href: '/countries/australia' },
  { name: 'New Zealand', flag: '/Flags/nz.png', href: '/countries/new-zealand' },
  { name: 'Germany', flag: '/Flags/ge.png', href: '/countries/germany' },
  { name: 'France', flag: '/Flags/fr.svg', href: '/countries/france' },
];

// Main navigation items
const navItems = [
  { name: 'Countries', href: '/countries', hasDropdown: true },
  { name: 'Ivy League Applications', href: '/ivy-league-applications', hasDropdown: false },
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