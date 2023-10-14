import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
