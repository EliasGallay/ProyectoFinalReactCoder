export const getProducts = () => {
  return new Promise((resolve, reject) => {
    fetch("/mocks/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          resolve(data.products);
        }, 2000);
      })
      .catch((error) => reject(error));
  });
};
