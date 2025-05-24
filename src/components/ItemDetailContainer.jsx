import { useState } from "react";
import { Card, Rate, Tag, Modal } from "antd";
import ItemCount from "./ItemCount";

const { Meta } = Card;

const ItemDetailContainer = ({
  title,
  description,
  image,
  price,
  stock,
  category,
  rating,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <Card
        hoverable
        className="w-full max-w-md mx-auto"
        cover={
          <img
            alt={title}
            src={image}
            className="h-44 object-cover w-full cursor-pointer"
            onClick={toggleModal}
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

      <Modal
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        width="auto"
      >
        <div className="flex justify-center items-center">
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
