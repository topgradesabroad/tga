'use client';

import TableOfContents from './TableOfContents';

interface TOCWrapperProps {
  content: any; // Sanity Portable Text content
}

export default function TOCWrapper({ content }: TOCWrapperProps) {
  return <TableOfContents content={content} />;
}