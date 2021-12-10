import Counter, { ICounter } from "../models/counter.model";

async function initializeSequence(name: string): Promise<number> {
  const counter: ICounter = await Counter.findOneAndUpdate(
    { name },
    { $setOnInsert: { value: 0 } },
    { upsert: true, new: true }
  );
  return counter.value;
}
async function getNextValue(name: string): Promise<number> {
  const counter: ICounter = await Counter.findOneAndUpdate(
    { name },
    { $inc: { value: 1 } },
    { new: true }
  );
  return counter.value;
}

export { initializeSequence, getNextValue };
