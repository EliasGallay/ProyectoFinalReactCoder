import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const items = [
  {
    label: "1st menu item",
    key: "1",
  },
  {
    label: "2nd menu item",
    key: "2",
  },
];

const App = () => (
  <Dropdown menu={{ items }}>
    <Button>
      <Space>
        Categorias de Libros
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default App;
