import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import connectDB from "./loaders/db.loader";
import bodyParser from "body-parser";
import categoryRoutes from "./routes/category.route";
import productRoutes from "./routes/product.route";
import sliderRoutes from "./routes/slider.route";
import baseRoutes from "./routes/base.route";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

connectDB();
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);
app.use("/sliders", sliderRoutes);
app.use("/", baseRoutes);
console.log(port);
app.listen(port, () => console.log(`Running on port ${port}`));
