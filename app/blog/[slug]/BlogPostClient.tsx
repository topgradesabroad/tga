'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '@/types';
import PostContent from '@/blogcomponents/PostContent.client';
import TableOfContents from '@/blogcomponents/TableOfContents';
import Sidebar from '@/blogcomponents/Sidebar';

interface BlogPostClientProps {
  post: Post;
  recentPosts: Post[];
}

export default function BlogPostClient({ post, recentPosts }: BlogPostClientProps) {
  // Default avatar URL if author image is missing
  const authorImageUrl = post.author?.image?.asset?.url || '/default-avatar.png';
  // Default main image URL if post image is missing
  const mainImageUrl = post.mainImage?.asset?.url || '/default-post-image.png';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Left sidebar - Table of Contents (sticky) */}
      <div className="hidden lg:block lg:col-span-3">
        <div className="sticky top-41">
          <TableOfContents content={post.body} />
        </div>
      </div>

      {/* Main content area */}
      <div className="lg:col-span-6">
        {/* Title in the middle column */}
        <h1 className="text-2xl md:text-4xl font-bold text-purple-700 mb-4 leading-tight">
          {post.title}
        </h1>
        
        {/* Author info below the title */}
        <div className="flex items-center mb-8">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image
              src={authorImageUrl}
              alt={post.author?.name || 'Author'}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">{post.author?.name || 'Author'}</p>
            <p className="text-sm text-gray-500">
              {post.publishedAt 
                ? formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })
                : 'Published recently'}
            </p>
          </div>
        </div>
        
        {/* Optional: Main Image below author info */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
            <Image
              src={mainImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}
        
        {/* Post content */}
        <PostContent content={post.body} />
      </div>

      {/* Right sidebar (sticky) */}
      <div className="lg:col-span-3">
        <div className="sticky top-41">
          <Sidebar recentPosts={recentPosts} />
        </div>
      </div>
    </div>
  );
}