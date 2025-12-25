"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function ComparerPage() {
  const { compare, removeFromCompare, clearCompare } = useCart();

  if (compare.length === 0) {
    return (
      <div className="p-8 text-center h-screen">
        Sélectionnez au moins un produit pour le comparer.
      </div>
    );
  }

  return (
    <div
      className="
        w-screen h-screen overflow-x-auto p-4
        bg-gray-50 dark:bg-gray-900
        flex flex-col items-center gap-6
      "
    >
      {/* -------------------------------------------------
       *  Tableau – visible uniquement ≥ 1024 px (lg)
       * ------------------------------------------------- */}
      <div className="w-full overflow-x-auto">
        {/* Tableau masqué sous 1024 px */}
        <div className="lg:table w-full border border-gray-300 dark:border-gray-600 hidden lg:block">
          {/* Header */}
          <div className="lg:table-header-group">
            <div className="lg:table-row bg-gray-100 dark:bg-gray-700">
              <div className="lg:table-cell p-2 border-b text-left font-medium">
                Caractéristique
              </div>
              {compare.map((p) => (
                <div
                  key={p.id}
                  className="lg:table-cell p-2 border-b text-center max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      href={`/produits/${p.id}`}
                      className="hover:underline"
                    >
                      <span>{p.nom}</span>
                    </Link>
                    <button
                      onClick={() => removeFromCompare(p.id)}
                      className="text-red-600 hover:underline"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="lg:table-row-group">
            {/* Image */}
            <div className="lg:table-row">
              <div className="lg:table-cell p-2 border-b font-medium">
                Image
              </div>
              {compare.map((p) => (
                <div
                  key={p.id}
                  className="lg:table-cell p-2 border-b text-center"
                >
                  <Link href={`/produits/${p.id}`}>
                    <img
                      src={p.image}
                      alt={p.nom}
                      className="h-32 mx-auto object-contain hover:opacity-90 transition"
                    />
                  </Link>
                </div>
              ))}
            </div>

            {/* Prix */}
            <div className="lg:table-row">
              <div className="lg:table-cell p-2 border-b font-medium">Prix</div>
              {compare.map((p) => (
                <div
                  key={p.id}
                  className="lg:table-cell p-2 border-b text-center"
                >
                  {p.prix} €
                </div>
              ))}
            </div>

            {/* Catégorie */}
            <div className="lg:table-row">
              <div className="lg:table-cell p-2 border-b font-medium">
                Catégorie
              </div>
              {compare.map((p) => (
                <div
                  key={p.id}
                  className="lg:table-cell p-2 border-b text-center"
                >
                  {p.categorie}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="lg:table-row">
              <div className="lg:table-cell p-2 border-b font-medium">
                Description
              </div>
              {compare.map((p) => (
                <div key={p.id} className="lg:table-cell p-2 border-b">
                  {p.description}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------------------------------
         *  Cards – affichées quand le tableau est masqué (< 1024 px)
         * ------------------------------------------------- */}
        <div className="lg:hidden flex flex-col gap-6 mt-4">
          {compare.map((p) => (
            <div
              key={p.id}
              className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-800"
            >
              <div className="flex items-center justify-between mb-2">
                <Link
                  href={`/produits/${p.id}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {p.nom}
                </Link>
                <button
                  onClick={() => removeFromCompare(p.id)}
                  className="text-red-600 hover:underline"
                >
                  ✕
                </button>
              </div>

              <Link href={`/produits/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.nom}
                  className="h-48 w-full object-contain mb-3 rounded"
                />
              </Link>

              <p className="font-medium mb-1">
                <span className="font-bold">Prix :</span> {p.prix} €
              </p>

              <p className="font-medium mb-1">
                <span className="font-bold">Catégorie :</span> {p.categorie}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-300">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------------------------------
       *  Actions (Retour & Tout supprimer)
       * ------------------------------------------------- */}
      <div className="mt-4 w-full flex justify-center gap-2">
        <Link
          href="/produits"
          className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 transition"
        >
          Retour à la boutique
        </Link>

        <button
          onClick={clearCompare}
          className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-700 transition"
        >
          Tout supprimer
        </button>
      </div>
    </div>
  );
}
