import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart1, setCart1] = useState([]);

  const addToCart = (product) => {
    setCart1((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart1, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
