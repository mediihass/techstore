"use client";

import { useCart } from "../context/CartContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingCompareButton() {
  const { compare, maxCompare } = useCart();
  const [show, setShow] = useState(false);

  // afficher le bouton dès qu’il y a au moins 1 produit à comparer
  useEffect(() => {
    setShow(compare.length > 0);
  }, [compare]);

  if (!show) return null;

  return (
    <Link
      href="/comparer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                 bg-blue-600 text-white rounded-full px-4 py-2
                 shadow-lg hover:bg-blue-700 transition"
    >
      {/* icône simple */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>

      {/* texte dynamique */}
      <span>
        {compare.length} / {maxCompare} à comparer
      </span>
    </Link>
  );
}
