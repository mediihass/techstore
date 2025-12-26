"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardClientPage() {
  const router = useRouter();
  /*const user = session.user;*/

  const handleSignOut = async () => {
    router.push("/auth");
  };

  return (
    <div className="min-h-screen w-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Contenu principal */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                  Bienvenue sur votre Tableau de Bord !
                </h2>
                <p className="text-gray-600">
                  Gérez votre compte et explorez plus de fonctionnalités
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:space-x-3">
                {/* Bloc avatar */}
                <div className="flex items-center gap-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    alt="Avatar utilisateur"
                  />
                  {/* informations utilisateur optionnelles
    <div className="text-sm">
      <p className="text-gray-900 font-medium">{user.name}</p>
      <p className="text-gray-500">{user.email}</p>
    </div>
    */}
                </div>

                {/* Bouton de déconnexion */}
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center px-3 py-2  shadow-sm text-sm text-white leading-4 font-medium rounded-md  bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Se Déconnecter
                </button>
              </div>
            </div>

            {/* Informations d'authentification */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Statut d'Authentification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-blue-700">Statut :</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Authentifié
                  </span>
                </div>
                <div>
                  <span className="font-medium text-blue-700">
                    Fournisseur :{" "}
                  </span>
                  <span className="ml-2 text-blue-600"></span>
                </div>
                {/*<div>
                  <span className="font-medium text-blue-700">ID Utilisateur :</span>
                  <span className="ml-2 text-blue-600">{user.id}</span>
                </div>*/}
                <div>
                  <span className="font-medium text-blue-700">
                    Email Vérifié :
                  </span>
                  {/* <span className="ml-2 text-blue-600">
                    {user.emailVerified ? "Oui" : "Non"}
                  </span>*/}
                </div>
              </div>
            </div>

            {/* Fonctionnalités de démonstration */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Connexion Sociale
                </h3>
                <p className="text-gray-600 text-sm">
                  Authentifiez-vous facilement avec Google, GitHub et d'autres
                  fournisseurs sociaux.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Gestion des Utilisateurs
                </h3>
                <p className="text-gray-600 text-sm">
                  Gérez les comptes utilisateurs, profils et paramètres
                  d'authentification.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Accès Sécurisé
                </h3>
                <p className="text-gray-600 text-sm">
                  Routes protégées et flux d'authentification sécurisé
                </p>
              </div>
            </div>

            {/* Actions de démonstration */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Essayez Ces Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => alert("Action simulée : Profil mis à jour !")}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Mettre à Jour le Profil
                </button>
                <button
                  onClick={() =>
                    alert("Action simulée : Paramètres enregistrés !")
                  }
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Enregistrer les Paramètres
                </button>
                <button
                  onClick={() => alert("Action simulée : Données exportées !")}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Exporter les Données
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  ← Retour à l'Accueil
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Gérer le Compte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
