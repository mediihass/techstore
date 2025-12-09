"use client";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <header className="w-full  bg-gray-100 text-center flex flex-col items-center gap-2">
      {/* Nom du site */}
      <h1 className="text-3xl font-bold text-[#3653f9] font-poppins">
        TechStore
      </h1>

      {/* Mini-slogan */}
      <p className="text-sm text-gray-600 font-poppins">
        High-Tech & Innovation
      </p>
      <Marquee
        speed={30}
        gradient={false}
        className="bg-red-700  text-white font-bold py-3"
      >
        🛍️ **Découvrez les dernières technologies !** ✨ **Ne manquez pas nos
        offres exclusives sur les gadgets et appareils électroniques !** 💻
        **Shoppez dès maintenant sur TechStore !**
      </Marquee>
    </header>
  );
}
