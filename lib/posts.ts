import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

// lib/posts.ts
import fs from 'fs/promises';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  categories: string[];
  content: string;
}

interface RawFrontmatter {
  title?: string;
  date?: string;
  excerpt?: string;
  image?: string;
  categories?: string[];
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const filenames = await fs.readdir(postsDirectory);
    const posts: Post[] = [];

    for (const filename of filenames) {
      if (!filename.endsWith('.mdx')) continue;
      
      const slug = filename.replace(/\.mdx$/, '');
      const post = await getPostBySlug(slug);
      if (post) posts.push(post);
    }

    return posts.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    const { frontmatter, content } = await compileMDX<RawFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });

    // Validate required fields
    if (!frontmatter.title || !frontmatter.date || !frontmatter.excerpt) {
      throw new Error(`Missing required frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      content,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      image: frontmatter.image || undefined,
      categories: frontmatter.categories || [],
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}