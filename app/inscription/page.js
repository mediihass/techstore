"use client";

import InscriptionForm from "../components/InscriptionForm";

export default function InscriptionPage() {
  return (
    <div className="min-h-screen w-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-start p-6">
      <main className="w-full max-w-lg  dark:bg-gray-800 p-6 md:p-8  dark:border-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Inscription
        </h1>

        <InscriptionForm />
      </main>
    </div>
  );
}
