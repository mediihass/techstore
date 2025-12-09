"use client";

import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../../data/blogPosts";

export default function BlogPage() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Notre Blog
      </h1>

      {/* Grille des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
