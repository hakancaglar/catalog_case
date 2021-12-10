import mongoose, { Schema, Document } from "mongoose";

export interface ISlider extends Document {
  image: string;
  productId: number;
}
const SliderSchema: Schema = new Schema({
  image: { type: String, required: true },
  productId: { type: Number, required: true },
});

export default mongoose.model<ISlider>("Slider", SliderSchema);
