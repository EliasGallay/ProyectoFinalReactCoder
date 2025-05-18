import { Card } from "antd";

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

    {/* Fila con category, stock y rating */}
    <div className="flex justify-between text-sm text-gray-700 mb-2">
      <span>{category}</span>
      <span>Stock: {stock}</span>
      <span>⭐ {rating}</span>
    </div>

    <div className="text-primary font-bold text-base p-1 mt-auto">${price}</div>
  </Card>
);

export default CustomCard;
