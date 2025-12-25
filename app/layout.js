// app/layout.js
import "./globals.css";
import { CartProvider } from "../app/context/CartContext";
import Header from "../app/components/Header";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";
import { Toaster } from "react-hot-toast";
import BackToTopWrapper from "../app/components/BackToTopWrapper";
import FloatingCompareButton from "../app/components/FloatingCompareButton";

export const metadata = {
  title: "TechStore – High-Tech & Innovation",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix.",
  icons: { icon: "/images/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Header />
          <NavBar />
          <main className="container">{children}</main>

          {/* bouton flottant visible sur toutes les pages */}
          <FloatingCompareButton />

          <Toaster position="top-right" />
          <BackToTopWrapper />
        </CartProvider>

        <Footer />
      </body>
    </html>
  );
}
