"use client";

import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center bg-white from-indigo-100 to-blue-200 p-4">
      {/* Logo / Branding */}
      <div className="mb-8">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="h-30 w-30 animate-bounce"
        />
      </div>

      {/* Message principal */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 mb-4 text-center">
        Coming Soon
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md">
        Nous travaillons sur quelque chose de génial. Revenez bientôt pour
        découvrir les nouvelles fonctionnalités.
      </p>

      {/* Compte à rebours simple */}
      <div className="flex space-x-4 mb-10">
        <div className="text-center">
          <span className="block text-3xl font-mono text-indigo-600">12</span>
          <span className="text-sm text-gray-500">Jours</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-mono text-indigo-600">08</span>
          <span className="text-sm text-gray-500">Heures</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-mono text-indigo-600">34</span>
          <span className="text-sm text-gray-500">Minutes</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl font-mono text-indigo-600">12</span>
          <span className="text-sm text-gray-500">Secondes</span>
        </div>
      </div>

      {/* Formulaire d’inscription à la newsletter */}
      <form
        className="flex w-full max-w-sm flex-col sm:flex-row gap-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Votre email"
          required
          className="flex-1 rounded-md border border-gray-300 bg-white px-4 py-2  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          S’inscrire
        </button>
      </form>

      {/* Liens utiles */}
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/" className="text-gray-600 hover:text-gray-800 underline">
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-gray-800 underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
