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
          Button: {
            colorPrimary: "#5cb85c",
            colorPrimaryHover: "#6ed56e",
            colorPrimaryActive: "#449d44",
            colorPrimaryText: "#ffffff",
            borderRadius: 6,
          },
          Checkbox: {
            colorPrimary: "#5cb85c",
            colorPrimaryHover: "#6ed56e",
            colorPrimaryActive: "#449d44",
          },
          Input: {
            colorPrimary: "#5cb85c",
            colorPrimaryHover: "#6ed56e",
            colorPrimaryActive: "#449d44",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default CustomConfigProvider;
