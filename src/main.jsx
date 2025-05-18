import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomConfigProvider from "./components/CustomConfigProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CustomConfigProvider>
    <App />
  </CustomConfigProvider>,
);
