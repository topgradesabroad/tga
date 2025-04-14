'use client';

import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface PostContentProps {
  content: any; // Sanity Portable Text content
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-8">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src={value.asset.url}
              alt={value.alt || ''}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }: any) => {
      return (
        <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 my-6 overflow-x-auto font-mono text-sm">
          <code>
            {value.code}
          </code>
        </pre>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-xl md:text-3xl font-bold mt-12 mb-4 text-indigo-700">{children}</h1>,
    h2: ({ children }: any) => {
      // Create an ID from the heading text for the table of contents
      const id = Array.isArray(children) ? children.join('') : children;
      const slug = typeof id === 'string' ? id.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '') : '';
      
      return (
        <h2 id={slug} className="text-lg md:text-2xl font-semibold mt-10 mb-4 text-indigo-700 scroll-mt-24">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => <h3 className="text-base md:text-lg font-semibold mt-8 mb-3 text-rose-700">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-sm md:text-base font-semibold mt-6 mb-2 text-indigo-700">{children}</h4>,
    normal: ({ children }: any) => <p className="text-gray-700 mb-6 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 pl-6 py-1 my-6 text-gray-700 bg-purple-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 my-6 space-y-2 text-gray-700">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 my-6 space-y-2 text-gray-700">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="px-1.5 py-0.5 bg-gray-100 rounded font-mono text-sm text-purple-700">{children}</code>
    ),
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200" 
        target={value.href.startsWith('http') ? "_blank" : undefined}
        rel={value.href.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    highlight: ({ children }: any) => (
      <span className="bg-purple-100 text-purple-800 px-1 rounded">{children}</span>
    ),
  },
};

export default function PostContent({ content }: PostContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <PortableText value={content} components={portableTextComponents} />
    </article>
  );
}