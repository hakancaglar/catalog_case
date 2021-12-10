import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description:string,
  id: string | number;
}
const idChecker = (val: number | string) => {
  console.log(val);
  if (typeof val !== "string" || typeof val !== "number") {
    return val;
  }
};
const CategorySchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  id: { type: Schema.Types.Mixed, required: true, unique: true, set: idChecker },
});

export default mongoose.model<ICategory>("Category", CategorySchema);
