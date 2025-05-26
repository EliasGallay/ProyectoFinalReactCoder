import { useState } from "react";
import { Card, Rate, Tag, Modal } from "antd";
import ItemCount from "./ItemCount";

const { Meta } = Card;

const ItemDetailContainer = ({ product }) => {
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
            alt={product.title}
            src={product.image}
            className="h-44 object-cover w-full cursor-pointer"
            onClick={toggleModal}
          />
        }
      >
        <Meta title={product.title} description={product.description} />

        <div className="mt-3 space-y-2">
          <p>
            <strong>Precio:</strong> ${product.price}
          </p>
          <p>
            <strong>Stock:</strong> {product.stock} unidades
          </p>
          <div>
            <strong>Categoría:</strong>{" "}
            <Tag color="blue">{product.category}</Tag>
          </div>
          <div>
            <strong>Rating:</strong>{" "}
            <Rate disabled defaultValue={product.rating} /> ({product.rating})
          </div>
        </div>

        <ItemCount stock={product.stock} product={product} />
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
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </Modal>
    </>
  );
};

export default ItemDetailContainer;
