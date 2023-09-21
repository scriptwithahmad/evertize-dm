import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userModel = new mongoose.Schema({
    fullName : {
        type: String,
        trim: true,
        required: [true, "Name is Required"]
    },
    userName : {
        type: String,
        trim: true,
        required: [true, "Name is Required"]
    },
    email : {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Name is Required"]
    },
    password : {
        type: String,
        trim: true,
        required: [true, "Name is Required"]
    },
    isVarfied : {
        type: Boolean,
        default: false,
    },
    usAdmin : {
        type: Boolean,
        default: false,
    },
    
})

userModel.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
    this.password = await bcrypt.hash(this.password, 10);
  });

export default mongoose.models?.users || mongoose.model('users', userModel)