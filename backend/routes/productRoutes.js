import express from 'express';
import { createProductReview, deleteProduct, deleteReview, getProductReviews, getProducts, getSingleProduct, newProduct, updateProduct } from '../controllers/productController.js';
import { isAuthenticateUser, authorizeRoles } from '../middlewares/auth.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);

router.post('/admin/products/new', isAuthenticateUser, authorizeRoles('admin'), newProduct);
router.put('/admin/product/:id', isAuthenticateUser, authorizeRoles('admin'), updateProduct);
router.delete('/admin/product/:id', isAuthenticateUser, authorizeRoles('admin'), deleteProduct);

router.put('/review', isAuthenticateUser,  createProductReview);
router.get('/reviews', isAuthenticateUser,  getProductReviews);
router.delete('/reviews', isAuthenticateUser,  deleteReview);


export default router;