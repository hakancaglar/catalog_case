import Category, { ICategory } from "../models/category.model";
import { getNextValue, initializeSequence } from "./counter.service";
initializeSequence("category");

async function createCategory(
  name: string,
  description: string
): Promise<ICategory> {
  const seq = await getNextValue("category");
  const newCategory: ICategory = await Category.create({
    id: seq,
    name,
    description,
  });
  return newCategory;
}

export { createCategory };
