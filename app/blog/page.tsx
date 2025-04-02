// app/blog/page.tsx - Main blog listing page
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// Define TypeScript interface for post data
interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  image: string;
  category?: string;
  [key: string]: any; // For other frontmatter fields
}

// Function to get all posts
export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      // Read file content
      const filePath = path.join(postsDirectory, fileName);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Extract frontmatter
      const { data, content } = matter(fileContent);
      
      // Get slug from filename (remove .mdx extension)
      const slug = fileName.replace(/\.mdx$/, '');
      
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.slice(0, 150) + '...',
        image: data.coverImage || '/images/default-post.jpg',
        category: data.category,
        ...data // Include all other frontmatter data
      };
    })
    // Sort posts by date (newest first)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();
  
  return (
    <div className="container mx-auto px-8 py-8">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image 
          src="/images/blog-hero.jpg" 
          alt="Study Abroad Blog" 
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Study Abroad Insights & Advice
          </h1>
        </div>
      </div>
      
      {/* Two-column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Blog Posts */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
          <div className="space-y-8">
            {posts.map(post => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 relative h-48">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="sm:w-2/3 p-4">
                    <span className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </span>
                    {post.category && (
                      <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mt-1 mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <span className="text-blue-600 mt-2 inline-block">Read more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Right Column - Sidebar */}
        <div className="md:w-1/3">
          <Sidebar posts={posts.slice(0, 5)} />
        </div>
      </div>
    </div>
  );
}

// Helper function to format dates safely
function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  } catch (e) {
    console.error(`Error formatting date: ${dateString}`, e);
    return 'Date unavailable';
  }
}

// Updated Sidebar component (integrated in the same file)
interface SidebarProps {
  posts: Post[];
}

function Sidebar({ posts }: SidebarProps) {
  // Define the list of destinations
  const destinations = [
    { name: 'USA', slug: 'usa' },
    { name: 'UK', slug: 'uk' },
    { name: 'Canada', slug: 'canada' },
    { name: 'Australia', slug: 'australia' },
    { name: 'Germany', slug: 'germany' },
    { name: 'New Zealand', slug: 'new-zealand' }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 to-rose-100 rounded-lg shadow-md p-6 space-y-8">
      {/* Destinations */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Destinations</h3>
        <div className="flex flex-wrap gap-3">
          {destinations.map(dest => (
            <Link 
              key={dest.slug}
              href={`/countries/${dest.slug}`}
              className="text-blue-600 bg-white px-3 rounded-md hover hover:bg-purple-600 hover:text-white whitespace-nowrap"
            >
              Study in {dest.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Book Consultation */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Get Expert Advice</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-3">Book a free consultation with our study abroad specialists</p>
          <Link 
            href="https://calendly.com/your-calendly"  // Replace with your actual Calendly link
            className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
      
      {/* Recent Blogs */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Blogs</h3>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="font-medium hover:text-blue-600">
                {post.title}
              </Link>
              <div className="text-xs text-gray-500">{formatDate(post.date)}</div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Newsletter Signup */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
        <div className="p-4 rounded-lg bg-white shadow-sm">
          <p className="mb-3 text-gray-700">Stay updated with our latest study abroad tips and insights.</p>
          <form>
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full p-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
