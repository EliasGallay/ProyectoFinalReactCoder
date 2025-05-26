import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart1, setCart1] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCart1((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        if ((existingProduct.quantity || 1) + quantity > product.stock) {
          console.warn("Stock máximo alcanzado para:", product.name);
          return prevCart;
        }

        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + quantity }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart1((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (!existingProduct) return prevCart;

      if (existingProduct.quantity && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        return prevCart.filter((item) => item.id !== productId);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart1, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
