import Product from "../models/productsModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import APIFeatures from "../utils/apiFeatures.js";
import asyncHandler from "../middlewares/catchAsyncErrors.js";

// Post method to create a new Product => /api/v1/admin/product
export const newProduct = asyncHandler(async (req, res, next) => {

   req.body.user = req.body.id;

  const product = await Product.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

// Get all products => /api/v1/products?keyword=apple
export const getProducts = asyncHandler(async (req, res, next) => {
//   const products = await Product.find();

  const apiFeatures = new APIFeatures(Product.find(), req.query).search();
  //       .filter()

  const products = await apiFeatures.query;

  res.status(200).json({
    success: true,
    products,
  });
});

// Get single product details => /api/v1/product/:id
export const getSingleProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Put method to update product  => /api/v1/admin/product/:id
export const updateProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// delete method to delete single product => /api/v1/admin/product/:id
export const deleteProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  await Product.remove();

  res.status(200).json({
    success: true,
    message: "Product removed successfully",
  });
});

// Create new review => /api/v1/reviews

export const createProductReview = asyncHandler(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validatorBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});


// Get Product Reviews => /api/v1/reviews
export const getProductReviews = asyncHandler( async(req, res, next) => {
  const product = await Product.findById(req.query.productId);

  res.status(200).json({
    success: true,
    reviews: product.reviews
  });
});

// Get Product Reviews => /api/v1/reviews
export const deleteReview = asyncHandler( async(req, res, next) => {
  const product = await Product.findById(req.query.id);

  const reviews = product.reviews.filter(review => review._id.toString() !== req.query.id.toString());

  const noOfReviews = reviews.length;

  await Product.findByIdAndUpdate(req.query.productId,{
    reviews,
    ratings,
    numOfReviews
  },{
     new: true,
     runValidators: true,
     useFindAndModify: false
  });

  const ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;

  res.status(200).json({
    success: true,
  })
})