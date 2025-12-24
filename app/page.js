"use client";
import Link from "next/link";
import BlurText from "../app/components/BlurText";
import Snowfall from "react-snowfall";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function HomePage() {
  return (
    <>
      <Snowfall color="#82c3d9" snowflakeCount={60} />
      <main className="w-screen min-h-screen flex flex-col items-center justify-center">
        <section className="w-screen relative">
          <div className="h-[80vh]">
            {/* Overlay */}
            <div
              className="absolute w-full bg-cover bg-center inset-0 bg-black bg-opacity-80 flex flex-col items-center  px-4"
              style={{ backgroundImage: "url('/images/background.jpg')" }}
            >
              {/* Animated Heading */}
              <BlurText
                text="Bienvenue sur TechStore"
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-white text-4xl text-center flex justify-center md:text-6xl font-bold bg-red-900 rounded-xl mb-6 mt-16 p-2"
              />

              {/* Links */}
              <div className="flex flex-col md:flex-row gap-4">
                <Link
                  href="/produits"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Produits
                </Link>

                <Link
                  href="/inscription"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  S’inscrire
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
