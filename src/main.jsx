import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CustomConfigProvider from "./components/CustomConfigProvider.jsx";
import "@ant-design/v5-patch-for-react-19";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR22FfTBUpdiLr8J97lFTyFJ9BDynbZpc",
  authDomain: "reactcoder-3df3c.firebaseapp.com",
  projectId: "reactcoder-3df3c",
  storageBucket: "reactcoder-3df3c.firebasestorage.app",
  messagingSenderId: "428304801142",
  appId: "1:428304801142:web:6a2e8d17fa95142c0fee57",
};

// Initialize Firebase
initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <CustomConfigProvider>
    <App />
  </CustomConfigProvider>,
);
