import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ItemListContainer from "./ItemListContainer";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error("Error al cargar los productos", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los productos</div>;
  }

  return <ItemListContainer products={products} />;
};

export default ItemList;
