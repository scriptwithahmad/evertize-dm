import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  fullName: {
    type: String,
    trim: true,
    required: [true, "Full Name is Required"],
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "User Name is Required"],
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is Required"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Password is Required"],
    minlength: [5, "Password Must be 5 Character Long"],
    description: "must be a string at least 8 characters long, and is required",
  },
  avatar: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models?.users || mongoose.model("users", userModel);
