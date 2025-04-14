// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { postBySlugQuery, postPathsQuery, recentPostsQuery } from '@/sanity/lib/queries';
import { Post } from '@/types';
import Breadcrumbs from '@/blogcomponents/Breadcrumbs';
import BlogPostClient from './BlogPostClient';

export const revalidate = 3600; // Revalidate the data at most every hour

// Define the interface for Next.js 15 page props
interface PageProps {
  params: { 
    slug: Promise<string> 
  };
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(postPathsQuery);
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage(props: PageProps) {
  // In Next.js 15, params.slug is a Promise
  const slug = await props.params.slug;
  
  // Fetch post data and recent posts in parallel
  const [post, recentPosts] = await Promise.all([
    client.fetch<Post | null>(postBySlugQuery, { slug }),
    client.fetch<Post[]>(recentPostsQuery),
  ]);

  // If post not found, 404
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Breadcrumbs */}
      <div className="sticky top-20 z-10 bg-white shadow-sm">
        <Breadcrumbs title={post.title} />
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {/* Post Content - Three Column Layout */}
        <BlogPostClient post={post} recentPosts={recentPosts} />
      </main>
    </div>
  );
}