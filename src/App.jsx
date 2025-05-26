import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import ItemDetail from "./components/ItemDetail";
import ContactForm from "./components/ContactForm";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
