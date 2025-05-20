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
      className="w-full max-w-md mx-auto"
      cover={
        <img alt={title} src={image} className="h-44 object-cover w-full" />
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
