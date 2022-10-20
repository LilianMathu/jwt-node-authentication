import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import config from "../config";

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

export default app;
