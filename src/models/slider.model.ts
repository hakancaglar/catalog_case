import mongoose, { Schema, Document } from "mongoose";
import Product, { IProduct } from "./product.model";

export interface ISlider extends Document {
  image: string;
  productId: number;
}
const SliderSchema: Schema = new Schema({
  image: { type: String, required: true },
  productId: {
    type: Number,
    required: true,
    validate: async function () {
      const product: IProduct = await Product.findOne({ id: this.productId });
      return product;
    },
  },
});

export default mongoose.model<ISlider>("Slider", SliderSchema);
