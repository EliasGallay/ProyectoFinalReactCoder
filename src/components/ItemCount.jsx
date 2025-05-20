import { useState } from "react";
import { Button } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
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
        <CustomButton title="Agregar al Carrito" icon={<PlusOutlined />} />
      </div>
    </>
  );
};

export default ItemCount;
