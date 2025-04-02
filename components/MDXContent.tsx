'use client';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { mdxComponents } from './mdxComponents';

interface MDXContentProps {
  source: any;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={mdxComponents} />;
}
