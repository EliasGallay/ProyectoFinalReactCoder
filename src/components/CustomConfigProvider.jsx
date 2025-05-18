import { ConfigProvider } from "antd";

const CustomConfigProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Spin: {
            colorPrimary: "#52c41a",
            size: "large",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CustomConfigProvider;
