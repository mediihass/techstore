"use client";

import { useState } from "react";
import ProduitCard from "./ProduitCard";
import { produits } from "../../data/produits";

export default function ProduitList() {
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [search, setSearch] = useState("");

  // Normaliser le texte recherché
  const searchTerm = search.trim().toLowerCase();

  // Filtrer puis trier les produits
  const displayedProducts = produits
    .filter((p) => p.nom.toLowerCase().includes(searchTerm))
    .sort((a, b) => (sortOrder === "asc" ? a.prix - b.prix : b.prix - a.prix));

  return (
    <div className="w-full max-w-full px-4 md:px-6 py-8">
      {/* Barre de recherche */}
      <div className="mb-6 flex flex-col md:flex-row items-end justify-between gap-4">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Contrôle de tri */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          <option value="asc">Prix croissant</option>
          <option value="desc">Prix décroissant</option>
        </select>
      </div>

      {/* Grille des produits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {displayedProducts.map((produit) => (
          <ProduitCard key={produit.id} produit={produit} />
        ))}
      </div>
    </div>
  );
}
