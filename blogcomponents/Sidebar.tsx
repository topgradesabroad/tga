import Link from 'next/link';
import { Country, Post } from '../types';

interface SidebarProps {
  recentPosts: Post[];
}

export default function Sidebar({ recentPosts }: SidebarProps) {
  // Sample countries data
  const countries: Country[] = [
    { name: 'USA', slug: 'usa', flagEmoji: '🇺🇸' },
    { name: 'UK', slug: 'uk', flagEmoji: '🇬🇧' },
    { name: 'Canada', slug: 'canada', flagEmoji: '🇨🇦' },
    { name: 'Australia', slug: 'australia', flagEmoji: '🇦🇺' },
    { name: 'Germany', slug: 'germany', flagEmoji: '🇩🇪' },
    { name: 'France', slug: 'france', flagEmoji: '🇫🇷' },
    { name: 'New Zealand', slug: 'new-zealand', flagEmoji: '🇳🇿' },
  ];

  return (
    <div className="sticky top-24 space-y-8">
      {/* Recent Posts Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          Recent Posts
        </h3>
        <ul className="space-y-3">
          {recentPosts.map((post) => (
            <li key={post._id} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
              <Link href={`/blog/${post.slug.current}`} className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
                {post.title}
              </Link>
              <p className="text-xs text-gray-500">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Study Destinations Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Study Destinations
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {countries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="flex items-center p-2 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors"
            >
              <span className="text-lg mr-2" aria-hidden="true">{country.flagEmoji}</span>
              <span className="text-sm font-medium">{country.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Ivy League Applications Section */}
      <div className="bg-gradient-to-r from-purple-600 to-rose-500 text-white rounded-xl shadow-md p-6">
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">Ivy League Predictions</h3>
          <p className="text-sm opacity-90">Curious about your admission chances? Use our AI-powered prediction tool!</p>
        </div>
        <Link
          href="/ivy-league-applications"
          className="block w-full py-3 bg-white text-purple-700 font-medium text-center rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
        >
          Check Your Chances
        </Link>
      </div>
    </div>
  );
}