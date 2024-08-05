import express from "express";
import dotenv from "dotenv";
import authRoute from "./auth-package/src/routes/authRoutes.js";
import connectMongoDB from "./auth-package/src/config/connectMongoDB.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
  connectMongoDB();
});
