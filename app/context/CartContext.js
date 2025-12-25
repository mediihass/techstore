"use client";

import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // ── Panier ─────────────────────────────────────
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // ── Comparaison ─────────────────────────────────
  const [compare, setCompare] = useState([]);
  const MAX_COMPARE = 4; // limite configurable

  // ── Chargement depuis localStorage ───────────────────────
  useEffect(() => {
    // Panier
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
    setCartCount(
      storedCart.reduce((acc, item) => acc + (item.quantity || 0), 0)
    );

    // Comparaison
    const storedCompare = JSON.parse(localStorage.getItem("compare") || "[]");
    setCompare(storedCompare);
  }, []);

  // ── Sauvegarde dans localStorage ────────────────────────
  const syncCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartCount(newCart.reduce((acc, item) => acc + (item.quantity || 0), 0));
  };

  const syncCompare = (newCompare) => {
    setCompare(newCompare);
    localStorage.setItem("compare", JSON.stringify(newCompare));
  };

  // ── Gestion du panier ─────────────────────────────────
  const addToCart = (produit) => {
    const index = cart.findIndex((i) => i.id === produit.id);
    let newCart;
    if (index >= 0) {
      newCart = [...cart];
      newCart[index].quantity = (newCart[index].quantity || 0) + 1;
    } else {
      newCart = [...cart, { ...produit, quantity: 1 }];
    }
    syncCart(newCart);
  };

  const incrementQuantity = (id) => {
    const newCart = cart.map((i) =>
      i.id === id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
    );
    syncCart(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = cart.map((i) =>
      i.id === id && (i.quantity || 0) > 1
        ? { ...i, quantity: (i.quantity || 0) - 1 }
        : i
    );
    syncCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((i) => i.id !== id);
    syncCart(newCart);
  };

  // ── Gestion de la comparaison ───────────────────────
  const addToCompare = (produit) => {
    // 1️⃣ même catégorie que les éléments déjà présents (ou aucun)
    if (compare.length > 0 && compare[0].categorie !== produit.categorie) {
      alert(
        "La comparaison ne peut se faire qu’entre produits de la même catégorie."
      );
      return;
    }

    // 2️⃣ éviter les doublons et respecter la limite
    if (
      !compare.find((p) => p.id === produit.id) &&
      compare.length < MAX_COMPARE
    ) {
      const newCompare = [...compare, produit];
      syncCompare(newCompare);
    }
  };

  const removeFromCompare = (id) => {
    const newCompare = compare.filter((p) => p.id !== id);
    syncCompare(newCompare);
  };

  const clearCompare = () => syncCompare([]);

  // ── Export du provider ───────────────────────────────
  return (
    <CartContext.Provider
      value={{
        // panier
        cart,
        cartCount,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        // comparaison
        compare,
        addToCompare,
        removeFromCompare,
        clearCompare,
        maxCompare: MAX_COMPARE,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
