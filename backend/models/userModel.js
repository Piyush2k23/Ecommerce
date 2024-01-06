import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
        maxLength: [15,  'Your first name cannot exceed 15 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
        maxLength: [15, 'Your last name cannot exceed 15 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be at least 6 characters'],
        select: false
    },
    avatar: {
          public_id: {
               type: String,
            // required: true
          },
          url: {
             type: String,
            // required: true
          }
    },
    role: {
        type: String,
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
});

userSchema.pre('save', async function ( next ){
    if(!this.isModified('password')) next();

     this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (enterPassword){
     return await bcrypt.compare(enterPassword, this.password);
};

// JWT token
userSchema.methods.getJwtToken = function (){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function (){
    
     const resetToken = crypto.randomBytes(20).toString('hex');

     this.resetPasswordToken = crypto.hash('sha256').update(resetToken).digest('hex');

     this.resetPasswordExpire = Date.now + 30 * 60 * 1000

     return resetToken;
} 

const User = mongoose.model("User", userSchema);

export default User;