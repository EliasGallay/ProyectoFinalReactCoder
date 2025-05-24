import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetail from "./components/ItemDetail";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
