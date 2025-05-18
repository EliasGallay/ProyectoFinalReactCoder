import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ItemListContainer from "./ItemListContainer";
import CustomSpinning from "./CustomSpinning";

const ItemList = () => {
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

  return <ItemListContainer products={products} />;
};

export default ItemList;
