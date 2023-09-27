import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullName : {
        type: String,
        trim: true,
        required: [true, "Name is Required"]
    },
    userName : {
        type: String,
        trim: true,
        unique: true,
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
    isAdmin : {
        type: Boolean,
        default: false,
    },
    
})


export default mongoose.models?.users || mongoose.model('users', userModel)