// components/mdxComponents.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const mdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-xl font-bold mt-5 mb-2" {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="my-4" {...props} />
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="list-disc pl-6 my-4" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 my-4" {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="mb-1" {...props} />
  ),
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a className="text-blue-600 hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <div className="my-6 relative h-64 md:h-96">
      <Image
        src={props.src || ''}
        alt={props.alt || "Blog image"}
        fill
        className="object-contain"
      />
    </div>
  ),
};
