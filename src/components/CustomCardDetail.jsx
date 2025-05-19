import React, { useState } from "react";
import { Card, Rate, Tag, Button } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ProductCard = ({
  title,
  description,
  image,
  price,
  stock,
  category,
  rating,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Card
      hoverable
      style={{ width: 280 }}
      cover={
        <img
          alt={title}
          src={image}
          style={{ height: 180, objectFit: "cover" }}
        />
      }
    >
      <Meta title={title} description={description} />

      <div className="mt-3">
        <p>
          <strong>Precio:</strong> ${price}
        </p>
        <p>
          <strong>Stock:</strong> {stock} unidades
        </p>
        <p>
          <strong>Categoría:</strong> <Tag color="blue">{category}</Tag>
        </p>
        <p>
          <strong>Rating:</strong> <Rate disabled defaultValue={rating} /> (
          {rating})
        </p>
      </div>

      <div className="flex justify-between items-center mt-3 mb-3">
        <Button icon={<MinusOutlined />} onClick={decrement} />
        <div className="text-lg font-bold">{count}</div>
        <Button icon={<PlusOutlined />} onClick={increment} />
      </div>

      <CustomButton title="Agregar al Carrito" icon={<PlusOutlined />} />
    </Card>
  );
};

export default ProductCard;
