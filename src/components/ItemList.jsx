import CustomCard from "./CustomCard";

const ItemList = ({ products }) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100 mt-5 rounded-md mx-auto max-w-screen-xl justify-items-center">
      {products.map((product) => (
        <CustomCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default ItemList;
