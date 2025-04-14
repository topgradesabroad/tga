// sanity/lib/queries.ts
import { groq } from 'next-sanity';

// For the blog listing page
export const allPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  author->{
    name,
    image
  }
}`;

// For the featured post
export const featuredPostQuery = groq`*[_type == "post" && featured == true][0] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  mainImage,
  author->{
    name,
    image
  }
}`;

// For the sidebar recent posts
export const recentPostsQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...5] {
  _id,
  title,
  slug,
  publishedAt,
  mainImage
}`;

// For the individual post page
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  publishedAt,
  body,
  mainImage,
  author->{
    name,
    image
  }
}`;

// For static path generation
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;