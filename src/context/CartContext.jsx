import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart1, setCart1] = useState([]);

  const addToCart = (product) => {
    setCart1((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        if ((existingProduct.quantity || 1) >= product.stock) {
          console.warn("Stock máximo alcanzado para:", product.name);
          return prevCart;
        }

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart1, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
