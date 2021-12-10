import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI: string =
      process.env.mongoURI ||
      "mongodb://localhost:27017/slider?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
