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

    </div>
  )
}