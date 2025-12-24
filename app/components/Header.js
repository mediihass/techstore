"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <header className="w-full bg-gray-100 text-center flex flex-col items-center gap-2 ">
      {/* Nom du site avec le bonnet de Noël */}
      <div className="relative top-1">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={200}
          height={160}
          className="object-contain"
        />
        <Image
          src="/images/bonnet-noel.png"
          alt="Bonnet de Noël"
          width={45}
          height={45}
          className="absolute top-0 left-0  transform -translate-x-3 scale-x-[-1]"
        />
      </div>

      {/* Mini-slogan */}
      <p className="text-sm text-gray-600 font-poppins">
        High-Tech & Innovation
      </p>

      <Marquee
        speed={30}
        gradient={false}
        className="bg-red-700 text-white font-bold py-3"
      >
        🛍️ **Découvrez les dernières technologies !** ✨ **Ne manquez pas nos
        offres exclusives sur les gadgets et appareils électroniques !** 💻
        **Shoppez dès maintenant sur TechStore !**
      </Marquee>
    </header>
  );
}
