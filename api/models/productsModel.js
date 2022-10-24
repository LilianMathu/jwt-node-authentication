import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "Products",
  }
);

const Product = model("Products", productsSchema);

export default Product;
