import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const items = [
  {
    label: "Ficcion",
    key: "1",
  },
  {
    label: "No Ficcion",
    key: "2",
  },
  {
    label: "Literatura Infantil",
    key: "3",
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
