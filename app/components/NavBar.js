import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#" className="shrink-0 flex items-center justify-center">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={120} // Adjust based on your design
            height={100} // Adjust based on your design
          />
        </a>

        {/* Menu */}
        <ul className="flex items-center gap-6 text-gray-700 font-medium font-poppins">
          <li>
            <Link
              href="/"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/produits"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Produits
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-purple-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Bouton Inscription */}
        <Link
          href="/inscription"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg font-poppins font-semibold hover:bg-purple-700 transition-colors duration-300"
        >
          Inscription
        </Link>
      </div>
    </nav>
  );
}
