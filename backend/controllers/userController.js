import asyncHandler from "../middlewares/catchAsyncErrors.js";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import sendToken from "../utils/jwtToken.js";

// Register User => /api/v1/register
export const register = asyncHandler( async (req, res, next) => {

    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email });

    if(user){
      return next(new ErrorHandler('User already register with this email'), 409);
    }

    const newUser = await User.create({
            firstName,
            lastName,
            email,
            password,
    });


    await newUser.save();

    
    sendToken(user, 200, res);
   
  



  //   if (!user) {
  //     const newUser = await User.create({
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     });
      
  //     await newUser.save();

  //     generateToken(res, newUser._id);

  //     res.status(201).json({
  //       name: newUser.name,
  //       email: newUser.email,
  //     });
  //   } else {
  //     res.status(409).json({ message: "User already exists" });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ message: "Couldn't register, try again later" });
  // }
});


// Login User => /api/v1/login
export const login = asyncHandler( async (req, res, next) => {

   const { email, password } = req.body;

   if(!email || !password){
      return next(new ErrorHandler('Please enter a email and password'), 400);
   }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid email and password'), 401);
      }
   
      const isPasswordValid = user.matchPassword(password);

    if (!isPasswordValid) {
      return next(new ErrorHandler('Invalid password'), 401);
       
    } 

      sendToken(user, 200, res);

    


  // try {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ email });

  //   if (!user) {
  //     return res.status(404).json({ message: "User not found" });
  //   }

  //   const isPasswordValid = user.matchPassword(password);

  //   if (isPasswordValid) {
  //     return res.status(200).json({ message: "Login successful" });
  //   } else {
  //     return res.status(401).json({ message: "Password is incorrect" });
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: "Couldn't login, try again later" });
  // }
});


//Forgot  Password => /api/v1/password/forgot
export const forgotPassword = asyncHandler( async(req, res, next) => {

   const user = await User.findOne({ email: req.body.email});

    if(!user){
      return next(new ErrorHandler('User not found with this email'), 404);
    }

    const resetToken = user.getResetPasswordToken();
     
    await user.save({ validateBeforeSave: false });

    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this, then ignore it.`;
});


//Logout user => /api/v1/logout
export const logout = asyncHandler( async (req,res,next) => {
   
     res.cookie('token', null, {
       expires: new Date(Date.now()),
       httpOnly: true
     });

     res.status(200).json({
      success: true,
      message: 'Logged out'
     })
});