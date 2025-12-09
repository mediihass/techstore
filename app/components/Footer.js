// Footer.jsx
"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white    p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Site Name & Copyright */}
      <div className="text-gray-700 text-center font-poppins">
        TechStore © {new Date().getFullYear()}
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="h-6 w-6"
          />
        </a>

        {/* Instagram */}
        <a
          href="#"
          aria-label="Instagram"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="h-6 w-6"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:opacity-80 transition-opacity duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
            alt="LinkedIn"
            className="h-6 w-16"
          />
        </a>
      </div>
    </footer>
  );
}
