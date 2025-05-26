import { useState, useContext } from "react";
import { Card, Modal, message } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CustomCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleAddToCart = () => {
    if (product.stock <= 0) {
      message.warning("Este producto no tiene stock disponible.");
      return;
    }

    addToCart(product, 1);
    message.success("Producto agregado al carrito.");
  };

  return (
    <>
      <Card
        hoverable
        className="w-full max-w-xs flex flex-col justify-between"
        cover={
          <img
            alt={product.name}
            src={product.image}
            className="object-cover w-full h-64 cursor-pointer"
            onClick={toggleModal}
          />
        }
        styles={{
          body: { display: "flex", flexDirection: "column", height: "100%" },
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-3">{product.description}</p>
            </div>

            <div className="flex justify-between text-sm text-gray-700 flex-wrap gap-1 mb-3">
              <span className="font-medium text-gray-800">
                {product.category}
              </span>
              <span>Stock: {product.stock}</span>
              <span>⭐ {product.rating}</span>
            </div>
          </div>

          <div className="pt-2 border-t flex flex-col gap-2">
            <span className="block text-center text-lg font-semibold text-green-700 bg-green-100 px-3 py-1 rounded">
              ${product.price}
            </span>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 inline-flex"
              >
                <CustomButton icon="📖" title="Detalles" />
              </Link>
              <div className="flex-1 inline-flex">
                <CustomButton
                  icon={<PlusOutlined />}
                  title="Add to Cart"
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width="auto"
      >
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </Modal>
    </>
  );
};

export default CustomCard;
