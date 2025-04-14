// sanity/lib/image.ts
import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { client } from './client';

// Create image URL builder
const imageBuilder = createImageUrlBuilder(client);

export function urlForImage(source: any) {
  // Ensure source exists and has a reference
  if (!source || !source.asset || !source.asset._ref) {
    // Return a default image URL or null
    return null;
  }

  return imageBuilder
    .image(source)
    .auto('format') // Automatically choose the best format
    .fit('max'); // Scale down to fit within the given dimensions
}