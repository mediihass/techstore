"use client";

import { useState } from "react";
import ProduitCard from "./ProduitCard";
import { produits } from "../../data/produits";

export default function ProduitList() {
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' ou 'desc'

  // Tri des produits selon le prix
  const sortedProduits = [...produits].sort((a, b) => {
    return sortOrder === "asc" ? a.prix - b.prix : b.prix - a.prix;
  });

  return (
    <div className="w-full max-w-full px-4 md:px-6 py-8">
      {/* Contrôle de tri */}
      <div className="mb-6 flex justify-end w-full">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </select>
      </div>

      {/* Grille des produits full width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {sortedProduits.map((produit) => (
          <ProduitCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}
