import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Email cannot be blank"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter a valid email",
      ],
    },
    phone: {
      type: String,
      required: [true, "Please enter your phone number"],
      min: [10, "Please enter a valid phone number"],
    },
    password: {
      type: String,
      min: 6,
      required: [true, "Please enter your password"],
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
