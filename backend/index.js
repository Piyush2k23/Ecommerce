import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import databaseConnection from "./config/dbConnection.js";
import user from "./routes/userRoutes.js";

dotenv.config();

const app = express();
// app.use(cors());

app.use(bodyParser.json());


app.use('/api/user', user);

const PORT = process.env.PORT || 4000;

databaseConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
