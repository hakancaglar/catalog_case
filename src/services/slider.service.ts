import Slider, { ISlider } from "../models/slider.model";

async function createSlider(image: string, productId: number): Promise<void> {
  await Slider.create({
    image,
    productId,
  });
}
async function getSliders(): Promise<ISlider[]> {
  const sliders: ISlider[] = await Slider.find(
    {},
    { _id: 0, image: 1, productId: 1 }
  );
  return sliders;
}

export { createSlider, getSliders };
