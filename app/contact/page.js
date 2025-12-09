"use client";

import React from "react";
import ContactForm from "../components/ContactForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row p-6 gap-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Colonne 1 : Formulaire */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <ContactForm />
      </div>

      {/* Colonne 2 : Infos de contact */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold mb-4">Nos Informations</h2>
        <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
          <Image
            src="/images/localisation.png"
            alt="Bureau"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <p>
          <strong>Adresse :</strong> 123 Rue Exemple, 1000 Tunis
        </p>
        <p>
          <strong>Téléphone :</strong> +26 22 222 222
        </p>
        <p>
          <strong>Email :</strong> contact@example.com
        </p>
      </div>
    </div>
  );
}
