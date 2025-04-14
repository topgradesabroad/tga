// blogcomponents/BlogCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '../types';
import { urlForImage } from '@/sanity/lib/image';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Create the URL or fallback to a default
  const imageUrl = post.mainImage ? 
    urlForImage(post.mainImage)?.url() || '/default-post-image.png' : 
    '/default-post-image.png';
    
  const authorImageUrl = post.author?.image ? 
    urlForImage(post.author.image)?.url() || '/default-avatar.png' : 
    '/default-avatar.png';
    
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
            <Image
              src={authorImageUrl}
              alt={post.author?.name || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-900">{post.author?.name || "Author"}</span>
            <span className="text-xs text-gray-500">
              {post.publishedAt
                ? formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })
                : 'Published recently'}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">{post.excerpt || 'Read this article to learn more...'}</p>
        
        <Link 
          href={`/blog/${post.slug?.current || post._id}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-500 rounded-lg hover:opacity-90 transition-opacity duration-300"
        >
          Read More
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}