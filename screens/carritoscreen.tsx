import React, { createContext, useState, ReactNode, useContext } from 'react';

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

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}

export default CartContext;
