import Link from "next/link";
import Image from "next/image";

export default function ProduitCard({ produit }) {
  return (
    <div className="card border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl overflow-hidden bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg">
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
        <Image
          src={produit.image}
          alt={produit.nom}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={produit.id <= 3} // Optionnel: prioriser les premières images
        />
      </div>

      {/* Détails */}
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 font-poppins line-clamp-2">
          {produit.nom}
        </h3>

        <p className="text-sm mb-2">
          <span className="font-bold">Prix :</span> {produit.prix} €
        </p>

        <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium mb-4">
          {produit.categorie}
        </span>

        <Link
          href={`/produits/${produit.id}`}
          className="block mt-2 bg-purple-600 text-white text-center rounded-full py-2 font-poppins font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Voir Détails
        </Link>
      </div>
    </div>
  );
}
