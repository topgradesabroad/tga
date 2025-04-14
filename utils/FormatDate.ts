/**
 * Formats a date string into a human-readable format
 * @param dateString - ISO date string
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatDate(
    dateString: string, 
    options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
  ): string {
    return new Date(dateString).toLocaleDateString('en-US', options);
  }
  
  /**
   * Get estimated reading time for content
   * @param content - Text content
   * @returns Reading time in minutes
   */
  export function getReadingTime(content: string): number {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }
  
  /**
   * Creates a URL-friendly slug from a string
   * @param text - Input text
   * @returns URL-friendly slug
   */
  export function slugify(text: string): string {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')     // Replace spaces with -
      .replace(/&/g, '-and-')   // Replace & with 'and'
      .replace(/[^\w\-]+/g, '') // Remove all non-word characters
      .replace(/\-\-+/g, '-');  // Replace multiple - with single -
  }