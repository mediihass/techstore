"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function DetailsProduitCard({ produit }) {
  const { addToCart, addToCompare, compare } = useCart();

  const handleAddToCart = () => {
    addToCart(produit);
  };

  const handleAddToCompare = () => {
    addToCompare(produit);
  };

  const alreadyCompared = compare.some((p) => p.id === produit.id);

  return (
    <div className="w-full max-w-2xl mx-auto border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-80  flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Image
          src={produit.image}
          alt={produit.nom}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-2"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-xl font-bold text-primary">{produit.nom}</h3>
        <p className="font-semibold">
          <span className="font-bold">Prix :</span> {produit.prix} €
        </p>
        <p>
          <span className="font-bold">Catégorie :</span> {produit.categorie}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {produit.description}
        </p>

        {/* Buttons – wrap on mobile */}
        <div className="flex justify-center flex-wrap gap-2 mt-3">
          <button
            onClick={handleAddToCart}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex-1 min-w-30"
          >
            Ajouter au panier
          </button>

          <button
            onClick={handleAddToCompare}
            disabled={alreadyCompared}
            className={`flex-1 min-w-30 py-2 px-4 rounded-lg transition ${
              alreadyCompared
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {alreadyCompared ? "Déjà comparé" : "Comparer"}
          </button>

          <Link
            href="/produits"
            className="flex-1 min-w-30 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition text-center"
          >
            Liste Produits
          </Link>
        </div>
      </div>
    </div>
  );
}
