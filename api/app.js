import express from "express";
import mongoose from "mongoose";
import config from "../config";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";

// Initialize express
const app = express();

// db connection
const db = config.mongo_uri;
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successful!");
  } catch (error) {
    console.log("DB connection failed!", error);
  }
};

connectDb();

// Routes
app.use(userRoute);
app.use(productRoute);

export default app;
