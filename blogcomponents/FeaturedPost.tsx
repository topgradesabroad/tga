// blogcomponents/FeaturedPost.tsx
import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '../types';
import { urlForImage } from '@/sanity/lib/image';

interface FeaturedPostProps {
  post: Post;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  // Create the URL or fallback to a default
  const imageUrl = post.mainImage ? 
    urlForImage(post.mainImage)?.url() || '/default-post-image.png' : 
    '/default-post-image.png';
    
  const authorImageUrl = post.author?.image ? 
    urlForImage(post.author.image)?.url() || '/default-avatar.png' : 
    '/default-avatar.png';
  
  return (
    <div className="relative w-full mb-12 overflow-hidden bg-gradient-to-r from-purple-50 to-rose-50 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
              <Image
                src={authorImageUrl}
                alt={post.author?.name || "Author"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium">{post.author?.name || "Author"}</p>
              <p className="text-xs text-gray-500">
                {post.publishedAt
                  ? formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })
                  : 'Published recently'}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-purple-800 bg-purple-100 rounded-full">
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{post.title}</h2>
            <p className="text-gray-700 line-clamp-3">{post.excerpt || 'Read this featured article...'}</p>
          </div>
          
          <Link 
            href={`/blog/${post.slug?.current || post._id}`}
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-rose-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Read Featured Post
          </Link>
        </div>
      </div>
    </div>
  );
}