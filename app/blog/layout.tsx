// app/blog/layout.tsx
import { ReactNode } from 'react';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <main className="flex-1 bg-gradient-to-br from-purple-50 to-rose-50">{children}</main>
    </div>
  );
}