import React from "react";
import { Card, Rate, Tag } from "antd";

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
    </Card>
  );
};

export default ProductCard;
