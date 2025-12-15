"use client";

import { useState } from "react";
import ProduitCard from "../components/ProduitCard";
import { produits } from "../../data/produits";

export default function ProduitList() {
  const [sortOrder, setSortOrder] = useState("relevance");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Prix");
  const [selectedPrice, setSelectedPrice] = useState("Prix");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Normaliser le texte recherché
  const searchTerm = search.trim().toLowerCase();

  // Extraire toutes les catégories uniques
  const allCategories = Array.from(new Set(produits.map((p) => p.categorie)));

  // Options de prix en euros
  const priceOptions = [
    { label: "Tous Prix", value: "Prix" },
    { label: "moins de 300€", value: "moins de 300€" },
    { label: "300€ - 1000€", value: "300€ - 1000€" },
    { label: "1000€ - 2000€", value: "1000€ - 2000€" },
    { label: "Plus de 2000€", value: "Plus de 2000€" },
  ];

  // Ranges de prix pour le filtrage en euros
  const priceRanges = [
    { label: "Tous Prix", min: 0, max: Infinity },
    { label: "moins de 300€", min: 0, max: 300 },
    { label: "300€ - 1000€", min: 300, max: 1000 },
    { label: "1000€ - 2000€", min: 1000, max: 2000 },
    { label: "Plus de 2000€", min: 2000, max: Infinity },
  ];

  // Filtrer les produits
  const filteredProducts = produits
    .filter((p) => p.nom.toLowerCase().includes(searchTerm))
    .filter(
      (p) => selectedCategory === "Prix" || p.categorie === selectedCategory
    )
    .filter((p) => {
      if (selectedPrice === "Prix") return true;
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (!range) return true;
      return p.prix >= range.min && p.prix <= range.max;
    });

  // Trier les produits filtrés
  const sortedProducts = (() => {
    if (sortOrder === "relevance") {
      return filteredProducts;
    }

    return [...filteredProducts].sort((a, b) =>
      sortOrder === "asc" ? a.prix - b.prix : b.prix - a.prix
    );
  })();

  // Calcul de la pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = sortedProducts.slice(startIndex, endIndex);

  // Gestion du changement de page
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Réinitialiser la pagination lorsque les filtres changent
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-full px-4 md:px-6 py-8 min-h-[70vh]">
      {/* Barre de recherche et tri */}
      <div className="mb-6 flex flex-col gap-4 w-full">
        {/* Search input */}
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleFilterChange();
          }}
          className="
      w-full
      px-4 py-2
      border dark:border-gray-600
      rounded-lg
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-white
      focus:outline-none focus:ring-2 focus:ring-primary
    "
        />

        {/* Filters */}
        <div
          className="
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4
      w-full
    "
        >
          {/* Category */}
          <div className="relative w-full">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                handleFilterChange();
              }}
              className="w-full px-4 py-2 border rounded-lg appearance-none"
            >
              <option value="Prix">Toutes catégories</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Price */}
          <div className="relative w-full">
            <select
              value={selectedPrice}
              onChange={(e) => {
                setSelectedPrice(e.target.value);
                handleFilterChange();
              }}
              className="w-full px-4 py-2 border rounded-lg appearance-none"
            >
              {priceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Sort */}
          <div className="relative w-full">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg appearance-none"
            >
              <option value="relevance">Pertinence</option>
              <option value="asc">croissant</option>
              <option value="desc">décroissant</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Affichage conditionnel */}
      {sortedProducts.length > 0 ? (
        <>
          {/* Grille des produits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {displayedProducts.map((produit) => (
              <ProduitCard key={produit.id} produit={produit} />
            ))}
          </div>

          {/* Pagination inférieure */}
          {/* Pagination - visible seulement si plusieurs pages */}
          {sortedProducts.length > itemsPerPage && (
            <div className="mt-8 flex justify-center">
              <div className="flex gap-1">
                {/* Bouton Page Précédente */}
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-500"
                      : "bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white border border-gray-300 dark:border-gray-600"
                  }`}
                  aria-label="Page précédente"
                >
                  &lt;
                </button>

                {/* Numéros de Page */}
                {(() => {
                  // Calcul des pages à afficher (max 3)
                  const pagesToShow = [];
                  const maxVisiblePages = 3;

                  if (totalPages <= maxVisiblePages) {
                    // Afficher toutes les pages
                    for (let i = 1; i <= totalPages; i++) {
                      pagesToShow.push(i);
                    }
                  } else {
                    // Logique d'affichage dynamique
                    let startPage = 1;

                    if (currentPage === totalPages) {
                      // Dernière page : afficher les 3 dernières
                      startPage = totalPages - 2;
                    } else if (currentPage > 1) {
                      // Page du milieu : afficher page-1, page, page+1
                      startPage = currentPage - 1;
                    }

                    // Ajuster si on dépasse les limites
                    if (startPage + 2 > totalPages) {
                      startPage = totalPages - 2;
                    }
                    if (startPage < 1) {
                      startPage = 1;
                    }

                    // Ajouter les pages
                    for (let i = 0; i < maxVisiblePages; i++) {
                      const pageNum = startPage + i;
                      if (pageNum <= totalPages) {
                        pagesToShow.push(pageNum);
                      }
                    }
                  }

                  // Rendu des boutons de page
                  return pagesToShow.map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1 rounded transition-colors ${
                        currentPage === pageNum
                          ? "bg-purple-600 text-white"
                          : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700"
                      }`}
                      aria-label={`Page ${pageNum}`}
                      aria-current={
                        currentPage === pageNum ? "page" : undefined
                      }
                    >
                      {pageNum}
                    </button>
                  ));
                })()}

                {/* Bouton Page Suivante */}
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 dark:bg-gray-800 dark:text-gray-500"
                      : "bg-white text-gray-700 hover:bg-gray-300 hover:text-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white border border-gray-300 dark:border-gray-600"
                  }`}
                  aria-label="Page suivante"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Message quand aucun produit n'est trouvé */
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">
              📦
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
              Aucun produit ne correspond à vos critères de recherche.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              Essayez de modifier vos filtres ou votre recherche
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
