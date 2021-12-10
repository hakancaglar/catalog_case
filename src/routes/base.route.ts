import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import { addProductToFavorite } from "../services/product.service";
const router: Router = Router();
router.post("/favorite", async (req: Request, res: Response) => {
  try {
      console.log(req.body);
    const { productId } = req.body;
    await addProductToFavorite(parseInt(productId));
    return res.status(HttpStatusCodes.OK).json(null);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
