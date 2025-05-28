import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart1 } = useContext(CartContext);
  const itemCount = cart1.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cursor-pointer">
      <Badge count={itemCount} offset={[0, 6]} size="large">
        <ShoppingCartOutlined className="text-4xl hover:!text-gray-400" />
      </Badge>
    </div>
  );
};

export default CartWidget;
