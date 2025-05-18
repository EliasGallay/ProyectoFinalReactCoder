import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ItemList from "./ItemList";
import CustomSpinning from "./CustomSpinning";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CustomSpinning />;
  }

  if (error) {
    return <div>Error al cargar los productos</div>;
  }

  return <ItemList products={products} />;
};

export default ItemListContainer;
