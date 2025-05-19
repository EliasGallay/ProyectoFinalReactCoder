import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import CustomSpinning from "./CustomSpinning";
import CustomCardDetail from "./CustomCardDetail";

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
    <CustomCardDetail
      id={id}
      title={product.title}
      description={product.description}
      price={product.price}
      category={product.category}
      stock={product.stock}
      rating={product.rating}
      image={product.image}
    />
  );
};

export default ItemDetail;
