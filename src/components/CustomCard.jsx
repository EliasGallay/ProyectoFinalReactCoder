import { Card } from "antd";

const CustomCard = ({ name, description, price }) => (
  <Card
    hoverable
    className="w-60"
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      />
    }
  >
    <h3 className="text-lg font-bold mb-2 d-flex center">{name}</h3>
    <p className="text-gray-600 mb-3">{description}</p>
    <div className="mt-3 text-primary font-bold text-base">${price}</div>
  </Card>
);

export default CustomCard;
