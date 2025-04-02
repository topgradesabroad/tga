// app/blog/[slug]/page.tsx - Individual blog post page
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Import the client component for MDX rendering
import MDXContent from '../../../components/MDXContent';

// Define TypeScript interface for post data
interface Post {
  slug: string;
  content: string;
  title: string;
  date: string;
  image: string;
  category?: string;
  author?: string;
  authorTitle?: string;
  authorImage?: string;
  [key: string]: any; // For other frontmatter fields
}

// Define props for page component
interface PageProps {
  params: {
    slug: string;
  } | Promise<{
    slug: string;
  }>;
}

// Function to get post by slug using async file read
async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(process.cwd(), 'content/posts', `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf8');

    // Extract frontmatter and content
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      image: data.coverImage || '/images/default-post.jpg',
      category: data.category,
      author: data.author,
      authorTitle: data.authorTitle,
      authorImage: data.authorImage,
      ...data // Include all other frontmatter
    };
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error);
    return null;
  }
}

// Get all available slugs for static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = await fs.readdir(postsDirectory);

  return fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => ({
      slug: fileName.replace(/\.mdx$/, '')
    }));
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

export default async function BlogPostPage(props: PageProps) {
  // Await the params before using them
  const resolvedParams = await props.params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Serialize the MDX content on the server
  const mdxSource = await serialize(post.content);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Two-column Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Blog Post Content */}
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <span className="text-gray-500">
                {formatDate(post.date)}
              </span>
              {post.category && (
                <span className="ml-3 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {post.category}
                </span>
              )}
              <Link href="/blog" className="text-blue-600 ml-4 hover:underline">
                ← Back to all posts
              </Link>
            </div>

            <article className="prose max-w-none">
              <MDXContent source={mdxSource} />
            </article>

            {post.author && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  {post.authorImage && (
                    <div className="relative w-12 h-12 mr-4">
                      <Image 
                        src={post.authorImage} 
                        alt={post.author} 
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{post.author}</h3>
                    {post.authorTitle && (
                      <p className="text-sm text-gray-600">{post.authorTitle}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Share on Facebook
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500">
                  Share on Twitter
                </button>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="md:w-1/3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

// Sidebar component (same as in the main blog page)
function Sidebar() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Popular Destinations</h3>
        <ul className="space-y-2">
          <li><Link href="#" className="text-blue-600 hover:underline">United Kingdom</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">United States</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">Canada</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">Australia</Link></li>
          <li><Link href="#" className="text-blue-600 hover:underline">Germany</Link></li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Get Expert Advice</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="mb-3">Book a free consultation with our study abroad specialists</p>
          <Link 
            href="/contact" 
            className="block text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Latest Resources</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image 
                src="/images/visa-guide.jpg" 
                alt="Visa Guide" 
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <Link href="#" className="font-medium hover:text-blue-600">
                Complete Visa Application Guide
              </Link>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image 
                src="/images/accommodation.jpg" 
                alt="Accommodation" 
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <Link href="#" className="font-medium hover:text-blue-600">
                Finding Student Accommodation Abroad
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
