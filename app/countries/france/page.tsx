import type { Metadata } from 'next'
import HeroSection from './components/HeroSection'
import Navigation from './components/Navigation'
import SidebarServer from './components/SideBarServer'
import Overview from './components/Overview'
import Universities from './components/Universities'
import Costs from './components/Costs'
import Requirements from './components/Requirements'
import Process from './components/Process'
import StudentLife from './components/StudentLife'
import FAQ from './components/FAQ'



export const metadata: Metadata = {
  title: 'Study in France - Complete Guide for International Students',
  description: 'Comprehensive guide about studying in the United Kingdom. Learn about top universities, costs, requirements, student life and more.',
}

export default function USAPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Navigation />
      
      
      <div className="bg-gradient-to-b from-purple-100/20 to-indigo-100/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-20">
              <Overview/>
                <Universities/>
                <Costs/>
                <Requirements/>
                <Process/>
                <StudentLife/>
                <FAQ/>
            </div>

            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-42">
                <SidebarServer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}