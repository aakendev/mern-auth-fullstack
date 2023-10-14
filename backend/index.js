import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
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

app.listen(3000, () => {
  console.log("Server Listen on Port 3000");
});

app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API is Working",
  });
});
