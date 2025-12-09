"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Site Name & Copyright */}
      <div className="text-gray-700 text-center font-poppins">
        TechStore © 2025
      </div>

      {/* Contact Link */}
      <div>
        <Link
          href="/contact"
          className="text-gray-700 font-poppins hover:text-purple-600 transition-colors duration-200"
        >
          Contactez-nous
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-6">
        {/* Facebook */}
        <a
          href="#"
          aria-label="Facebook"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
        </a>

        {/* Instagram */}
        <a
          href="#"
          aria-label="Instagram"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Linked-in-alt.svg/960px-Linked-in-alt.svg.png?20230821072523"
            alt="LinkedIn"
            width={24} // Adjusted for the original aspect ratio
            height={24}
          />
        </a>
      </div>
    </footer>
  );
}
