import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cursor-pointer">
      <Badge count={itemCount} offset={[0, 6]} size="small">
        <ShoppingCartOutlined className="text-xl hover:!text-gray-400" />
      </Badge>
    </div>
  );
};

export default CartWidget;
