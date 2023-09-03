import { productsDB } from "../data/products";

export const getProductId = (id) => {
  return productsDB.find((product) => product.id === id);
};