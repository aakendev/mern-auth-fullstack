import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server Listen on Port 3000");
});

app.get("/", (req, res) => {
  res.json({
    message: "API is Working",
  });
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
