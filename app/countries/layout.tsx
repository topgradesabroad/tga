import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Study Abroad Guide',
  description: 'Comprehensive guide for international students looking to study abroad.',
}

export default function CountriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Country pages content */}
      {children}

      {/* Optional: Add any shared elements across country pages */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Want personalized guidance? Contact our education counselors.
          </p>
        </div>
      </footer>
    </div>
  )
}