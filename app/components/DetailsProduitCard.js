"use client";
import Image from "next/image";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";

export default function DetailsProduitCard({ produit }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(produit);
    toast.success(`Produit "${produit.nom}" ajouté au panier 🛒`);
  };

  return (
    <div className="w-full max-w-xl mx-auto border border-gray-200 dark:border-gray-700 shadow-md bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-80 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Image
          src={produit.image}
          alt={produit.nom}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-4"
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

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
