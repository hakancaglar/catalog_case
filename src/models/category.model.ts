import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
  id: number;
}
const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: Number, required: true, unique: true },
});

export default mongoose.model<ICategory>("Category", CategorySchema);
