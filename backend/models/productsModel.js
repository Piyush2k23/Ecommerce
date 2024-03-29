import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },

  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: 5,
    default: 0.0,
  },

  description: {
    type: String,
    required: [true, "Please enter product description"],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: ["Men Clothes", "Woman Clothes", "Sports Wear", "Child Wear"],
      message: "Please select correct category for product",
    },
  },

  seller: {
    type: String,
    required: [true, "Please enter product seller"],
  },

  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [5, "product name cannot exceed 5 characters"],
    default: 0,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
      name: {
        type: String,
        required: true,
      },

      ratings: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
