import Order from '../models/ordersModel.js';
import Product from '../models/productsModel.js';

import ErrorHandler from '../utils/errorHandler.js';
import asyncHandler from '../middlewares/catchAsyncErrors.js';


// Create a new order =>   /api/v1/order/new
export const newOrder = asyncHandler( async (req, res, next) => {

      const {
         orderItems,
         shippingInfo,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
         paymentInfo
      } = req.body;

      const order  =  await Order.create({
         orderItems,
         shippingInfo,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
         paymentInfo,
         paidAt: Date.now(),
         user: req.user._id
      });

      res.status(200).json({
        success: true,
        message: 'Order is successfully created',
        order
      })
});




// Create a single order =>   /api/v1/order/:id
export const singleOrder = asyncHandler( async (req, res, next) => {

   const order = await Order.findById(req.params.id).populate('user', 'name email');

   if(!order){
      return next(new ErrorHandler('No Order found with this ID', 404));
   }

    res.status(200).json({
      success: true,
      orders
    })
});


// Get logged in user orders =>   /api/v1/order/me
export const myOrders = asyncHandler( async (req, res, next) => {

    const orders = await Order.find({user: req.user.id});
 
 
     res.status(200).json({
       success: true,
       orders
     })
 });


 // Get all orders =>   /api/v1/admin/orders
export const allOrders = asyncHandler( async (req, res, next) => {

    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach(order => {
        totalAmount += order.totalPrice;
    });
 
 
     res.status(200).json({
       success: true,
       totalAmount,
       orders
     })
 });



  // Update / Process order - ADMIN =>   /api/v1/admin/order/:id
export const updateOrder = asyncHandler( async (req, res, next) => {

    const orders = await Order.findById(req.params.id);

    if(orders.orderStatus === 'Delivered'){
        return next(new ErrorHandler('You have already delivered this order', 400))
    }

    order.orderItems.forEach(async item => {
        await updateStock(item.product, item.quantity)
    })

    order.orderStatus = req.body.status,
    order.deliveredAt = Date.now()

    await order.save();
 
 
     res.status(200).json({
       success: true,
     })
 });


 async function updateStock(id, quantity){
     const product = await Product.findById(id);

     product.stock = product.stock - quantity;

     await product.save({ validateBeforeSave: false});
 }


  // Delete order - ADMIN =>   /api/v1/admin/order/:id
  export const deleteOrder = asyncHandler( async (req, res, next) => {

    const order = await Order.findById(req.params.id);

    if(!order){
       return next(new ErrorHandler('No Order found with this ID', 404));
    }

    await order.remove();
 
     res.status(200).json({
       success: true,
     })
 });
