import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart1 } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart1.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart1.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price}
              <span> (Cantidad: {item.quantity})</span>
              {console.log(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
