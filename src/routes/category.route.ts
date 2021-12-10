import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import Category, { ICategory } from "../models/category.model";
import { createCategory } from "../services/category.service";
const router: Router = Router();
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const category: ICategory = await createCategory(name, description);
    return res.status(HttpStatusCodes.CREATED).json(category);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
