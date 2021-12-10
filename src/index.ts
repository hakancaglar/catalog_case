import express from "express";
const app = express();
const port = process.env.PORT||3000;
import connectDB from "./loaders/db.loader";
import bodyParser from 'body-parser';
import categoryRoutes from "./routes/category.route";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

connectDB();
app.use("/category", categoryRoutes);
app.get("/", (_, res) => {
  res.status(200).send("adada");
});
console.log(port+"kjhkj");
app.listen(port, () => console.log(`Running on port ${port}`));
