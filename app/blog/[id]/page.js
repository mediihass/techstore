import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blogPosts"; // chemin vers vos données
import Image from "next/image";

// ✅ SEO dynamique
export async function generateMetadata({ params }) {
  const { id } = await params; // pas d'await ici
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return {
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `Article : ${post.titre}`,
    description: post.extrait,
  };
}

// ✅ Page dynamique pour afficher le contenu complet
export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) notFound();

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 md:px-8 flex justify-center">
      <main className="w-full max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-700">
        {/* Image */}
        <div className="relative w-full h-64 md:h-100 overflow-hidden mb-4">
          <Image
            src={post.image}
            alt={post.titre}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Titre et date */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
          {post.titre}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm md:text-base">
          {post.date}
        </p>

        {/* Contenu complet */}
        <div className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
          {post.contenu}
        </div>

        {/* Bouton Retour */}
        <Link
          href="/blog"
          className="inline-block w-full text-center bg-sky-500 hover:bg-sky-600 text-gray font-semibold py-3 rounded-md transition-colors duration-300"
        >
          Retour au blog
        </Link>
      </main>
    </div>
  );
}
