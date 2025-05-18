import { Card } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined } from "@ant-design/icons";

const CustomCard = ({ name, description, price, category, stock, rating }) => (
  <Card
    hoverable
    className="w-auto h-full flex flex-col justify-between"
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
    bodyStyle={{ display: "flex", flexDirection: "column", height: "100%" }}
  >
    <div className="flex-1">
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
    </div>

    <div className="flex justify-between text-sm text-gray-700 mb-2">
      <span>{category}</span>
      <span>Stock: {stock}</span>
      <span>⭐ {rating}</span>
    </div>

    <div className="flex justify-around mt-2">
      <span className="text-primary font-bold text-base p-1 mt-auto">
        ${price}
      </span>
      <CustomButton icon={<PlusOutlined />} title="Add to Cart" />
    </div>
  </Card>
);

export default CustomCard;
