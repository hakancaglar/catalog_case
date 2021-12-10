import Category, { ICategory } from "../models/category.model";
import { getNextValue, initializeSequence } from "./counter.service";
initializeSequence("category");

async function createCategory(
  name: string,
  description: string
): Promise<void> {
  const seq = await getNextValue("category");
  await Category.create({
    id: seq,
    name,
    description,
  });
}
async function getCategories(): Promise<ICategory[]> {
  const categories: ICategory[] = await Category.find(
    {},
    { _id: 0, id: 1, name: 1 }
  );
  return categories;
}

async function getCategoryById(id: number): Promise<ICategory> {
  const category: ICategory = await Category.findOne(
    { id },
    {
      _id: 0,
      id: 1,
      name: 1,
      description: 1,
    }
  ).lean();
  return category;
}

export { createCategory, getCategories, getCategoryById };
