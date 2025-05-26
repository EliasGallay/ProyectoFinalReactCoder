import { Button } from "antd";

const CustomButton = ({ title, icon, onClick }) => (
  <Button
    type="primary"
    icon={icon}
    className="flex-1 min-w-[110px] whitespace-nowrap"
    onClick={onClick}
  >
    {title}
  </Button>
);

export default CustomButton;
