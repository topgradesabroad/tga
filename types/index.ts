export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Author {
  name: string;
  image?: SanityImage;
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  author: Author;
  body?: any; // This can be more specific if you're using portable text
  featured?: boolean;
}