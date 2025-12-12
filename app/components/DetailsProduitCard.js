"use client";

import Image from "next/image";
import React from "react";

export default function DetailsProduitCard({ produit }) {
  const handleCommander = () => {
    alert("Commande confirmée");
  };

  return (
    <div className="w-full max-w-xl mx-auto border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg">
      {/* Image */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden rounded-tr-lg rounded-bl-lg bg-gray-50 dark:bg-gray-900">
        <Image
          src={produit.image}
          alt={produit.nom}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover  p-4"
        />
      </div>

      {/* Détails */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg md:text-xl font-bold text-primary font-poppins theme-transition">
          {produit.nom}
        </h3>
        <p className="text-md font-semibold theme-transition">
          <span className="font-bold">Prix :</span> {produit.prix} €
        </p>
        <p className="theme-transition">
          <span className="font-bold">Catégorie :</span> {produit.categorie}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm theme-transition">
          {produit.description}
        </p>

        {/* Bouton Commander */}
        <button
          onClick={handleCommander}
          className="mt-3 bg-green-600 text-gray py-2 px-4 rounded-full hover:bg-green-700 transition"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
