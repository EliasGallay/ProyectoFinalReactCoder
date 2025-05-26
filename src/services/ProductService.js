import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getProducts = async (categoryId = null) => {
  try {
    const db = getFirestore();
    const productsCollection = collection(db, "libros");
    let q = productsCollection;
    if (categoryId) {
      q = query(productsCollection, where("category", "==", categoryId));
    }
    const querySnapshot = await getDocs(q);
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  } catch (error) {
    console.error("Error al cargar los productos:", error);
    throw new Error("No se pudieron cargar los productos");
  }
};
