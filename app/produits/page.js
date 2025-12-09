"use client";

import ProduitList from "../components/ProduitList";
import { produits } from "../../data/produits";

export default function ProduitsPage() {
  return (
    <div className="w-screen px-0 py-8">
      {" "}
      {/* plus de padding horizontal pour full width */}
      <h1 className="text-3xl font-bold mb-6 font-poppins text-center">
        Nos Produits
      </h1>
      {/* Affichage de la liste des produits full width */}
      <ProduitList produits={produits} />
    </div>
  );
}
