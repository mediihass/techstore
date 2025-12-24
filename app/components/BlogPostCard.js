"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 max-w-150 mx-auto"
    >
      {/* Image réduite */}
      <div className="relative h-90 w-full overflow-hidden rounded-t-lg bg-gray-100 dark:bg-gray-900">
        <Image
          src={post.image}
          alt={post.titre}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-300 hover:scale-105"
          priority={post.id <= 3}
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
