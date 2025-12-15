"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage once
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    setCartCount(storedCart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartCount(newCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  const addToCart = (produit) => {
    const index = cart.findIndex((item) => item.id === produit.id);
    let newCart;
    if (index >= 0) {
      newCart = [...cart];
      newCart[index].quantity += 1;
    } else {
      newCart = [...cart, { ...produit, quantity: 1 }];
    }
    updateCart(newCart);
  };

  const incrementQuantity = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decrementQuantity = (id) => {
    const newCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
