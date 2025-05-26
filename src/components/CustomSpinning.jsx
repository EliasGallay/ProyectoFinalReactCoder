import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";

const App = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />;

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Spin indicator={antIcon} />
    </Flex>
  );
};

export default App;
