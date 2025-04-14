import { client } from '@/sanity/lib/client';
import { allPostsQuery, featuredPostQuery, recentPostsQuery } from '@/sanity/lib/queries';
import { Post } from '@/types';
import FeaturedPost from '@/blogcomponents/FeaturedPost';
import BlogCard from '@/blogcomponents/BlogCard';
import Sidebar from '@/blogcomponents/Sidebar';

export const revalidate = 3600; // Revalidate the data at most every hour

export default async function BlogPage() {
  // Fetch data in parallel for better performance
  const [posts, featuredPostResult, recentPosts] = await Promise.all([
    client.fetch<Post[]>(allPostsQuery),
    client.fetch<Post | null>(featuredPostQuery).catch(() => null),
    client.fetch<Post[]>(recentPostsQuery),
  ]);

  // If no featured post is found in Sanity, use the most recent post as featured
  const featuredPost = featuredPostResult || (posts.length > 0 ? posts[0] : null);
  
  // Filter out the featured post from the regular posts list
  const regularPosts = posts.filter(post => post._id !== featuredPost?._id);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && <FeaturedPost post={featuredPost} />}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {regularPosts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar recentPosts={recentPosts} />
          </div>
        </div>
      </main>
    </div>
  );
}