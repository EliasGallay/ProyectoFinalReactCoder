import { Card } from "antd";
import CustomButton from "./CustomButton";
import { PlusOutlined } from "@ant-design/icons";

const CustomCard = ({ name, description, price, category, stock, rating }) => (
  <Card
    hoverable
    className="w-full max-w-xs flex flex-col justify-between "
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        className="object-cover h-64 w-full"
      />
    }
    styles={{
      body: { display: "flex", flexDirection: "column", height: "100%" },
    }}
  >
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
        </div>

        <div className="flex justify-between text-sm text-gray-700 flex-wrap gap-1 mb-3">
          <span className="font-medium text-gray-800">{category}</span>
          <span>Stock: {stock}</span>
          <span>⭐ {rating}</span>
        </div>
      </div>

      <div className="pt-2 border-t flex flex-col gap-2">
        <span className="block text-center text-lg font-semibold text-green-700 bg-green-100 px-3 py-1 rounded">
          ${price}
        </span>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <CustomButton icon="📖" title="Detalles" />
          <CustomButton icon={<PlusOutlined />} title="Add to Cart" />
        </div>
      </div>
    </div>
  </Card>
);

export default CustomCard;
