'use client';

import dynamic from 'next/dynamic';

const DynamicHeroClient = dynamic(() => import('./HeroClient'), { ssr: false });

export default function HeroDynamic() {
  return <DynamicHeroClient />;
}
