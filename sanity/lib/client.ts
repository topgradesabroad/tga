import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ucjyzsdd',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-04-13',
  useCdn: true,
});

// Create image URL builder
const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  return builder.image(source);
} 