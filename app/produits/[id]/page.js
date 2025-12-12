import { notFound } from "next/navigation";
import DetailsProduitCard from "../../components/DetailsProduitCard";
import { produits } from "../../../data/produits"; // fichier des produits

// SEO dynamique
export async function generateMetadata({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id === Number(id));

  if (!produit) {
    return {
      title: "Produit non trouvé",
      description: "Le produit que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `Produit : ${produit.nom}`,
    description: `Détails du produit "${produit.nom}" dans la catégorie ${produit.categorie}.`,
  };
}

// Page dynamique
export default async function ProduitDetailsPage({ params }) {
  const { id } = await params;
  const produit = produits.find((p) => p.id === Number(id));

  if (!produit) {
    notFound();
  }

  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-start p-6">
      <main>
        <DetailsProduitCard produit={produit} />
      </main>
    </div>
  );
}
