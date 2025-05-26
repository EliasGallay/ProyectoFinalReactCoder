import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "antd";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart1 } = useContext(CartContext);

  return (
    <div className="p-4">
      {cart1.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h3>Su carrito está vacío</h3>
          <Link to="/">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded">
              Comenzar a comprar
            </Button>
          </Link>
        </div>
      ) : (
        <section className="p-4">
          <section className="max-w-screen-xl mx-auto p-4 flex flex-col gap-4 justify-center items-center">
            <ul className="">
              {cart1.map((product) => (
                <li key={product.id}>
                  <CartCard product={product} />
                </li>
              ))}
            </ul>
          </section>
          <div className="w-full max-w-2xl mx-auto bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center mb-6">
            <span className="text-gray-600 font-medium">
              ¿Faltó algún libro?
            </span>
            <Link to="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow">
                Seguir comprando
              </Button>
            </Link>
          </div>
          <section className="bg-white rounded-xl shadow-md p-6 mt-8 w-full max-w-2xl mx-auto">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Resumen de la compra
              </h2>
              <span className="text-xl font-bold text-green-600">
                Total: $
                {cart1.reduce(
                  (total, product) => total + product.price * product.quantity,
                  0,
                )}
              </span>
            </div>

            <div className="flex justify-between items-center text-gray-700">
              <p className="text-base">
                Cantidad de productos:{" "}
                <span className="font-medium text-black">
                  {cart1.reduce(
                    (total, product) => total + product.quantity,
                    0,
                  )}
                </span>
              </p>

              <Button
                type="primary"
                className="bg-green-500 hover:bg-green-600 transition text-white font-semibold px-6 py-2 rounded-lg shadow"
              >
                Finalizar compra
              </Button>
            </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default Cart;
