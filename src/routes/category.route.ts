import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import Category, { ICategory } from "../models/category.model";
import Product, { IProduct } from "../models/product.model";
import {
  createCategory,
  getCategories,
  getCategoryById,
} from "../services/category.service";
import { getProductsByCategory } from "../services/product.service";
const router: Router = Router();
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    await createCategory(name, description);
    return res.status(HttpStatusCodes.CREATED).json(null);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(HttpStatusCodes.BAD_REQUEST).send(err.message);
    }
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category: ICategory = await getCategoryById(parseInt(id));
    return res.status(HttpStatusCodes.OK).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/", async (req: Request, res: Response) => {
  try {
    const categories: ICategory[] = await getCategories();
    return res.status(HttpStatusCodes.OK).json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/:id/products", async (req: Request, res: Response) => {
  try {
    const category: number = parseInt(req.params.id);
    const products: IProduct[] = await getProductsByCategory(category);
    return res.status(HttpStatusCodes.OK).json(products);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
export default router;
