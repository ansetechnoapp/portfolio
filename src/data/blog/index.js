/**
 * This file exports the blog post data from JSON files
 * It replaces the getCollection functionality from Astro content collections
 */

import allPosts from './all-posts.json';

/**
 * Get all blog posts
 * @returns {Array} Array of blog post objects
 */
export function getAllPosts() {
  // Sort posts by date (newest first)
  return [...allPosts].sort((a, b) => {
    return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf();
  });
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The slug of the post to retrieve
 * @returns {Object|null} The post object or null if not found
 */
export function getPostBySlug(slug) {
  return allPosts.find(post => post.slug === slug) || null;
}

/**
 * Get all unique tags from blog posts
 * @returns {Array} Array of unique tag strings
 */
export function getAllTags() {
  const tags = allPosts.flatMap(post => post.tags || []);
  return [...new Set(tags)];
}

/**
 * Get posts by tag
 * @param {string} tag - The tag to filter by
 * @returns {Array} Array of post objects with the specified tag
 */
export function getPostsByTag(tag) {
  return getAllPosts().filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

/**
 * Helper function to parse dates from ISO strings
 * @param {Object} post - The post object
 * @returns {Object} Post with parsed Date objects
 */
export function parsePostDates(post) {
  if (!post) return null;
  
  return {
    ...post,
    pubDate: new Date(post.pubDate),
    updatedDate: post.updatedDate ? new Date(post.updatedDate) : undefined
  };
}
