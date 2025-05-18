import { Button, Flex } from "antd";

const App = ({ title, icon }) => (
  <Flex gap="small" vertical>
    <Flex wrap gap="small">
      <Button type="primary" icon={icon}>
        {title}
      </Button>
    </Flex>
  </Flex>
);

export default App;
