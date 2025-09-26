import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: Array, // Array of image URLs or paths
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  sizes: {
    type: Array,
    required: true
  },
  bestseller: {
    type: Boolean
    // no default
  },
  date: {
    type: Number,
    required: true
  }
});

// Named export
export const productModel = mongoose.model("Product", productSchema);

