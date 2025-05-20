import { Card, Rate, Tag } from "antd";
import ItemCount from "./ItemCount";

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

      <div className="mt-3 space-y-2">
        <p>
          <strong>Precio:</strong> ${price}
        </p>
        <p>
          <strong>Stock:</strong> {stock} unidades
        </p>
        <div>
          <strong>Categoría:</strong> <Tag color="blue">{category}</Tag>
        </div>
        <div>
          <strong>Rating:</strong> <Rate disabled defaultValue={rating} /> (
          {rating})
        </div>
      </div>

      <ItemCount stock={stock} />
    </Card>
  );
};

export default ProductCard;
