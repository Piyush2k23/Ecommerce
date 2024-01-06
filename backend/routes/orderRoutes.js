import express from 'express';
import  {newOrder, myOrders, singleOrder, allOrders, updateOrder, deleteOrder } from '../controllers/orderController.js';


const router = express.Router();

// router.post('/order/new', isAuthenticateUser, newOrder);

// router.get('/order/:id', isAuthenticateUser, singleOrder);

// router.get('/order/me', isAuthenticateUser, myOrders);

// router.get('/admin/orders', isAuthenticateUser, authorizeRoles('admin'), allOrders);

// router.put('/admin/order/:id', isAuthenticateUser, authorizeRoles('admin'), updateOrder);

// router.delete('/admin/order/:id', isAuthenticateUser, authorizeRoles('admin'), deleteOrder);


export default router;