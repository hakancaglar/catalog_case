import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import Product, { IProduct } from "../models/product.model";
import {
  createProduct,
  getProductsByCategory,
  getProductById,
} from "../services/product.service";
const router: Router = Router();
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description, category, price } = req.body;
    await createProduct(name, description, category, price);
    return res.status(HttpStatusCodes.CREATED).json(null);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product: IProduct = await getProductById(parseInt(id));
    return res.status(HttpStatusCodes.CREATED).json(product);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});


export default router;
