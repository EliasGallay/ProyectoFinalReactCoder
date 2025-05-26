import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import CustomSpinning from "./CustomSpinning";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        const found = products.find((p) => String(p.id) === String(id));
        setProduct(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <CustomSpinning />;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <main className="flex w-full container mx-auto mt-5 justify-center">
      <ItemDetailContainer product={product} />
    </main>
  );
};

export default ItemDetail;
