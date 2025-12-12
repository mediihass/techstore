"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, User, Menu, X } from "lucide-react";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (saved === "true" || (!saved && systemPrefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  const menuItems = [
    { name: "Accueil", href: "/" },
    { name: "Produits", href: "/produits" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  if (!mounted) {
    return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16">
          <span className="text-xl font-bold">Logo</span>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-12 w-auto">
          {/* Logo */}
          <a href="/" className="shrink-0 flex items-center ">
            <Image src="/images/logo.svg" alt="Logo" width={140} height={120} />
          </a>

          {/* Desktop menu */}
          <div className="grow hidden md:flex justify-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 font-medium transition duration-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            {/* Bouton Inscription */}
            <Link
              href="/inscription"
              className="bg-purple-600 text-white px-2 py-2 rounded-lg font-poppins font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Inscription
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-1 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="flex flex-col md:hidden mt-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 font-medium p-2 transition duration-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
