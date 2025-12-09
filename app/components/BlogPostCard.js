"use client";

import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 max-w-[600px] mx-auto"
    >
      {/* Image réduite */}
      <div className="h-80 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.titre}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Contenu compact */}
      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
          {post.titre}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {post.extrait}
        </p>

        {/* Bouton Lire plus en bas */}
        <div className="flex justify-center mt-auto">
          <span className="text-sky-500 font-semibold text-sm hover:underline cursor-pointer">
            Lire plus
          </span>
        </div>
      </div>
    </Link>
  );
}
