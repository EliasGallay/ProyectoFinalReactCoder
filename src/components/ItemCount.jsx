import { useState } from "react";
import { Button } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ItemCount = ({ stock, product }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (count > stock) {
      console.warn("No hay suficiente stock disponible");
      return;
    }

    addToCart(product, count);
    console.log("Producto agregado al carrito:", product);
  };
  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
      console.log(count);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log(count);
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
        />
      </div>
    </>
  );
};

export default ItemCount;
