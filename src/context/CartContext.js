"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("cart")) || [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  })

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }else{
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const checkout = () => {
    clearCart();
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, clearCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}