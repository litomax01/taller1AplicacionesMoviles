// context/CartContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

type CartContextType = {
  cart: Book[];
  addToCart: (book: Book) => void;
  removeFromCart: (id: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(book => book.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
