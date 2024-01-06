import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import databaseConnection from "./config/dbConnection.js";
import auth from "./routes/authRoutes.js";
import products from "./routes/productRoutes.js";
import order from "./routes/orderRoutes.js";
import cors from "cors";
import  cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errors.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(cookieParser());


app.use(bodyParser.json());

app.use("/api/user", auth);
app.use("/api/user", products);
app.use("/api/user", order);


app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

databaseConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
