import mongoose, { Schema, Document } from "mongoose";

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
  category: { type: Number, required: true },
  price: { type: Number, required: true },
  isFavorite: { type: Boolean, required: true, default: false },
  id: { type: Number, required: true, unique: true },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
