import mongoose, { Schema, Document } from "mongoose";

export interface ICounter extends Document {
  name: string;
  value:  number;
}
const CounterSchema: Schema = new Schema({
  name: { type: String, required: true },
  value: { type: Number, required: true,  },
});

export default mongoose.model<ICounter>("Counter", CounterSchema);
