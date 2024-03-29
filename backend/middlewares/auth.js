import asyncHandler from "../middlewares/catchAsyncErrors";
import ErrorHandler from "../middlewares/errorHandler"; 
import jwt from "jsonwebtoken";
import User from "../models/userModel";


// Checks if user is authenticated or not
export const isAuthenticatedUser =  asyncHandler( async(req,res,next) => {
      
   const { token } = req.cookies;

    
   if(!token) {
     return next(new ErrorHandler('Login first to access this resource.', 401))
   }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await User.findById(decoded.id);

  next();

});


// Handling user roles
export const authorizeRoles = (...roles) => {
 
   return (req, res, next) => {
     if(!roles.includes(req.user.role)){
          return next(
          new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403));
         
        }
     next();
   }
   
}