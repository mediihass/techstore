import "./globals.css";
import Header from "../app/components/Header";
import NavBar from "../app/components/NavBar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "TechStore – High-Tech & Innovation",
  description:
    "Découvrez les meilleurs produits technologiques au meilleur prix.",
  icons: {
    icon: "/images/fav.ICO", // <-- chemin vers ton nouveau favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <NavBar />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
