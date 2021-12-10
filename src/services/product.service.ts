import Product, { IProduct } from "../models/product.model";
import { initializeSequence } from "./counter.service";
initializeSequence("product");

async function createProduct(
  name: string,
  description: string,
  category: number,
  price: number
): Promise<void> {
  await Product.create({
    name,
    category,
    price,
    description,
  });
}
async function getProductsByCategory(category: number): Promise<IProduct[]> {
  const products: IProduct[] = await Product.find(
    { category },
    { _id: 0, id: 1, name: 1, description: 1, price: 1, isFavorite: 1 }
  );
  return products;
}

async function getProductById(id: number): Promise<IProduct> {
  const category: IProduct = await Product.findOne(
    { id },
    {
      _id: 0,
      id: 1,
      name: 1,
      price: 1,
      isFavorite: 1,
      description: 1,
    }
  ).lean();
  return category;
}
async function addProductToFavorite(id: number): Promise<void> {
  await Product.findOneAndUpdate({ id }, { $set: { isFavorite: true } }).lean();
}

export {
  createProduct,
  getProductsByCategory,
  getProductById,
  addProductToFavorite,
};
