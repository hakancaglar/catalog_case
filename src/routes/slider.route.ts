import { Router, Response, Request } from "express";
import HttpStatusCodes from "http-status-codes";
import Slider, { ISlider } from "../models/slider.model";
import { createSlider, getSliders } from "../services/slider.service";
const router: Router = Router();
router.post("/", async (req: Request, res: Response) => {
  try {
    const { image, productId } = req.body;
    await createSlider(image, parseInt(productId));
    return res.status(HttpStatusCodes.CREATED).json(null);
  } catch (err) {
    if (err.name === "ValidationError") {
        return res.status(HttpStatusCodes.BAD_REQUEST).send(err.message);
      }
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});
router.get("/", async (req: Request, res: Response) => {
  try {
    const sliders: ISlider[] = await getSliders();
    return res.status(HttpStatusCodes.OK).json(sliders);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
  }
});

export default router;
