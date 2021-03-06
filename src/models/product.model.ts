import mongoose, { Schema, Document } from "mongoose";
import { getNextValue } from "../services/counter.service";
import Category, { ICategory } from "./category.model";
export interface IProduct extends Document {
  name: string;
  description: string;
  category: number;
  price: number;
  isFavorite: boolean;
  id: number;
}
const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {
    type: Number,
    required: true,
    validate: async function () {
      const category: ICategory = await Category.findOne({ id: this.category });
      return category;
    },
  },
  price: { type: Number, required: true },
  isFavorite: { type: Boolean, required: true, default: false },
  id: { type: Number, unique: true },
});
ProductSchema.pre("save", async function (next: any) {
  this.id = await getNextValue("product");
  next();
  return this;
});

export default mongoose.model<IProduct>("Product", ProductSchema);
