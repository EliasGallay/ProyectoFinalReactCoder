import { useState, useContext } from "react";
import { Button, message } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ stock, product }) => {
  const [count, setCount] = useState(1);
  const { cart1, addToCart } = useContext(CartContext);

  const cartProduct = cart1.find((item) => item.id === product.id);
  const currentInCart = cartProduct?.quantity || 0;

  const wouldExceedStock = currentInCart + count > stock;

  const handleAddToCart = () => {
    if (wouldExceedStock) {
      message.warning("No podés agregar más de lo disponible en stock.");
      return;
    }

    addToCart(product, count);
    message.success("Producto agregado al carrito.");
  };

  const increment = () => {
    if (count < stock - currentInCart) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mt-3 mb-3">
        <Button icon={<MinusOutlined />} onClick={decrement} />
        <div className="text-lg font-bold">{count}</div>
        <Button icon={<PlusOutlined />} onClick={increment} />
      </div>
      <div className="flex justify-between items-center">
        <CustomButton
          title="Agregar al Carrito"
          icon={<PlusOutlined />}
          onClick={handleAddToCart}
          disabled={wouldExceedStock}
        />
      </div>
    </>
  );
};

export default ItemCount;
