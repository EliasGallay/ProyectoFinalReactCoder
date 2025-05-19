import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/categoria/ficcion">Ficción</Link>,
    key: "1",
  },
  {
    label: <Link to="/categoria/no-ficcion">No Ficción</Link>,
    key: "2",
  },
  {
    label: <Link to="/categoria/literatura-infantil">Literatura Infantil</Link>,
    key: "3",
  },
];

const App = () => (
  <Dropdown menu={{ items }}>
    <Button>
      <Space>
        Categorías de Libros
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default App;
