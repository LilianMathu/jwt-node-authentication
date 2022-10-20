import express from "express";
import mongoose from "mongoose";

import config from "config";

// Initialize express
const app = express();

// db connection
const db = config.MONGO_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connection successful!");
  } catch (error) {
    console.log("DB connections failed!", error);
  }
};

connectDb();

// Routes

export default app;
