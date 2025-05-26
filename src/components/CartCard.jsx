import { Card } from "antd";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartCard = ({ product }) => {
  const { addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  return (
    <Card
      className="shadow-md rounded-2xl"
      bodyStyle={{ padding: "1rem" }}
      style={{ width: "100%", maxWidth: 500, marginBottom: "1.5rem" }}
    >
      <div className="flex items-center gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-28 h-28 object-cover rounded-xl border"
        />
        <div className="flex-1 flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h3>
          <p className="text-gray-600 text-sm">
            Precio unitario:{" "}
            <span className="text-black font-medium">${product.price}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Cantidad:{" "}
            <span className="text-black font-medium">{product.quantity}</span>
          </p>
          <p className="text-green-600 font-bold text-base">
            Total: ${product.price * product.quantity}
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <button
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-1 rounded-lg shadow transition w-24 cursor-pointer"
            onClick={() => addToCart(product)}
          >
            Agregar
          </button>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-1 rounded-lg shadow transition w-24 cursor-pointer"
            onClick={() => removeFromCart(product.id)}
          >
            Quitar
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-1 rounded-lg shadow transition w-24 cursor-pointer"
            onClick={() => deleteFromCart(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Link
          to={`/product/${product.id}`}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4  rounded-lg shadow transition duration-200 cursor-pointer"
        >
          Ver producto
        </Link>
      </div>
    </Card>
  );
};

export default CartCard;
