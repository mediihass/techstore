import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-center">
      <section className="w-screen relative">
        <div className="h-[60vh] ">
          {/* Overlay */}
          <div
            className="absolute h-[60vh] w-full bg-cover bg-center inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4"
            style={{ backgroundImage: "url('/images/background.jpg')" }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins mb-6">
              Bienvenue sur TechStore
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-8">
              Découvrez les meilleurs produits technologiques au meilleur prix
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href="/produits"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                Produits
              </Link>

              <Link
                href="/inscription"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                S’inscrire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
