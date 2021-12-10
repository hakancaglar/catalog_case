import mongoose, { Schema, Document } from "mongoose";
import { getNextValue } from "../services/counter.service";

export interface ICategory extends Document {
  name: string;
  description: string;
  id: number;
}
const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: Number,  unique: true },
});
CategorySchema.pre("save", async function (next: any) {
  this.id = await getNextValue("category");
  next();
  return this;
});

export default mongoose.model<ICategory>("Category", CategorySchema);
